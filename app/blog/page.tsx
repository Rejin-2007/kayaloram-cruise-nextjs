import Blog from "@/components/Blog";
import type { Metadata } from "next";

/* ---------- Blog Page SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Poovar Boating Blog | Price, Timings, Tips & Travel Guides",
  description:
    "Read the Poovar Boating Blog for detailed guides on Poovar boating price, timings, sightseeing, backwater cruises, mangrove boating, island activities, and travel tips.",
  keywords: [
    "poovar boating blog",
    "poovar boating price",
    "poovar boating timings",
    "poovar sightseeing",
    "poovar island boating",
    "poovar backwaters",
    "poovar activities",
    "poovar back water cruise",
    "kerala backwater boating",
    "poovar travel guide",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/blog",
  },
};

/* ---------- Blog Page ---------- */
export default function BlogPage() {
  return (
    <main
      className="w-full min-h-screen"
      aria-label="Poovar boating blog, travel guides and boating information"
    >
      <section aria-label="Poovar boating articles and guides">
        <Blog />
      </section>
    </main>
  );
}
