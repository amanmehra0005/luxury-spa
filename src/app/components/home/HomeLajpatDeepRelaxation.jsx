import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { WHATSAPP_URL, TELEGRAM_URL } from "../siteContact";

export default function HomeLajpatDeepRelaxation() {
  return (
    <section
      aria-labelledby="lajpat-deep-relaxation-title"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#9c5232]"
    >
      {/* Background Resort Image with Brand Theme Overlay */}
      <Image
        src="/images/fpkdl.com_960_1758980912_relaxing-spa-area-with-lounge-chairs-pool-waterfall_1189569-10802.jpg"
        alt="Lush tropical spa sanctuary in Delhi NCR - Luxury Russian Spa"
        fill
        unoptimized
        sizes="100vw"
        className="object-cover object-center opacity-30 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#7a391e]/95 via-[#9c5232]/90 to-[#7a391e]/95" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#fdc28c] mb-2.5">
            12+ Outlets
          </span>
          <h2
            id="lajpat-deep-relaxation-title"
            className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Affordable Russian spa in Lajpat Nagar For Deep relaxation
          </h2>
        </div>

        {/* Content Grid: Model Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Model Photo with Arch Curve */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-tl-[60px] sm:rounded-tl-[80px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/25 bg-black/20 group">
              <Image
                src="/images/aa.webp"
                alt="Russian therapist in Lajpat Nagar at Luxury Russian Spa"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Paragraphs matching exact text */}
          <div className="lg:col-span-7 text-left space-y-4 text-[#fff3e8] text-sm sm:text-[14.5px] leading-relaxed font-light">
            <p>
              Our Russian spa in Lajpat Nagar offers affordable, premium wellness services in South Delhi. We feature
              certified international therapists from Russia, Uzbekistan, and Thailand, trained in targeted deep tissue
              techniques and gentle Swedish bodywork. You can customize your{" "}
              <Link href="/spa-in-lajpat-nagar" className="text-[#fdc28c] hover:underline font-normal">
                Russian spa in Delhi
              </Link>{" "}
              session according to your schedule and wellness needs. Release daily tension with our specialized full body
              massage, B2B massage, and soothing aromatherapy. Book an appointment at our{" "}
              <Link href="/spa-in-lajpat-nagar" className="text-[#fdc28c] hover:underline font-normal">
                spa in Lajpat Nagar
              </Link>
              , or request a 5-star hotel in-room visit in{" "}
              <Link href="/spa-in-aerocity" className="text-[#fdc28c] hover:underline font-normal">
                Aerocity
              </Link>{" "}
              or{" "}
              <Link href="/spa-in-gurgaon" className="text-[#fdc28c] hover:underline font-normal">
                Gurgaon
              </Link>
              .
            </p>

            <p>
              At our <strong className="font-semibold text-white">Russian spa in Lajpat Nagar</strong>, we maintain clean
              private suites, fresh linens, attached hot showers, and pure botanical oils. Claim our exclusive first visit
              offer starting at just ₹1499 for a full body massage at{" "}
              <strong className="font-semibold text-white">Luxury Russian Spa</strong>.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#9c5232] hover:bg-[#2b1810] hover:text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-base" /> Book at ₹1499
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0084c8] hover:bg-[#0070aa] text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaTelegramPlane className="text-base" /> Join Telegram
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
