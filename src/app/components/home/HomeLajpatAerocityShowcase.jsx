import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomeLajpatAerocityShowcase() {
  return (
    <div className="bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 border-t border-gray-100">
      {/* Block 1: Russian Spa in Lajpat Nagar (Text Left, Image Right) */}
      <section aria-labelledby="lajpat-block-heading" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Special Discount
            </span>
            <h2
              id="lajpat-block-heading"
              className="mt-2.5 font-title text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#2b1810] leading-tight tracking-tight"
            >
              Recharge your whole body At Russian Spa in Lajpat Nagar
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#7a9a60] tracking-wide">
              Premium Spa Ambience
            </p>

            <p className="mt-4 text-sm sm:text-[14.5px] text-gray-600 leading-relaxed font-light">
              We make you feel fresh at our{" "}
              <Link href="/spa-in-lajpat-nagar" className="font-medium text-gray-900 hover:text-[#7a9a60] transition-colors underline decoration-gray-300">
                Russian Spa in Lajpat Nagar
              </Link>{" "}
              where we treat you head to toe. Offering our professionals in the field, we practice massage techniques and the
              use of high-quality oils to alleviate stress, pain in the body, and everyday fatigue. There is the calm environment,
              low-key music, and clean individual rooms that make you feel safe and at ease. Every session will help to relax your
              muscles, enhance blood flow and relax your mind. Having light, stressful, and full of new energy, you will be prepared
              to live your day positively after your massage. Our Russian girl in Delhi gives you full satisfaction.
            </p>

            <div className="mt-6">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#0084c8] hover:bg-[#0070aa] text-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaTelegramPlane className="text-base" /> SEE PROFILES
              </a>
            </div>
          </div>

          {/* Right: Image with Asymmetric Arch */}
          <div className="relative aspect-[4/3] rounded-tl-[60px] sm:rounded-tl-[80px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group">
            <Image
              src="/images/lajpat-recharge-ambience.jpg"
              alt="Recharge your whole body at Russian Spa in Lajpat Nagar - Premium Spa Ambience"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Block 2: Russian Spa in Aerocity Delhi (Image Left, Text Right) */}
      <section aria-labelledby="aerocity-block-heading" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Image with Asymmetric Arch */}
          <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-tl-[60px] sm:rounded-tl-[80px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group">
            <Image
              src="/images/aerocity-5star-experience.jpg"
              alt="Russian Spa in Aerocity Delhi 5 Star Hotel Spa Experience"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500">
              5 Star Hotel Spa in Aerocity
            </span>
            <h2
              id="aerocity-block-heading"
              className="mt-2.5 font-title text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#2b1810] leading-tight tracking-tight"
            >
              How Russian Spa in Aerocity Delhi Gives 5 Star Experience
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#7a9a60] tracking-wide">
              International Therapists
            </p>

            <p className="mt-4 text-sm sm:text-[14.5px] text-gray-600 leading-relaxed font-light">
              Want a relaxing B2B massage in Delhi with a luxury ambiance? Visit the{" "}
              <Link href="/spa-in-aerocity" className="font-medium text-gray-900 hover:text-[#7a9a60] transition-colors underline decoration-gray-300">
                Russian spa Aerocity
              </Link>
              , where we offer 5-star hotel spa service in Delhi. Whenever you are near IGI Delhi airport and looking for luxury spa
              service. Book a spa session in Aerocity with a Delhi Russian Spa. Our trusted and verified therapists come to your hotel
              room. Our first visit offer started at just 1499 at spa outlets. Our Russian spa in Aerocity offers popular therapies like
              b2b massage, nuru massage, sandwich massage, or couples massage with 100% private and safe service. We focus on proper
              hygiene and cleanliness during your session. For next level benefits and freshness try our female to male massage in
              Aerocity by Russian therapists. Book full night spa in Aerocity at 5 star hotels.
            </p>

            <div className="mt-6">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#0084c8] hover:bg-[#0070aa] text-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaTelegramPlane className="text-base" /> SEE PROFILES
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

