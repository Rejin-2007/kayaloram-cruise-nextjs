'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const features = [
  "Experienced local captains for safe and scenic Poovar boating and backwater cruises",
  "Eco-friendly Poovar island boating through mangrove forests, estuary, and golden beach",
  "Guided Poovar boating tours ideal for photography, sightseeing, and nature lovers",
  "Flexible Poovar boating packages including houseboats, sunset cruises, and custom trips",
];

export default function AboutInformation() {
  return (
    <article
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-emerald-950 px-4 py-12 md:flex-row"
      aria-label="About Poovar Boating, Poovar Island Boating, and Kerala Backwater Cruises"
    >
      {/* Background Effects */}
      <div className="absolute -left-25 -bottom-30 h-100 w-100 rounded-full bg-emerald-400/50 blur-[90px]" />
      <div className="absolute -right-40 -top-30 h-80.5 w-92.5 rounded-full bg-green-200/50 blur-2xl" />

      {/* Image */}
      <motion.div
        className="relative z-10 mb-8 flex w-full items-center justify-center md:mb-0 md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <figure className="overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-xl backdrop-blur-xl">
          <Image
            src="/aboutimg.jpeg"
            alt="Poovar boating and Poovar island boating through Kerala backwaters, mangroves, and golden beach"
            title="Poovar Boating & Poovar Island Backwater Cruise in Kerala"
            width={380}
            height={280}
            className="h-70 w-full object-cover transition-transform duration-300 hover:scale-105 md:w-95"
          />
          <figcaption className="sr-only">
            Scenic Poovar boating and backwater cruise experience in Kerala
          </figcaption>
        </figure>
      </motion.div>

      {/* Content */}
      <motion.section
        className="relative z-10 w-full rounded-3xl border border-emerald-200/70 bg-emerald-100/60 p-6 text-center shadow-2xl backdrop-blur-md md:p-12 md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <header>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Since 1999
          </span>

          <h1 className="mb-4 text-2xl font-extrabold text-emerald-900 sm:text-3xl md:text-4xl">
            Poovar Boating & Poovar Island Boating in Kerala Backwaters
          </h1>
        </header>

        <h2 className="mb-4 text-xl font-bold text-emerald-800 sm:text-2xl md:text-3xl">
          Trusted Poovar Backwater Cruise Near Trivandrum
        </h2>

        <p className="mb-6 text-sm text-gray-700 sm:text-base md:text-lg">
          Discover the beauty of Kerala with authentic Poovar boating and Poovar island
          boating services operated by Kayaloram Cruise. Our backwater cruises glide
          through peaceful mangrove forests, scenic estuaries, and the famous golden
          beach of Poovar. For over two decades, we have been a trusted choice for safe,
          affordable, and memorable Poovar backwater boating experiences.
        </p>

        <ul
          className="mb-8 space-y-3"
          aria-label="Key features of Poovar boating and island backwater cruise services"
        >
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 font-semibold text-emerald-800"
            >
              <FaCheckCircle className="text-lime-500 shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4 border-t border-emerald-200 pt-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200">
            <FaPhoneAlt className="text-emerald-800" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm text-gray-600">
              Call to Book Poovar Boating Packages & Backwater Cruise
            </p>
            <a
              href="tel:+918139031924"
              className="text-xl font-bold text-emerald-700 hover:underline"
              aria-label="Call Kayaloram Cruise for Poovar Boating at +91 81390 31924"
            >
              +91 81390 31924
            </a>
          </div>
        </div>
      </motion.section>
    </article>
  );
}
