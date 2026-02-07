import GlassCardGrid from "@/components/GlassCardGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poovar Boating Packages | Backwater, Sunset & Island Cruises",
  description:
    "Browse Poovar Island Boating packages including backwater cruises, mangrove boating, sunset rides, golden beach sightseeing with prices and timings.",
  alternates: {
    canonical: "https://poovarislandboating.com/service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://poovarislandboating.com/service#boatingpackages",
            "name": "Poovar Island Boating Packages",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://poovarislandboating.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://poovarislandboating.com/service"
              }
            ]
          }),
        }}
      />

      <main className="w-full min-h-screen">
        <header className="px-4 pt-20 pb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300">
            Poovar Boating Packages & Backwater Cruises
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-white">
            Compare Poovar island boating, mangrove backwater cruises, sunset
            rides and golden beach sightseeing. View prices, timings and book online.
          </p>
        </header>

        <section
          aria-label="Poovar boating packages and pricing"
          className="px-2 md:px-4"
        >
          <GlassCardGrid />
        </section>
      </main>
    </>
  );
}
