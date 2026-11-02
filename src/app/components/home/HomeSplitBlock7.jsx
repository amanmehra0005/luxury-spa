import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_URL } from "../siteContact";

export default function HomeSplitBlock7() {
  return (
    <section aria-labelledby="split-block-7-title" className="bg-[#fffaf5] py-12 md:py-16 px-4 md:px-8 border-t border-amber-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Image (Flipped on desktop) */}
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
            <span className="h-0.5 w-6 bg-[#9c5232]" /> Holistic Bodywork
          </span>
          <h2 id="split-block-7-title" className="mt-3 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Authentic Thai &amp; Aromatherapy Massage in Delhi
          </h2>
          <p className="mt-2 font-serif italic text-lg sm:text-xl text-[#9c5232] font-medium">
            Gentle Stretching &amp; Natural Botanical Elixirs
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            For centuries, Thai healing techniques have combined assisted yogic stretches with acupressure to open energy pathways. At <strong className="font-semibold text-gray-800">Luxury Russian Spa</strong>, our certified therapists relieve tight hamstrings, stiff hip joints, and spinal rigidity.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            When fused with imported floral aromatherapy oils—such as lavender, eucalyptus, and sweet citrus—this therapy soothes the nervous system, clears nasal passages, and promotes deep restorative sleep.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#9c5232] hover:bg-[#834329] text-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-amber-950/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Read More <FiArrowRight />
            </a>
            <a
              href="/thai-massage-in-delhi"
              className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#9c5232] underline underline-offset-4"
            >
              Thai Massage Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
