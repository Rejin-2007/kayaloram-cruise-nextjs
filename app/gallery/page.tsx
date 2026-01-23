import Image from "next/image";
import type { Metadata } from "next";
import { getGalleryImages, getAltText } from "../../lib/gallery";

/* ---------- SEO Metadata ---------- */
export const metadata: Metadata = {
  title: "Poovar Boating Gallery | Poovar Island Boating Photos | Kayaloram Resort",
  description:
    "Browse photos of Poovar boating, Poovar island boating, Kerala backwater tours, and Kayaloram Resort.",
  keywords: [
    "Poovar boating",
    "Poovar island boating",
    "Kayaloram Resort",
    "Kerala backwater tour",
    "boating gallery",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/gallery",
  },
};

/* ---------- Gallery Page ---------- */
export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main
      className="w-full min-h-screen bg-emerald-950 mt-16 px-4"
      aria-label="Poovar boating and Poovar island boating photo gallery"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
        Poovar Boating & Poovar Island Boating Gallery
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-emerald-100">
          Gallery images will be updated soon.
        </p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <figure
              key={img}
              className="relative rounded-3xl overflow-hidden shadow-xl
                bg-emerald-50/40 border border-emerald-200
                transition-all duration-300 hover:scale-[1.03]"
            >
              <Image
                src={`/gallery/${img}`}
                alt={getAltText(img, idx)}
                width={600}
                height={450}
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="w-full aspect-4/3 object-cover"
              />

              <figcaption className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2 text-center opacity-0 hover:opacity-100 transition">
                {getAltText(img, idx)}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </main>
  );
}
