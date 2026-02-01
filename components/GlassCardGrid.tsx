import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

/* ---------- Poovar Boating Packages ---------- */
const cards = [
  { title: "Sunrise Cruise", img: "/sunrise.webp" },
  { title: "Sunset Cruise", img: "/sunset.webp" },
  { title: "Lunch Cruise", img: "/lunch.webp" },
  { title: "Standard Cruise", img: "/standard.webp" },
  { title: "Deluxe Cruise", img: "/Deluxe.webp" },
  { title: "Premium Cruise", img: "/Premium.webp" },
];

export default function GlassCardGrid() {
  return (
    <section
      className="flex min-h-screen items-center justify-center bg-emerald-950 py-14"
      aria-label="Poovar boating packages and Poovar island boating services"
    >
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl backdrop-blur transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={card.img}
                alt={`${card.title} – Poovar boating and Kerala backwater cruise`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-bold text-white">
                {card.title}
              </h3>

              <a
                href={`https://wa.me/918139031924?text=Interested%20in%20${encodeURIComponent(
                  card.title
                )}%20Poovar%20boating`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`WhatsApp enquiry for ${card.title} Poovar boating package`}
                className="inline-flex items-center gap-2 font-semibold text-green-300 transition-colors hover:text-green-400"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Enquiry
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
