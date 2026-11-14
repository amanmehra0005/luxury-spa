import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import { Breadcrumbs } from "../../components/BlogComponents";

export const metadata = {
  title: "Best Spa Services in Delhi NCR (2026): Top 7 Massages, Price List & Offers",
  description:
    "Explore the top 7 best spa services in Delhi NCR: Russian Massage, Sandwich Massage, B2B Therapy, Nuru & Deep Tissue. Complete price list from ₹1499 at 12+ luxury outlets. Book 24/7!",
  keywords: [
    "best spa services in delhi ncr",
    "best spa in delhi",
    "spa price in delhi",
    "top massage in delhi",
    "luxury spa delhi ncr",
    "russian spa in delhi",
    "sandwich massage delhi",
    "b2b massage in delhi",
  ],
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/blog/best-spa-service-in-delhi-ncr",
  },
  openGraph: {
    title: "Best Spa Services in Delhi NCR (2026): Top 7 Massages, Price List & Offers",
    description:
      "A complete guide to Delhi NCR's top 7 spa and massage therapies, prices from ₹1499, benefits, and how to choose the right wellness package.",
    images: ["https://www.luxuryrussianspa.com/images/spaservices1.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/spaservices1.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.luxuryrussianspa.com/blog" },
    { "@type": "ListItem", position: 3, name: "Best Spa Services in Delhi NCR", item: "https://www.luxuryrussianspa.com/blog/best-spa-service-in-delhi-ncr" },
  ],
};

const topServices = [
  {
    rank: "1",
    name: "Russian Full Body Massage",
    tag: "Most Popular for Deep Relaxation",
    price: "From ₹1,499 (Offer) / ₹2,499",
    duration: "60 - 90 Minutes",
    description:
      "A harmonious blend of heated aromatic botanical oils, deep myofascial gliding, and gentle percussion. Delivered by certified Russian and European therapists, this session melts away long-standing stress and restores physical vitality.",
    href: "/full-body-massage-in-delhi",
  },
  {
    rank: "2",
    name: "Sandwich Massage (4-Hand Synchronized)",
    tag: "Ultimate Luxury Experience",
    price: "From ₹1,999 (Offer) / ₹3,999",
    duration: "60 - 90 Minutes",
    description:
      "Performed simultaneously by two certified therapists working in perfect harmony across both sides of your body. Double the touch provides profound sensory immersion and eliminates mental chattering within minutes.",
    href: "/sandwich-massage",
  },
  {
    rank: "3",
    name: "B2B (Body-to-Body) Therapy",
    tag: "Maximum Stress & Pain Relief",
    price: "From ₹1,499 (Offer) / ₹2,499",
    duration: "60 - 90 Minutes",
    description:
      "Continuous full-body contact utilizing warm therapeutic oils and sweeping pressure glides. It releases deep-seated knots across the back, shoulders, and legs while thoroughly hydrating the skin.",
    href: "/b2b-massage-in-delhi",
  },
  {
    rank: "4",
    name: "Authentic Nuru Gel Massage",
    tag: "Japanese Frictionless Wellness",
    price: "From ₹2,499 / ₹4,499",
    duration: "60 - 90 Minutes",
    description:
      "Utilizes clear, odorless seaweed-based Nuru gel on a specialized waterproof mattress. Intensely smooth and slippery, this specialized ritual calms the sympathetic nervous system and leaves the skin glowing.",
    href: "/b2b-massage-in-delhi",
  },
  {
    rank: "5",
    name: "Deep Tissue & Sports Recovery",
    tag: "Chronic Muscle Knot Relief",
    price: "From ₹1,499 (Offer) / ₹2,499",
    duration: "60 - 90 Minutes",
    description:
      "Focuses on deep muscle layers, tendons, and connective tissue fascia. Ideal for athletes, gym-goers, and individuals suffering from stubborn neck, shoulder, or lower back aches.",
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    rank: "6",
    name: "Traditional Thai Acupressure & Yoga",
    tag: "Zero-Oil Flexibility Restoration",
    price: "From ₹1,499 (Offer) / ₹2,499",
    duration: "60 - 90 Minutes",
    description:
      "An oil-free bodywork technique combining assisted yoga stretching and rhythmic thumb pressure along the body's Sen lines. Decompresses spinal discs and restores joint range of motion.",
    href: "/thai-massage-in-delhi",
  },
  {
    rank: "7",
    name: "Couples Romance Spa Package",
    tag: "Shared Wellness Sanctuary",
    price: "From ₹3,999 / ₹6,999",
    duration: "90 - 120 Minutes",
    description:
      "A private VIP double suite featuring ambient candlelight, relaxing aromatherapy, synchronized massages for two, and optional jacuzzi hydrotherapy. Perfect for anniversaries and special celebrations.",
    href: "/couple-massage",
  },
];

