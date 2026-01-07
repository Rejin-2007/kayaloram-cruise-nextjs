"use client"; // Required for hooks and framer-motion

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";

// Poovar yacht / sightseeing spots data
const yachtData = [
  {
    image: "/estuary.jpg",
    title: "Poovar Estuary",
    description:
      "Explore the Poovar Estuary, where river meets sea. Perfect for Poovar boating, Poovar island boating, backwater cruises, kayaking, and nature photography in Kerala.",
  },
  {
    image: "/marymatha.jpeg",
    title: "Mary Matha Statue Poovar",
    description:
      "Visit the iconic Mary Matha Statue near Poovar island beach. A must-see landmark for Poovar boating, Poovar sightseeing tours, and Kerala backwater cruises.",
  },
  {
    image: "/elephant-rock-island.jpg",
    title: "Elephant Rock Island Poovar",
    description:
      "Elephant Rock Island is a unique Poovar attraction ideal for Poovar island boating, backwater cruise, photography, and exploration of Kerala's hidden gems.",
  },
];

const sliderIntervalMs = 6000;

export default function ExplorationViews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentYacht = yachtData[currentIndex];

  // Auto-slide
  useEffect(() => {
    if (isPaused || modalOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % yachtData.length);
    }, sliderIntervalMs);
    return () => clearInterval(timer);
  }, [isPaused, modalOpen]);

  // Keyboard focus trap
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
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section
      className="w-full bg-emerald-950 py-12 px-4 flex flex-col items-center text-white overflow-hidden"
      aria-labelledby="explorations-heading"
    >
      <header className="text-center mb-10">
        <h2 id="explorations-heading" className="text-4xl font-bold">
          Poovar Boating, Poovar Island Boating & Backwater Explorations
        </h2>
        <p className="mt-2 text-lime-200 max-w-xl mx-auto">
          Discover Poovar boating, Poovar island boating, Kerala backwater cruises, and hidden spots along Poovar
          island, Kovalam, and Trivandrum backwaters. Enjoy island tours, serene estuaries, and houseboat rides in Kerala.
        </p>
      </header>

      {/* Slider */}
      <div
        className="relative w-full max-w-5xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <figure
          className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
          aria-label={`View: ${currentYacht.title}`}
        >
          <motion.img
            src={currentYacht.image}
            alt={`${currentYacht.title} for Poovar boating, Poovar island boating and Kerala backwater cruise`}
            loading="lazy"
            onClick={openModal}
            className="w-full h-85 object-cover rounded-2xl transition duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110"
            whileHover={{ scale: 1.04 }}
            tabIndex={0}
            role="button"
            aria-label={`Open enlarged view of ${currentYacht.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openModal();
            }}
          />

          <button
            onClick={prev}
            aria-label="Previous view"
            className="absolute left-4 top-4 bg-white/30 hover:bg-white/60 p-2 rounded-full backdrop-blur-md shadow-lg transition focus:outline-none focus:ring-2 focus:ring-lime-400"
            tabIndex={0}
          >
            <FaArrowLeft className="text-green-900 text-xl" />
          </button>

          <button
            onClick={next}
            aria-label="Next view"
            className="absolute right-4 top-4 bg-white/30 hover:bg-white/60 p-2 rounded-full backdrop-blur-md shadow-lg transition focus:outline-none focus:ring-2 focus:ring-lime-400"
            tabIndex={0}
          >
            <FaArrowRight className="text-green-900 text-xl" />
          </button>
        </figure>

        {/* Slide Dots */}
        <div className="flex justify-center gap-2 mt-4" aria-label="Slide navigation">
          {yachtData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to ${yachtData[idx].title}`}
              className={`w-3 h-3 rounded-full outline-none ring-lime-400 focus:ring-2 transition-all duration-300 ${
                idx === currentIndex ? "bg-lime-400 scale-110" : "bg-white/30"
              }`}
              tabIndex={0}
            />
          ))}
        </div>

        {/* Description Box */}
        <motion.div
          className="bg-white/20 backdrop-blur-xl border border-lime-200/30 rounded-xl shadow-xl p-6 mt-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-lime-100 mb-2">{currentYacht.title}</h3>
          <p className="text-lime-200/90">{currentYacht.description}</p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged view of ${currentYacht.title}`}
          >
            <motion.div
              ref={modalRef}
              className="relative max-w-5xl w-full px-4 outline-none"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              tabIndex={-1}
            >
              <img
                src={currentYacht.image}
                alt={`${currentYacht.title} for Poovar boating, Poovar island boating and Kerala backwater cruise`}
                loading="lazy"
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={closeModal}
                aria-label="Close enlarged image"
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-300"
                tabIndex={0}
                autoFocus
              >
                <FaTimes className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="m-3 text-lime-300 max-w-3xl text-center">
        <strong>Hidden Spots in Poovar:</strong> Explore secret viewpoints, lush backwaters, and serene corners of Poovar island perfect for Poovar boating, Poovar island boating, Kerala backwater cruise, boat rides, photography, and relaxation.
      </p>
    </section>
  );
}
