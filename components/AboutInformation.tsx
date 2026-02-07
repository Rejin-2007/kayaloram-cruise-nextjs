'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';

const features = [
  'Experienced local captains for safe Poovar boating and backwater cruises',
  'Eco-friendly Poovar island boating through mangroves and golden beach',
  'Guided Poovar boating tours for sightseeing and photography',
  'Flexible Poovar boating packages including sunset cruises and custom trips',
];

export default function AboutInformation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "@id": "https://poovarislandboating.com/#attraction",
            "name": "Poovar Island Boating",
            "description":
              "Poovar Island Boating offers backwater cruises, mangrove boating, sunset rides and island sightseeing in Poovar, Kerala.",
            "url": "https://poovarislandboating.com/",
            "telephone": "+91-8139031924",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Poovar",
              "addressRegion": "Kerala",
              "postalCode": "695525",
              "addressCountry": "IN"
            },
            "image": "https://poovarislandboating.com/aboutimg.webp"
          }),
        }}
      />

      <section
        className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-emerald-950 px-4 py-12 md:flex-row"
        aria-label="About Poovar Island Boating"
      >
        <div className="relative z-10 mb-8 flex w-full items-center justify-center md:mb-0 md:w-1/2">
          <figure className="overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-xl backdrop-blur-xl">
            <Image
              src="/aboutimg.webp"
              alt="Poovar island boating through Kerala backwaters and mangroves"
              width={380}
              height={280}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 380px"
              className="w-full object-cover"
            />
            <figcaption className="sr-only">
              Poovar Island Boating backwater cruise in Kerala
            </figcaption>
          </figure>
        </div>

        <div className="relative z-10 w-full rounded-3xl border border-emerald-200/70 bg-emerald-100/60 p-6 text-center shadow-2xl backdrop-blur-md md:p-12 md:text-left">
          <header>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Since 1999
            </span>
            <h2 className="mb-4 text-2xl font-extrabold text-emerald-900 sm:text-3xl md:text-4xl">
              Poovar Boating & Island Backwater Cruises
            </h2>
          </header>

          <p className="mb-6 text-sm text-gray-700 sm:text-base md:text-lg">
            Experience authentic Poovar boating with Kayaloram Cruise. Enjoy peaceful
            backwater cruises through mangrove forests, estuaries and Poovar golden beach
            with trusted local operators.
          </p>

          <ul className="mb-8 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 font-semibold text-emerald-800"
              >
                <FaCheckCircle className="shrink-0 text-lime-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mb-6 flex justify-center gap-4 md:justify-start">
            <Link
              href="/service"
              className="rounded-lg bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-emerald-800"
            >
              View Packages
            </Link>
            <Link
              href="/reservation"
              className="rounded-lg border border-emerald-700 px-6 py-3 font-bold text-emerald-800 hover:bg-emerald-200"
            >
              Book Now
            </Link>
          </div>

          <div className="flex items-center gap-4 border-t border-emerald-200 pt-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200">
              <FaPhoneAlt className="text-emerald-800" />
            </span>
            <div>
              <p className="text-sm text-gray-600">
                Call for Poovar Boating Booking
              </p>
              <a
                href="tel:+918139031924"
                className="text-xl font-bold text-emerald-700 hover:underline"
              >
                +91 81390 31924
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
