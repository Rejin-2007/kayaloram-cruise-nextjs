import AboutInformation from "@/components/AboutInformation";
import Enquiry from "@/components/Enquiry";
import Reviews from "@/components/Reviews";
import type { Metadata } from "next";

/* ---------- About Page SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "About Kayaloram Resort | Poovar Boating & Poovar Island Boating",
  description:
    "Know more about Kayaloram Resort and our trusted Poovar boating and Poovar island boating services. Explore Kerala backwater cruises, mangrove boating, golden beach sightseeing, safety standards, and booking support.",
  keywords: [
    "about kayaloram resort",
    "poovar boating service",
    "poovar island boating",
    "poovar backwaters",
    "poovar sightseeing",
    "poovar boat service",
    "poovar back water cruise",
    "poovar mangrove boating",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/about",
  },
};

/* ---------- About Page ---------- */
export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* ABOUT INFORMATION */}
      <section aria-label="About Kayaloram Resort and Poovar boating service">
        <AboutInformation />
      </section>

      {/* CUSTOMER REVIEWS */}
      <section aria-label="Customer reviews for Poovar boating service">
        <Reviews />
      </section>

      {/* ENQUIRY / CTA */}
      <section aria-label="Poovar boating enquiry and contact">
        <Enquiry />
      </section>
    </main>
  );
}
