import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const clientId = process.env.PHONEPE_CLIENT_ID!;
    const clientSecret = process.env.PHONEPE_CLIENT_SECRET!;
    const merchantId = process.env.PHONEPE_MERCHANT_ID!;
    const baseUrl = process.env.PHONEPE_BASE_URL!;
    const appUrl = process.env.NEXT_PUBLIC_BASE_URL!;

    /* 1️⃣ Get OAuth Token */
    const tokenRes = await fetch(`${baseUrl}/v1/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return NextResponse.json(
        { success: false, message: "OAuth failed" },
        { status: 401 }
      );
    }

    /* 2️⃣ Create Order */
    const merchantOrderId = `ORD_${Date.now()}`;

    const payRes = await fetch(`${baseUrl}/pg/v1/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify({
        merchantId,
        merchantOrderId,
        amount: amount * 100, // INR → paise
        redirectUrl: `${appUrl}/payment/success`,
        redirectMode: "REDIRECT",
        callbackUrl: `${appUrl}/api/phonepe/callback`,
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      }),
    });

    const payData = await payRes.json();

    if (!payData.redirectUrl) {
      return NextResponse.json(
        { success: false, message: "Payment init failed", payData },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      redirectUrl: payData.redirectUrl,
      orderId: merchantOrderId,
    });

  } catch (err) {
    console.error("PhonePe PAY Error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
