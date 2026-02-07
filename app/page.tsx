import AboutInformation from "@/components/AboutInformation";
import Reviews from "@/components/Reviews";
import HomeEntry from "@/components/HomeEntry";
import ExplorationViews from "@/components/ExplorationViews";
import GlassCardGrid from "@/components/GlassCardGrid";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";
import ReservationClient from "@/components/ReservationClient";

export const metadata: Metadata = {
  title: "Poovar Boating & Poovar Island Boating | Price, Timings & Booking",
  description:
    "Poovar boating and Poovar island boating in Kerala. View boating prices, timings, packages, mangrove cruise, sunset ride and book your boat tour online.",
  alternates: {
    canonical: "https://poovarislandboating.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://poovarislandboating.com/#homepage",
            "url": "https://poovarislandboating.com/",
            "name": "Poovar Island Boating",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://poovarislandboating.com/#website"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://poovarislandboating.com/firstImage.webp"
            }
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://poovarislandboating.com/#boattour",
            "name": "Poovar Boat Tour & Backwater Cruise",
            "serviceType": "Boat Tour Agency",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://poovarislandboating.com/#localbusiness"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Poovar, Kerala"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "Place",
                "name": "Poovar Island Jetty"
              }
            }
          }),
        }}
      />

      <main className="relative w-full overflow-hidden">
        <section aria-label="Poovar boating booking">
          <HomeEntry />
        </section>

        <section aria-label="About Poovar island boating">
          <AboutInformation />
        </section>

        <section aria-label="Poovar backwater sightseeing views">
          <ExplorationViews />
        </section>

        <section aria-label="Poovar boating packages and pricing">
          <GlassCardGrid />
        </section>

        <section aria-label="Poovar boating frequently asked questions">
          <FAQ />
        </section>

        <section aria-label="Poovar boating customer reviews">
          <Reviews />
        </section>

        <section aria-label="Poovar boating reservation form">
          <ReservationClient />
        </section>
      </main>
    </>
  );
}
