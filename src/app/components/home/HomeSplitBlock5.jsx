import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_URL } from "../siteContact";

export default function HomeSplitBlock5() {
  return (
    <section aria-labelledby="split-block-5-title" className="bg-white py-12 md:py-16 px-4 md:px-8 border-t border-amber-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Image (Flipped on desktop) */}
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
        <div className="lg:order-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9c5232] flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#9c5232]" /> Couple &amp; VIP Wellness
          </span>
          <h2 id="split-block-5-title" className="mt-3 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Couples Massage &amp; Private VIP Suite Sessions
          </h2>
          <p className="mt-2 font-serif italic text-lg sm:text-xl text-[#9c5232] font-medium">
            Create Unforgettable Relaxing Moments Together
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            Looking for a meaningful way to celebrate a special occasion, anniversary, or simply escape city stress with your partner? Our private couples massage suites at <strong className="font-semibold text-gray-800">Luxury Russian Spa</strong> are thoughtfully furnished with side-by-side therapy beds, rose petals, and warm candle illumination.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            Two experienced therapists work simultaneously to deliver synchronized full body massages customized to each partner&apos;s preference—from gentle Swedish relaxation to intense deep tissue relief.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#9c5232] hover:bg-[#834329] text-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-amber-950/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Read More <FiArrowRight />
            </a>
            <a
              href="/couple-massage"
              className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#9c5232] underline underline-offset-4"
            >
              Couple Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
