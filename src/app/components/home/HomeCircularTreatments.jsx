import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_URL } from "../siteContact";

const steps = [
  {
    step: "STEP 01",
    title: "Online Booking",
    image: "/images/spa-in-connaught-place7.jpg",
    alt: "Online Booking for Russian Hotel Spa in Delhi",
    href: `${WHATSAPP_URL}&text=Hi!%20I%20would%20like%20to%20book%20an%20instant%20hotel%20massage%20service%20in%20Delhi.`,
  },
  {
    step: "STEP 02",
    title: "Expert Therapist",
    image: "/images/spaExpert4.webp",
    alt: "Choose Expert Russian Therapist for Hotel Visit",
    href: `${WHATSAPP_URL}&text=Hi!%20I%20would%20like%20to%20select%20an%20expert%20Russian%20therapist%20for%20my%20session.`,
  },
  {
    step: "STEP 03",
    title: "Special Discount",
    image: "/images/women-spa-posing-bath-robes - Copy.jpg",
    alt: "Special First-Visit Discount on Hotel Spa Services",
    href: "/spa-price-in-delhi",
  },
  {
    step: "STEP 04",
    title: "Membership",
    image: "/images/spa-in-connaught-place2.png",
    alt: "VIP Spa Membership for Russian Spa in Delhi",
    href: `${WHATSAPP_URL}&text=Hi!%20I%20would%20like%20to%20inquire%20about%20your%20VIP%20Spa%20Membership.`,
  },
];

export default function HomeCircularTreatments() {
  return (
    <section
      aria-labelledby="hotel-services-heading"
      className="bg-[#fffaf5] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-amber-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow in Brand Terracotta */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c5232] mb-3">
          4-Step Hotel Experience
        </p>

        {/* Script Main Heading in Brand Theme Color (#2b1810) */}
        <h2
          id="hotel-services-heading"
          className="font-serif italic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-[#2b1810] leading-tight tracking-tight mb-4"
        >
          How To Get Our Russian Services in Hotel?
        </h2>

        {/* Subtitle paragraph */}
        <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-12 sm:mb-16 font-normal">
          Book instant massage service in Delhi with Russian therapists. We have 5 star hotel spa and 12+ spa outlets in all over Delhi. We have Russian spa in Dwarka, Lajpat Nagar, Aerocity, Mahipalpur and Gurgaon.
        </p>

        {/* 4 Distinct Luxury Portal Arch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white rounded-3xl p-4 sm:p-5 pb-6 shadow-[0_6px_24px_rgba(43,24,16,0.06)] hover:shadow-[0_20px_45px_rgba(156,82,50,0.18)] ring-1 ring-amber-100/90 hover:ring-[#9c5232]/50 transition-all duration-500 hover:-translate-y-2.5 flex flex-col items-center justify-between"
            >
              {/* Arched Window Photo Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl rounded-t-[72px] sm:rounded-t-[84px] overflow-hidden bg-amber-50/60 shadow-inner ring-1 ring-black/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 260px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />

                {/* Floating Glassmorphic Step Pill at top */}
                {/* <span className="absolute top-3 inset-x-auto px-3.5 py-1 rounded-full bg-[#2b1810]/85 backdrop-blur-md text-[#fdc28c] text-[10px] sm:text-[11px] font-black tracking-widest uppercase shadow-md ring-1 ring-[#fdc28c]/40 group-hover:bg-[#9c5232] group-hover:text-white transition-colors duration-300">
                  {item.step}
                </span> */}

                {/* Soft gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Bottom: Clean Title Only */}
              <div className="mt-5 w-full flex flex-col items-center">
                <h3 className="font-title text-base sm:text-lg font-bold text-[#2b1810] group-hover:text-[#9c5232] transition-colors uppercase tracking-wider text-center leading-snug">
                  {idx + 1}. {item.title}
                </h3>

                {/* Subtle animated copper accent indicator */}
                {/* <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#9c5232] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] uppercase tracking-wider">Explore</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
