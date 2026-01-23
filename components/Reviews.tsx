"use client";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    stars: 5,
    content:
      "Very good experience.. we are so happy with the lovely host Rajesh boat driving and explain the same... I will give 5 star Thanks Kayaloram Backwater",
    user: {
      name: "DARKVILLER GAMING",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    stars: 5,
    content:
      "It was an amazing experience for me and my friends... Would strongly recommend this cruise.",
    user: {
      name: "GAYATRI VAGAL",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  },
  {
    stars: 4.5,
    content:
      "We went for boating from Kayaloram resort... clean and less crowded beach.",
    user: {
      name: "NEETING BABY",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  },
  {
    stars: 4.5,
    content:
      "Kayaloram boating experience is too good! Must visit this place with your loved ones.",
    user: {
      name: "JEYBN 4",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  },
];

// ⭐ Star rating helper
function StarDisplay({ stars }: { stars: number }) {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <div
      className="flex gap-1 text-yellow-300 text-lg"
      aria-label={`${stars} star rating`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      className="min-h-screen bg-emerald-950 px-4 py-16"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h1
          id="reviews-heading"
          className="mb-4 text-center text-4xl font-bold text-emerald-100 md:text-5xl"
        >
          Poovar Boating & Poovar Island Boating Guest Reviews
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-center text-emerald-200">
          Real guest experiences from Poovar boating, island boating,
          backwater cruises & golden beach tours at Kayaloram.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-3xl border border-emerald-200/30 bg-white/20 p-8 shadow-xl backdrop-blur-xl"
            >
              <StarDisplay stars={review.stars} />

              <blockquote className="mt-4 text-lg font-medium text-emerald-100">
                “{review.content}”
              </blockquote>

              <footer className="mt-6 flex items-center gap-3">
                <img
                  src={review.user.avatar}
                  alt={`Avatar of ${review.user.name}`}
                  className="h-11 w-11 rounded-full border-2 border-emerald-300"
                  loading="lazy"
                />
                <span className="font-semibold text-emerald-200">
                  {review.user.name}
                </span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
