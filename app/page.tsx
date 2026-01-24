import AboutInformation from "@/components/AboutInformation";
import Reviews from "@/components/Reviews";
import Enquiry from "@/components/Enquiry";
import HomeEntry from "@/components/HomeEntry";
import ExplorationViews from "@/components/ExplorationViews";
import GlassCardGrid from "@/components/GlassCardGrid";
import FAQ from "@/components/FAQ";

/* ---------- Home SEO Metadata ---------- */
export const metadata = {
  title: "Poovar Boating | Poovar Island Boating | Kayaloram Resort Kerala",
  description:
    "Poovar boating and Poovar island boating at Kayaloram Resort Kerala. Book Kerala backwater tours, golden beach cruises, deluxe boating packages, and enjoy guest reviews, FAQs, and easy booking enquiry.",
  keywords: [
    "Poovar boating",
    "Poovar island boating",
    "Kayaloram Resort Poovar",
    "Kerala backwater cruise",
    "Golden beach Poovar",
    "Poovar boating packages",
    "Poovar boating enquiry",
    "Poovar boating reviews",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com",
  },
};

export default function HomePage() {
  return (
    <main className="relative">
      <HomeEntry />
      <AboutInformation />
      <ExplorationViews />
      <GlassCardGrid />
      <FAQ />
      <Reviews />
      <Enquiry />
    </main>
  );
}
