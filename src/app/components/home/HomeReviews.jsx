import Image from "next/image";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mr. Mohit",
    role: "Corporate Employee",
    avatar: "/images/testimonials/mohit.webp",
    rating: 5,
    text: '"Best Russian spa in Dwarka. Therapists are professional and ambiance is calming."',
  },
  {
    name: "Rithesh Sharma",
    role: "MNC Company Manager",
    avatar: "/images/testimonials/rithesh.webp",
    rating: 4,
    text: '"The Russian spa in mahipalpur with Afghani and Russian staff exceeded my expectations. Clean, professional, and extremely relaxing."',
  },
  {
    name: "Dr. Panchal",
    role: "Businessman",
    avatar: "/images/testimonials/panchal.webp",
    rating: 5,
    text: '"I visited Russian spa in Lajpat Nagar. excellent service, professional Russian therapists. Felt refreshed and relaxed immediately."',
  },
  {
    name: "Vikram Choudhary",
    role: "Corporate Employee",
    avatar: "/images/testimonials/vikram.webp",
    rating: 5,
    text: '"The signature massage is a game changer! Perfect blend of techniques. The staff is courteous and the hygiene standards are top-notch. Best spa near IGI Airport!"',
  },
  {
    name: "Suresh Yadav",
    role: "Wellness Enthusiast",
    avatar: "/images/testimonials/meera.webp",
    rating: 5,
    text: '"I\'ve visited many spas in Delhi, but Luxury Russian Spa stands out. Authentic techniques, premium oils, and the most relaxing ambiance. Worth every rupee."',
  },
  {
    name: "Amit Kapoor",
    role: "Creator",
    avatar: "/images/testimonials/amit.webp",
    rating: 5,
    text: '"Fantastic experience from booking to checkout. The therapist listened to my problem areas and customized the massage accordingly. Five stars without hesitation!"',
  },
];

// Duplicate list for seamless infinite continuous scroll loop
const marqueeReviews = [...reviews, ...reviews];

export default function HomeReviews() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-[#faf8f5] py-16 md:py-24 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Script/Cursive style like the image */}
        <h2
          id="reviews-heading"
          className="font-serif italic text-3xl sm:text-4xl md:text-[42px] leading-snug font-bold text-[#2b1810]"
        >
          Our Client&apos;s Said About Luxury Russian Spa
        </h2>

        {/* Subtitle quote text */}
        <p className="mt-3 text-xs sm:text-[13px] md:text-sm text-gray-700 font-medium">
          &ldquo;Visited <strong className="font-bold text-gray-900">Russian Spa in Aerocity</strong>. Highly recommended for authentic spa experience.&rdquo;
        </p>
      </div>

      {/* Infinite Continuous Marquee Stream */}
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] py-4 px-3">
          {marqueeReviews.map((rev, idx) => (
            <article
              key={idx}
              className="w-[310px] sm:w-[360px] md:w-[380px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 text-left flex flex-col justify-between border border-gray-100/90 hover:-translate-y-1.5"
            >
              <div>
                {/* Centered Stars */}
                <div className="flex justify-center items-center gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 sm:size-[18px] ${
                        i < rev.rating
                          ? "fill-[#f59e0b] text-[#f59e0b]"
                          : "text-[#f59e0b] fill-transparent"
                      }`}
                    />
                  ))}
                </div>

                {/* Centered Quote Text */}
                <p className="text-center text-xs sm:text-[13px] md:text-sm text-gray-600 leading-relaxed font-normal min-h-[64px] flex items-center justify-center">
                  {rev.text}
                </p>
              </div>

              {/* Bottom Row: Avatar / Initials Badge + Name & Role + Right Quote Icon */}
              <div className="mt-6 pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {rev.avatar ? (
                    <div className="relative size-11 sm:size-12 rounded-full overflow-hidden shadow-sm ring-2 ring-gray-100 shrink-0">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="size-11 sm:size-12 rounded-full bg-gradient-to-br from-[#9c5232] to-[#7e3b22] text-white font-bold text-xs sm:text-sm font-sans flex items-center justify-center shadow-sm shrink-0 ring-2 ring-amber-100/50">
                      {rev.initials}
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-sm sm:text-[15px] text-[#2b1810] leading-tight">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-normal mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                </div>

                {/* Decorative quote icon */}
                <Quote className="size-7 sm:size-8 text-sky-200/90 rotate-180 shrink-0" strokeWidth={1.5} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
