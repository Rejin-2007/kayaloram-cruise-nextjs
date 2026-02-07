import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const cards = [
  { title: "Sunrise Cruise", img: "/sunrise.webp", slug: "sunrise-cruise" },
  { title: "Sunset Cruise", img: "/sunset.webp", slug: "sunset-cruise" },
  { title: "Lunch Cruise", img: "/lunch.webp", slug: "lunch-cruise" },
  { title: "Standard Cruise", img: "/standard.webp", slug: "standard-cruise" },
  { title: "Deluxe Cruise", img: "/deluxe.webp", slug: "deluxe-cruise" },
  { title: "Premium Cruise", img: "/premium.webp", slug: "premium-cruise" },
];

export default function GlassCardGrid() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: cards.map((card, index) => ({
      "@type": "Service",
      position: index + 1,
      name: `${card.title} Poovar Boating`,
      areaServed: "Poovar, Kerala, India",
      provider: {
        "@type": "LocalBusiness",
        name: "Poovar Island Boating",
        telephone: "+918139031924",
        url: "https://poovarislandboating.com",
      },
      image: `https://poovarislandboating.com${card.img}`,
      url: `https://poovarislandboating.com/services/${card.slug}`,
    })),
  };

  return (
    <section
      aria-label="Poovar boating packages and booking options"
      className="flex items-center justify-center bg-emerald-950 py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={card.title}
            itemScope
            itemType="https://schema.org/Service"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl backdrop-blur transition-transform duration-300 hover:scale-[1.03]"
          >
            <Link href="/reservation" itemProp="url">
              <div className="relative h-56 w-full">
                <Image
                  src={card.img}
                  alt={`${card.title} Poovar boating and Poovar island backwater cruise`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                  itemProp="image"
                />
              </div>
            </Link>

            <div className="flex flex-col gap-4 p-6">
              <h2
                itemProp="name"
                className="text-xl font-bold text-white"
              >
                {card.title}
              </h2>

              <Link
                href={`https://wa.me/918139031924?text=Interested%20in%20${encodeURIComponent(
                  card.title
                )}%20Poovar%20boating`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`WhatsApp booking enquiry for ${card.title} Poovar boating`}
                className="inline-flex items-center gap-2 font-semibold text-green-300 hover:text-green-400"
              >
                <FaWhatsapp className="text-xl" />
                Book via WhatsApp
              </Link>
            </div>
          </article>
        ))}
      </div>

      <nav aria-label="Poovar boating internal links" className="sr-only">
        <Link href="/services">Poovar Boating Services</Link>
        <Link href="/reservation">Poovar Boating Booking</Link>
        <Link href="/contact">Poovar Boating Contact</Link>
      </nav>
    </section>
  );
}
