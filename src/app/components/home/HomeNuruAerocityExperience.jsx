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
              Nuru massage in Delhi is a relaxing massage for your stress relief and mind relaxation.{" "}
              <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> offers special Russian therapists
              for your nuru massage in Delhi at 5-star hotels. We use authentic techniques and nuru gel during your relaxing
              nuru massage in Delhi with Russian therapists. Daily travel and fatigue give so much stress and body pain. But now
              is the time to invest some time in your body. Book a Nuru massage in Delhi just for ₹1499 at our spa outlets. We
              are open 24/7 at <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong>. For your relaxing
              nuru massage in{" "}
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
              </Link>
              . We have Russian, Thai, Uzbek, Afghani and Indian therapists. At night or Day, anytime call us and book your Nuru
              massage near Delhi airport with <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong> in
              Aerocity at a 5 star hotel spa in Delhi.
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
              Our full night Russian Spa in Aerocity is the perfect place to relax your body after a long flight. We are ready
              at our Aerocity spa to give high-quality massage therapy for complete relaxation. It&apos;s day or night, we don&apos;t
              care. Our spa in Aerocity is open all night, offering high-quality massages to late-night travellers. Call us
              anytime, check staff availability, and book your Nuru massage in Aerocity with genuine Russian therapists in
              Aerocity, Delhi. We have 5-star hotel spa outlets in Aerocity for your luxury service. Without leaving your hotel,
              our massage therapists can come to you and offer their genuine massage service in your private rooms. We have
              expert, beautiful Russian, Thai, Afghan, and Uzbek therapists for your full service spa in Aerocity at{" "}
              <strong className="font-semibold text-gray-900">Luxury Russian Spa</strong>.
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

