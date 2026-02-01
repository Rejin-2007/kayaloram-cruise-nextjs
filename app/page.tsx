import AboutInformation from "@/components/AboutInformation";
import Reviews from "@/components/Reviews";
import Enquiry from "@/components/Enquiry";
import HomeEntry from "@/components/HomeEntry";
import ExplorationViews from "@/components/ExplorationViews";
import GlassCardGrid from "@/components/GlassCardGrid";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

/* ---------- Home SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Poovar Boating & Poovar Island Boating | Price, Timings & Booking",
  description:
    "Poovar boating and Poovar island boating at Kayaloram Resort, Kerala. Check Poovar boating price, timings, packages, mangrove boating, backwater cruise, sightseeing and book your boat ride easily.",
  keywords: [
    "poovar boating",
    "poovar island boating",
    "poovar boating price",
    "poovar boating timings",
    "poovar backwaters",
    "poovar sightseeing",
    "poovar boat ride",
    "poovar mangrove boating",
    "poovar boating charges",
    "poovar boating ticket price",
    "poovar back water cruise",
    "activities in poovar",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com",
  },
};

/* ---------- Home Page ---------- */
export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* HERO / LCP SECTION */}
      <section aria-label="Poovar boating and Poovar island boating booking">
        <HomeEntry />
      </section>

      {/* ABOUT */}
      <section aria-label="About Poovar boating service">
        <AboutInformation />
      </section>

      {/* EXPERIENCE / VIEWS */}
      <section aria-label="Poovar sightseeing and backwater views">
        <ExplorationViews />
      </section>

      {/* PACKAGES */}
      <section aria-label="Poovar boating packages and prices">
        <GlassCardGrid />
      </section>

      {/* FAQ */}
      <section aria-label="Poovar boating timings, price and FAQs">
        <FAQ />
      </section>

      {/* REVIEWS */}
      <section aria-label="Poovar boating customer reviews">
        <Reviews />
      </section>

      {/* ENQUIRY / CTA */}
      <section aria-label="Poovar boating enquiry and booking">
        <Enquiry />
      </section>
    </main>
  );
}
