import GalleryGrid from "@/components/GalleryGrid";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Poovar Boating Gallery | Island, Backwater & Sunset Boat Photos",
  description:
    "Explore Poovar Island Boating photo gallery featuring backwater cruises, mangrove forest, sunset rides, jetty views and scenic nature of Poovar, Kerala.",
  alternates: {
    canonical: "https://poovarislandboating.com/gallery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public/gallery");

  const images = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "@id": "https://poovarislandboating.com/gallery#gallery",
            "url": "https://poovarislandboating.com/gallery",
            "name": "Poovar Island Boating Photo Gallery",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://poovarislandboating.com/#website"
            },
            "about": {
              "@type": "LocalBusiness",
              "@id": "https://poovarislandboating.com/#localbusiness"
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
                "name": "Gallery",
                "item": "https://poovarislandboating.com/gallery"
              }
            ]
          }),
        }}
      />

      <section
        className="w-full min-h-screen bg-emerald-950 mt-16 px-4"
        aria-label="Poovar island boating photo gallery"
      >
        <GalleryGrid images={images} />
      </section>
    </>
  );
}
