import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("📞 PhonePe Callback:", data);

    // TODO:
    // - Verify order status via PhonePe Status API
    // - Update DB (SUCCESS / FAILED)

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Callback Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
