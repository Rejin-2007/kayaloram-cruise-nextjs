"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaTags } from "react-icons/fa";

/* ---------- Animation Variants ---------- */
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const popupVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { x: -100, opacity: 0 },
};

const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2 },
  },
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
      <AnimatePresence>
        {show && (
          <m.div
            className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 overflow-x-hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-hidden={!show}
          >
            <m.div
              className="bg-emerald-950 bg-opacity-20 backdrop-blur-md rounded-lg p-6 sm:p-8 w-[90%] max-w-sm text-center relative border border-emerald-300/40 shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Special Poovar boating and Poovar island boating discount offer"
            >
              {/* Close Button */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-emerald-300 transition"
                aria-label="Close Poovar boating offer popup"
                type="button"
              >
                &times;
              </button>

              {/* Offer Icon */}
              <m.div
                className="flex justify-center mb-3 text-emerald-300 text-3xl"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                aria-hidden="true"
              >
                <FaTags />
              </m.div>

              {/* Offer Content */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                50% OFF Poovar Boating
              </h2>

              <p className="text-white mb-6 text-sm sm:text-base">
                Enjoy an exclusive <strong>Poovar boating offer</strong> with up
                to <strong>50% discount</strong> on Poovar island boating
                packages.
                <br />
                Discover Kerala backwater cruises, mangrove views, and golden
                beach experiences with Kayaloram Cruise.
              </p>

              <button
                onClick={() => {
                  router.push("/service");
                  setShow(false);
                }}
                className="px-5 py-2 bg-emerald-950 border border-white bg-opacity-30 text-white rounded hover:bg-opacity-50 transition text-sm sm:text-base font-semibold shadow"
                aria-label="Book Poovar boating and Poovar island boating now"
                type="button"
              >
                Book Now
              </button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
