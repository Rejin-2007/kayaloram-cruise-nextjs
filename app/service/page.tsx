import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

/* ---------- Cards Data ---------- */
const cards = [
  { title: "Sunrise Cruise", img: "/sunrise.jpeg", link: "#" },
  { title: "Sunset Cruise", img: "/sunset.jpeg", link: "#" },
  { title: "Lunch Cruise", img: "/lunch.jpeg", link: "#" },
  { title: "Standard Cruise", img: "/standard.jpg", link: "#" },
  { title: "Deluxe Cruise", img: "/Deluxe.jpeg", link: "#" },
  { title: "Premium Cruise", img: "/Premium.jpg", link: "#" },
];

/* ---------- Page Metadata for SEO ---------- */
export const metadata = {
  title:
    "Poovar Boating Packages | Poovar Island Boating | Kayaloram Cruise Options",
  description:
    "Choose Poovar boating and Poovar island boating packages: sunrise cruise, sunset cruise, lunch cruise, deluxe cruise, premium cruise, and standard cruise. Book Kerala backwater tours and golden beach cruises.",
  keywords:
    "Poovar boating, Poovar island boating, boat packages, cruise packages, Kerala backwater tour, Poovar boating booking, sunrise cruise, sunset cruise, deluxe cruise, premium cruise, lunch cruise, standard cruise, golden beach cruise",
  alternates: {
    canonical: "https://www.poovarislandboating.com/packages",
  },
};

/* ---------- GlassCardGrid Component ---------- */
export default function GlassCardGrid() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-emerald-950 py-12 relative"
      aria-label="Poovar Boating Package Options - Kayaloram Cruise"
    >
      <div className="w-full max-w-6xl px-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <article
            key={i}
            className="relative flex flex-col bg-linear-to-br from-white/10 via-white/10 to-cyan-300/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-[10px] transition hover:scale-[1.03] hover:shadow-2xl group"
            aria-labelledby={`card-title-${i}`}
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={c.img}
                alt={`${c.title} Poovar boating package - Poovar island boating`}
                fill
                className="object-cover brightness-[0.92] saturate-[1.1] contrast-[1.08]"
                priority={i < 2} // Preload first 2 images for performance
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-6">
              <h3
                id={`card-title-${i}`}
                className="text-white text-2xl font-bold mb-2 drop-shadow-md"
              >
                {c.title}
              </h3>
              <div className="mt-auto flex flex-col gap-3">
                {/* Call Enquiry */}
                <a
                  href="tel:+918139031924"
                  className="inline-flex items-center gap-2 w-max px-6 py-2 rounded-full border border-white/30 bg-white/10 text-white font-semibold tracking-wide shadow hover:bg-cyan-400/20 hover:border-cyan-300/80 hover:text-cyan-100 transition focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  aria-label={`Call for ${c.title} Poovar boating package enquiry`}
                >
                  ENQUIRY NOW
                </a>

                {/* WhatsApp Enquiry */}
                <a
                  href={`https://wa.me/918139031924?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                    c.title
                  )}%20Poovar%20boating%20package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-max px-6 py-2 rounded-full border border-green-400/30 bg-green-700/10 text-green-100 font-semibold tracking-wide shadow hover:bg-green-500/20 hover:border-green-300/80 hover:text-green-100 transition focus:outline-none focus:ring-2 focus:ring-green-300"
                  aria-label={`WhatsApp for ${c.title} Poovar boating package enquiry`}
                >
                  <FaWhatsapp className="text-green-400" /> WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
