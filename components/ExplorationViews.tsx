'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';

const yachtData = [
  {
    image: '/estuary.webp',
    title: 'Poovar Estuary',
    description:
      'Experience the stunning Poovar Estuary where the Neyyar River meets the Arabian Sea. A highlight of Poovar boating and Poovar island boating, ideal for Kerala backwater cruises, bird watching, photography, and peaceful sightseeing.',
  },
  {
    image: '/marymatha.webp',
    title: 'Mary Matha Statue Poovar',
    description:
      'The iconic Mary Matha Statue near Poovar Island Beach is a spiritual and scenic landmark included in popular Poovar boating and Poovar sightseeing tours through Kerala backwaters.',
  },
  {
    image: '/elephant-rock-island.webp',
    title: 'Elephant Rock Island Poovar',
    description:
      'Elephant Rock Island is one of Poovar’s hidden gems, loved for Poovar island boating, calm backwater cruises, photography, and exploring Kerala’s untouched waterways.',
  },
];

const SLIDER_INTERVAL = 6000;

export default function ExplorationViews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentView = yachtData[currentIndex];

  /* Auto slide */
  useEffect(() => {
    if (isPaused || modalOpen) return;
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % yachtData.length),
      SLIDER_INTERVAL
    );
    return () => clearInterval(timer);
  }, [isPaused, modalOpen]);

  /* ESC + focus trap */
  useEffect(() => {
    if (!modalOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  const next = useCallback(
    () => setCurrentIndex((i) => (i + 1) % yachtData.length),
    []
  );
  const prev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + yachtData.length) % yachtData.length),
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="w-full bg-emerald-950 px-4 py-14 text-white"
        aria-labelledby="poovar-exploration-heading"
      >
        {/* Header */}
        <header className="mb-10 text-center">
          <h2
            id="poovar-exploration-heading"
            className="text-3xl md:text-4xl font-extrabold"
          >
            Poovar Boating & Poovar Island Backwater Explorations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lime-200">
            Explore Poovar boating routes, island boating experiences, mangrove
            backwaters, scenic estuaries, and Kerala backwater cruise destinations
            near Trivandrum.
          </p>
        </header>

        {/* Slider */}
        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <figure className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={currentView.image}
              alt={`${currentView.title} – Poovar boating and Kerala backwater cruise location`}
              width={1280}
              height={720}
              loading="lazy"
              className="h-88 md:h-104 w-full object-cover cursor-pointer"
              onClick={() => setModalOpen(true)}
            />

            <button
              onClick={prev}
              aria-label="Previous Poovar boating location"
              className="absolute left-4 top-4 rounded-full bg-white/40 p-2 backdrop-blur hover:bg-white/70"
            >
              <FaArrowLeft className="text-green-900" />
            </button>

            <button
              onClick={next}
              aria-label="Next Poovar boating location"
              className="absolute right-4 top-4 rounded-full bg-white/40 p-2 backdrop-blur hover:bg-white/70"
            >
              <FaArrowRight className="text-green-900" />
            </button>
          </figure>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {yachtData.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View ${item.title}`}
                className={`h-3 w-3 rounded-full ${
                  idx === currentIndex ? 'bg-lime-400 scale-110' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Text */}
          <m.div
            className="mt-6 rounded-xl border border-lime-200/30 bg-white/20 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-2 text-2xl font-bold text-lime-100">
              {currentView.title}
            </h3>
            <p className="text-lime-200">{currentView.description}</p>
          </m.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && (
            <m.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
            >
              <div ref={modalRef} className="relative max-w-5xl px-4">
                <Image
                  src={currentView.image}
                  alt={`${currentView.title} large view`}
                  width={1600}
                  height={900}
                  className="max-h-[80vh] w-full rounded-xl object-contain"
                />
                <button
                  onClick={() => setModalOpen(false)}
                  aria-label="Close image"
                  className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Footer text */}
        <p className="mt-8 text-center text-lime-300 max-w-3xl mx-auto">
          Discover hidden Poovar backwater spots perfect for Poovar boating,
          Poovar island boating, Kerala backwater cruises, sightseeing,
          photography, and peaceful relaxation.
        </p>
      </section>
    </LazyMotion>
  );
}
