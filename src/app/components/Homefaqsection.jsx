"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import HomeHeading from "./HomeHeading";
import { WHATSAPP_URL } from "./siteContact";

// Keep in sync with faqSchema in src/app/page.js
const faqs = [
  {
    question: "Where Can I Find a Russian Massage in Delhi?",
    answer:
      "Luxury Russian Spa operates 12+ luxury outlets across Delhi NCR, including Aerocity, Lajpat Nagar, Mahipalpur, Connaught Place, Dwarka, Rohini, and Gurgaon. We also provide 24/7 in-room 5-star hotel visits near Delhi Airport and across the capital.",
  },
  {
    question: "How to choose a safe spa in Delhi?",
    answer:
      "To ensure a safe and hygienic experience, check verified customer reviews, look for real ambience photos of private rooms with attached showers, and confirm that therapists are certified professionals. At Luxury Russian Spa, all sessions are held in clean, private suites with complete safety and discretion.",
  },
  {
    question: "How to book a Russian spa in Delhi?",
    answer:
      "Booking is simple and fast. You can message us on WhatsApp or call our 24/7 helpdesk. Our team will share available therapist profiles, confirm outlet or hotel visit options, and lock in your preferred appointment slot with no advance payment required.",
  },
  {
    question: "Why is the Russian spa in Aerocity famous for Luxury Service?",
    answer:
      "Aerocity is home to Delhi's top 5-star hotels and luxury hospitality. Luxury Russian Spa in Aerocity provides five-star standard in-room hotel sessions with certified Russian and European therapists, making it the top choice for international business travelers and transit passengers near IGI Airport.",
  },
  {
    question: "Is a Russian spa in Lajpat Nagar affordable?",
    answer:
      "Yes, our Russian spa in Lajpat Nagar offers luxury bodywork at highly accessible rates. We provide an exclusive first visit offer starting from just ₹1499 for a full body massage in a private air-conditioned room with an attached hot shower.",
  },
  {
    question: "Do you offer Nuru massage in Delhi with a Russian?",
    answer:
      "Yes, we provide authentic Nuru massage in Delhi using genuine seaweed-based warm gel with certified Russian and European therapists. We also offer sandwich massage, B2B massage, Swedish therapy, and couples packages across our Delhi outlets.",
  },
];

export default function HomeFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-labelledby="home-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <HomeHeading
          id="home-faq-title"
          eyebrow="Questions? We're Here To Help"
          title="Frequently Asked"
          highlight="Questions"
          text="Everything you need to know about our spa services and how booking works."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = activeIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl ring-1 transition-colors duration-300 ${
                    open ? "bg-cream ring-amber-300" : "bg-white ring-amber-100 hover:ring-amber-200"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(open ? null : index)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-btn-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[15px] md:text-base font-semibold text-amber-900 cursor-pointer"
                    >
                      <span>
                        <span className="mr-2 text-amber-700">{String(index + 1).padStart(2, "0")}.</span>
                        {faq.question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          open ? "rotate-45 bg-amber-500 text-white" : "bg-amber-100 text-amber-700"
                        }`}
                        aria-hidden="true"
                      >
                        <FiPlus />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-bodycolor">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/staff2.jpg"
                alt="Luxury Russian Spa therapist in Delhi"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-amber-100">
              <p className="font-title text-lg font-bold text-amber-900">Still have a question?</p>
              <p className="mt-1 text-sm text-bodycolor">Message us anytime. Our booking team is available 24/7.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
              >
                <FaWhatsapp /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
