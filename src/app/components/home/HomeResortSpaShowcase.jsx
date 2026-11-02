import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../siteContact";

export default function HomeResortSpaShowcase() {
  return (
    <section aria-label="Resort Spa Sanctuary Showcase" className="relative w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center overflow-hidden bg-[#2b1810]">
      {/* Background Resort Image */}
      <Image
        src="/images/fpkdl.com_960_1758980912_relaxing-spa-area-with-lounge-chairs-pool-waterfall_1189569-10802.jpg"
        alt="Lush peaceful spa suite and garden pool at Luxury Russian Spa Delhi"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-[0.4] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1810] via-black/30 to-black/60" />

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 py-16 text-center flex flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#fdc28c]">
          Delhi&apos;s Serene Wellness Retreat
        </span>
        <h2 className="mt-3 font-title text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Escape The City Bustle Into Pure Serenity
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed font-light">
          Immerse yourself in calm ambiance, soothing waterfall acoustics, and bespoke European therapies. At <strong className="font-semibold text-white">Luxury Russian Spa</strong>, we bring an international resort spa experience to the heart of Delhi NCR.
        </p>

        <div className="mt-7">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-base text-[#fdc28c]" /> Reserve Your Suite
          </a>
        </div>
      </div>
    </section>
  );
}
