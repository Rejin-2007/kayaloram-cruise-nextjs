"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";

const yachtData = [
  {
    image: "/estuary.webp",
    title: "Poovar Estuary",
    description:
      "Experience the stunning Poovar Estuary where the Neyyar River meets the Arabian Sea. A highlight of Poovar boating and Poovar island boating, ideal for Kerala backwater cruises, kayaking, bird watching, and nature photography.",
  },
  {
    image: "/marymatha.webp",
    title: "Mary Matha Statue Poovar",
    description:
      "The famous Mary Matha Statue near Poovar Island Beach is a spiritual and scenic landmark included in many Poovar boating and Poovar sightseeing tours through Kerala backwaters.",
  },
  {
    image: "/elephant-rock-island.webp",
    title: "Elephant Rock Island Poovar",
    description:
      "Elephant Rock Island is one of Poovar’s hidden gems, popular for Poovar island boating, calm backwater cruises, photography, and peaceful exploration of Kerala’s untouched waterways.",
  },
];

const sliderIntervalMs = 6000;

export default function ExplorationViews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentYacht = yachtData[currentIndex];

  useEffect(() => {
    if (isPaused || modalOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % yachtData.length);
    }, sliderIntervalMs);
    return () => clearInterval(timer);
  }, [isPaused, modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          "button,[tabindex]:not([tabindex='-1'])"
        );
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % yachtData.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + yachtData.length) % yachtData.length);

  return (
    <section
      className="w-full bg-emerald-950 py-12 px-4 flex flex-col items-center text-white overflow-hidden"
      aria-labelledby="explorations-heading"
    >
      <header className="text-center mb-10">
        <h2 id="explorations-heading" className="text-4xl font-bold">
          Poovar Boating & Poovar Island Backwater Explorations
        </h2>

        <p className="mt-3 text-lime-200 max-w-2xl mx-auto">
          Explore Poovar boating routes, Poovar island boating experiences, and Kerala
          backwater cruise destinations near Trivandrum. Discover serene estuaries,
          island landmarks, mangroves, and scenic boat ride locations.
        </p>
      </header>

      <div
        className="relative w-full max-w-5xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <figure
          className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
          aria-label={`Poovar boating view: ${currentYacht.title}`}
        >
          <motion.img
            src={currentYacht.image}
            alt={`${currentYacht.title} – Poovar boating, Poovar island boating and Kerala backwater cruise destination`}
            loading="lazy"
            onClick={() => setModalOpen(true)}
            className="w-full h-85 object-cover rounded-2xl transition duration-500 group-hover:scale-105 group-hover:brightness-110"
            whileHover={{ scale: 1.04 }}
            tabIndex={0}
            role="button"
          />

          <button
            onClick={prev}
            aria-label="Previous Poovar boating location"
            className="absolute left-4 top-4 bg-white/30 hover:bg-white/60 p-2 rounded-full backdrop-blur-md shadow-lg"
          >
            <FaArrowLeft className="text-green-900 text-xl" />
          </button>

          <button
            onClick={next}
            aria-label="Next Poovar boating location"
            className="absolute right-4 top-4 bg-white/30 hover:bg-white/60 p-2 rounded-full backdrop-blur-md shadow-lg"
          >
            <FaArrowRight className="text-green-900 text-xl" />
          </button>
        </figure>

        <div className="flex justify-center gap-2 mt-4">
          {yachtData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`View ${item.title} Poovar boating spot`}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? "bg-lime-400 scale-110" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <motion.div
          className="bg-white/20 backdrop-blur-xl border border-lime-200/30 rounded-xl shadow-xl p-6 mt-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-lime-100 mb-2">
            {currentYacht.title}
          </h3>
          <p className="text-lime-200/90">
            {currentYacht.description}
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              ref={modalRef}
              className="relative max-w-5xl w-full px-4"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              tabIndex={-1}
            >
              <img
                src={currentYacht.image}
                alt={`${currentYacht.title} – Poovar boating and Kerala backwater cruise location`}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full"
                autoFocus
              >
                <FaTimes className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-lime-300 max-w-3xl text-center">
        <strong>Hidden Poovar Backwater Spots:</strong> Discover peaceful viewpoints,
        island routes, and scenic corners perfect for Poovar boating, Poovar island
        boating, Kerala backwater cruises, photography, and relaxation.
      </p>
    </section>
  );
}
