import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function HomeEntry() {
  return (
    <header
      className="relative h-screen w-full overflow-hidden"
      aria-label="Poovar Boating and Poovar Island Boating Hero Section"
    >
      {/* LCP Background Image */}
      <Image
        src="/firstImage.webp"
        alt="Poovar boating and Poovar island boating through Kerala backwaters"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(10,25,10,0.72)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-24 text-center">
        <div className="max-w-3xl text-white">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-green-200">
            Nature & Boats
          </span>

          {/* H1 – PRIMARY SEO */}
          <h1 className="text-3xl font-extrabold text-green-300 sm:text-4xl md:text-5xl lg:text-6xl">
            Poovar Boating & Poovar Island Boating
            <br />
            Lap of Mother Nature
          </h1>

          {/* H2 – SECONDARY SEO */}
          <h2 className="mt-2 text-2xl font-bold text-green-200 sm:text-3xl md:text-4xl lg:text-5xl">
            With Kayaloram Cruise Kerala
          </h2>

          <p className="mt-6 mb-10 text-base text-green-100 sm:text-lg md:text-xl">
            Experience Poovar boating, Poovar island boating, and Kerala backwater
            cruises with Kayaloram Cruise near Trivandrum.
          </p>

          {/* CTA */}
          <a
            href="tel:+918139031924"
            className="inline-flex items-center gap-2 rounded-full bg-green-400 px-8 py-3 font-semibold text-green-900 shadow-xl transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Call now to book Poovar boating and Kerala backwater cruise"
            title="Call Kayaloram Cruise for Poovar Boating"
          >
            Call Now <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
