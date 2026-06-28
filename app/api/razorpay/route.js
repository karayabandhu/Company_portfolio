import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount } = await req.json();
    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder_key_id";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "rzp_test_placeholder_key_secret";

    // If keys are placeholders, return a simulated order for local dev testing
    if (keyId === "rzp_test_placeholder_key_id") {
      return NextResponse.json({
        id: "order_simulated_" + Date.now(),
        amount: amount * 100,
        currency: "INR",
        simulated: true
      });
    }

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64")
      },
      body: JSON.stringify({
        amount: amount * 100, // Razorpay expects amount in paise
        currency: "INR",
        receipt: "rcpt_" + Date.now()
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Razorpay order creation failed:", errText);
      return NextResponse.json({ error: "Failed to create Razorpay order" }, { status: 500 });
    }

    const orderData = await res.json();
    return NextResponse.json(orderData);
  } catch (err) {
    console.error("POST /api/razorpay error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
