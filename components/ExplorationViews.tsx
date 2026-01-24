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
      'Experience the stunning Poovar Estuary where the Neyyar River meets the Arabian Sea. A highlight of Poovar boating and Poovar island boating, ideal for Kerala backwater cruises, kayaking, bird watching, and nature photography.',
  },
  {
    image: '/marymatha.webp',
    title: 'Mary Matha Statue Poovar',
    description:
      'The famous Mary Matha Statue near Poovar Island Beach is a spiritual and scenic landmark included in many Poovar boating and Poovar sightseeing tours through Kerala backwaters.',
  },
  {
    image: '/elephant-rock-island.webp',
    title: 'Elephant Rock Island Poovar',
    description:
      'Elephant Rock Island is one of Poovar’s hidden gems, popular for Poovar island boating, calm backwater cruises, photography, and peaceful exploration of Kerala’s untouched waterways.',
  },
];

const SLIDER_INTERVAL = 6000;

export default function ExplorationViews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentYacht = yachtData[currentIndex];

  /* Auto slide – paused on hover / modal */
  useEffect(() => {
    if (isPaused || modalOpen) return;
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % yachtData.length),
      SLIDER_INTERVAL
    );
    return () => clearInterval(timer);
  }, [isPaused, modalOpen]);

  /* Focus trap + ESC */
  useEffect(() => {
    if (!modalOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button,[tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
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
        className="flex w-full flex-col items-center overflow-hidden bg-emerald-950 px-4 py-12 text-white"
        aria-labelledby="explorations-heading"
      >
        <header className="mb-10 text-center">
          <h2 id="explorations-heading" className="text-4xl font-bold">
            Poovar Boating & Poovar Island Backwater Explorations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lime-200">
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
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
            aria-label={`Poovar boating view: ${currentYacht.title}`}
          >
            <m.div whileHover={{ scale: 1.04 }}>
              <Image
                src={currentYacht.image}
                alt={`${currentYacht.title} – Poovar boating, Poovar island boating and Kerala backwater cruise destination`}
                width={1280}
                height={720}
                className="h-85 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                loading="lazy"
                onClick={() => setModalOpen(true)}
                role="button"
                tabIndex={0}
              />
            </m.div>

            <button
              onClick={prev}
              aria-label="Previous Poovar boating location"
              className="absolute left-4 top-4 rounded-full bg-white/30 p-2 shadow-lg backdrop-blur-md hover:bg-white/60"
            >
              <FaArrowLeft className="text-xl text-green-900" aria-hidden />
            </button>

            <button
              onClick={next}
              aria-label="Next Poovar boating location"
              className="absolute right-4 top-4 rounded-full bg-white/30 p-2 shadow-lg backdrop-blur-md hover:bg-white/60"
            >
              <FaArrowRight className="text-xl text-green-900" aria-hidden />
            </button>
          </figure>

          <div className="mt-4 flex justify-center gap-2">
            {yachtData.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View ${item.title} Poovar boating spot`}
                className={`h-3 w-3 rounded-full transition-all ${
                  idx === currentIndex ? 'scale-110 bg-lime-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <m.div
            className="mt-6 rounded-xl border border-lime-200/30 bg-white/20 p-6 shadow-xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="mb-2 text-2xl font-bold text-lime-100">
              {currentYacht.title}
            </h3>
            <p className="text-lime-200/90">{currentYacht.description}</p>
          </m.div>
        </div>

        <AnimatePresence>
          {modalOpen && (
            <m.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
            >
              <m.div
                ref={modalRef}
                className="relative w-full max-w-5xl px-4"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                tabIndex={-1}
              >
                <Image
                  src={currentYacht.image}
                  alt={`${currentYacht.title} – Poovar boating and Kerala backwater cruise location`}
                  width={1600}
                  height={900}
                  className="max-h-[80vh] w-full rounded-xl object-contain shadow-2xl"
                />
                <button
                  onClick={() => setModalOpen(false)}
                  aria-label="Close image preview"
                  className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
                  autoFocus
                >
                  <FaTimes className="text-2xl" aria-hidden />
                </button>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>

        <p className="mt-6 max-w-3xl text-center text-lime-300">
          <strong>Hidden Poovar Backwater Spots:</strong> Discover peaceful viewpoints,
          island routes, and scenic corners perfect for Poovar boating, Poovar island
          boating, Kerala backwater cruises, photography, and relaxation.
        </p>
      </section>
    </LazyMotion>
  );
}
