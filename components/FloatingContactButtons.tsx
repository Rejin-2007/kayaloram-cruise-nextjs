"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <nav
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:gap-4 sm:right-6"
      aria-label="Poovar boating contact and booking options"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <meta itemProp="contactType" content="customer support" />
      <meta itemProp="telephone" content="+91-81390-31924" />
      <meta itemProp="areaServed" content="IN-KL" />
      <meta itemProp="availableLanguage" content="English, Malayalam" />

      <a
        href="https://wa.me/918139031924"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Poovar boating booking and enquiries"
        title="WhatsApp Poovar Boating Booking"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-xl text-emerald-400 shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-emerald-500/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:h-14 sm:w-14 sm:text-2xl"
      >
        <FaWhatsapp aria-hidden />
      </a>

      <a
        href="tel:+918139031924"
        aria-label="Call Poovar boating for instant reservation"
        title="Call Poovar Boating"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-xl text-blue-400 shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-blue-500/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 sm:h-14 sm:w-14 sm:text-2xl"
      >
        <FaPhone aria-hidden />
      </a>

      <nav className="sr-only">
        <a href="/service">Poovar boating packages</a>
        <a href="/reservation">Book Poovar boating</a>
        <a href="/contact">Poovar boating contact</a>
      </nav>
    </nav>
  );
}
