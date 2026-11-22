import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import { Breadcrumbs } from "../../components/BlogComponents";

export const metadata = {
  title: "Thai Massage in Delhi: Health Benefits & Price Guide (2026)",
  description:
    "Discover authentic Thai massage in Delhi: assisted yoga stretching, acupressure benefits, pricing from ₹1499, and certified Thai therapists across 12+ luxury spa outlets. Read our 2026 guide!",
  keywords: [
    "thai massage in delhi",
    "thai massage benefits",
    "thai massage price delhi",
    "what is thai massage",
    "thai stretching massage",
    "best thai spa in delhi",
    "thai massage near me",
  ],
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/blog/thai-massage-does-to-your-body",
  },
  openGraph: {
    title: "Thai Massage in Delhi: Health Benefits, Body Stretching, Price & What to Expect",
    description:
      "Learn how authentic Thai massage works in Delhi, its unique yoga-like stretching benefits, price list starting from ₹1499, and what happens in a session.",
    images: ["https://www.luxuryrussianspa.com/images/thaimassage1.png"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/thaimassage1.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.luxuryrussianspa.com/blog" },
    { "@type": "ListItem", position: 3, name: "Thai Massage in Delhi", item: "https://www.luxuryrussianspa.com/blog/thai-massage-does-to-your-body" },
  ],
};

