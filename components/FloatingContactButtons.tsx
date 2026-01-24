"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";
import TawkToChat from "./TawkToChat";

export default function FloatingContactButtons() {
  return (
    <>
    <TawkToChat />
      {/* WhatsApp + Phone - RIGHT */}
      <nav
        className="fixed bottom-6 right-4 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50"
        aria-label="Contact Poovar Boating"
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/918139031924"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Poovar Boating on WhatsApp"
          className="
            w-12 h-12 sm:w-14 sm:h-14
            flex items-center justify-center
            rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/20
            text-xl sm:text-2xl
            text-emerald-400
            shadow-lg
            transition
            hover:bg-emerald-500/30 hover:text-white
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-emerald-300
          "
        >
          <FaWhatsapp />
        </a>

        {/* Phone */}
        <a
          href="tel:+918139031924"
          aria-label="Call Poovar Boating"
          className="
            w-12 h-12 sm:w-14 sm:h-14
            flex items-center justify-center
            rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/20
            text-xl sm:text-2xl
            text-blue-400
            shadow-lg
            transition
            hover:bg-blue-500/30 hover:text-white
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-blue-300
          "
        >
          <FaPhone />
        </a>
      </nav>
    </>
  );
}
