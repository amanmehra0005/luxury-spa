import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomeSplitBlock3() {
  return (
    <section aria-labelledby="split-block-3-title" className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Text */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500">
            Full Service Spa
          </span>
          <h2 id="split-block-3-title" className="mt-3 font-title text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#2b1810] leading-tight">
            What We Get At Spa in Delhi With Full Service?
          </h2>
          <p className="mt-2 font-serif italic text-2xl sm:text-3xl text-[#9c5232] font-bold">
            At Just ₹1499
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            Searching for a Russian spa near you in Delhi with all-inclusive amenities? When you choose
            our full-service spa sessions, everything is curated for complete comfort under one roof. Each
            appointment includes private air-conditioned suites, calming ambient lighting, attached hot
            showers, premium aromatic oils, and customized bodywork from certified Russian and Indian
            therapists. Available 24/7 across Delhi NCR, we ensure high hygiene standards, total privacy,
            and an authentic wellness sanctuary whenever you need to recharge.
          </p>

          <div className="mt-6">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0e7a8a] hover:bg-[#0a5f6d] text-white px-7 py-3 text-xs sm:text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              <FaTelegramPlane className="text-lg" /> Join For Daily Updates
            </a>
          </div>
        </div>

        {/* Right: Dark "RUSSIAN SPA" Graphic Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100 group">
                  <Image
                    src="/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg"
                    alt="Woman smiling on massage table enjoying sandwich massage at Luxury Russian Spa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
      </div>
    </section>
  );
}
