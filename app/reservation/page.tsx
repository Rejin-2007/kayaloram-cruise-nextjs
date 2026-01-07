"use client";

import { useState } from "react";

type Package = { label: string; value: string; price: number };

const packages: Package[] = [
  { label: "Golden Beach Cruise", value: "golden", price: 2000 },
  { label: "Island Boating Tour", value: "island", price: 3500 },
  { label: "Full Day Backwater Tour", value: "backwater", price: 5000 },
];

export default function ReservationPage() {
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [packageType, setPackageType] = useState(packages[0].value);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedPackage = packages.find((p) => p.value === packageType)!;

    // Create order on server
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: selectedPackage.price,
        phone,
        packageType,
        date,
      }),
    });

    const data = await res.json();
    if (!data.order) {
      alert("Failed to create order");
      setLoading(false);
      return;
    }

    // Razorpay options
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Kayaloram Resort Poovar",
      description: selectedPackage.label,
      order_id: data.order.id,
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: { contact: phone },
      theme: { color: "#16a34a" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-950 px-4">
      <form
        onSubmit={handlePayment}
        className="bg-white/10 backdrop-blur-md border border-emerald-400/30 p-8 rounded-3xl shadow-lg w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-lime-200">
          Book Your Poovar Boating Package
        </h2>

        <label className="block mb-4">
          Phone Number
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-black"
            placeholder="+91 1234567890"
          />
        </label>

        <label className="block mb-4">
          Date
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-black"
          />
        </label>

        <label className="block mb-6">
          Select Package
          <select
            required
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-black"
          >
            {packages.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label} - ₹{p.price}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold px-4 py-3 rounded-full shadow-lg transition-colors text-lg"
        >
          {loading ? "Processing..." : "Pay & Book"}
        </button>
      </form>
    </div>
  );
}
