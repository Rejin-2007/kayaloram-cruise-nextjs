'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';

const views = [
  {
    image: '/estuary.webp',
    title: 'Poovar Estuary',
    description:
      'Poovar Estuary is where the Neyyar River meets the Arabian Sea, forming one of the most iconic Poovar boating locations for backwater cruises, sightseeing, and photography.',
  },
  {
    image: '/marymatha.webp',
    title: 'Mary Matha Statue Poovar',
    description:
      'Mary Matha Statue is a famous spiritual landmark included in Poovar island boating routes and Kerala backwater sightseeing tours.',
  },
  {
    image: '/elephant-rock-island.webp',
    title: 'Elephant Rock Island Poovar',
    description:
      'Elephant Rock Island is a serene Poovar boating destination known for calm waters, island exploration, and untouched Kerala backwaters.',
  },
];

const INTERVAL = 6000;

export default function ExplorationViews() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [pause, setPause] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const current = views[index];

  useEffect(() => {
    if (pause || open) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % views.length),
      INTERVAL
    );
    return () => clearInterval(t);
  }, [pause, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % views.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + views.length) % views.length),
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="explore-poovar"
        className="w-full bg-emerald-950 px-4 py-16 text-white"
        aria-label="Poovar boating locations and sightseeing views"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Poovar Island Boating Views",
              "url": "https://poovarislandboating.com",
              "image": views.map((v) => `https://poovarislandboating.com${v.image}`),
              "description":
                "Explore Poovar boating locations including estuary, island routes, backwaters, sunset rides, and sightseeing destinations.",
              "touristType": "Boat Tour",
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "IN",
                "addressRegion": "Kerala",
                "addressLocality": "Poovar"
              }
            }),
          }}
        />

        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Poovar Boating Views & Backwater Attractions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lime-200">
            Explore popular Poovar island boating routes, estuary views,
            sightseeing locations, and Kerala backwater cruise highlights.
          </p>
        </header>

        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <figure
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <Image
              src={current.image}
              alt={`${current.title} Poovar boating location`}
              width={1280}
              height={720}
              className="w-full cursor-pointer object-cover"
              itemProp="contentUrl"
              onClick={() => setOpen(true)}
              priority={index === 0}
            />

            <button
              onClick={prev}
              aria-label="Previous Poovar boating view"
              className="absolute left-4 top-4 rounded-full bg-white/50 p-2"
            >
              <FaArrowLeft className="text-green-900" />
            </button>

            <button
              onClick={next}
              aria-label="Next Poovar boating view"
              className="absolute right-4 top-4 rounded-full bg-white/50 p-2"
            >
              <FaArrowRight className="text-green-900" />
            </button>
          </figure>

          <div className="mt-4 flex justify-center gap-2">
            {views.map((v, i) => (
              <button
                key={v.title}
                onClick={() => setIndex(i)}
                aria-label={`View ${v.title}`}
                className={`h-3 w-3 rounded-full ${
                  i === index ? 'bg-lime-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <m.div
            className="mt-6 rounded-xl border border-lime-200/30 bg-white/20 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-2 text-2xl font-bold text-lime-100">
              {current.title}
            </h3>
            <p className="text-lime-200">{current.description}</p>
          </m.div>
        </div>

        <AnimatePresence>
          {open && (
            <m.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
            >
              <div ref={modalRef} className="relative max-w-6xl px-4">
                <Image
                  src={current.image}
                  alt={`${current.title} full view`}
                  width={1600}
                  height={900}
                  className="max-h-[85vh] w-full rounded-xl object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close image"
                  className="absolute right-4 top-4 rounded-full bg-white/30 p-2"
                >
                  <FaTimes />
                </button>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <nav className="sr-only">
          <a href="/services">Poovar boating services</a>
          <a href="/reservation">Book Poovar boating</a>
          <a href="/contact">Contact Poovar boating</a>
        </nav>
      </section>
    </LazyMotion>
  );
}
