import GalleryGrid from "@/components/GalleryGrid";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public/gallery");

  const images = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

  return (
    <section
      className="w-full min-h-screen bg-emerald-950 mt-16 px-4"
      aria-label="Poovar boating and Poovar island boating photo gallery showcasing backwater cruises and nature"
    >
      <GalleryGrid images={images} />
    </section>
  );
}
