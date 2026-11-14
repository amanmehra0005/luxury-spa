import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../siteContact";

export default function HomeAboutRussian() {
  return (
    <section aria-labelledby="about-russian-heading" className="relative bg-[#2b1810] text-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Subtle noise / texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ─── Left Column: About Us + Script Title ─── */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/80">
              About Us
            </span>
            <h2
              id="about-russian-heading"
              className="mt-4 font-serif italic text-[42px] sm:text-5xl lg:text-[60px] font-extrabold text-[#fdc28c] leading-[1.05] drop-shadow-sm"
            >
              The Best
              <br />
              Russian Spa
              <br />
              <span className="text-white">in Delhi</span>
            </h2>
          </div>

          {/* ─── Right Column: Content ─── */}
          <div className="lg:col-span-8">
            {/* Top Heading + Main Paragraph */}
            <h3 className="font-serif italic text-2xl sm:text-3xl md:text-[34px] font-bold text-[#fdc28c] leading-snug">
              Experience Luxury And Professional Russian Spa in Aerocity
            </h3>
            <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-300">
              Explore premier Russian spa services in Aerocity Delhi, designed for travelers, business
              professionals, and local guests seeking genuine relaxation. Located just minutes from IGI Airport,
              our 5-star hotel spa service connects you with certified Russian and international therapists for
              private in-room sessions or luxury outlet visits. Whether you want to relieve fatigue after a long
              flight or unwind after a demanding day,{" "}
              <strong className="font-semibold text-white">Luxury Russian Spa</strong> offers authentic European
              bodywork, calming ambiance, and discreet hospitality 24 hours a day. All therapists are fully
              certified with deep expertise across Swedish, Thai, and deep tissue wellness rituals.
            </p>

            {/* ─── Two Columns: Russian & Indian Therapists ─── */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-[#3a2418] rounded-2xl p-6 md:p-8">
              {/* Russian Therapists */}
              <div>
                <h4 className="font-title text-xl sm:text-2xl font-bold text-[#fdc28c] border-b border-[#9c5232]/50 pb-2">
                  Russian Therapists
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-gray-300">
                  At our Russian Spa Centre in Delhi, our certified Russian and European therapists bring genuine
                  techniques from abroad. They specialize in therapeutic pressure, authentic Nuru relaxation, and
                  revitalizing oil therapies designed to soothe stiff muscles, improve circulation, and clear mental stress.
                </p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-300">
                  A Russian massage is designed for holistic wellbeing. Whether you visit our{" "}
                  <strong className="font-semibold text-white">Luxury Russian Spa in Mahipalpur</strong> near the airport
                  or our outlet at <strong className="font-semibold text-white">Luxury Russian Spa in Lajpat Nagar</strong>,
                  you will always enjoy sanitized private rooms, warm towels, and soothing aromatherapy at honest, transparent rates.
                </p>
              </div>

              {/* Indian Therapists */}
              <div>
                <h4 className="font-title text-xl sm:text-2xl font-bold text-[#fdc28c] border-b border-[#9c5232]/50 pb-2">
                  Indian Therapists
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-gray-300">
                  Alongside our international specialists, we feature highly skilled Indian therapists trained in
                  Swedish relaxation, deep tissue work, and traditional wellness therapies. Available across our outlets
                  in <strong className="font-semibold text-white">Luxury Russian Spa in Noida</strong>, Aerocity, Karol Bagh,
                  and Mahipalpur, our team ensures every guest receives warm, courteous, and attentive care.
                </p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-300">
                  Cleanliness, privacy, and safety are our highest priorities. All treatment rooms feature sanitized linens,
                  attached hot showers, and a calm, quiet atmosphere. Whether you choose our popular{" "}
                  <strong className="font-semibold text-white">female to male body to body massage in Delhi</strong> or
                  an overnight full night spa service, we guarantee a peaceful and refreshing experience.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center md:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#9c5232] hover:bg-[#834329] text-white px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-amber-950/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-xl" /> Chat on Whatsapp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