const faqs = [
  {
    question: "What is an authentic Thai massage?",
    answer:
      "Traditional Thai massage (Nuad Bo-Rarn) combines assisted yoga-like stretching, deep rhythmic acupressure along the body's energy pathways (Sen lines), and joint mobilization. Unlike Western massages, it is performed fully clothed without heavy oil on a firm, comfortable mattress.",
  },
  {
    question: "How much does a Thai massage cost in Delhi?",
    answer:
      "At Luxury Russian Spa outlets across Delhi NCR, introductory first-visit packages for authentic Thai massage start from ₹1499 for 60 minutes. Standard 90-minute full body sessions with certified therapists range from ₹2,499 to ₹3,999.",
  },
  {
    question: "Is Thai massage painful?",
    answer:
      "No. While Thai massage involves firm compression and passive stretching, it should never cause sharp pain. A certified therapist will check in with you continuously to tailor the stretch and pressure to your body's flexibility.",
  },
  {
    question: "What should I wear during a Thai massage?",
    answer:
      "You do not need to bring anything. The spa provides clean, loose-fitting cotton clothing (Thai pants and top) designed to allow your limbs to stretch freely during the session.",
  },
  {
    question: "How is Thai massage different from Russian oil massage?",
    answer:
      "Russian massage uses warm botanical oils with continuous flowing strokes and heat therapy on bare skin for deep relaxation. Thai massage uses zero oil and active body stretching to improve physical flexibility, joint mobility, and release postural stiffness.",
  },
  {
    question: "Where can I book Thai massage in Delhi?",
    answer:
      "Luxury Russian Spa offers certified Thai and international therapists at 12+ outlets including Aerocity, Lajpat Nagar, Connaught Place, and Gurgaon, as well as 24/7 5-star hotel visits.",
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
    title: "Relieves Desk & Lower Back Stiffness",
    description: "Deep stretches decompress the spine, open tight hip flexors, and release pressure caused by long hours sitting.",
  },
  {
    title: "Dramatically Increases Flexibility",
    description: "Assisted passive stretching lengthens shortened muscle fibers and increases joint range of motion safely.",
  },
  {
    title: "Boosts Energy & Clears Fatigue",
    description: "Stimulating traditional Sen energy lines releases sluggish blockages, leaving you energized rather than sleepy.",
  },
  {
    title: "Eases Chronic Tension Headaches",
    description: "Targeted acupressure across the neck, temples, and shoulders relieves myofascial triggers that trigger migraines.",
  },
  {
    title: "Improves Blood & Lymphatic Flow",
    description: "Gentle rocking and rhythmic compression accelerate circulation and assist the body in flushing metabolic waste.",
  },
  {
    title: "Reduces Cortisol & Stress",
    description: "Synchronized deep breathing and slow, rhythmic compression lower heart rate and reduce stress hormones naturally.",
  },
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

export default function ThaiMassageBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-thai-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema-blog-thai-massage"
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
              { label: "Thai Massage in Delhi" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            
            {/* Header */}
            <div className="mb-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9c5232]">
                Traditional Bodywork &bull; Delhi Health Guide
              </p>

              <h1 className="text-3xl font-bold leading-tight text-[#2b1810] sm:text-4xl lg:text-5xl font-serif">
                Thai Massage in Delhi: Health Benefits, Body Stretching, Price &amp; What to Expect
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Luxury Russian Spa Team</span>
                <span>•</span>
                <span>Updated November 2026</span>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span className="text-[#9c5232] font-semibold">Authentic Thai Wellness</span>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[400px]">
              <Image
                src="/images/thaimassage1.png"
                alt="Authentic Thai Massage in Delhi - Luxury Russian Spa"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Quick Summary Box */}
            <div className="mb-10 rounded-2xl bg-[#fcfbf7] border border-[#9c5232]/25 p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    At A Glance
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2b1810] mt-1 font-serif">
                    Authentic Thai Yoga Massage from ₹1499
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
                    Zero-oil passive stretching and acupressure delivered by certified therapists. Ideal for stiff backs,
                    desk fatigue, and tight hamstrings. Available across 12+ luxury outlets in Delhi NCR.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                  <a
                    href="https://wa.me/919990193385?text=Hi%2C%20I%20want%20to%20book%20an%20authentic%20Thai%20Massage%20session%20in%20Delhi.%20Please%20share%20available%20slots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-7 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Book on WhatsApp
                  </a>
                  <Link
                    href="/thai-massage-in-delhi"
                    className="inline-flex items-center justify-center rounded-full border border-[#9c5232] text-[#9c5232] hover:bg-[#9c5232]/10 px-6 py-2.5 text-xs font-bold transition-all text-center"
                  >
                    View Service Page
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Layout */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="space-y-8">
                
                {/* Intro */}
                <section className="space-y-4">
                  <p className="text-lg leading-8 text-gray-700 font-normal">
                    Often nicknamed <em>&ldquo;lazy man&apos;s yoga&rdquo;</em>, <strong>Thai Massage</strong> is one of the
                    world&apos;s most revered healing arts. If you spend your work days sitting at a desk, battling Delhi traffic,
                    or feeling persistent stiffness in your lower back and shoulders, Thai massage offers targeted physical relief
                    that regular oil rubs simply cannot achieve.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Instead of lying passive on an oily massage table, you are positioned on a comfortable floor mat while
                    a certified therapist uses their hands, thumbs, elbows, knees, and feet to gently compress muscle lines and
                    stretch your entire body into therapeutic yoga postures.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Below, we review how Thai massage works, its medically proven benefits, pricing in Delhi, and what you should
                    know before your first appointment.
                  </p>
                </section>

                {/* Section: How Thai Massage Works */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    How Does Authentic Thai Massage Work?
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Rooted in Ayurvedic and traditional Chinese medicine, Thai massage works along the body&apos;s 10 primary energy
                    channels, known as <em>Sen lines</em>. When physical stress or poor posture creates blockages along these pathways,
                    muscles tighten and energy feels sluggish.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    The therapist systematically applies rhythmic palm and thumb compression to stimulate circulation and soften
                    myofascial tissue. Then, using leverage and body weight, the therapist guides your limbs into gentle, assisted
                    yoga stretches that open your chest, lengthen your hamstrings, and mobilize spinal discs safely.
                  </p>
                </section>

                {/* Section: Pricing Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Thai Massage Price in Delhi NCR (2026 Rates)
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    At <strong>Luxury Russian Spa</strong>, we believe authentic traditional therapy should be both premium and accessible:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-amber-200 shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#2b1810] text-white">
                        <tr>
                          <th className="p-4 font-semibold">Therapy Option</th>
                          <th className="p-4 font-semibold">Duration</th>
                          <th className="p-4 font-semibold">Focus Area</th>
                          <th className="p-4 font-semibold">Price (INR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100 bg-white">
                        <tr className="bg-amber-50/50">
                          <td className="p-4 font-bold text-[#9c5232]">First Visit Offer (Special)</td>
                          <td className="p-4">60 Minutes</td>
                          <td className="p-4">Full Body Acupressure &amp; Stretch</td>
                          <td className="p-4 font-bold text-emerald-700">₹1,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Classic Traditional Thai</td>
                          <td className="p-4">60 Minutes</td>
                          <td className="p-4">Sen Lines, Back &amp; Legs</td>
                          <td className="p-4 font-semibold">₹2,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Deep Thai Flexibility Session</td>
                          <td className="p-4">90 Minutes</td>
                          <td className="p-4">Full Body Spinal Decompression</td>
                          <td className="p-4 font-semibold">₹3,499</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Thai Herbal Compress (Pinda)</td>
                          <td className="p-4">90 Minutes</td>
                          <td className="p-4">Warm Steamed Herbal Poultice</td>
                          <td className="p-4 font-semibold">₹4,499</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section: Benefits Grid */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Top 6 Health Benefits for Mind and Body
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

                {/* Section: Thai vs Russian Massage */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Thai Massage vs. Russian Massage: Which is Right for You?
                  </h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Clients often ask whether they should book a Thai massage or a Russian oil massage:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-amber-200 bg-white p-5">
                      <h3 className="font-bold text-[#9c5232] text-lg">Choose Thai Massage If:</h3>
                      <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm text-gray-700">
                        <li>You suffer from joint stiffness and tight hips or hamstrings.</li>
                        <li>You want to feel energized, alert, and physically flexible.</li>
                        <li>You prefer a dry massage without oils on your hair or skin.</li>
                        <li>You want assisted stretches similar to deep yoga.</li>
                      </ul>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-white p-5">
                      <h3 className="font-bold text-[#9c5232] text-lg">Choose Russian Massage If:</h3>
                      <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm text-gray-700">
                        <li>You feel deep mental fatigue, anxiety, or insomnia.</li>
                        <li>You want soothing warm oils and rhythmic glide techniques.</li>
                        <li>You want private suites with an attached hot shower and hydrotherapy.</li>
                        <li>You seek deeply relaxing therapies like Nuru or B2B bodywork.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section: FAQs */}
                <section className="space-y-5">
                  <h2 className="text-2xl font-bold text-[#2b1810] font-serif">
                    Frequently Asked Questions About Thai Massage
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
                    Unlock Flexibility &amp; Free Your Body from Pain
                  </h2>
                  <p className="mt-3 text-amber-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Treat your back and joints to authentic Thai bodywork performed by certified therapists in clean, private suites.
                    First visit offers start from just ₹1499.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/919990193385?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Thai%20Massage%20session%20in%20Delhi%20at%201499."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-7 py-3 font-bold text-[#9c5232] transition hover:bg-amber-50 shadow-md"
                    >
                      Book on WhatsApp (24/7)
                    </a>
                    <Link
                      href="/spa-price-in-delhi"
                      className="rounded-full border border-white px-7 py-3 font-semibold hover:bg-white/10 transition"
                    >
                      View Price Menu
                    </Link>
                  </div>
                </section>

              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                {/* Special Offer Card */}
                <div className="rounded-2xl border border-amber-200 bg-[#fffaf5] p-6 shadow-sm text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c5232]">
                    Introductory Special
                  </span>
                  <h3 className="text-xl font-bold text-[#2b1810] mt-1 font-serif">
                    Thai Massage @ ₹1499
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Assisted yoga stretching &bull; Deep acupressure &bull; Private air-conditioned rooms &bull; Attached shower
                  </p>
                  <a
                    href="https://wa.me/919990193385?text=Hi%2C%20I%20want%20to%20claim%20the%201499%20first%20visit%20offer%20for%20Thai%20Massage."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-[#9c5232] hover:bg-[#834329] text-white py-3 text-sm font-bold shadow-md transition"
                  >
                    Claim ₹1499 Deal
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
