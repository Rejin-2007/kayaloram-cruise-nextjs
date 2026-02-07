import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomeEntry() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://poovarislandboating.com/#localbusiness",
    name: "Poovar Island Boating",
    url: "https://poovarislandboating.com",
    telephone: "+918139031924",
    image: "https://poovarislandboating.com/firstImage.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Club Mahindra Resort Road",
      addressLocality: "Poovar",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 06:00-18:30",
    sameAs: [
      "https://www.instagram.com/poovar.boating",
      "https://www.facebook.com/share/1YPM77byhM/",
      "https://www.youtube.com/@rajeshmathias6014",
    ],
  };

  return (
    <header
      className="relative h-screen w-full overflow-hidden"
      aria-label="Poovar Boating and Poovar Island Boating hero section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Image
        src="/firstImage.webp"
        alt="Poovar boating through Kerala backwaters at Poovar island"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[rgba(10,25,10,0.72)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-24 text-center">
        <div className="max-w-3xl text-white">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-green-200">
            Kerala Backwater Boat Tours
          </span>

          <h1 className="text-3xl font-extrabold text-green-300 sm:text-4xl md:text-5xl lg:text-6xl">
            Poovar Boating & Poovar Island Boating
          </h1>

          <h2 className="mt-3 text-xl font-bold text-green-200 sm:text-2xl md:text-3xl">
            Authentic Backwater Cruises by Kayaloram
          </h2>

          <p className="mt-6 mb-10 text-base text-green-100 sm:text-lg md:text-xl">
            Book trusted Poovar boating experiences including sunrise, sunset,
            and private Kerala backwater cruises near Trivandrum.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+918139031924"
              aria-label="Call to book Poovar boating"
              className="inline-flex items-center gap-2 rounded-full bg-green-400 px-8 py-3 font-semibold text-green-900 shadow-xl hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Call Now <FaArrowRight aria-hidden="true" />
            </a>

            <Link
              href="/services"
              aria-label="View Poovar boating services"
              className="inline-flex items-center gap-2 rounded-full border border-green-300 px-8 py-3 font-semibold text-green-200 hover:bg-green-300/10"
            >
              View Packages
            </Link>
          </div>

          <nav aria-label="Primary internal links" className="sr-only">
            <Link href="/services">Poovar Boating Services</Link>
            <Link href="/reservation">Poovar Boating Booking</Link>
            <Link href="/contact">Poovar Boating Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
