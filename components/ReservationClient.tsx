"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarAlt, FaShip, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

/* ---------- Packages ---------- */
const cards = [
  { title: "Sunrise Cruise" },
  { title: "Sunset Cruise" },
  { title: "Lunch Cruise" },
  { title: "Standard Cruise" },
  { title: "Deluxe Cruise" },
  { title: "Premium Cruise" },
];

/* ---------- Typed Easing (TS safe) ---------- */
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ReservationClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [packageName, setPackageName] = useState(cards[0].title);
  const [loading, setLoading] = useState(false);

  /* ---------- Submit (Email Only) ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      subject: "🚤 New Poovar Boating Enquiry",
      customer_name: name,
      customer_phone: phone,
      ride_date: date,
      package_name: packageName,
      message: `
New Poovar boating enquiry received:

👤 Name: ${name}
📞 Phone: ${phone}
📅 Ride Date: ${date}
📦 Package: ${packageName}
      `,
    };

    try {
      await emailjs.send(
        "service_smh1c0p",      // Service ID
        "template_22f9sbp",     // Template ID
        templateParams,
        "M40cSVMnA_AywFy2-"     // Public Key
      );

      toast.success("Boating enquiry sent successfully 🚤");

      // Reset form
      setName("");
      setPhone("");
      setDate("");
      setPackageName(cards[0].title);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full mt-2 p-2 rounded-lg text-black bg-white " +
    "border border-[#CDFFF5]/60 focus:outline-none focus:ring-2 focus:ring-[#CDFFF5]/50";

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-950 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="bg-white/10 backdrop-blur-md border border-emerald-400/30 p-8 rounded-3xl shadow-lg w-full max-w-md text-white"
        aria-label="Poovar boating reservation form"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-lime-200">
          Book Your Poovar Boating Ride
        </h1>

        {/* Name */}
        <label className="block mb-4">
          <span className="flex items-center gap-2">
            <FaUser className="text-lime-300" /> Name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your Name"
          />
        </label>

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
            className={inputClass}
            placeholder="+91 1234567890"
          />
        </label>

        {/* Date */}
        <label className="block mb-4">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-lime-300" /> Ride Date
          </span>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </label>

        {/* Package */}
        <label className="block mb-6">
          <span className="flex items-center gap-2">
            <FaShip className="text-lime-300" /> Select Package
          </span>
          <select
            required
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            className={inputClass}
          >
            {cards.map((card) => (
              <option key={card.title} value={card.title}>
                {card.title}
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
          {loading ? "Sending..." : "Send Booking Request"}
        </motion.button>
      </motion.form>
    </div>
  );
}
