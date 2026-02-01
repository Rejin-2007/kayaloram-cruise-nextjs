'use client';

import Image from 'next/image';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';

const features = [
  'Experienced local captains for safe and scenic Poovar boating and backwater cruises',
  'Eco-friendly Poovar island boating through mangrove forests, estuary, and golden beach',
  'Guided Poovar boating tours ideal for photography, sightseeing, and nature lovers',
  'Flexible Poovar boating packages including houseboats, sunset cruises, and custom trips',
];

export default function AboutInformation() {
  return (
    <section
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-emerald-950 px-4 py-12 md:flex-row"
      aria-label="About Poovar Boating and Poovar Island Boating"
      itemScope
      itemType="https://schema.org/TouristAttraction"
    >
      {/* Background Effects (CSS only – zero JS cost) */}
      <div
        className="pointer-events-none absolute -left-24 -bottom-28 h-96 w-96 rounded-full bg-emerald-400/40 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-32 h-80 w-96 rounded-full bg-green-200/40 blur-2xl"
        aria-hidden="true"
      />

      {/* Image (LCP SAFE) */}
      <div className="relative z-10 mb-8 flex w-full items-center justify-center md:mb-0 md:w-1/2">
        <figure className="overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-xl backdrop-blur-xl">
          <Image
            src="/aboutimg.webp"
            alt="Poovar boating and Poovar island boating through Kerala backwaters, mangroves, and golden beach"
            title="Poovar Boating & Poovar Island Backwater Cruise in Kerala"
            width={380}
            height={280}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 380px"
            className="h-70 w-full object-cover md:w-95"
          />
          <figcaption className="sr-only">
            Scenic Poovar boating and backwater cruise experience in Kerala
          </figcaption>
        </figure>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full rounded-3xl border border-emerald-200/70 bg-emerald-100/60 p-6 text-center shadow-2xl backdrop-blur-md md:p-12 md:text-left">
        <header>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Since 1999
          </span>

          <h1
            className="mb-4 text-2xl font-extrabold text-emerald-900 sm:text-3xl md:text-4xl"
            itemProp="name"
          >
            Poovar Boating & Poovar Island Boating in Kerala Backwaters
          </h1>
        </header>

        <h2 className="mb-4 text-xl font-bold text-emerald-800 sm:text-2xl md:text-3xl">
          Trusted Poovar Backwater Cruise Near Trivandrum
        </h2>

        <p
          className="mb-6 text-sm text-gray-700 sm:text-base md:text-lg"
          itemProp="description"
        >
          Discover the beauty of Kerala with authentic Poovar boating and Poovar
          island boating services operated by Kayaloram Cruise. Our backwater cruises
          glide through peaceful mangrove forests, scenic estuaries, and the famous
          golden beach of Poovar. For over two decades, we have been a trusted choice
          for safe, affordable, and memorable Poovar backwater boating experiences.
        </p>

        <ul
          className="mb-8 space-y-3"
          aria-label="Key features of Poovar boating services"
        >
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 font-semibold text-emerald-800"
            >
              <FaCheckCircle
                className="shrink-0 text-lime-500"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4 border-t border-emerald-200 pt-5">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200"
            aria-hidden="true"
          >
            <FaPhoneAlt className="text-emerald-800" />
          </span>
          <div>
            <p className="text-sm text-gray-600">
              Call to Book Poovar Boating Packages & Backwater Cruise
            </p>
            <a
              href="tel:+918139031924"
              className="text-xl font-bold text-emerald-700 hover:underline"
              aria-label="Call Kayaloram Cruise for Poovar Boating"
            >
              +91 81390 31924
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
