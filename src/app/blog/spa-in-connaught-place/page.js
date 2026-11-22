import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import { Breadcrumbs } from "../../components/BlogComponents";

export const metadata = {
  title: "Best Russian Spa in Connaught Place: Rates & Guide (2026)",
  description:
    "Looking for a luxury Russian spa in Connaught Place (CP)? Enjoy in-room 5-star hotel visits, private suites with attached hot showers, certified therapists & packages from ₹1499. Book on WhatsApp 24/7!",
  keywords: [
    "russian spa in connaught place",
    "spa in cp delhi",
    "hotel spa connaught place",
    "spa price in cp",
    "massage in connaught place",
    "luxury spa in cp",
    "b2b spa in cp",
  ],
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/blog/spa-in-connaught-place",
  },
  openGraph: {
    title: "Best Russian Spa in Connaught Place (CP): Prices, 5-Star Hotel Visits & Guide",
    description:
      "A complete guide to booking luxury Russian spa therapies in Connaught Place (CP), Delhi: 5-star hotel visits, private suites, and prices from ₹1499.",
    images: ["https://www.luxuryrussianspa.com/images/spa-treatments.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/spa-treatments.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.luxuryrussianspa.com/blog" },
    { "@type": "ListItem", position: 3, name: "Russian Spa in Connaught Place", item: "https://www.luxuryrussianspa.com/blog/spa-in-connaught-place" },
  ],
};

