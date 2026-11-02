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
      "We are available in multiple locations in Delhi and NCR region. You can book a Russian spa in Aerocity, Cp, Paschim Vihar, Rohini etc. We have 12 + Russian spa outlets in Delhi.",
  },
  {
    question: "How to choose a safe spa in Delhi?",
    answer:
      "Booking a safe Spa in Delhi is now easy with Luxury Russian Spa. Check Google reviews of the spa and get ideas from reviews. Check real photos and videos to confirm if the spa ambience is good or bad. See if the spa has a licence for their service. After that you can book your spa session without any hesitation.",
  },
  {
    question: "How to book a Russian spa in Delhi?",
    answer:
      "You can book a Russian spa in Delhi by contacting us via WhatsApp or direct call. Our team provides all necessary information for your requirements. You can also join our Telegram for daily updates.",
  },
  {
    question: "Why is the Russian spa in Aerocity famous for Luxury Service?",
    answer:
      "For luxury spa services in Delhi, you can choose a Russian spa in Aerocity because this place has some of the top 5-star hotels and high-end wellness centres. Luxury Russian spa has a luxury spa in Aerocity for your 5-star service. If you’re searching for a Russian spa service near Delhi airport, Luxury Russian Spa is the perfect choice. Visit our spa for amazing service.",
  },
  {
    question: "Is a Russian spa in Lajpat Nagar affordable?",
    answer:
      "Yes, Russian spas in Lajpat Nagar can be more affordable than luxury areas, but prices vary by location and service quality. Our first visit offer starts from just ₹1499 for your relaxing full-body massage in a private spa room.",
  },
  {
    question: "Do you offer Nuru massage in Delhi with a Russian?",
    answer:
      "Yes, we offer relaxing Nuru massage in Delhi with Russian therapists. Luxury Russian spa offers a range of popular and relaxing massage therapies, including b2b massage, sandwich massage, erotic massage, Nuru massage, and full body massage.",
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
