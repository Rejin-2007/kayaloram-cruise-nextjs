"use client";

import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarAlt, FaShip, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const cards = [
  { title: "Sunrise Cruise" },
  { title: "Sunset Cruise" },
  { title: "Lunch Cruise" },
  { title: "Standard Cruise" },
  { title: "Deluxe Cruise" },
  { title: "Premium Cruise" },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ReservationClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [packageName, setPackageName] = useState(cards[0].title);
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedTime = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    try {
      await emailjs.send(
        "service_smh1c0p",
        "template_22f9sbp",
        {
          name: name,
          time: formattedTime,
          message: `Phone: ${phone}
Date: ${date}
Package: ${packageName}
Details: ${details}

This Email From Poovar Island Boating`,
        },
        "M40cSVMnA_AywFy2-"
      );

      toast.success("Booking request sent");
      setName("");
      setPhone("");
      setDate("");
      setPackageName(cards[0].title);
      setDetails("");
    } catch {
      toast.error("Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full mt-2 p-2 rounded-lg text-black bg-white border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400";

  return (
    <>
      <Head>
        <title>Book Poovar Island Boating | Online Reservation</title>
        <meta
          name="description"
          content="Book Poovar island boating online. Sunrise cruise, sunset cruise, premium backwater boat rides in Poovar Kerala."
        />
        <link
          rel="canonical"
          href="https://www.poovarislandboating.com/reservation"
        />
        <meta name="robots" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Poovar Island Boating",
              url: "https://www.poovarislandboating.com",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Poovar",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 06:00-18:30",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-emerald-950 px-4">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="bg-white/10 backdrop-blur-md border border-emerald-400/30 p-8 rounded-3xl shadow-lg w-full max-w-md text-white"
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-lime-200">
            Book Poovar Island Boating
          </h1>

          <label className="block mb-4">
            <span className="flex items-center gap-2">
              <FaUser /> Name
            </span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block mb-4">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> Phone
            </span>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block mb-4">
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> Date
            </span>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block mb-4">
            <span className="flex items-center gap-2">
              <FaShip /> Package
            </span>
            <select
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className={inputClass}
            >
              {cards.map((c) => (
                <option key={c.title}>{c.title}</option>
              ))}
            </select>
          </label>

          <label className="block mb-6">
            <span>Details</span>
            <textarea
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Eg: 15 people at 4pm"
              className={`${inputClass} resize-none`}
              rows={3}
            />
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-green-400 hover:bg-green-500 text-green-900 font-semibold px-4 py-3 rounded-full text-lg"
          >
            {loading ? "Sending..." : "Book Now"}
          </motion.button>

          <div className="mt-6 text-center text-sm">
            <a href="/service" className="underline">
              View Services
            </a>
          </div>
        </motion.form>
      </div>
    </>
  );
}
