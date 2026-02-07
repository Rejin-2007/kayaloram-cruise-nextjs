import Blog from "@/components/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poovar Boating Blog | Prices, Timings & Travel Guides",
  description:
    "Official Poovar Boating Blog with guides on boating prices, timings, backwater cruises, mangrove boating, island sightseeing and Kerala travel tips.",
  alternates: {
    canonical: "https://poovarislandboating.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://poovarislandboating.com/blog#blog",
            "url": "https://poovarislandboating.com/blog",
            "name": "Poovar Boating Blog",
            "publisher": {
              "@type": "Organization",
              "name": "Poovar Island Boating",
              "url": "https://poovarislandboating.com/"
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
                "name": "Blog",
                "item": "https://poovarislandboating.com/blog"
              }
            ]
          }),
        }}
      />

      <main
        className="w-full min-h-screen"
        aria-label="Poovar boating blog articles and travel guides"
      >
        <section aria-label="Poovar boating blog posts">
          <Blog />
        </section>
      </main>
    </>
  );
}
