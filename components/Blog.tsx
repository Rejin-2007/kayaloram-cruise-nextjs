"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Poovar Boating Services: Complete Guide to Kerala Backwaters",
  description:
    "Complete guide to Poovar boating, Poovar island boating, Poovar backwater cruise, boating prices, packages, and eco tourism activities in Poovar, Kerala.",
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
        className="max-w-4xl mx-auto px-6 py-10 leading-relaxed mt-8 text-white bg-emerald-950"
        itemScope
        itemType="https://schema.org/BlogPosting"
        aria-label="Poovar Boating and Poovar Island Boating Blog Guide"
      >
        <h1 className="text-3xl font-extrabold mb-2" itemProp="headline">
          Poovar Boating & Poovar Island Boating Services: Complete Guide to Kerala Backwaters
        </h1>

        <motion.p
          className="text-sm text-gray-400 mb-6 flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaSailboat className="text-emerald-400" aria-hidden="true" />
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
            <strong>Poovar island boating</strong> are among the most popular
            backwater tourism experiences in Kerala. Located near Trivandrum,
            Poovar offers serene boat rides through calm backwaters, dense
            mangrove forests, and the iconic golden beach where river meets sea.
          </p>

          <p className="mb-4">
            A <strong>Poovar backwater cruise</strong> typically includes scenic
            island views, estuary boating, bird watching, and guided narration
            by experienced local operators. Travelers frequently look for
            details such as <strong>Poovar boating price</strong>, available
            packages, boating timings, and the best season to visit Poovar.
          </p>

          <p className="mb-4">
            From short island rides to extended Kerala backwater cruises, Poovar
            island boating is known for its safety standards, affordable pricing,
            and eco-friendly practices. These sustainable boating experiences
            make Poovar an ideal destination for families, couples, and nature
            enthusiasts seeking a peaceful escape.
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Go back to Poovar Boating homepage"
          >
            Go to Homepage
            <FaArrowRight aria-hidden="true" />
          </button>
        </motion.div>
      </article>
    </main>
  );
}
