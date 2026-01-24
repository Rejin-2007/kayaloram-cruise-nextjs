import fs from "fs";
import path from "path";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { FaImages } from "react-icons/fa";

/* ---------- Helper: SEO-friendly Alt Text ---------- */
function getAltText(filename: string, idx: number) {
  const name = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `Poovar boating and Poovar island boating experience – ${
    name || `Gallery image ${idx + 1}`
  }`;
}

/* ---------- Page Component (Server Component) ---------- */
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
      <LazyMotion features={domAnimation}>
        {/* Heading */}
        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center flex items-center justify-center gap-3"
        >
          <FaImages className="text-emerald-400" aria-hidden="true" />
          Poovar Boating & Poovar Island Boating Gallery
        </m.h1>

        {/* Gallery Grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((img, idx) => (
            <m.figure
              key={img}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-xl
                bg-emerald-50/40 border border-emerald-200
                transition-all duration-300 hover:scale-[1.03]"
              aria-label={`Poovar boating gallery image ${idx + 1}`}
            >
              <Image
                src={`/gallery/${img}`}
                alt={getAltText(img, idx)}
                width={600}
                height={450}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="w-full aspect-4/3 object-cover"
                loading="lazy"
              />

              <figcaption className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2 text-center opacity-0 hover:opacity-100 transition">
                {getAltText(img, idx)}
              </figcaption>
            </m.figure>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}