const faqs = [
  {
    question: "What is the best spa service in Delhi NCR for stress relief?",
    answer:
      "For deep stress relief and sensory relaxation, Russian Full Body Massage, B2B Therapy, and 4-hand Sandwich Massage are the most popular choices. For chronic muscle knots and stiff joints, Deep Tissue or Traditional Thai stretching are recommended.",
  },
  {
    question: "How much does a luxury spa session cost in Delhi?",
    answer:
      "At Luxury Russian Spa outlets, introductory First Visit Offers start from ₹1499 for a 60-minute session. Regular outlet packages range from ₹2,499 to ₹4,999. In-room 5-star hotel visits start at ₹14,999 for 90 minutes with certified Russian therapists.",
  },
  {
    question: "Do all spa sessions in Delhi include a private shower?",
    answer:
      "At standard local parlours, showers are often shared down common corridors. At Luxury Russian Spa, every private suite includes its own attached hot shower, fresh towels, and luxury toiletries.",
  },
  {
    question: "Where are the best spa outlets located in Delhi NCR?",
    answer:
      "Luxury Russian Spa operates 12+ verified outlets in prime locations including Aerocity (near IGI Airport), Lajpat Nagar (South Delhi), Mahipalpur, Connaught Place, Gurgaon (Cyber City / MG Road), and Noida.",
  },
  {
    question: "Can I book a massage session late at night in Delhi?",
    answer:
      "Yes. Luxury Russian Spa is open 24/7. We offer round-the-clock outlet appointments as well as discreet in-room visits to all major 5-star hotels in Delhi NCR.",
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
    title: "Thai Massage in Delhi: Health Benefits & Prices",
    href: "/blog/thai-massage-does-to-your-body",
    image: "/images/thaimassage1.png",
  },
];

