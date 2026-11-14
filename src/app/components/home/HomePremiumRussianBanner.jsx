import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { WHATSAPP_URL, TELEGRAM_URL } from "../siteContact";

export default function HomePremiumRussianBanner() {
  return (
    <section
      aria-labelledby="premium-russian-banner-title"
      className="relative bg-gradient-to-r from-[#834329] via-[#9c5232] to-[#834329] text-white py-14 md:py-18 px-4 sm:px-6 lg:px-8 shadow-inner overflow-hidden"
    >
      {/* Subtle luxury ambient texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none" />

      <div className="relative max-w-8xl mx-auto text-center">
        {/* Eyebrow in signature Champagne Gold */}
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[#fdc28c] mb-3">
          Delhi NCR &bull; 12+ Luxury Outlets &bull; 24/7 Available
        </span>

        {/* Main Heading in theme style */}
        <h2
          id="premium-russian-banner-title"
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-wide leading-tight drop-shadow-sm"
        >
          Premium Russian Spa in Delhi with Full Service
        </h2>

        {/* Description matching exact content */}
        <p className="mt-5 text-sm sm:text-[15px] md:text-base text-[#fff3e8] max-w-7xl mx-auto leading-relaxed font-light">
          Luxury Russian Spa is Delhi NCR&apos;s leading destination for authentic full-service massage therapies.
          With 12+ luxury outlets and 24/7 in-room hotel visits, we serve guests across Delhi, Noida, and Gurgaon with
          certified Russian, European, and Indian therapists. Whether you are recovering from a long journey or seeking a
          peaceful evening retreat, our team specializes in sandwich massage, Nuru therapy, Swedish bodywork, and full
          body-to-body massage in Delhi tailored for deep, lasting relaxation.
        </p>

        {/* Theme Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#9c5232] hover:bg-[#2b1810] hover:text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-base" /> WhatsApp Booking
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/80 hover:bg-white/10 text-white px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300"
          >
            <FaTelegramPlane className="text-sm text-[#fdc28c]" /> Join Telegram Channel
          </a>
        </div>
      </div>
    </section>
  );
}
