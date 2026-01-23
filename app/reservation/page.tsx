"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarAlt, FaShip } from "react-icons/fa";

type Package = { label: string; value: string };

const packages: Package[] = [
  { label: "Golden Beach Cruise", value: "golden" },
  { label: "Island Boating Tour", value: "island" },
  { label: "Full Day Backwater Tour", value: "backwater" },
];

/* ---------- SEO Metadata ---------- */
export const metadata = {
  title: "Poovar Boating Reservation | Book Poovar Island Boating Online",
  description:
    "Book Poovar boating and Poovar island boating online. Choose golden beach cruise, island boating tour, or full-day Kerala backwater cruise at Kayaloram Resort Poovar.",
  keywords:
    "Poovar boating, Poovar island boating, Poovar boating booking, Kerala backwater cruise, golden beach cruise Poovar, Kayaloram Resort Poovar",
  alternates: {
    canonical: "https://www.poovarislandboating.com/reservation",
  },
};

export default function ReservationPage() {
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [packageType, setPackageType] = useState(packages[0].value);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 👉 For now just log / later connect API / WhatsApp
    console.log({
      phone,
      date,
      packageType,
    });

    alert("Your Poovar boating enquiry has been submitted successfully!");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-950 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md border border-emerald-400/30 p-8 rounded-3xl shadow-lg w-full max-w-md text-white"
        aria-label="Poovar boating reservation form"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-lime-200">
          Book Your Poovar Boating Package
        </h1>

        {/* Phone */}
        <label className="block mb-4">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-lime-300" /> Phone Number
          </span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-black"
            placeholder="+91 1234567890"
          />
        </label>

        {/* Date */}
        <label className="block mb-4">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-lime-300" /> Date
          </span>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-black"
          />
        </label>

        {/* Package */}
        <label className="block mb-6">
          <span className="flex items-center gap-2">
            <FaShip className="text-lime-300" /> Select Package
          </span>
          <select
            required
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-black"
          >
            {packages.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </label>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="w-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold px-4 py-3 rounded-full shadow-lg transition-colors text-lg"
        >
          {loading ? "Submitting..." : "Send Booking Request"}
        </motion.button>
      </motion.form>
    </div>
  );
}
