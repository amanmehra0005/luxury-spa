import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { WHATSAPP_URL, PHONE_LINK, PHONE_LABEL } from "../siteContact";

export default function HomeCalloutBanner1() {
  return (
    <section aria-label="Special Booking Offer" className="bg-[#9c5232] text-white py-10 md:py-12 px-4 md:px-8 shadow-inner">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#fdc28c]">Limited Time First-Visit Privilege</span>
        <h2 className="mt-2 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Book Your Luxury Russian Spa Experience in Delhi NCR Today
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#fff3e8] max-w-2xl leading-relaxed font-light">
          Enjoy Up To 20% Off on First-Time Booking · 24/7 Outlets in Aerocity, Connaught Place, Mahipalpur, Saket &amp; 5-Star Hotel Suites.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#9c5232] hover:bg-[#2b1810] hover:text-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-base" /> Claim 20% Discount
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white/70 hover:bg-white/10 text-white px-6 py-3 text-xs sm:text-sm font-semibold transition-all duration-300"
          >
            <FaPhoneAlt className="text-xs text-[#fdc28c]" /> Call: {PHONE_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
