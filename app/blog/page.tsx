import Blog from "@/components/Blog";
import type { Metadata } from "next";

/* ---------- SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Poovar Boating Blog | Poovar Island Boating News, Tips & Stories | Kayaloram Resort",
  description:
    "Explore the Poovar Boating Blog for the latest news, travel tips, stories, and guides on Poovar island boating, Kerala backwater cruises, golden beach boating, and Kayaloram Resort experiences.",
  keywords: [
    "Poovar boating blog",
    "Poovar island boating blog",
    "Kayaloram Resort blog",
    "Poovar boating news",
    "Poovar boating tips",
    "Kerala backwater boating blog",
    "Poovar golden beach cruise",
    "Poovar river cruise",
    "Poovar tourism blog",
    "Trivandrum backwater boating",
    "Poovar boat service updates",
    "Kerala boating experiences",
    "Poovar travel guide",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/blog",
  },
};

/* ---------- Blog Page ---------- */
export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Blog />
    </main>
  );
}
