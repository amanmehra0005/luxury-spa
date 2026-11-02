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
          Delhi Russian spa is the best spa in Delhi with full service for your professional massage service. With 12+ spa outlets,
          Delhi Russian spa covers all over Delhi NCR with well-trained Russian staff. Our aim is to provide 100% satisfaction to
          customers. Whenever feeling tired and wanting some enjoyment, book Russian service in Delhi at 5 star hotels for your
          complete relaxation. Reduce your stress and body pain with top-rated massage services. Our therapists perform a wide range of
          massage therapies: sandwich massage, Nuru massage, erotic massage, happy ending massage and full body-to-body massage in
          Delhi for deep relaxation.
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
