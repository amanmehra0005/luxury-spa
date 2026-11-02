import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomeSplitBlock2() {
  return (
    <section aria-labelledby="split-block-2-title" className="bg-[#fffaf5] py-12 md:py-16 px-4 md:px-8 border-t border-amber-100/60">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100 group lg:order-1">
                  <Image
                    src="/images/female-therapist-rehabilitation-center-giving-back-massage.jpg"
                    alt="Authentic Thai and aromatherapy massage therapy at Luxury Russian Spa Delhi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

        {/* Right: Text */}
        <div className="lg:order-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9c5232] flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#9c5232]" /> 12+ Spa Outlets
          </span>
          <h2 id="split-block-2-title" className="mt-3 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b1810] leading-tight">
            Female To Male Body To Body Massage in Delhi
          </h2>
          <p className="mt-2 font-serif italic text-xl sm:text-2xl text-[#2196F3] font-bold">
            At Just ₹1499
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            Try female to male body to body massage in Delhi with Russian therapists. We offer
            premium full body to body massage in Delhi with female therapists. Our Russian
            therapists help you to remove all your body pain and muscle recovery. We use
            flowing techniques and warm oils to release tension, improve circulation, and calm
            the mind. B2b massage in Delhi gives the next level of relaxation during the session.
            We have 12+ Russian spa outlets in Delhi. At our <strong className="font-semibold text-gray-800">Luxury Russian Spa</strong> in Aerocity Delhi, we
            offer popular Nuru massages in Delhi, Noida &amp; Gurgaon. So call us and ready to
            experience <strong className="font-semibold text-gray-800">B2B massage in Delhi</strong> with professional female therapists. Our full night
            service in Delhi with Russian girls is most demanded service.
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
      </div>
    </section>
  );
}
