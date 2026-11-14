import { FaWhatsapp, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { WHATSAPP_URL, TELEGRAM_URL, PHONE_LINK, PHONE_LABEL } from "../siteContact";

export default function HomeCalloutBanner2() {
  return (
    <section
      aria-labelledby="full-night-spa-heading"
      className="relative bg-gradient-to-r from-[#834329] via-[#9c5232] to-[#834329] text-white py-14 md:py-18 px-4 sm:px-6 lg:px-8 shadow-inner overflow-hidden"
    >
      {/* Subtle luxury ambient texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/25 pointer-events-none" />

      <div className="relative max-w-9xl mx-auto text-center">
        {/* Eyebrow in signature Champagne Gold */}
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[#fdc28c] mb-3">
          Overnight Wellness &bull; 24/7 In-Room &amp; Suite Service
        </span>

        {/* Main Heading matching screenshot */}
        <h2
          id="full-night-spa-heading"
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-wide leading-tight drop-shadow-sm max-w-8xl mx-auto"
        >
          Full Night Spa in Delhi For Deep Relaxation After Long Working Day
        </h2>

        {/* Paragraph matching exact content */}
        <p className="mt-5 text-sm sm:text-[15px] md:text-base text-[#fff3e8] max-w-8xl mx-auto leading-relaxed font-light">
          Looking for the ultimate way to unwind after a demanding work week or long flight? Step into our premium full night spa in Delhi for a deeply calming overnight wellness retreat. From the moment you arrive, gentle aromatherapy, soft acoustic music, and ambient candlelight ease your senses. Our certified therapists provide customized bodywork that releases muscle tension, boosts circulation, and recharges your natural vitality. With 24/7 round-the-clock availability, attached hot showers, and guaranteed discretion, our full night spa in Delhi is your private haven for complete peace of mind.
        </p>

        {/* Action Buttons in Website Theme */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#9c5232] hover:bg-[#2b1810] hover:text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-base text-emerald-600" /> WhatsApp Booking
          </a>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaTelegramPlane className="text-base" /> Join Telegram
          </a>

          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 hover:bg-white/10 text-white px-7 py-3.5 text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaPhoneAlt className="text-xs text-[#fdc28c]" /> Call: {PHONE_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
