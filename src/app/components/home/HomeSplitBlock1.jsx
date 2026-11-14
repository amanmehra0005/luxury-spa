import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomeSplitBlock1() {
  return (
    <section aria-labelledby="split-block-1-title" className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Text */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9c5232] flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#9c5232]" /> 1st Visit Offer
          </span>
          <h2 id="split-block-1-title" className="mt-3 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b1810] leading-tight">
            First Visit Offer On Full Body Massage Spa in Delhi ₹1499
          </h2>
          <p className="mt-2 font-serif italic text-xl sm:text-2xl text-[#2196F3] font-bold">
            Get First Visit Offer
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            Looking for an affordable, high-quality full body massage in Delhi? Step into{" "}
            <strong className="font-semibold text-gray-800">Luxury Russian Spa</strong> and leave your daily fatigue
            behind. Across our 12+ luxury spa outlets in Delhi, Gurgaon, and Noida, we offer world-class therapies
            led by certified Russian, European, Thai, and Indian therapists. Every session takes place in a 100% private,
            sanitized suite equipped with an attached hot shower and freshly laundered towels. Take advantage of our
            exclusive first visit offer at just ₹1499 at our popular Russian spa in Lajpat Nagar or nearby branches,
            and experience deep relaxation, muscle relief, and total peace of mind.
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

        {/* Right: Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100 group">
          <Image
            src="/images/fpkdl.com_750_1758980704_young-women-relaxing-deckchair-by-swimming-pool-spa_52137-26370.jpg"
            alt="First visit offer on full body massage spa at Luxury Russian Spa Delhi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
