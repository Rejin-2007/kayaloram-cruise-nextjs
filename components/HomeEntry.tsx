"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomeEntry() {
  return (
    <header
      className="relative min-h-screen pt-28 bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: 'url("/firstImage.jpg")' }}
      aria-label="Poovar Boating, Poovar Island Boating, Kayaloram Cruise Hero Section with Greenery and Boats"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,25,10,0.7)] backdrop-brightness-75" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-center h-full min-h-screen px-4 sm:px-6">
        <div className="text-center text-white max-w-2xl">
          <div className="mb-2 text-green-200 uppercase tracking-wider text-sm font-medium">
            &#8594; Nature &amp; Boats
          </div>

          <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-green-300 wrap-break-words"
          >
            Poovar Boating & Poovar Island Boating <br /> Lap Of Mother Nature
          </motion.h1>

          <motion.h2 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-green-200 wrap-break-words"
          >
            With Kayaloram Cruise Kerala
          </motion.h2>

          <motion.p initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="mb-8 text-base sm:text-lg md:text-xl font-medium text-green-100 wrap-break-words"
          >
            Experience Poovar boating, Poovar island boating, and Kerala backwater tours with Kayaloram Cruise. Enjoy a peaceful and scenic golden beach cruise holiday in the lap of nature, crafted just for you.
          </motion.p>

          <motion.a href="tel:+918139031924" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.07, backgroundColor: "#16a34a", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center bg-green-400 hover:bg-green-500 text-green-900 font-semibold px-5 sm:px-7 py-3 rounded-full shadow-lg transition-colors text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Call Poovar Boating and Poovar Island Boating at +91 81390 31924"
          >
            Call Now <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
