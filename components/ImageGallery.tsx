import fs from "fs";
import path from "path";
import Image from "next/image";

/* ---------- SEO Metadata ---------- */
export const metadata = {
  title: "Poovar Boating Gallery | Poovar Island Boating Photos | Kayaloram Resort",
  description:
    "Browse photos of Poovar boating, Poovar island boating, Kerala backwater tours, and Kayaloram Resort.",
  keywords:
    "Poovar boating, Poovar island boating, Kayaloram Resort, Kerala backwater tour, boating gallery",
  alternates: {
    canonical: "https://www.poovarislandboating.com/gallery",
  },
};

/* ---------- Helper: SEO Alt Text ---------- */
function getAltText(filename: string, idx: number) {
  const name = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `Poovar boating, Poovar island boating, Kayaloram Resort photo: ${
    name || `Gallery image ${idx + 1}`
  }`;
}

/* ---------- Page Component ---------- */
export default function GalleryPage() {
  // Read all images from /public/gallery
  const galleryDir = path.join(process.cwd(), "public/gallery");

  const images = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

  return (
    <section
      className="w-full min-h-screen bg-emerald-950 mt-16 px-4"
      aria-label="Poovar Boating and Poovar Island Boating photo gallery"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
        Poovar Boating & Poovar Island Boating Gallery
      </h1>

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
              className="w-full aspect-4/3 object-cover"
              loading="lazy"
            />

            <figcaption className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2 text-center opacity-0 hover:opacity-100 transition">
              {getAltText(img, idx)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
