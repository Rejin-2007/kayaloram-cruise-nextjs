"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomeEntry() {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/firstImage.webp")' }}
      aria-label="Poovar Boating and Poovar Island Boating Hero Section"
      role="img"
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(10,25,10,0.72)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 pt-20 md:pt-24">
        <div className="max-w-3xl text-center text-white">
          <div className="mb-3 text-green-200 uppercase tracking-widest text-sm font-semibold">
            → Nature & Boats
          </div>

          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-300"
          >
            Poovar Boating & Poovar Island Boating
            <br />
            Lap of Mother Nature
          </motion.h1>

          <motion.h2
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-200"
          >
            With Kayaloram Cruise Kerala
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="mt-6 mb-10 text-base sm:text-lg md:text-xl text-green-100"
          >
            Experience Poovar boating, Poovar island boating, and Kerala
            backwater cruises with Kayaloram Cruise.
          </motion.p>

          <motion.a
            href="tel:+918139031924"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-green-400 px-8 py-3 font-semibold text-green-900 shadow-xl hover:bg-green-500"
            aria-label="Call now to book Poovar boating and Kerala backwater cruise"
            title="Call Kayaloram Cruise for Poovar Boating"
          >
            Call Now <FaArrowRight aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
