import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image: "/images/i1.webp",
    title: "12+ Spa Outlets",
    description: (
      <>
        Your convenience shouldn&apos;t be location-based, and therefore,{" "}
        <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> has established
        over 12 luxury spa outlets in Delhi and NCR. Whether you wish to indulge in a refreshing{" "}
        <Link href="/full-body-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Body Massage in Delhi
        </Link>
        , a high-end{" "}
        <Link href="/spa-in-paharganj" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Russian spa in Paharganj
        </Link>
        , or a peaceful retreat at our{" "}
        <Link href="/spa-in-dwarka" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Russian spa in Dwarka
        </Link>
        , you will always receive the same level of convenience and care. We also offer full night spa services across Delhi.
      </>
    ),
  },
  {
    image: "/images/i2.webp",
    title: "24/7 Support Available",
    description: (
      <>
        That is why <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> maintains
        dedicated 24/7 customer care. We understand that stress can arise anytime without any time limit, it is stuck in
        your mind, and sometimes you need a good spa in Delhi. If you are looking to book an evening{" "}
        <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Nuru massage in Delhi
        </Link>
        , an early morning appointment, or just need assistance in selecting the appropriate therapy, our staff will be
        present to help you 24/7.
      </>
    ),
  },
  {
    image: "/images/i3.webp",
    title: "Luxury Massage",
    description: (
      <>
        From traditional Russian techniques to the very popular full body massage in Delhi, each therapy is meant to relax
        your body, reduce stress, and bring back your vitality. In our{" "}
        <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> parlours in Delhi, there is emphasis
        laid on total relaxation, 100% hygiene, and peace of mind. If you happen to be in NCR, our{" "}
        <Link href="/spa-in-gurgaon" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          Russian spa in Gurgaon
        </Link>{" "}
        also has special therapies that are meant to provide you with full comfort.
      </>
    ),
  },
  {
    image: "/images/i4.webp",
    title: "Massage Therapists",
    description: (
      <>
        We provide different types of therapy, such as oil massage, deep tissue massage, and{" "}
        <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          nuru massage in Delhi
        </Link>
        . At our{" "}
        <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
          B2B spa in Delhi
        </Link>
        , too, you can anticipate the same concern and professionalism, so every visit is one to cherish. We have Indian to
        Russian, Thai, Afghani and Uzbek therapists. So you get an international massage experience in Delhi by our international therapists at{" "}
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
            When you need relaxation and stress relief, there&apos;s nothing quite like a good massage at a reputable Russian spa in Delhi.
            At <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong>, we are one of the most trusted{" "}
            <Link href="/outlets" className="text-[#9c5232] hover:text-[#834329] font-medium underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
              Spa in Defence Colony
            </Link>{" "}
            and Delhi for genuine massage service, with a combination of traditional massage techniques and contemporary comfort. We have 12+ Spa
            outlets. Whenever you are looking for{" "}
            <Link href="/b2b-massage-in-delhi" className="text-[#9c5232] hover:text-[#834329] font-medium underline decoration-[#9c5232]/40 hover:decoration-[#834329] transition-colors">
              B2B spa in Delhi
            </Link>{" "}
            with full service contact us for booking.
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
