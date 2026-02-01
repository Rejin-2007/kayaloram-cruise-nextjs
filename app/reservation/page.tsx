import ReservationClient from "../../components/ReservationClient";
import type { Metadata } from "next";

/* ---------- Reservation Page SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Book Poovar Boating | Price, Timings & Island Boating Reservation",
  description:
    "Book Poovar boating and Poovar island boating online. Check Poovar boating price, timings, mangrove backwater cruise options, golden beach sightseeing and reserve your boat ride instantly.",
  keywords: [
    "poovar boating booking",
    "poovar boating price",
    "poovar boating timings",
    "poovar island boating",
    "poovar boat ride",
    "poovar backwaters",
    "poovar mangrove boating",
    "poovar boating ticket price",
    "poovar boating charges",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/reservation",
  },
};

/* ---------- Reservation Page ---------- */
export default function ReservationPage() {
  return (
    <main className="w-full min-h-screen">
      {/* PAGE HEADER */}
      <header className="px-4 pt-20 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300">
          Book Poovar Boating & Poovar Island Boating
        </h1>
        <p className="mt-3 text-sm md:text-base text-white">
          Check Poovar boating price, timings, available packages and reserve your
          backwater boat ride easily.
        </p>
      </header>

      {/* BOOKING FORM */}
      <section aria-label="Poovar boating reservation and booking form">
        <ReservationClient />
      </section>
    </main>
  );
}
