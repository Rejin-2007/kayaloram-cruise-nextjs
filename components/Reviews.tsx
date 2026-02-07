"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    stars: 5,
    content:
      "Very good experience.. we are so happy with the lovely host Rajesh boat driving and explain the same... I will give 5 star Thanks Kayaloram Backwater",
    user: { name: "DARKVILLER GAMING" },
  },
  {
    stars: 5,
    content:
      "It was an amazing experience for me and my friends... Would strongly recommend this cruise.",
    user: { name: "GAYATRI VAGAL" },
  },
  {
    stars: 4.5,
    content:
      "We went for boating from Kayaloram resort... clean and less crowded beach.",
    user: { name: "NEETING BABY" },
  },
  {
    stars: 4.5,
    content:
      "Kayaloram boating experience is too good! Must visit this place with your loved ones.",
    user: { name: "JEYBN 4" },
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  hover: { scale: 1.03 },
};

function StarDisplay({ stars }: { stars: number }) {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <div className="flex gap-1 text-yellow-300 text-lg" role="img">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
    </div>
  );
}

export default function Reviews() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://poovarislandboating.com/#business",
    "name": "Poovar Island Boating",
    "url": "https://poovarislandboating.com/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": reviews.length.toString(),
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.stars.toString(),
        "bestRating": "5",
      },
      "author": { "@type": "Person", "name": r.user.name },
      "reviewBody": r.content,
    })),
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="min-h-screen bg-emerald-950 px-4 py-16"
        aria-labelledby="reviews-heading"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <div className="mx-auto max-w-6xl">
          <h2
            id="reviews-heading"
            className="mb-4 text-center text-4xl font-bold text-emerald-100 md:text-5xl"
          >
            Poovar Boating Guest Reviews
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((review, index) => (
              <m.article
                key={index}
                className="rounded-3xl border border-emerald-200/30 bg-white/20 p-8 shadow-xl backdrop-blur-xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
              >
                <StarDisplay stars={review.stars} />
                <blockquote className="mt-4 text-lg font-medium text-emerald-100">
                  “{review.content}”
                </blockquote>
                <footer className="mt-6 font-semibold text-emerald-200">
                  {review.user.name}
                </footer>
              </m.article>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
