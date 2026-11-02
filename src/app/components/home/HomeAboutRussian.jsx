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
              Explore the most popular Russian spa in Aerocity with full night service for premium relaxation.
              At full service spa in Aerocity we offer a 5-star hotel spa with Russian therapists. Our spa in
              Aerocity Delhi offers you luxury spa service for your deep relaxation. Our 5-star hotel spa near
              Delhi airport offer massage with Russian girls in Delhi for your complete relaxation. Aerocity{" "}
              <strong className="font-semibold text-white">Luxury Russian Spa</strong> is the best place for your relaxation.
              All our therapists come from all over the world, like Russia, Thailand, Afghanistan and Uzbekistan
              with proper experience in massage &amp; spa services.
            </p>

            {/* ─── Two Columns: Russian & Indian Therapists ─── */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-[#3a2418] rounded-2xl p-6 md:p-8">
              {/* Russian Therapists */}
              <div>
                <h4 className="font-title text-xl sm:text-2xl font-bold text-[#fdc28c] border-b border-[#9c5232]/50 pb-2">
                  Russian Therapists
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-gray-300">
                  At our Russian Spa Centre in Delhi, we have certified and highly skilled Russian therapists.
                  They are trained for authentic Nuru Massage in Delhi methods and know how to give the best
                  results for both your body and mind.
                </p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-300">
                  A Russian massage is not just for relaxation, it also improves blood circulation, reduces stress,
                  eases muscle pain, and makes your skin feel better. Whether you visit our{" "}
                  <strong className="font-semibold text-white">Luxury Russian Spa in Mahipalpur</strong> for a quick massage
                  or visit our <strong className="font-semibold text-white">Luxury Russian Spa in Lajpat Nagar</strong> for
                  a longer session at affordable prices, you&apos;ll always enjoy the same expert care.
                </p>
              </div>

              {/* Indian Therapists */}
              <div>
                <h4 className="font-title text-xl sm:text-2xl font-bold text-[#fdc28c] border-b border-[#9c5232]/50 pb-2">
                  Indian Therapists
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-gray-300">
                  Along with Russian therapists, we also have experienced Indian therapists who are trained in
                  erotic massage and wellness treatments. At our{" "}
                  <strong className="font-semibold text-white">Luxury Russian Spa in Noida</strong> and other outlets in Delhi
                  like Aerocity, Karol Bagh, and Mahipalpur, you can choose from many different massage options.
                  Our Indian therapists always put customer comfort first.
                </p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-300">
                  We always focus on hygiene, cleanliness, and professional care. With more than a dozen outlets,
                  including popular <strong className="font-semibold text-white">female to male body to body massage in Delhi</strong>{" "}
                  by Russian therapists at our branches, you will always get the same top-quality service. Our goal is
                  simple – to help you remove stress and enjoy complete relaxation.
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
