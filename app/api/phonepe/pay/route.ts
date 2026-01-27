import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST() {
  try {
    const amount = 1000; // ₹10 FIXED ON BACKEND

    const merchantTransactionId = "TXN_" + Date.now();
    const merchantUserId = "USER_" + Date.now();

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID!,
      merchantTransactionId,
      merchantUserId,
      amount, // in paise
      redirectUrl: "https://poovarislandboating.com/payment/success",
      redirectMode: "REDIRECT",
      callbackUrl: "https://poovarislandboating.com/api/phonepe/callback",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const base64Payload = Buffer
      .from(JSON.stringify(payload))
      .toString("base64");

    // 🚨 THIS PATH MUST MATCH EXACTLY
    const apiPath = "/pg/v1/pay";

    const checksum =
      crypto
        .createHash("sha256")
        .update(base64Payload + apiPath + process.env.PHONEPE_CLIENT_SECRET!)
        .digest("hex") + "###1";

    const response = await fetch(
      "https://api.phonepe.com/apis/pg/v1/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
        body: JSON.stringify({
          request: base64Payload,
        }),
      }
    );

    const data = await response.json();

    console.log("📦 PHONEPE PROD RESPONSE:", data);

    if (!data.success) {
      return NextResponse.json(
        { success: false, error: data },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      redirectUrl:
        data.data.instrumentResponse.redirectInfo.url,
    });

  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
