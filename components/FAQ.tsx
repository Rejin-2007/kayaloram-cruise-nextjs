"use client";

import { useState } from "react";

/* ---------- FAQ DATA ---------- */
const faqData = [
  {
    question: "What time does Poovar boating start?",
    answer:
      "Poovar boating services and Poovar island boating begin at 6:00 AM and continue until evening at 5:00 PM. Plan your Poovar boating trip any time within these hours for a comfortable experience.",
  },
  {
    question: "Which is the best time for Poovar island boating?",
    answer:
      "The best time for Poovar island boating is early morning. Pleasant weather, calm waters, and beautiful sunrise views make morning Poovar boating the most preferred choice.",
  },
  {
    question: "Are boats shared or exclusive for Poovar boating?",
    answer:
      "Every Poovar boating booking provides an exclusive boat for your group. You can enjoy private Poovar island boating without sharing your boat with others.",
  },
  {
    question: "Are Poovar boating services government approved?",
    answer:
      "Yes, Poovar boating and Poovar island boating services are officially approved by the Kerala government, ensuring safety, legality, and reliability.",
  },
  {
    question: "Are boats certified and insured for Poovar island boating?",
    answer:
      "Absolutely. All Poovar boating boats are certified, insured, and regularly fitness-checked to ensure a safe Poovar island boating experience.",
  },
  {
    question: "Do Poovar boating boats have rooftops?",
    answer:
      "Yes, Poovar boating trips use comfortable rooftop boats that provide shade and offer panoramic views of Kerala backwaters.",
  },
  {
    question: "What type of boat is used for Poovar island boating?",
    answer:
      "Modern fiber motor boats are used for Poovar boating and Poovar island boating, designed for smooth navigation and equipped with all safety measures.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="mx-auto mt-20 max-w-3xl px-4"
      aria-labelledby="faq-heading"
    >
      {/* ---------- FAQ SCHEMA (SEO) ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <div className="rounded-3xl border border-emerald-300/30 bg-emerald-400/20 p-6 shadow-xl backdrop-blur-md">
        {/* H2 for SEO */}
        <h2
          id="faq-heading"
          className="mb-10 text-center text-2xl font-extrabold text-emerald-300 md:text-3xl"
        >
          Frequently Asked Questions – Poovar Boating & Poovar Island Tours
        </h2>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className={`rounded-2xl border border-emerald-300 bg-white/10 transition ${
                  isOpen ? "ring-2 ring-emerald-300" : ""
                }`}
              >
                <button
                  className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left font-medium text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{item.question}</span>
                  <span
                    className="ml-3 select-none text-2xl font-bold text-emerald-300"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`overflow-hidden px-5 transition-[max-height,opacity] duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-100 pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-base leading-relaxed text-emerald-300">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
