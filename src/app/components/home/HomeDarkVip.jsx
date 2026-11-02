import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomeDarkVip() {
  return (
    <section
      aria-labelledby="dark-vip-title"
      className="bg-[#24140d] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-amber-950/60"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-[#9c5232]/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Model in Red Dress with Arch shape */}
        <div className="relative aspect-[4/3] sm:aspect-[1.1/1] rounded-tl-[60px] sm:rounded-tl-[80px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black/40 group">
          <Image
            src="/images/spaexpert3.webp"
            alt="Get Full Body Massage in Delhi By Russian Therapists"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Content matching exact screenshot */}
        <div>
          <h2
            id="dark-vip-title"
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight"
          >
            Get Full Body Massage in Delhi By Russian Therapists
          </h2>

          <p className="mt-5 text-sm sm:text-[14.5px] md:text-[15px] text-gray-300 leading-relaxed font-light">
            Try our full body massage in Delhi by Russian therapists. It gives you perfect relaxation and comfort and helps you to
            beat your stress. If you are on a business trip or on a vacation, just contact us. We have a popular{" "}
            <Link href="/spa-in-aerocity" className="text-white hover:text-[#fdc28c] underline decoration-gray-500 font-normal transition-colors">
              Russian spa in Aerocity
            </Link>
            . Which gives perfect relaxation to international clients and travellers at the 5-star hotel spa in Aerocity. Our therapists
            maintain full hygiene and cleanliness during massages in Delhi. Our{" "}
            <Link href="/b2b-massage-in-delhi" className="text-white hover:text-[#fdc28c] underline decoration-gray-500 font-normal transition-colors">
              female to male body to body massage in Delhi
            </Link>{" "}
            by Russian therapists will improve your blood circulation, enhance flexibility and mobility, boost your immune system, improve
            skin tone and texture and increase energy levels. So just contact us and book your Full body to body massage in Delhi by
            Russian therapists at <strong className="font-semibold text-white">Luxury Russian Spa</strong>.
          </p>

          <div className="mt-7">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0084c8] hover:bg-[#0070aa] text-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaTelegramPlane className="text-base" /> SEE PROFILES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
