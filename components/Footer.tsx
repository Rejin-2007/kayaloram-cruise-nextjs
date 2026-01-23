"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

const socialButtonClasses =
  "transition-all duration-200 hover:scale-110 bg-gradient-to-br from-lime-200/30 to-lime-400/30 border-2 border-lime-300 rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-300";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full px-4 py-12 bg-emerald-950 border-t border-green-400/10 shadow-inner"
      aria-label="Poovar Boating and Poovar Island Boating Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/logo.png"
            alt="Kayaloram Resort – Poovar Boating and Poovar Island Boating"
            width={220}
            height={80}
            priority
            className="drop-shadow"
          />
          <p className="text-sm text-lime-200 max-w-xs text-center md:text-left">
            Trusted Poovar boating & Poovar island boating experiences since 1999.
            Explore Kerala backwaters, mangroves, and golden beach tours.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lime-300">
              <SiGmail />
              <span>Email</span>
            </div>
            <a
              href="mailto:rajeshkayaloram@gmail.com"
              className="text-lime-100 underline hover:text-lime-200 break-all"
              aria-label="Email Kayaloram Resort"
            >
              rajeshkayaloram@gmail.com
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lime-300">
              <SlLocationPin />
              <span>Location</span>
            </div>
            <address className="not-italic text-lime-100 text-sm leading-relaxed">
              Kayaloram Resort <br />
              Club Mahindra Resort Road <br />
              Poovar, Kerala, India
            </address>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lime-300">
              <HiPhone />
              <span>Phone</span>
            </div>
            <div className="text-lime-100 text-sm space-y-2">
              <a
                href="tel:+918139031924"
                className="underline block"
                aria-label="Call Poovar Boating at 8139031924"
              >
                +91 81390 31924
              </a>
              <a
                href="tel:+918075413797"
                className="underline block"
                aria-label="Call Poovar Boating at 8075413797"
              >
                +91 80754 13797
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <nav
        className="flex justify-center gap-8 mt-12"
        aria-label="Poovar Boating Social Media Links"
      >
        <a
          href="https://www.instagram.com/poovar.boating"
          target="_blank"
          rel="noopener noreferrer"
          className={socialButtonClasses}
          aria-label="Poovar Boating Instagram"
        >
          <FaInstagram className="text-lime-400 text-2xl" />
        </a>

        <a
          href="https://www.youtube.com/@rajeshmathias6014"
          target="_blank"
          rel="noopener noreferrer"
          className={socialButtonClasses}
          aria-label="Poovar Boating YouTube"
        >
          <FaYoutube className="text-red-400 text-2xl" />
        </a>

        <a
          href="https://www.facebook.com/share/1YPM77byhM/"
          target="_blank"
          rel="noopener noreferrer"
          className={socialButtonClasses}
          aria-label="Poovar Boating Facebook"
        >
          <FaFacebook className="text-blue-500 text-2xl" />
        </a>
      </nav>

      {/* Copyright */}
      <div className="text-center text-xs mt-10 text-lime-100/80">
        © {new Date().getFullYear()} Kayaloram Resort · Poovar Boating · All rights reserved
      </div>
    </footer>
  );
}
