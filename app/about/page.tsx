import AboutInformation from "@/components/AboutInformation";
import ReservationClient from "@/components/ReservationClient";
import Reviews from "@/components/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Poovar Island Boating | Kayaloram Boat Tours",
  description:
    "Learn about Poovar Island Boating by Kayaloram. Trusted boat tour agency offering backwater cruises, mangrove boating, sunset rides and island sightseeing in Poovar, Kerala.",
  alternates: {
    canonical: "https://poovarislandboating.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://poovarislandboating.com/about#aboutpage",
            "url": "https://poovarislandboating.com/about",
            "name": "About Poovar Island Boating",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://poovarislandboating.com/#website"
            },
            "about": {
              "@type": "LocalBusiness",
              "@id": "https://poovarislandboating.com/#localbusiness",
              "name": "Poovar Island Boating"
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
                "name": "About",
                "item": "https://poovarislandboating.com/about"
              }
            ]
          }),
        }}
      />

      <main className="w-full overflow-hidden">
        <section aria-label="About Poovar Island Boating">
          <AboutInformation />
        </section>

        <section aria-label="Poovar boating customer reviews">
          <Reviews />
        </section>

        <section aria-label="Poovar boating enquiry and contact">
          <ReservationClient />
        </section>
      </main>
    </>
  );
}
