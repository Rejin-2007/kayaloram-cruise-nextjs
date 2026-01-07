"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-emerald-950 bg-opacity-20 backdrop-blur-md rounded-lg p-6 sm:p-8 w-[90%] max-w-sm text-center relative border border-emerald-300/40 shadow-2xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            role="dialog"
            aria-modal="true"
            aria-label="Poovar boating and Poovar island boating special offer popup"
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-emerald-300 transition"
              aria-label="Close offer popup"
            >
              &times;
            </button>

            {/* Offer Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🎉 50% OFF Poovar Boating!
            </h2>

            <p className="text-white mb-6 text-sm sm:text-base">
              Get 50% off on all Poovar boating and Poovar island boating rides.
              <br />
              Book now and experience Kerala backwater cruises and golden beach tours!
            </p>

            <button
              onClick={() => {
                router.push("/service");
                setShow(false);
              }}
              className="px-5 py-2 bg-emerald-950 border border-white bg-opacity-30 text-white rounded hover:bg-opacity-50 transition text-sm sm:text-base font-semibold shadow"
              aria-label="Book Poovar boating now"
            >
              Book Now
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
