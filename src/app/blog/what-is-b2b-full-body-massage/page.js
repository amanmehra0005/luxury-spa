import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import { Breadcrumbs } from "../../components/BlogComponents";

export const metadata = {
  title: "What is B2B Massage in Delhi? Process, Price & Safety (2026)",
  description:
    "Complete 2026 guide to B2B massage in Delhi: what to expect, step-by-step process, health benefits, transparent prices from ₹1499, and safety tips across 12+ luxury outlets. Read now!",
  keywords: [
    "what is b2b massage in delhi",
    "b2b full body massage",
    "b2b massage price delhi",
    "b2b massage process",
    "b2b massage benefits",
    "b2b massage aerocity lajpat nagar",
    "b2b spa delhi",
  ],
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/blog/what-is-b2b-full-body-massage",
  },
  openGraph: {
    title: "What is B2B Massage in Delhi? Full Body Process, Price & Safety Guide (2026)",
    description:
      "Learn what a B2B full body massage is, how it works in Delhi spas, pricing from ₹1499, benefits, safety tips, and what beginners should know.",
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
    { "@type": "ListItem", position: 3, name: "What is B2B Massage in Delhi?", item: "https://www.luxuryrussianspa.com/blog/what-is-b2b-full-body-massage" },
  ],
};

const faqs = [
  {
    question: "What is a B2B Full Body Massage?",
    answer:
      "A B2B (Body-to-Body) massage is an immersive relaxation therapy where the therapist uses warm aromatic oils and rhythmic body glides alongside traditional hand strokes to deliver deep, continuous stress relief.",
  },
  {
    question: "How much does a B2B massage cost in Delhi?",
    answer:
      "At Luxury Russian Spa outlets across Delhi NCR, first-visit introductory offers start from ₹1499 for a 60-minute session. In-room 5-star hotel sessions in Aerocity or Central Delhi start at ₹14,999 for 90 minutes with certified Russian therapists.",
  },
  {
    question: "What is the difference between B2B massage and Nuru massage?",
    answer:
      "B2B massage traditionally uses warm botanical oils for fluid, rhythmic bodywork. Nuru massage originates in Japan and uses a specialized slippery, water-soluble seaweed gel that requires warm water to rinse off.",
  },
  {
    question: "Is B2B massage safe and private in Delhi?",
    answer:
      "Yes. When booked at a reputable luxury wellness centre like Luxury Russian Spa, sessions take place in 100% private, sanitized suites equipped with attached hot showers, fresh linens, and certified female therapists.",
  },
  {
    question: "What should I wear or prepare before a B2B session?",
    answer:
      "Comfortable disposable attire is provided in your private suite. We recommend taking a quick warm shower before the session begins to open your pores and drinking plenty of water beforehand.",
  },
  {
    question: "Can beginners book a B2B massage in Delhi?",
    answer:
      "Absolutely. Beginners can simply inform the front desk or therapist of their preferred pressure level (soft, medium, or firm). The therapist will adjust every stroke to your comfort.",
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

const benefits = [
  {
    title: "Deep Mental Calm",
    description: "Continuous gliding strokes soothe the central nervous system, helping eliminate work stress and anxiety.",
  },
  {
    title: "Total Muscle Relaxation",
    description: "Warm herbal oils soften stubborn muscle knots across the back, neck, shoulders, and legs.",
  },
  {
    title: "Enhanced Blood Circulation",
    description: "Long, rhythmic body movements stimulate healthy blood and lymphatic flow throughout the body.",
  },
  {
    title: "Skin Hydration & Glow",
    description: "Premium cold-pressed essential oils nourish dry skin, leaving it soft, supple, and glowing.",
  },
  {
    title: "Better Sleep Quality",
    description: "Releasing chronic tension helps your body transition into deep, restorative REM sleep naturally.",
  },
  {
    title: "Post-Travel Recovery",
    description: "An ideal therapy for travelers arriving at IGI Delhi Airport suffering from long-flight fatigue and jet lag.",
  },
];

const relatedBlogs = [
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
  {
    title: "Thai Massage in Delhi: Health Benefits & Prices",
    href: "/blog/thai-massage-does-to-your-body",
    image: "/images/thaimassage1.png",
  },
];

export default function B2BMassageBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-what-is-b2b-full-body-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema-blog-what-is-b2b-full-body-massage"
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
              { label: "What is B2B Massage in Delhi?" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            
            {/* Header Area */}
            <div className="mb-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5232]">
                Delhi Wellness &bull; Massage Guide 2026
              </p>

              <h1 className="text-3xl font-bold leading-tight text-[#2b1810] sm:text-4xl lg:text-5xl font-serif">
                What is B2B Massage in Delhi? Full Body Process, Price &amp; Safety Guide
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Luxury Russian Spa Team</span>
                <span>•</span>
                <span>Updated November 2026</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span className="text-[#9c5232] font-semibold">Verified by Senior Therapists</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[400px]">
              <Image
                src="/images/b2b-blog-banner.png"
                alt="What is B2B Full Body Massage in Delhi - Luxury Russian Spa"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Quick Summary / Booking Box */}
            <div className="mb-10 rounded-2xl bg-[#fcfbf7] border border-[#9c5232]/25 p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    Quick Summary &amp; Booking Info
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2b1810] mt-1 font-serif">
                    Experience B2B Massage in Delhi from ₹1499
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
                    Available across 12+ luxury spa outlets in Aerocity, Lajpat Nagar, Mahipalpur, Connaught Place,
                    and Gurgaon. Private suites with attached hot shower &bull; Russian &amp; Indian female therapists &bull; 24/7 Hotel Visits.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                  <a
                    href="https://wa.me/919990193385?text=Hi%2C%20I%20want%20to%20book%20a%20B2B%20Massage%20session%20in%20Delhi.%20Please%20share%20today%27s%20offers%20and%20outlet%20locations."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-7 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Book on WhatsApp
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

            {/* Main Grid: Content + Sidebar */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="space-y-8">
                
                {/* Intro Section */}
                <section className="space-y-4">
                  <p className="text-lg leading-8 text-gray-700 font-normal">
                    If you have been browsing wellness menus in Delhi NCR, you have likely come across the term{" "}
                    <strong>B2B Full Body Massage</strong>. It has become one of the most requested relaxation therapies
                    among busy professionals, corporate travelers, and locals seeking deep relief from physical exhaustion.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Unlike standard Swedish or deep-tissue therapies where the therapist works exclusively with hand pressure,
                    a <strong>Body-to-Body (B2B) massage</strong> incorporates smooth, full-length body glides using warm botanical
                    oils. This creates a continuous, flowing wave of relaxation that relieves muscular tension faster and more
                    thoroughly than conventional therapies.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    In this comprehensive guide, we explain everything you need to know before booking: how the process works
                    step-by-step, transparent pricing in Delhi, what oils are used, health benefits, and safety standards to look for.
                  </p>
                </section>

                {/* Table of Contents */}
                <section className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
                  <h2 className="mb-4 text-xl font-bold text-amber-900 font-serif">
                    Table of Contents
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li><a href="#what-is-b2b" className="hover:text-amber-800">• What is B2B Massage?</a></li>
                    <li><a href="#delhi-pricing" className="hover:text-amber-800">• Price of B2B Massage in Delhi</a></li>
                    <li><a href="#step-by-step" className="hover:text-amber-800">• Step-by-Step Session Process</a></li>
                    <li><a href="#b2b-vs-nuru" className="hover:text-amber-800">• B2B vs Nuru vs Swedish</a></li>
                    <li><a href="#benefits" className="hover:text-amber-800">• Key Health &amp; Mind Benefits</a></li>
                    <li><a href="#safety-hygiene" className="hover:text-amber-800">• Hygiene &amp; Privacy Standards</a></li>
                    <li><a href="#delhi-locations" className="hover:text-amber-800">• Where to Book in Delhi NCR</a></li>
                    <li><a href="#faqs" className="hover:text-amber-800">• Frequently Asked Questions</a></li>
                  </ul>
                </section>

                {/* Section 1: What is B2B */}
                <section id="what-is-b2b" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    What is a B2B Full Body Massage?
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    B2B stands for <em>Body-to-Body</em>. During this session, certified female therapists apply warm, aromatic
                    massage oils across the client&apos;s back, shoulders, and legs. Using synchronized gliding motions with their
                    forearms, palms, and torso, the therapist applies even, soothing pressure across long muscle chains.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    The fluid motion eliminates the choppy start-stop feeling of regular massages. Because body contact is
                    distributed across larger surface areas, muscles release tension quickly without sharp or painful pressure.
                    It is an immersive sensory treatment designed for complete stress recovery.
                  </p>
                  <div className="relative h-[260px] overflow-hidden rounded-[20px] shadow-sm">
                    <Image
                      src="/images/b2b-massage.jpg"
                      alt="B2B Full Body Massage Session in Delhi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </section>

                {/* Section 2: Delhi Pricing Table */}
                <section id="delhi-pricing" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    How Much Does a B2B Massage Cost in Delhi?
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Pricing in Delhi NCR depends on the setting (spa outlet vs. 5-star hotel in-room visit), duration, and whether
                    you choose an Indian or international Russian therapist. At{" "}
                    <strong className="text-gray-900 font-semibold">Luxury Russian Spa</strong>, all rates are fixed and
                    transparent, with zero hidden charges:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-amber-200 shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#2b1810] text-white">
                        <tr>
                          <th className="p-4 font-semibold">Package Type</th>
                          <th className="p-4 font-semibold">Duration</th>
                          <th className="p-4 font-semibold">Therapist</th>
                          <th className="p-4 font-semibold">Price (INR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100 bg-white">
                        <tr className="bg-amber-50/50">
                          <td className="p-4 font-bold text-[#9c5232]">First Visit Offer (Outlet)</td>
                          <td className="p-4">60 Minutes</td>
                          <td className="p-4">Trained Therapist</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Standard B2B Session</td>
                          <td className="p-4">60 Minutes</td>
                          <td className="p-4">Indian Senior Therapist</td>
                          <td className="p-4 font-semibold">₹2,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">VIP Russian B2B Session</td>
                          <td className="p-4">60 Minutes</td>
                          <td className="p-4">Certified Russian Therapist</td>
                          <td className="p-4 font-semibold">₹4,999</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Overnight Full Night Spa</td>
                          <td className="p-4">Overnight</td>
                          <td className="p-4">Russian / International</td>
                          <td className="p-4 font-semibold">₹14,999</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">5-Star Hotel In-Room Visit</td>
                          <td className="p-4">90 Minutes</td>
                          <td className="p-4">Russian / European</td>
                          <td className="p-4 font-semibold">₹14,999</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    *Every outlet session includes a 100% private air-conditioned suite with an attached hot shower, fresh linen, and complimentary herbal tea.
                  </p>
                </section>

                {/* Section 3: Step-by-Step Process */}
                <section id="step-by-step" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Step-by-Step: What Happens During a B2B Massage Session?
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    If this is your first time booking a B2B session, here is what you can expect from start to finish at our Delhi outlets:
                  </p>

                  <div className="space-y-3.5">
                    {[
                      {
                        step: "1. Consultation & Selection",
                        desc: "Upon arrival, our reception assists you in selecting your preferred therapist (Russian or Indian) and confirms your session duration and oil choice (Lavender, Almond, or Sesame).",
                      },
                      {
                        step: "2. Private Suite & Warm Shower",
                        desc: "You are escorted to your private suite with soft ambient lighting and soothing music. You take a quick warm shower to cleanse the skin and relax tight muscles.",
                      },
                      {
                        step: "3. Warm Oil Application",
                        desc: "You recline comfortably on the sanitized massage table. The therapist warms the botanical oil in her hands and applies it across the back, shoulders, and legs.",
                      },
                      {
                        step: "4. Full Body-to-Body Glides",
                        desc: "Using continuous, rhythmic glides, the therapist applies gentle to medium pressure, releasing knot tension and stimulating full-body circulation.",
                      },
                      {
                        step: "5. Post-Massage Hot Shower & Refreshment",
                        desc: "After the session ends, you take a refreshing hot shower to rinse off the oil. Clean towels, body wash, and fresh herbal tea are provided before you leave.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
                        <h3 className="font-bold text-[#9c5232] text-lg font-serif">{item.step}</h3>
                        <p className="text-gray-700 mt-1.5 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 4: Comparison */}
                <section id="b2b-vs-nuru" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    B2B vs Nuru vs Swedish Massage: What&apos;s the Difference?
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Clients often ask how B2B compares to other popular massages on our menu:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-amber-200 bg-white p-5">
                      <h3 className="font-bold text-[#9c5232] text-lg">B2B Massage</h3>
                      <p className="text-xs text-gray-500 mt-1">Warm Botanical Oil</p>
                      <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                        Uses warm therapeutic oils with rhythmic body contact. Best for deep relaxation and mental fatigue.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-white p-5">
                      <h3 className="font-bold text-[#9c5232] text-lg">Nuru Massage</h3>
                      <p className="text-xs text-gray-500 mt-1">Seaweed Gel</p>
                      <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                        Uses thick, slippery Nuru gel on a waterproof mattress. Intensely slippery and refreshing.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-white p-5">
                      <h3 className="font-bold text-[#9c5232] text-lg">Swedish Massage</h3>
                      <p className="text-xs text-gray-500 mt-1">Light Hand Strokes</p>
                      <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                        Traditional hand strokes including effleurage and petrissage. Focuses strictly on standard muscular relief.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Benefits */}
                <section id="benefits" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Key Health and Wellness Benefits
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {benefits.map((b, idx) => (
                      <div key={idx} className="rounded-xl border border-amber-100 bg-[#fffdfa] p-5 shadow-sm">
                        <h3 className="font-bold text-amber-950 font-serif text-lg">{b.title}</h3>
                        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{b.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 6: Safety & Hygiene */}
                <section id="safety-hygiene" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Safety, Discretion &amp; Hygiene Standards
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Your peace of mind and hygiene are fundamental. At Luxury Russian Spa, we follow strict operational guidelines:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                    <li><strong>Sanitized Private Rooms:</strong> Every room is sanitized after every session with fresh disposable bedsheets and towels.</li>
                    <li><strong>Attached Hot Showers:</strong> Every room features its own hot shower, so you never have to step into shared corridors.</li>
                    <li><strong>Certified Therapists:</strong> All therapists are professionally trained in anatomy, customer etiquette, and wellness techniques.</li>
                    <li><strong>100% Discretion:</strong> Client contact details and booking information remain completely confidential.</li>
                  </ul>
                </section>

                {/* Section 7: Where to Book */}
                <section id="delhi-locations" className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Where to Book B2B Massage in Delhi NCR
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    We maintain 12+ conveniently located outlets across Delhi NCR and provide 24/7 in-room 5-star hotel visits:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-semibold">
                    <Link href="/spa-in-aerocity" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Spa in Aerocity (IGI)
                    </Link>
                    <Link href="/spa-in-lajpat-nagar" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Spa in Lajpat Nagar
                    </Link>
                    <Link href="/spa-in-mahipalpur" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Spa in Mahipalpur
                    </Link>
                    <Link href="/spa-in-connaught-place" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Spa in Connaught Place
                    </Link>
                    <Link href="/spa-in-gurgaon" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Spa in Gurgaon
                    </Link>
                    <Link href="/spa-in-noida" className="p-3 bg-amber-50 rounded-xl text-[#9c5232] hover:bg-amber-100 transition text-center">
                      Spa in Noida
                    </Link>
                  </div>
                </section>

                {/* Section 8: FAQs */}
                <section id="faqs" className="space-y-5 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Frequently Asked Questions About B2B Massage
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
                    Book Your B2B Massage Session Today
                  </h2>
                  <p className="mt-3 text-amber-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Leave your stress behind and enjoy genuine bodywork with certified Russian and Indian therapists.
                    Claim our limited-time First Visit Offer starting from just ₹1499.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/919990193385?text=Hi%2C%20I%20would%20like%20to%20book%20a%20B2B%20massage%20in%20Delhi.%20Please%20confirm%20availability%20and%20offers."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-7 py-3 font-bold text-[#9c5232] transition hover:bg-amber-50 shadow-md"
                    >
                      Chat on WhatsApp (24/7)
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
                {/* Booking Card */}
                <div className="rounded-2xl border border-amber-200 bg-[#fffaf5] p-6 shadow-sm text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    Exclusive Offer
                  </span>
                  <h3 className="text-xl font-bold text-[#2b1810] mt-1 font-serif">
                    First Visit Offer @ ₹1499
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Enjoy full body relaxation with attached hot shower &bull; 100% Private Room &bull; Sanitized Linen
                  </p>
                  <a
                    href="https://wa.me/919990193385?text=Hi%2C%20I%20want%20to%20claim%20the%201499%20first%20visit%20offer%20for%20B2B%20massage."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white py-3 text-sm font-bold shadow-md transition"
                  >
                    Claim Offer on WhatsApp
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
