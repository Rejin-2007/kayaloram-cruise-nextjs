"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Poovar Boating Services: Complete Guide to Kerala Backwaters",
  description:
    "Poovar Island Boating, Poovar boating price, Poovar backwater cruise, and activities in Poovar Island, Kerala.",
  author: { "@type": "Person", name: "Pankaj" },
  datePublished: "2025-08-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.poovarislandboating.com/blog",
  },
  image: "https://www.poovarislandboating.com/gallery",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Blog() {
  const router = useRouter();

  return (
    <main role="main">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <article
        className="max-w-4xl mx-auto px-6 py-10 leading-relaxed mt-8 text-white bg-emerald-950 "
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <h1 className="text-3xl font-extrabold mb-2" itemProp="headline">
          Poovar Boating & Poovar Island Boating Services: Complete Guide to Kerala Backwaters
        </h1>

        <motion.p
          className="text-sm text-gray-400 mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          Leave a Comment / Uncategorized / By{" "}
          <span itemProp="author">Pankaj</span>
        </motion.p>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="mb-4">
            <strong>Poovar boating</strong> and{" "}
            <strong>Poovar island boating</strong> offer unforgettable journeys
            through Kerala’s scenic backwaters, mangroves, and golden beaches.
          </p>
        </motion.section>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Go to Homepage
          </button>
        </motion.div>
      </article>
    </main>
  );
}
