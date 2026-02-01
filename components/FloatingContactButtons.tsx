"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <nav
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:gap-4 sm:right-6"
      aria-label="Contact Poovar Boating Services"
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918139031924"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Chat with Poovar Boating on WhatsApp for booking and enquiries"
        title="WhatsApp Poovar Boating"
        className="
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/20
          bg-white/10 backdrop-blur-xl
          text-xl text-emerald-400
          shadow-lg
          transition-transform  duration-200
          hover:scale-110 hover:bg-emerald-500/30 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-emerald-300
          sm:h-14 sm:w-14 sm:text-2xl
        "
      >
        <FaWhatsapp aria-hidden />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+918139031924"
        aria-label="Call Poovar Boating for instant support and reservations"
        title="Call Poovar Boating"
        className="
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/20
          bg-white/10 backdrop-blur-xl
          text-xl text-blue-400
          shadow-lg
          transition-transform duration-200
          hover:scale-110 hover:bg-blue-500/30 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-blue-300
          sm:h-14 sm:w-14 sm:text-2xl
        "
      >
        <FaPhone aria-hidden />
      </a>
    </nav>
  );
}
