"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaTags } from "react-icons/fa";

/* ---------- EASING (TYPED) ---------- */
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ---------- Animation Variants ---------- */
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
    transition: {
      duration: 0.45,
      ease: easeOut, // ✅ FIXED
    },
  },
  exit: {
    x: -80,
    opacity: 0,
    transition: { duration: 0.25 },
  },
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
            className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <m.div
              className="bg-emerald-950/20 backdrop-blur-md rounded-lg p-6 w-[90%] max-w-sm text-center relative border border-emerald-300/40 shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 text-white text-2xl hover:text-emerald-300"
                aria-label="Close offer popup"
              >
                &times;
              </button>

              <m.div
                className="flex justify-center mb-3 text-emerald-300 text-3xl"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <FaTags />
              </m.div>

              <h2 className="text-2xl font-bold text-white mb-4">
                50% OFF Poovar Boating
              </h2>

              <p className="text-white mb-6 text-sm">
                Enjoy up to <strong>50% discount</strong> on Poovar island boating
                packages with Kayaloram Cruise.
              </p>

              <button
                onClick={() => {
                  router.push("/service");
                  setShow(false);
                }}
                className="px-5 py-2 bg-emerald-950/40 border border-white text-white rounded hover:bg-emerald-950/60 transition font-semibold"
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
