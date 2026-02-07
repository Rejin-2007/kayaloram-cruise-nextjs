"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaTags } from "react-icons/fa";
import Link from "next/link";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const popupVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
  exit: { x: -80, opacity: 0, transition: { duration: 0.25 } },
};

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            name: "Poovar Boating Discount Offer",
            description:
              "Limited time discount on Poovar boating and Poovar island boating packages by Kayaloram Cruise",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
            eligibleRegion: {
              "@type": "Place",
              name: "Poovar, Kerala, India",
            },
            seller: {
              "@type": "LocalBusiness",
              name: "Kayaloram Cruise Poovar",
              telephone: "+91-8139031924",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Poovar",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
            },
            url: "https://www.poovarislandboating.com/service",
          }),
        }}
      />
      <AnimatePresence>
        {show && (
          <m.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <m.div
              className="relative w-[90%] max-w-sm rounded-lg border border-emerald-300/40 bg-emerald-950/30 p-6 text-center backdrop-blur-md shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setShow(false)}
                className="absolute right-2 top-2 text-2xl text-white"
                aria-label="Close Poovar boating offer"
              >
                ×
              </button>

              <div className="mb-3 flex justify-center text-3xl text-emerald-300">
                <FaTags />
              </div>

              <h2 className="mb-3 text-2xl font-extrabold text-white">
                Poovar Boating Offer
              </h2>

              <p className="mb-6 text-sm text-white">
                Get exclusive discounts on Poovar island boating and backwater
                cruises. Limited time booking.
              </p>

              <button
                onClick={() => {
                  router.push("/service");
                  setShow(false);
                }}
                className="rounded border border-white bg-emerald-950/40 px-5 py-2 font-semibold text-white transition"
              >
                View Packages
              </button>

              <nav className="sr-only" aria-label="Poovar boating internal links">
                <Link href="/">Poovar Boating Home</Link>
                <Link href="/service">Poovar Boating Packages</Link>
                <Link href="/reservation">Poovar Boating Booking</Link>
                <Link href="/contact">Poovar Boating Contact</Link>
              </nav>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
