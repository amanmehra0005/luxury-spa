import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image: "/images/i1.webp",
    title: "12+ Spa Outlets",
    description: (
      <>
        Convenience matters, which is why{" "}
        <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> operates
        over 12 luxury spa outlets across Delhi, Gurgaon, and Noida. Whether you book a refreshing{" "}
        <Link href="/full-body-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Body Massage in Delhi
        </Link>
        , visit our high-end{" "}
        <Link href="/spa-in-paharganj" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Russian spa in Paharganj
        </Link>
        , or enjoy a tranquil retreat at our{" "}
        <Link href="/spa-in-dwarka" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Russian spa in Dwarka
        </Link>
        , you will always receive spotless hygiene and attentive therapist care. We also offer 24/7 full night spa services.
      </>
    ),
  },
  {
    image: "/images/i2.webp",
    title: "24/7 Support Available",
    description: (
      <>
        Stress does not follow business hours, so{" "}
        <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> maintains
        dedicated 24/7 customer assistance. Whether you wish to book an evening{" "}
        <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Nuru massage in Delhi
        </Link>
        , an early morning post-travel session, or need guidance choosing the ideal therapy,
        our team is always available to assist via WhatsApp or direct call.
      </>
    ),
  },
  {
    image: "/images/i3.webp",
    title: "Luxury Massage",
    description: (
      <>
        From traditional Russian deep-tissue techniques to soothing full-body Swedish strokes, every therapy is
        curated to alleviate tension and revive natural energy. Across our{" "}
        <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> parlours in Delhi, we maintain
        strict standards of cleanliness, private suites, and pure natural oils. Visiting NCR? Our{" "}
        <Link href="/spa-in-gurgaon" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Russian spa in Gurgaon
        </Link>{" "}
        offers the same five-star wellness experience.
      </>
    ),
  },
  {
    image: "/images/i4.webp",
    title: "Massage Therapists",
    description: (
      <>
        Choose from an extensive menu including essential oil therapies, hot stone relief, and authentic{" "}
        <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          nuru massage in Delhi
        </Link>
        . At our{" "}
        <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          B2B spa in Delhi
        </Link>
        , you will enjoy respectful, personalized care from certified Russian, European, Thai, and Indian therapists at{" "}
        <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong>.
      </>
    ),
  },
];

export default function HomeWhyBestSpa() {
  return (
    <section
      aria-labelledby="why-best-spa-heading"
      className="relative bg-gradient-to-b from-white via-[#fcfbf7] to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-amber-100/50 overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-100/30 via-orange-100/20 to-amber-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.28em] text-[#9c5232] mb-3">
            Luxury Russian Spa Delhi
          </span>
          <h2
            id="why-best-spa-heading"
            className="font-serif italic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-[#2b1810] leading-[1.2] tracking-tight"
          >
            Why We&apos;re the Best Spa in Delhi with Full Service
          </h2>

          <p className="mt-5 text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed font-normal">
            When you need genuine relaxation and deep stress relief, choosing the right Russian spa in Delhi makes all the difference.
            At <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong>, we have earned the trust of thousands of clients across{" "}
            <Link href="/spa-in-defence-colony" className="text-[#9c5232] hover:text-[#834329] font-medium underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
              Spa in Defence Colony
            </Link>{" "}
            and Greater Delhi by combining authentic international massage traditions with world-class hospitality. Explore our 12+ convenient
            outlets or contact us to book a premium{" "}
            <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] font-medium underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
              B2B spa in Delhi
            </Link>{" "}
            with complete privacy and round-the-clock service.
          </p>
        </div>

        {/* 4 Cards Grid matching reference */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 items-stretch">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-start border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Image Container - Clean transparent, no background color */}
              <div className="flex justify-center items-center h-20 mb-5">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={68}
                  height={68}
                  unoptimized
                  className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-center text-lg sm:text-[21px] font-bold text-[#2b1810] mb-3 group-hover:text-[#9c5232] transition-colors leading-snug">
                {card.title}
              </h3>

              {/* Body Text */}
              <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed text-center font-normal">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
