import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_URL } from "../siteContact";

export default function HomeSplitBlock6() {
  return (
    <section aria-labelledby="split-block-6-title" className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Text */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9c5232] flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#9c5232]" /> Signature Sandwich Massage
          </span>
          <h2 id="split-block-6-title" className="mt-3 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Sensory Sandwich Massage In Delhi (Four-Hands Therapy)
          </h2>
          <p className="mt-2 font-serif italic text-lg sm:text-xl text-[#9c5232] font-medium">
            Double Relaxation with Two Russian Therapists Synchronized
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            For guests seeking the pinnacle of luxury, our <strong className="font-semibold text-gray-800">Sandwich Massage</strong> (also celebrated as synchronized four-hands therapy) pairs two trained Russian or international therapists working in effortless harmony.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            Because two masseuses work on your body simultaneously, your mind ceases tracking individual movements and surrenders to pure meditative tranquility. Combined with warm almond oil and gentle stretching, it is our most requested VIP experience.
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
              href="/sandwich-massage"
              className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#9c5232] underline underline-offset-4"
            >
              Explore Sandwich Massage
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100 group">
          <Image
            src="/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg"
            alt="Woman smiling on massage table enjoying sandwich massage at Luxury Russian Spa"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
