"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What time does Poovar boating start?",
    answer:
      "Poovar boating and Poovar island boating services operate daily from 6:00 AM to 5:00 PM, allowing visitors to choose the best time for backwater cruises and sightseeing.",
  },
  {
    question: "Which is the best time for Poovar island boating?",
    answer:
      "Early morning is the best time for Poovar island boating due to calm waters, pleasant climate, and scenic sunrise views across Kerala backwaters.",
  },
  {
    question: "Are boats shared or private for Poovar boating?",
    answer:
      "All Poovar boating bookings include private boats exclusively for your group, ensuring a comfortable and personal island boating experience.",
  },
  {
    question: "Is Poovar boating government approved?",
    answer:
      "Yes. Poovar boating and Poovar island boating services are Kerala government approved and fully authorized for tourist operations.",
  },
  {
    question: "Are Poovar boating boats certified and insured?",
    answer:
      "All boats used for Poovar boating are certified, insured, and regularly inspected to meet safety and operational standards.",
  },
  {
    question: "Do Poovar boating boats have rooftop seating?",
    answer:
      "Yes. Poovar boating uses rooftop motor boats that provide shade, comfort, and panoramic views of the backwaters.",
  },
  {
    question: "What type of boats are used for Poovar island boating?",
    answer:
      "Modern fiber motor boats with safety equipment are used for Poovar island boating and Kerala backwater cruises.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="poovar-boating-faq"
      className="mx-auto mt-20 max-w-3xl px-4"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <h2
        id="faq-title"
        className="mb-10 text-center text-2xl font-extrabold text-emerald-300 md:text-3xl"
      >
        Poovar Boating – Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <article
            key={i}
            className="rounded-2xl border border-emerald-300/40 bg-white/10"
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
          >
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-emerald-300"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span itemProp="name">{item.question}</span>
              <span className="text-2xl font-bold" aria-hidden>
                {open === i ? "−" : "+"}
              </span>
            </button>

            {open === i && (
              <div
                className="px-5 pb-4"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p
                  className="text-base leading-relaxed text-emerald-300"
                  itemProp="text"
                >
                  {item.answer}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      <nav className="sr-only">
        <a href="/services">Poovar boating services</a>
        <a href="/reservation">Book Poovar boating</a>
        <a href="/contact">Poovar boating contact</a>
      </nav>
    </section>
  );
}
