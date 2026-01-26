import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

/* ---------- Cards Data ---------- */
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
      className="min-h-screen flex items-center justify-center bg-emerald-950 py-12"
      aria-label="Poovar boating and Poovar island boating packages"
    >
      <div className="w-full max-w-6xl px-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <article
            key={i}
            className="relative flex flex-col bg-white/10 border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur transition hover:scale-[1.03]"
          >
            <div className="relative h-56 w-full">
              <Image
                src={c.img}
                alt={`${c.title} Poovar boating package`}
                fill
                priority={i < 2}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-white text-xl font-bold">{c.title}</h3>

              <a
                href={`https://wa.me/918139031924?text=Interested%20in%20${encodeURIComponent(
                  c.title
                )}%20Poovar%20boating`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-300 font-semibold animate-pulse"
                aria-label={`WhatsApp enquiry for ${c.title} Poovar boating`}
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
