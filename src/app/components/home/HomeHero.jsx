import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_LINK, PHONE_LABEL } from "../siteContact";

export default function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative w-full overflow-hidden bg-[#2b1810] pt-14 sm:pt-16 md:pt-[68px] lg:pt-[76px] pb-12 sm:pb-14 md:pb-16"
    >
      {/* Background Image with Vignette & Left-Side Readability Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/2147816920.jpg"
          alt="Luxury Russian Spa in Delhi - Relaxing body massage session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.42] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
      </div>

      {/* Main Content with increased max-w and reduced left spacing */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-start text-left">
        <div className="max-w-2xl md:max-w-[680px] lg:max-w-[740px]">
          {/* Main H1 Title */}
          <h1
            id="home-hero-heading"
            className="pt-6 font-serif text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] leading-[1.18] text-white font-bold tracking-tight drop-shadow-sm"
          >
            Best Russian Spa in Delhi for Body
            <br />
            Massage &amp; Relaxation
          </h1>

          {/* Description paragraph with clear space below heading */}
          <p className="pt-3 sm:mt-7 md:mt-8 text-xs sm:text-[14px] md:text-[15px] text-gray-200/90 leading-[1.6] font-normal max-w-[640px]">
            Welcome to <strong className="font-semibold text-white">Luxury Russian Spa</strong> – Delhi&apos;s premium wellness destination. Enjoy expert body massage services in a clean, calm &amp; hygienic environment and feel your stress melt away.
          </p>

          {/* Highlight Line with clear space below description */}
          <div className="pt-4 sm:mt-7 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 text-xs sm:text-[13px] md:text-[15px] font-bold text-white tracking-wide">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-sm">📍</span> 12+ Outlets
            </span>
            <span className="text-white/40 font-normal">|</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-sm">👩</span> Foreign Therapists
            </span>
            <span className="text-white/40 font-normal">|</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-sm">🎁</span> First Visit Offer @1499
            </span>
          </div>

          {/* CTA Buttons Row matching uploaded reference image */}
          <div className="pt-6 sm:mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* 1. Chat on Whatsapp Button (Filled Terracotta Pill) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-[15px] font-bold shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-xl shrink-0" />
              Chat on Whatsapp
            </a>

            {/* 2. Call Button (Outlined White Pill with Gold Call Icon) */}
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 hover:border-white bg-black/20 hover:bg-white/15 text-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-[15px] font-bold shadow-lg shadow-black/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="size-4.5 text-[#fdc28c] shrink-0" />
              {PHONE_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
