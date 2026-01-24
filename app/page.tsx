import AboutInformation from "../components/AboutInformation";
import Reviews from "../components/Reviews";
import Enquiry from "../components/Enquiry";
import HomeEntry from "@/components/HomeEntry";
import ExplorationViews from "@/components/ExplorationViews";
import GlassCardGrid from "./service/page";
import FAQ from "@/components/FAQ";

/* ---------- SEO Metadata ---------- */
export const metadata = {
  title: "Poovar Boating | Poovar Island Boating | Kayaloram Resort Kerala",
  description:
    "Poovar boating and Poovar island boating at Kayaloram Resort Kerala. Book Kerala backwater tours, golden beach cruises, deluxe boating packages, and enjoy guest reviews, gallery, FAQs, and easy booking enquiry.",
  keywords:
    "Poovar boating, Poovar island boating, Kayaloram Resort, Kerala backwater tour, golden beach cruise, boating packages, boating enquiry, boating reviews, boating gallery, FAQ",
  alternates: {
    canonical: "https://www.poovarislandboating.com",
  },
};

/* ---------- Home Page Component ---------- */
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
