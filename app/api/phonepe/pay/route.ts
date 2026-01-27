import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST() {
  try {
    /* ================= FIXED AMOUNT ================= */
    const amount = 1000; // ✅ in paise → ₹10 (CHANGE AS NEEDED)

    const merchantTransactionId = "TXN_" + Date.now();
    const merchantUserId = "USER_" + Date.now();

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID!,
      merchantTransactionId,
      merchantUserId,
      amount,
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      redirectMode: "REDIRECT",
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/callback`,
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
        .update(
          base64Payload +
            "/pg/v1/pay" +
            process.env.PHONEPE_CLIENT_SECRET
        )
        .digest("hex") + "###1";

    const response = await fetch(
      `${process.env.PHONEPE_BASE_URL}/pg/v1/pay`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
        body: JSON.stringify({ request: base64Payload }),
      }
    );

    const data = await response.json();

    if (!data.success) {
      console.error("❌ PhonePe ERROR:", data);
      return NextResponse.json(
        { success: false, message: "Unable to start payment" },
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
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
