import ReservationClient from "../../components/ReservationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Poovar Boating | Island & Backwater Boat Reservation",
  description:
    "Reserve Poovar Island Boating online. View prices, timings, packages, mangrove cruise, sunset ride and book your backwater boat tour instantly.",
  alternates: {
    canonical: "https://poovarislandboating.com/reservation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReservationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://poovarislandboating.com/reservation#reservation",
            "url": "https://poovarislandboating.com/reservation",
            "name": "Poovar Boating Reservation",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://poovarislandboating.com/#website"
            },
            "about": {
              "@type": "Service",
              "@id": "https://poovarislandboating.com/#boattour",
              "name": "Poovar Boat Tour & Backwater Cruise",
              "provider": {
                "@type": "LocalBusiness",
                "@id": "https://poovarislandboating.com/#localbusiness"
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
                "name": "Booking",
                "item": "https://poovarislandboating.com/reservation"
              }
            ]
          }),
        }}
      />

      <main className="w-full min-h-screen">
        <header className="px-4 pt-20 pb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-300">
            Book Poovar Boating & Poovar Island Boating
          </h1>
          <p className="mt-3 text-sm md:text-base text-white">
            View prices, timings, packages and reserve your Poovar backwater boat ride.
          </p>
        </header>

        <section aria-label="Poovar boating reservation form">
          <ReservationClient />
        </section>
      </main>
    </>
  );
}
