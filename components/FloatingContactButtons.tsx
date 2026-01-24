"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingContactButtons() {
  return (
    <nav
      className="fixed bottom-6 right-4 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50"
      aria-label="Contact Poovar Boating Services"
    >
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/918139031924"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Chat with Poovar Boating on WhatsApp for booking and enquiries"
        title="WhatsApp Poovar Boating"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-xl sm:text-2xl
          text-emerald-400
          shadow-lg
          hover:bg-emerald-500/30 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-emerald-300
        "
      >
        <FaWhatsapp />
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+918139031924"
        aria-label="Call Poovar Boating for instant support and reservations"
        title="Call Poovar Boating"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-xl sm:text-2xl
          text-blue-400
          shadow-lg
          hover:bg-blue-500/30 hover:text-white
          focus:outline-none focus:ring-2 focus:ring-blue-300
        "
      >
        <FaPhone />
      </motion.a>
    </nav>
  );
}
