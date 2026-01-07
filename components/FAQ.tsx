"use client";

import { useState } from "react";

const accordionData = [
  {
    question: "What time does Poovar boating start?",
    answer:
      "Poovar boating services and Poovar island boating begin at 6:00 AM and continue until evening at 5:00 PM. Plan your Poovar boating trip any time within these hours for a comfortable experience.",
  },
  {
    question: "Which is the best time for Poovar island boating?",
    answer:
      "The best time for Poovar island boating is in the morning. Early hours offer pleasant weather, calm waters, and beautiful sunrise views over the Poovar backwaters.",
  },
  {
    question: "Are boats shared or exclusive for Poovar boating?",
    answer:
      "Every Poovar boating booking provides a separate boat for your group. Enjoy exclusive Poovar island boating without sharing your boat with others.",
  },
  {
    question: "Are Poovar boating services government approved?",
    answer:
      "Yes, Poovar boating and Poovar island boating services are fully recognized and approved by the Kerala government, ensuring safety and reliability.",
  },
  {
    question: "Are boats certified, insured, and maintained for Poovar island boating?",
    answer:
      "Absolutely! Poovar boating boats are certified, insured, and regularly fitness-checked. Your Poovar island boating experience is safe and worry-free.",
  },
  {
    question: "Do Poovar boating boats have rooftops?",
    answer:
      "Yes, our Poovar boating and Poovar island boating trips use comfortable rooftop boats, offering shade and panoramic views of Kerala backwaters.",
  },
  {
    question: "What type of boat is provided for Poovar island boating?",
    answer:
      "We provide modern fiber motor boats for Poovar boating and Poovar island boating, designed for smooth navigation and fully equipped for your safety.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-3xl shadow-lg backdrop-blur-md bg-emerald-400/20 border border-emerald-400/30">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-emerald-600 mb-6">
        Poovar Boating & Poovar Island Boating FAQs
      </h2>
      <div className="flex flex-col gap-4">
        {accordionData.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-white/10 border border-emerald-300/20 shadow transition-all ${
              openIndex === idx ? "ring-2 ring-emerald-300" : ""
            }`}
          >
            <button
              className="w-full px-5 py-4 flex justify-between items-center text-left text-emerald-200 font-medium focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{item.question}</span>
              <span className="text-2xl text-emerald-400 font-bold ml-3 select-none">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={`px-5 pb-4 text-emerald-300 text-base transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-hidden={openIndex !== idx}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