const faqs = [
  {
    question: "Where can I book a Russian spa in Connaught Place (CP)?",
    answer:
      "Luxury Russian Spa operates private wellness suites easily accessible from Inner and Outer Circles of Connaught Place, Barakhamba Road, and Janpath. We also offer 24/7 in-room visits to all luxury hotels in CP including The Lalit, Shangri-La Eros, The Imperial, and Le Meridien.",
  },
  {
    question: "How much does a spa session cost in Connaught Place?",
    answer:
      "Our introductory first-visit offer starts from just ₹1499 for a 60-minute full body massage in a private suite with an attached hot shower. Standard outlet sessions range from ₹2,499 to ₹4,999, while in-room 5-star hotel visits start at ₹14,999 for 90 minutes with certified Russian therapists.",
  },
  {
    question: "Can I book a therapist to visit my hotel in Connaught Place?",
    answer:
      "Yes. We specialize in 24/7 in-room hotel visits across Central Delhi. Once you share your hotel name and preferred therapy on WhatsApp, our certified therapist arrives at your hotel room within 30 to 45 minutes.",
  },
  {
    question: "What therapies are available at the CP outlet?",
    answer:
      "Available therapies include Russian Full Body Massage, B2B Body-to-Body Relaxation, 4-Hand Sandwich Massage, Authentic Nuru Gel Therapy, Deep Tissue Relief, and Traditional Thai Bodywork.",
  },
  {
    question: "Are the suites in Connaught Place safe and private?",
    answer:
      "Yes, 100%. Every suite is completely private, soundproof, and equipped with an attached hot shower, fresh linens, clean disposable amenities, and climate control.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const hotelsNearCP = [
  "The Lalit New Delhi (Barakhamba Avenue)",
  "Shangri-La Eros New Delhi (Connaught Place / Janpath)",
  "The Imperial New Delhi (Janpath)",
  "Le Méridien New Delhi (Windsor Place)",
  "The Park New Delhi (Parliament Street)",
  "Radisson Blu Marina Hotel (Connaught Circus)",
];

const relatedBlogs = [
  {
    title: "What is B2B Massage in Delhi? Full Guide & Prices",
    href: "/blog/what-is-b2b-full-body-massage",
    image: "/images/b2b-full-body-massage.jpg",
  },
  {
    title: "What Is a Sandwich Massage? Step-by-Step Guide",
    href: "/blog/first-sandwich-massage-what-to-expect",
    image: "/images/sandwich-massage.png",
  },
  {
    title: "Russian Spa vs Normal Spa: Key Differences",
    href: "/blog/what-is-the-difference-between-spa-and-massage",
    image: "/images/spa-treatments.jpg",
  },
  {
    title: "Best Spa Services in Delhi NCR: 2026 Price List",
    href: "/blog/best-spa-service-in-delhi-ncr",
    image: "/images/spaservices1.jpg",
  },
];

export default function CPSpaBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-cp-spa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema-blog-cp-spa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <main className="bg-[#fffaf5] text-gray-800">
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Russian Spa in Connaught Place" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            
            {/* Header */}
            <div className="mb-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5232]">
                Central Delhi Luxury &bull; Connaught Place Guide
              </p>

              <h1 className="text-3xl font-bold leading-tight text-[#2b1810] sm:text-4xl lg:text-5xl font-serif">
                Best Russian Spa in Connaught Place (CP): Prices, 5-Star Hotel Visits &amp; Guide
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Luxury Russian Spa Team</span>
                <span>•</span>
                <span>Updated November 2026</span>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span className="text-[#9c5232] font-semibold">Central Delhi Wellness</span>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[400px]">
              <Image
                src="/images/spa-in-Connaught-place.png"
                alt="Best Russian Spa in Connaught Place Delhi - Luxury Russian Spa"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Quick Summary / CTA Box */}
            <div className="mb-10 rounded-2xl bg-[#fcfbf7] border border-[#9c5232]/25 p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    Central Delhi Wellness
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2b1810] mt-1 font-serif">
                    Connaught Place Spa Packages from ₹1499
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
                    Private sanitized suites with attached hot showers in CP &bull; 24/7 Hotel In-Room Visits across
                    Barakhamba, Janpath, and Parliament Street &bull; Russian and Indian Therapists.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                  <a
                    href="https://wa.me/919990193385?text=Hi%2C%20I%20want%20to%20book%20a%20Russian%20Spa%20session%20in%20Connaught%20Place%20(CP).%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-7 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Book on WhatsApp
                  </a>
                  <Link
                    href="/spa-in-connaught-place"
                    className="inline-flex items-center justify-center rounded-full border border-[#9c5232] text-[#9c5232] hover:bg-[#9c5232]/10 px-6 py-2.5 text-xs font-bold transition-all text-center"
                  >
                    View CP Outlet Page
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="space-y-8">
                
                {/* Intro */}
                <section className="space-y-4">
                  <p className="text-lg leading-8 text-gray-700 font-normal">
                    <strong>Connaught Place (CP)</strong> is the vibrant heart of New Delhi. Surrounded by corporate headquarters,
                    heritage architecture, fine-dining restaurants, and luxury 5-star hotels, it is home to thousands of busy executives,
                    diplomats, and international travelers every day.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    After hours of intense meetings, negotiating business deals, or exploring the capital, unwinding at a
                    reputable <strong>Russian spa in Connaught Place</strong> offers the perfect antidote to fatigue.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Whether you prefer visiting our private wellness suites equipped with attached hot showers or requesting an
                    exclusive in-room therapist visit at your 5-star hotel suite, Luxury Russian Spa ensures an unmatched standard
                    of discretion, hygiene, and relaxation.
                  </p>
                </section>

                {/* 5-Star Hotel Visits */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    24/7 In-Room 5-Star Hotel Visits in Connaught Place
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Traveling for business or staying at a luxury hotel in Central Delhi? You don&apos;t even need to step out of
                    your room. Our certified Russian and European therapists provide on-demand in-room visits:
                  </p>

                  <div className="rounded-2xl border border-amber-100 bg-[#fffdfa] p-6">
                    <h3 className="font-bold text-[#9c5232] text-lg font-serif mb-3">
                      Partner &amp; Popular Hotel Locations We Serve in CP:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700">
                      {hotelsNearCP.map((hotel, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-amber-600">📍</span>
                          <span>{hotel}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-gray-500 italic">
                      *Therapists arrive promptly within 30-45 minutes after WhatsApp booking confirmation. Zero advance payment required.
                    </p>
                  </div>
                </section>

                {/* Price Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Connaught Place Spa Packages &amp; Pricing
                  </h2>
                  <div className="overflow-x-auto rounded-2xl border border-amber-200 shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#2b1810] text-white">
                        <tr>
                          <th className="p-4 font-semibold">Service</th>
                          <th className="p-4 font-semibold">Duration</th>
                          <th className="p-4 font-semibold">Therapist</th>
                          <th className="p-4 font-semibold">Price (INR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100 bg-white">
                        <tr className="bg-amber-50/50">
                          <td className="p-4 font-bold text-[#9c5232]">First Visit Special (Outlet)</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4">Trained Professional</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Russian Full Body Massage</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4">Russian Specialist</td>
                          <td className="p-4 font-semibold">₹3,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">B2B Body-to-Body Therapy</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4">Certified Female Therapist</td>
                          <td className="p-4 font-semibold">₹2,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Sandwich Massage (2 Therapists)</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4">Dual Therapists</td>
                          <td className="p-4 font-semibold">₹3,999</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">5-Star In-Room Hotel Visit</td>
                          <td className="p-4">90 Min</td>
                          <td className="p-4">Russian / International</td>
                          <td className="p-4 font-semibold">₹14,999</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* What makes our CP Outlet Special */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Why Choose Luxury Russian Spa in Connaught Place?
                  </h2>
                  <div className="space-y-3.5">
                    <div className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
                      <h3 className="font-bold text-[#9c5232] text-lg font-serif">1. 100% Private Suites With Hot Showers</h3>
                      <p className="text-gray-700 mt-1.5 text-sm sm:text-base leading-relaxed">
                        No shared washrooms or noisy corridors. Each room in CP is a self-contained luxury oasis with its own
                        attached hot shower, climate control, and fresh towels.
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
                      <h3 className="font-bold text-[#9c5232] text-lg font-serif">2. Complete Discretion &amp; Confidentiality</h3>
                      <p className="text-gray-700 mt-1.5 text-sm sm:text-base leading-relaxed">
                        We value your privacy. Client contact details and booking information remain strictly confidential.
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
                      <h3 className="font-bold text-[#9c5232] text-lg font-serif">3. 24/7 Availability</h3>
                      <p className="text-gray-700 mt-1.5 text-sm sm:text-base leading-relaxed">
                        Whether you need a quick post-lunch relaxation session or an overnight late-night retreat after a late flight,
                        our doors and hotel-visit teams are open 24 hours every day.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section className="space-y-5">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="rounded-xl border border-amber-100 bg-[#fffaf3] p-5">
                        <h3 className="font-bold text-amber-950 text-base sm:text-lg">{faq.question}</h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="rounded-[24px] bg-gradient-to-r from-[#9c5232] to-[#7a391e] p-8 text-white shadow-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                    Book Your Connaught Place Spa Session
                  </h2>
                  <p className="mt-3 text-amber-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Enjoy first-class wellness right in the heart of Delhi. Certified therapists, attached hot showers,
                    and introductory first-visit packages from just ₹1499.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/919990193385?text=Hi%2C%20I%20would%20like%20to%20book%20a%20spa%20appointment%20in%20Connaught%20Place%20(CP)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-7 py-3 font-bold text-[#9c5232] transition hover:bg-amber-50 shadow-md"
                    >
                      Book on WhatsApp (24/7)
                    </a>
                    <Link
                      href="/contact"
                      className="rounded-full border border-white px-7 py-3 font-semibold hover:bg-white/10 transition"
                    >
                      Contact Information
                    </Link>
                  </div>
                </section>

              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                {/* Special Offer Card */}
                <div className="rounded-2xl border border-amber-200 bg-[#fffaf5] p-6 shadow-sm text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    CP Special Deal
                  </span>
                  <h3 className="text-xl font-bold text-[#2b1810] mt-1 font-serif">
                    First Visit Offer @ ₹1499
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    60-min session &bull; Attached hot shower &bull; Central Delhi outlet &bull; Certified therapists
                  </p>
                  <a
                    href="https://wa.me/919990193385?text=Hi%2C%20I%20want%20to%20claim%20the%201499%20first%20visit%20offer%20at%20CP%20spa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white py-3 text-sm font-bold shadow-md transition"
                  >
                    Claim ₹1499 Offer
                  </a>
                </div>

                {/* Related Blogs */}
                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-amber-950 font-serif">
                    Related Guides &amp; Blogs
                  </h3>
                  <div className="mt-4 space-y-3">
                    {relatedBlogs.map((blog, idx) => (
                      <Link
                        key={idx}
                        href={blog.href}
                        className="flex items-center gap-3 rounded-xl border border-amber-100 p-2.5 hover:bg-amber-50 transition"
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2">
                            {blog.title}
                          </p>
                          <span className="text-xs font-bold text-[#9c5232] mt-0.5 inline-block">
                            Read Guide &rarr;
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

          </div>
        </section>
      </main>

      <WhatsappFloat />
    </>
  );
}
