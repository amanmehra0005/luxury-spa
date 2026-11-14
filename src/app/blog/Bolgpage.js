"use client";

import Image from "next/image";
import { FaHandSparkles, FaLeaf } from "react-icons/fa";
import { FaSpa, FaHotTub } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import WhatsappFloat from "../components/WhatsappFloat";
import Link from "next/link";

const blogs = [
  {
    title:
      "Swedish Massage vs Deep Tissue Massage: Which Massage Should You Choose?",
    description:
      "If you’ve ever perused a spa or clinic’s menu, you probably know the two most popular massage options: Swedish and deep tissue. They may sound alike, but they’re made for different purposes and feel quite unlike one another on the body. Getting the right one can be the difference between leaving your session blissfully relaxed — or feeling like you’ve been hit in the gut with a brick.",
    image: "/images/80535.webp",
    link: "/swedish-massage-vs-deep-tissue-massage",
  },
  {
    title:
      "Health Benefits of Sandwich Massage: Circulation, Muscle Recovery & Mood",
    description:
      "In our fast-paced lifestyle, with increased stress on muscles and no time for post workout care, the neck mess is all so common these days. Although classic massage therapies are still widely popular, the latter now has several new and more immersive counterparts which cater to today’s well-being requirements. And so for another time-honored technique, there’s sandwich massage, where simultaneous contact and gentle rhythmic pressure provides you.",
    image: "/images/hb1.webp",
    link: "/health-benefits-of-sandwich-massage",
  },
  {
    title: "How a Hot Stone Massage Works and What it Is?",
    description:
      "We all have stress, we all struggle with tense muscles and exhaustion thanks to today’s busy lifestyle. As awareness of natural treatment and holistic remedies has increased, so has the importance of effective, non-invasive ancient therapeutic treatments that are deeply relaxing. This time-tested therapy has helped people for countless decades unwind physically and mentally, soothing away the cares of the day. It does so with the use of heat and expert touch techniques.",
    image: "/images/1627.jpg",
    link: "/how-hot-stone-massage-works-in-delhi-spa",
  },
  {
    title: "Is B2B Massage Legal in India?",
    description:
      "The short answer is: there is no simple nationwide “yes” or “no” for B2B massage in India, because the legality depends on how the service is offered, marketed, staffed, and operated.",
    image: "/images/full-body-massage-spa.webp",
    link: "/is-b2b-massage-legal-in-india",
  },
  {
    title: "Thai Massage in Delhi: Health Benefits, Body Stretching, Price & What to Expect",
    description:
      "Discover authentic Thai yoga massage in Delhi: assisted full-body stretching, acupressure benefits, pricing from ₹1499, and certified Thai therapists across 12+ luxury outlets.",
    image: "/images/thaimassage1.png",
    link: "/blog/thai-massage-does-to-your-body",
  },
  {
    title: "What is B2B Massage in Delhi? Full Body Process, Price & Safety Guide (2026)",
    description:
      "Complete guide to B2B massage in Delhi: what to expect, step-by-step process, health benefits, transparent prices from ₹1499, and safety tips across 12+ luxury spa outlets.",
    image: "/images/b2b-full-body-massage.jpg",
    link: "/blog/what-is-b2b-full-body-massage",
  },
  {
    title: "What Is a Sandwich Massage? Step-by-Step Process & Delhi Price (2026 Guide)",
    description:
      "Everything about sandwich massage in Delhi: what to expect, 2-therapist synchronized process, benefits, and transparent pricing from ₹1499 at Luxury Russian Spa.",
    image: "/images/sandwich-massage.png",
    link: "/blog/first-sandwich-massage-what-to-expect",
  },
  {
    title: "Best Russian Spa in Connaught Place (CP): Prices, 5-Star Hotel Visits & Guide",
    description:
      "Looking for a luxury Russian spa in Connaught Place (CP)? Enjoy in-room 5-star hotel visits, private suites with attached hot showers, certified therapists & packages from ₹1499.",
    image: "/images/spa-in-Connaught-place.png",
    link: "/blog/spa-in-connaught-place",
  },
  {
    title: "Best Spa Services in Delhi NCR (2026): Top 7 Massages, Prices & Offers",
    description:
      "Explore the top 7 best spa services in Delhi NCR: Russian Massage, Sandwich Massage, B2B Therapy, Nuru & Deep Tissue. Complete price list from ₹1499 at 12+ luxury outlets.",
    image: "/images/spaservices1.jpg",
    link: "/blog/best-spa-service-in-delhi-ncr",
  },
  {
    title: "Russian Spa vs Normal Spa: Key Differences, Services & Delhi Price Guide",
    description:
      "Discover the real difference between a Russian spa and a normal spa in Delhi: amenities, private hot showers, international therapists, therapies (Nuru, B2B, Sandwich), and prices from ₹1499.",
    image: "/images/spa-treatments.jpg",
    link: "/blog/what-is-the-difference-between-spa-and-massage",
  },
];

