import GlassCardGrid from "@/components/GlassCardGrid";
import type { Metadata } from "next";

/* ---------- Service Page SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Poovar Boating Packages | Price, Timings & Backwater Cruises",
  description:
    "Explore Poovar boating packages including sunrise boating, sunset cruise, mangrove backwater cruise, golden beach boating, deluxe and premium boat rides. Check Poovar boating price and timings.",
  keywords: [
    "poovar boating packages",
    "poovar boating price",
    "poovar boating timings",
    "poovar island boating",
    "poovar backwaters",
    "poovar mangrove boating",
    "poovar boat ride",
    "poovar boating charges",
    "poovar boating ticket price",
    "poovar back water cruise",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/service",
  },
};

/* ---------- Service Page ---------- */
export default function ServicePage() {
  return (
    <main className="w-full min-h-screen">
      {/* PAGE HEADER */}
      <header className="px-4 pt-20 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300">
          Poovar Boating Packages & Backwater Cruises
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-white">
          Choose from Poovar island boating, mangrove backwater cruise, golden
          beach sightseeing, sunrise and sunset boat rides. View prices,
          timings and book your Poovar boating experience.
        </p>
      </header>

      {/* PACKAGE GRID */}
      <section
        aria-label="Poovar boating packages, prices and booking options"
        className="px-2 md:px-4"
      >
        <GlassCardGrid />
      </section>
    </main>
  );
}
