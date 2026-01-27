import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST() {
  try {
    const merchantTransactionId = "TXN_" + Date.now();

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID!,
      merchantTransactionId,
      merchantUserId: "USER_001",
      amount: 30000, // ₹300 FIXED
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
      redirectMode: "POST",
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/status`,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const base64Payload = Buffer.from(
      JSON.stringify(payload)
    ).toString("base64");

    const checksum =
      crypto
        .createHash("sha256")
        .update(base64Payload + "/pg/v1/pay" + process.env.PHONEPE_CLIENT_SECRET)
        .digest("hex") + "###1";

    const response = await fetch(
      `${process.env.PHONEPE_BASE_URL}/pg/v1/pay`,
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
    console.log("📦 PHONEPE RESPONSE:", data);

    if (!data.success) {
      return NextResponse.json(data, { status: 400 });
    }

    return NextResponse.json({
      url: data.data.instrumentResponse.redirectInfo.url,
    });
  } catch (err) {
    console.error("❌ PHONEPE ERROR:", err);
    return NextResponse.json(
      { message: "Payment init failed" },
      { status: 500 }
    );
  }
}
