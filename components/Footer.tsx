"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

/* ---------- Footer Nav Items ---------- */
const footerNav = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Reservation", path: "/reservation" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-emerald-950 border-t border-emerald-400/10 text-lime-100"
      aria-label="Poovar Boating Footer"
    >
      {/* MAP SECTION */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.6679861468047!2d77.08617065259043!3d8.311056629233937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a99c11a043a7%3A0x8984b4fe9e723ef!2skayaloram%20resort!5e1!3m2!1sen!2sin!4v1750411038045!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kayaloram Resort Google Maps Location"
          className="border-b border-emerald-400/10"
        />
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/logo.webp"
            alt="Kayaloram Resort – Poovar Boating"
            width={200}
            height={70}
            priority
          />
          <p className="text-sm text-lime-200 leading-relaxed">
            Trusted Poovar boating & Poovar island boating experiences since 1999.
            Explore Kerala backwaters, mangroves, and golden beach cruises.
          </p>
        </div>

        {/* Footer Navigation */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-lime-300 font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {footerNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-lime-300 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="space-y-4 text-sm">
          <h3 className="text-lime-300 font-semibold">Contact</h3>

          <div className="flex items-start gap-3">
            <SiGmail className="mt-1 text-lime-300" />
            <a
              href="mailto:rajeshkayaloram@gmail.com"
              className="hover:underline"
            >
              rajeshkayaloram@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-3">
            <HiPhone className="mt-1 text-lime-300" />
            <div className="space-y-1">
              <a href="tel:+918139031924" className="block hover:underline">
                +91 81390 31924
              </a>
              <a href="tel:+918075413797" className="block hover:underline">
                +91 80754 13797
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-4 text-sm">
          <h3 className="text-lime-300 font-semibold">Location</h3>
          <div className="flex items-start gap-3">
            <SlLocationPin className="mt-1 text-lime-300" />
            <address className="not-italic leading-relaxed">
              Kayaloram Resort <br />
              Club Mahindra Resort Road <br />
              Poovar, Kerala, India
            </address>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-emerald-400/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex gap-6">
            {[
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/poovar.boating",
                label: "Poovar Boating Instagram",
              },
              {
                Icon: FaYoutube,
                href: "https://www.youtube.com/@rajeshmathias6014",
                label: "Poovar Boating YouTube",
              },
              {
                Icon: FaFacebook,
                href: "https://www.facebook.com/share/1YPM77byhM/",
                label: "Poovar Boating Facebook",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                className="text-2xl text-lime-300 hover:text-lime-400 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Credit + Copyright */}
          <div className="text-center text-xs text-lime-200/70 space-y-1">
            <p>
              Designed & Developed by{" "}
              <a
                href="https://www.instagram.com/browess"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-lime-300 hover:underline"
              >
                Browzess
              </a>
            </p>
            <p>
              © {new Date().getFullYear()} Kayaloram Resort · Poovar Boating · All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