export default function BestSpaServicesBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-best-spa-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema-blog-best-spa-services"
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
              { label: "Best Spa Services in Delhi NCR" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            
            {/* Header Area */}
            <div className="mb-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5232]">
                Delhi NCR Spa Guide &bull; 2026 Edition
              </p>

              <h1 className="text-3xl font-bold leading-tight text-[#2b1810] sm:text-4xl lg:text-5xl font-serif">
                Best Spa Services in Delhi NCR: Top 7 Massages, Prices &amp; Booking Guide
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Luxury Russian Spa Team</span>
                <span>•</span>
                <span>Updated November 2026</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span className="text-[#9c5232] font-semibold">Price Verified</span>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[400px]">
              <Image
                src="/images/spaservices1.jpg"
                alt="Best Spa Services in Delhi NCR - Luxury Russian Spa"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Quick Summary / Deal Box */}
            <div className="mb-10 rounded-2xl bg-[#fcfbf7] border border-[#9c5232]/25 p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    Exclusive Delhi Offer
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2b1810] mt-1 font-serif">
                    First Visit Offer on Top Spa Therapies from ₹1499
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
                    Available across 12+ luxury spa outlets in Aerocity, Lajpat Nagar, Connaught Place, and Gurgaon.
                    Includes 60-min session &bull; Attached hot shower &bull; Russian and Indian therapists.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                  <a
                    href="https://wa.me/918799716197?text=Hi%2C%20I%20want%20to%20explore%20spa%20services%20and%20claim%20the%201499%20first%20visit%20offer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-7 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Claim Deal on WhatsApp
                  </a>
                  <Link
                    href="/spa-price-in-delhi"
                    className="inline-flex items-center justify-center rounded-full border border-[#9c5232] text-[#9c5232] hover:bg-[#9c5232]/10 px-6 py-2.5 text-xs font-bold transition-all text-center"
                  >
                    View All Spa Prices
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
                    Delhi NCR is a bustling metropolis where hectic commutes, long office hours, and constant deadlines
                    take a heavy toll on the body and mind. Whether you are a local resident needing weekend recovery or a
                    traveler staying near IGI Airport, indulging in a professional spa session is the quickest way to reset.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    With hundreds of parlours across Delhi, Gurgaon, and Noida, choosing the right therapy can feel overwhelming.
                    To help you choose the ideal session for your exact needs and budget, we have ranked the{" "}
                    <strong>top 7 best spa services in Delhi NCR</strong> with pricing, benefits, and insider tips.
                  </p>
                </section>

                {/* Top 7 Services List */}
                <section className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2b1810] font-serif">
                    The 7 Best Spa Services in Delhi NCR Ranked
                  </h2>

                  <div className="space-y-5">
                    {topServices.map((service) => (
                      <div
                        key={service.rank}
                        className="rounded-2xl border border-amber-200/80 bg-white p-6 shadow-sm hover:shadow-md transition"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
                          <div className="flex items-center gap-3">
                            <span className="flex size-8 items-center justify-center rounded-full bg-[#9c5232] text-sm font-bold text-white">
                              {service.rank}
                            </span>
                            <h3 className="text-xl font-bold text-[#2b1810] font-serif">
                              {service.name}
                            </h3>
                          </div>
                          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-[#9c5232]">
                            {service.tag}
                          </span>
                        </div>

                        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                          <div className="flex items-center gap-4 text-gray-600">
                            <span>⏱️ {service.duration}</span>
                            <span className="text-[#9c5232]">💰 {service.price}</span>
                          </div>
                          <Link
                            href={service.href}
                            className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40"
                          >
                            Learn More &rarr;
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Pricing Overview Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Delhi NCR Spa Pricing Overview (2026 Rate Card)
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Transparent rates across our 12+ luxury outlets in Delhi, Gurgaon, and Noida:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-amber-200 shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#2b1810] text-white">
                        <tr>
                          <th className="p-4 font-semibold">Service</th>
                          <th className="p-4 font-semibold">Duration</th>
                          <th className="p-4 font-semibold">First Visit Offer</th>
                          <th className="p-4 font-semibold">Standard Rate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100 bg-white">
                        <tr className="bg-amber-50/40">
                          <td className="p-4 font-bold text-gray-900">Russian Full Body Massage</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,499</td>
                          <td className="p-4">₹2,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">B2B Full Body Therapy</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,499</td>
                          <td className="p-4">₹2,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Sandwich Massage (2 Therapists)</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,999</td>
                          <td className="p-4">₹3,999</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Deep Tissue Massage</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,499</td>
                          <td className="p-4">₹2,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Nuru Gel Massage</td>
                          <td className="p-4">60 Min</td>
                          <td className="p-4 font-bold text-emerald-700">₹2,499</td>
                          <td className="p-4">₹4,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">5-Star Hotel In-Room Session</td>
                          <td className="p-4">90 Min</td>
                          <td className="p-4 font-bold text-emerald-700">₹14,999</td>
                          <td className="p-4">₹14,999</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Where to Visit */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Top Outlet Locations Across Delhi NCR
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Visit any of our sanitized, discreet outlets with attached hot showers:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-semibold">
                    <Link href="/spa-in-aerocity" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Aerocity (Near Airport)
                    </Link>
                    <Link href="/spa-in-lajpat-nagar" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Lajpat Nagar (South Delhi)
                    </Link>
                    <Link href="/spa-in-mahipalpur" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Mahipalpur (24/7)
                    </Link>
                    <Link href="/spa-in-connaught-place" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Connaught Place (Central)
                    </Link>
                    <Link href="/spa-in-gurgaon" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Gurgaon (Cyber City)
                    </Link>
                    <Link href="/spa-in-noida" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Noida (Sector 18)
                    </Link>
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

                {/* Bottom CTA Banner */}
                <section className="rounded-[24px] bg-gradient-to-r from-[#9c5232] to-[#7a391e] p-8 text-white shadow-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                    Reserve Your Premium Spa Session Today
                  </h2>
                  <p className="mt-3 text-amber-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Treat your body to Delhi NCR&apos;s best wellness therapies. Certified Russian and Indian therapists,
                    attached hot showers, and introductory offers from just ₹1499.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/918799716197?text=Hi%2C%20I%20would%20like%20to%20book%20a%20spa%20session%20in%20Delhi%20NCR.%20Please%20share%20today%27s%20available%20slots."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-7 py-3 font-bold text-[#9c5232] transition hover:bg-amber-50 shadow-md"
                    >
                      Book on WhatsApp (24/7)
                    </a>
                    <Link
                      href="/outlets"
                      className="rounded-full border border-white px-7 py-3 font-semibold hover:bg-white/10 transition"
                    >
                      View All Outlets
                    </Link>
                  </div>
                </section>

              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                {/* Special Offer Card */}
                <div className="rounded-2xl border border-amber-200 bg-[#fffaf5] p-6 shadow-sm text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    Limited Time Deal
                  </span>
                  <h3 className="text-xl font-bold text-[#2b1810] mt-1 font-serif">
                    First Visit Offer @ ₹1499
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Choose from Full Body, B2B, or Deep Tissue &bull; Attached hot shower &bull; 100% Private Suite
                  </p>
                  <a
                    href="https://wa.me/918799716197?text=Hi%2C%20I%20want%20to%20claim%20the%201499%20first%20visit%20offer%20for%20spa%20services."
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
