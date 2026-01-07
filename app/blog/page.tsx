import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Poovar Boating Blog | Poovar Island Boating News & Stories | Kayaloram Resort",
  description:
    "Read stories, tips, and news about Poovar boating, Poovar island boating, and Kayaloram Resort. Discover Kerala backwater tours, golden beach cruises, and boating experiences.",
  keywords: [
    "Poovar boating blog",
    "Poovar island boating",
    "Kayaloram Resort",
    "Kerala boating news",
    "boating stories",
    "Kerala backwater tour",
    "golden beach cruise",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div>
      <Blog />
    </div>
  );
}