export default function Bolgpage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What topics do you cover in your spa blog?",
      answer:
        "Our blog features a wide range of topics related to wellness, relaxation, massage therapies, and self-care. You can find articles on the benefits of various types of massages, tips for relaxation, spa treatment recommendations, and more to help you make the most of your spa experience.",
      icon: <FaSpa className="text-teal-600" />,
    },
    {
      question: "How can I stay updated with new blog posts?",
      answer:
        "To stay updated with our latest blog posts, simply subscribe to our newsletter or visit the blog section regularly. You can also follow us on social media for notifications on new articles, tips, and spa offers.",
      icon: <FaHandSparkles className="text-teal-600" />,
    },

    {
      question: "Can I learn about specific massage therapies on your blog?",
      answer:
        "Yes! Our blog provides in-depth articles on different types of massage therapies offered at our spa, including Couple Massages, Full Body Massages, and specialized treatments like Female therapist services. We guide you on which therapies suit your needs and how they benefit your health and well-being.",
      icon: <FaLeaf className="text-teal-600" />,
    },
    {
      question: " Is your spa blog a good resource for wellness tips?",
      answer:
        "Absolutely! Our blog is packed with expert wellness advice, from tips for stress relief and relaxation to self-care routines that you can follow at home. It’s a valuable resource for anyone looking to improve their physical and mental well-being.",
      icon: <FaSpa className="text-teal-600" />,
    },
    {
      question:
        "Can I find information about your special offers and promotions on the blog?",
      answer:
        "Yes, we regularly post about our latest offers, special promotions, and first-visit discounts on our blog. Be sure to check for updates on exclusive deals, seasonal offers, and spa packages to get the best value for your visit.",
      icon: <FaHotTub className="text-teal-600" />,
    },
    {
      question: "How do I book a spa session after reading a blog post?",
      answer:
        "Booking a spa session is easy! After reading our blog post, simply visit our Book Now section on the website, or you can contact our customer support team directly. We’ll help you choose the right therapy and schedule a convenient time for your visit.",
      icon: <FaSpa className="text-teal-600" />,
    },
  ];
  return (
    <main className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/steptodown.com870307.webp"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-wide"
            >
              Spa Blog & Wellness Tips
            </h1>
            <p className="mt-3 text-lg text-amber-100">
              Discover the art of relaxation and body healing
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center max-w-3xl mx-auto px-4 mt-16 mb-10">
        <h2
          className="text-3xl md:text-4xl font-semibold text-amber-700 mb-4"
        >
          Rejuvenate Your Mind & Body
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our spa blog, where we share wellness advice, beauty tips,
          and the science behind relaxation. Our expert therapists share their
          insights to help you lead a balanced and calm lifestyle.
        </p>
        <p className="mt-4 text-gray-600 italic text-md">
          Relax your body, renew your mind, and revive your spirit.
        </p>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <Link href={blog.link}>
                  <h3 className="text-xl font-semibold text-amber-700 mb-2 cursor-pointer hover:text-amber-900">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="inline-block text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA or Quote */}
      <section className="text-center bg-amber-100 py-16 px-6 mt-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-800 mb-4">
          Experience the Art of Healing
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our goal is not just to relax your body, but to bring complete harmony
          to your life. Explore our blog regularly to stay inspired, informed,
          and indulged.
        </p>
      </section>
      {/* F&Q Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
            >
              <FaStar className="text-amber-500" />
              Questions? We are here to help
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
            <p className="text-amber-800 max-w-2xl mx-auto text-lg">
              Everything you need to know about our luxurious spa services and
              how to book them.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-amber-50 rounded-lg">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-amber-900 group-hover:text-amber-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                  {activeIndex === index && (
                    <div
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                        <p className="text-amber-700">{faq.answer}</p>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          {/* <div
                                      className="mt-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center text-white shadow-xl"
                                    >
                                      <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                                      <p className="mb-5 max-w-2xl mx-auto">
                                        Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
                                      </p>
                                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-full shadow-md hover:bg-amber-100 transition-colors">
                                          Contact Us
                                        </button>
                                        <button className="px-6 py-3 bg-amber-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                                          Book Appointment
                                        </button>
                                      </div>
                                    </div> */}
        </div>
      </section>
      <WhatsappFloat />
    </main>
  );
}