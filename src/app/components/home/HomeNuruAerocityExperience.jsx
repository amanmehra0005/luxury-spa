import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomeNuruAerocityExperience() {
  return (
    <div className="bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 border-t border-gray-100">
      {/* Block 1: Nuru Massage in Delhi (Text Left, Image Right) */}
      <section aria-labelledby="nuru-block-heading" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <div>
            <h2
              id="nuru-block-heading"
              className="font-title text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#2b1810] leading-tight tracking-tight"
            >
              Experience Nuru Massage in Delhi For Deep Relaxation
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#7a9a60] tracking-wide">
              Popular Nuru Massage
            </p>

            <p className="mt-4 text-sm sm:text-[14.5px] text-gray-600 leading-relaxed font-light">
              Nuru massage in Delhi is an intensely soothing therapy celebrated for total muscle relaxation and
              stress relief. At <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong>, certified
              Russian therapists use authentic seaweed-based nuru gel to glide smoothly across the body, releasing deep
              knots and mental fatigue. Whether you need post-flight recovery or a calming escape from a busy routine,
              our private suites in{" "}
              <Link href="/spa-in-aerocity" className="font-medium text-gray-900 hover:text-[#7a9a60] transition-colors underline decoration-gray-300">
                Aerocity
              </Link>
              ,{" "}
              <Link href="/spa-in-mahipalpur" className="font-medium text-gray-900 hover:text-[#7a9a60] transition-colors underline decoration-gray-300">
                Mahipalpur
              </Link>
              ,{" "}
              <Link href="/spa-in-gurgaon" className="font-medium text-gray-900 hover:text-[#7a9a60] transition-colors underline decoration-gray-300">
                Gurgaon
              </Link>{" "}
              and{" "}
              <Link href="/spa-in-lajpat-nagar" className="font-medium text-gray-900 hover:text-[#7a9a60] transition-colors underline decoration-gray-300">
                Lajpat Nagar
              </Link>{" "}
              provide the perfect setting. Book your Nuru massage near Delhi Airport 24/7 with first visit packages starting
              from just ₹1499.
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
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100 group">
                    <Image
                      src="/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"
                      alt="Deep tissue massage therapy at Luxury Russian Spa in Delhi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
          {/* <div className="relative aspect-[4/3] rounded-tl-[60px] sm:rounded-tl-[80px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group">
            <Image
              src="/images/nuru-massage-delhi-hero.jpg"
              alt="Experience Nuru Massage in Delhi For Deep Relaxation at Luxury Russian Spa"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div> */}
        </div>
      </section>

      {/* Block 2: What Guests Say (Image Left, Text Right) */}
      <section aria-labelledby="aerocity-review-heading" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Image with Asymmetric Arch */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100 group lg:order-1">
                    <Image
                      src="/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg"
                      alt="Candle-lit couple massage suite at Luxury Russian Spa in Delhi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

          {/* Right: Text */} 
          <div className="order-1 lg:order-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Special Discount
            </span>
            <h2
              id="aerocity-review-heading"
              className="mt-2.5 font-title text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#2b1810] leading-tight tracking-tight"
            >
              What Guests Say About Our Russian Spa in Aerocity?
            </h2>

            <p className="mt-4 text-sm sm:text-[14.5px] text-gray-600 leading-relaxed font-light">
              Our 24/7 Russian spa in Aerocity is the premier choice for transit travelers and hotel guests near
              IGI Delhi Airport. Day or night, our team is always ready to deliver five-star relaxation. Enjoy verified
              in-room massage service at Aerocity&apos;s luxury hotels without ever leaving the comfort of your room.
              With certified Russian, European, Thai, and Indian therapists,{" "}
              <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> guarantees pristine hygiene,
              discreet booking, and prompt arrival whenever you need complete full-body relaxation.
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

