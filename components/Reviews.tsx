"use client";

import { useEffect } from "react";
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

// ⭐ Star helper
function StarDisplay({ stars }: { stars: number }) {
  const full = Math.floor(stars);
  const half = stars % 1 !== 0;

  return (
    <div className="flex gap-0.5 text-yellow-300 text-xl" aria-label={`${stars} star rating`}>
      {[...Array(full)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {half && <FaStarHalfAlt />}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      className="min-h-screen bg-emerald-950 py-12 px-4"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h1
          id="reviews-heading"
          className="mb-3 text-center text-4xl md:text-5xl font-bold text-emerald-100"
        >
          Poovar Boating & Poovar Island Boating Guest Reviews
        </h1>

        <p className="mb-12 text-center text-emerald-100">
          Real guest experiences from Poovar boating, island boating,
          backwater cruises & golden beach tours at Kayaloram.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, idx) => (
            <motion.article
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl border border-emerald-200 bg-white/30 p-8 backdrop-blur-xl shadow-xl"
            >
              <StarDisplay stars={review.stars} />

              <blockquote className="mt-3 text-lg font-medium text-emerald-200">
                {review.content}
              </blockquote>

              <footer className="mt-4 flex items-center gap-3">
                <img
                  src={review.user.avatar}
                  alt={`Avatar of ${review.user.name}`}
                  className="h-10 w-10 rounded-full border-2 border-emerald-200"
                  loading="lazy"
                />
                <span className="font-bold text-emerald-200">
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
