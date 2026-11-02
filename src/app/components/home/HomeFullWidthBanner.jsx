import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { WHATSAPP_URL } from "../siteContact";

const features = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",
  "Naturally Spa",
  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

export default function HomeFullWidthBanner() {
  return (
    <section
      aria-label="Premium Hotel And Home Spa in Delhi"
      className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-[#2b1810]"
    >
      <Image
        src="/images/fpkdl.com_960_1758962771_young-relaxing-woman-getting-massage-with-cosmetic-oil-spa-salon-background_852367-2763.jpg"
        alt="Premium Hotel And Home Spa in Delhi with Foreigner Staff at Luxury Russian Spa"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-[0.35] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1810]/85 via-black/50 to-black/60" />

      <div className="relative z-10 max-w-10xl mx-auto px-5 py-14 sm:py-16 text-center flex flex-col items-center">
        {/* Main Heading from image */}
        <h2 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-snug sm:leading-tight max-w-6xl">
          Premium Hotel And Home Spa in Delhi with Foreigner Staff at{" "}
          <span className="text-[#fdc28c]">Only ₹14,999</span>
        </h2>

        {/* Features Row with Green Checkmarks */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2.5 text-xs sm:text-sm md:text-base font-medium text-white/95 max-w-6xl">
          {features.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-1.5">
              <FiCheck className="text-emerald-400 text-sm sm:text-base font-black shrink-0 stroke-[3]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-base text-[#fdc28c]" /> Book Now On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
