import Image from "next/image";

const features = [
  "Expert local captains for Poovar boating and backwater tours",
  "Eco-friendly houseboat rides through Poovar island, golden beach, and mangroves",
  "Guided Poovar island boating tours for scenic photography and nature lovers",
  "Flexible experiences: Poovar backwater cruises, houseboats, and boating packages",
];

export default function AboutInformation() {
  return (
    <article
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-emerald-950 px-4 py-12 md:flex-row"
      aria-label="About Poovar Boating and Poovar Island Boating"
    >
      {/* Background Effects */}
      <div className="absolute -left-25 -bottom-30 h-100 w-100 rounded-full bg-emerald-400/50 blur-[90px]" />
      <div className="absolute -right-40 -top-30 h-[350px] w-[370px] rounded-full bg-green-200/50 blur-2xl" />

      {/* Image */}
      <div className="relative z-10 mb-8 flex w-full items-center justify-center md:mb-0 md:w-1/2">
        <figure className="overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-xl backdrop-blur-xl">
          <Image
            src="/aboutimg.jpeg"
            alt="Poovar boating, Poovar island boating, backwater cruise and mangrove forest in Kerala"
            title="Poovar Boating and Poovar Island Boating"
            width={380}
            height={280}
            className="h-70 w-full object-cover transition-transform duration-300 hover:scale-105 md:w-95"
          />
          <figcaption className="sr-only">
            Eco-friendly Poovar boating, island boating, houseboats and golden beach cruises
          </figcaption>
        </figure>
      </div>

      {/* Content */}
      <section className="relative z-10 w-full rounded-3xl border border-emerald-200/70 bg-emerald-100/60 p-6 text-center shadow-2xl backdrop-blur-md md:p-12 md:text-left">
        <header>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Since 1999
          </span>

          <h1 className="mb-4 text-2xl font-extrabold text-emerald-900 sm:text-3xl md:text-4xl">
            Poovar Boating & Poovar Island Boating – Backwater Cruises in Kerala
          </h1>
        </header>

        <h2 className="mb-4 text-xl font-bold text-emerald-800 sm:text-2xl md:text-3xl">
          Explore Poovar Backwaters, Golden Beach & Mangrove Forest
        </h2>

        <p className="mb-6 text-sm text-gray-700 sm:text-base md:text-lg">
          Discover the beauty of Kerala with Poovar boating and Poovar island boating.
          Enjoy eco-friendly backwater cruises, golden beach rides, and serene mangrove
          forest tours led by expert local captains. Since 1999, Kayaloram Cruise has
          delivered safe, affordable, and unforgettable boating experiences for families,
          photographers, and nature lovers.
        </p>

        <ul
          className="mb-8 space-y-3"
          aria-label="Key features of Poovar Boating services"
        >
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 font-semibold text-emerald-800">
              <span className="text-lime-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-4 border-t border-emerald-200 pt-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200">
            📞
          </span>
          <div>
            <p className="text-sm text-gray-600">Call to Book Poovar Boating</p>
            <a
              href="tel:+918139031924"
              className="text-xl font-bold text-emerald-700 hover:underline"
              aria-label="Call Poovar Boating at +91 81390 31924"
            >
              +91 81390 31924
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}

