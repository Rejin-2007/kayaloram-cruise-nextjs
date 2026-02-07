"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { FaImages } from "react-icons/fa";

function getAltText(filename: string, idx: number) {
  const name = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `Poovar boating and Poovar island boating gallery image – ${name || idx + 1}`;
}

export default function GalleryGrid({ images }: { images: string[] }) {
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Poovar Boating Gallery",
    description:
      "Official Poovar boating and Poovar island boating photo gallery showcasing backwater cruises, sunset rides, jetty views, mangroves and customer experiences.",
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `https://poovarislandboating.com/gallery/${img}`,
      caption: getAltText(img, 0),
    })),
  };

  return (
    <LazyMotion features={domAnimation}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <FaImages className="text-emerald-400" aria-hidden="true" />
          Poovar Boating & Poovar Island Boating Gallery
        </h1>
        <p className="sr-only">
          Explore real photos of Poovar boating services including backwater
          cruises, sunset boat rides, jetty views, mangrove forests and customer
          experiences in Poovar Kerala.
        </p>
      </header>

      <section
        aria-label="Poovar boating photo gallery"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {images.map((img, idx) => (
          <m.figure
            key={img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-emerald-50/40 border border-emerald-200"
          >
            <Link href="/reservation">
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
            </Link>

            <figcaption className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs p-2 text-center">
              {getAltText(img, idx)}
            </figcaption>
          </m.figure>
        ))}
      </section>

      <nav aria-label="Gallery internal links" className="sr-only">
        <Link href="/services">Poovar Boating Services</Link>
        <Link href="/reservation">Poovar Boating Booking</Link>
        <Link href="/contact">Poovar Boating Contact</Link>
      </nav>
    </LazyMotion>
  );
}
