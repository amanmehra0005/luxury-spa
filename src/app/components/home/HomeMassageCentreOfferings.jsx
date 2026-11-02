import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const cards = [
  {
    title: "Russian Massage in Delhi",
    image: "/images/bb.webp",
    alt: "Russian Massage in Delhi",
    href: "/spa-price-in-delhi",
  },
  {
    title: "Full Night Spa in Delhi",
    image: "/images/offering-full-night-spa.jpg",
    alt: "Full Night Spa in Delhi",
    href: "/spa-price-in-delhi",
  },
  {
    title: "Hotel & Home Spa in Delhi",
    image: "/images/offering-hotel-home-spa.jpg",
    alt: "Hotel & Home Spa in Delhi",
    href: "/spa-price-in-delhi",
  },
];

export default function HomeMassageCentreOfferings() {
  return (
    <section
      aria-labelledby="offerings-heading"
      className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c5232] mb-3">
          Our Treatments
        </p>

        {/* Heading in cursive / script style */}
        <h2
          id="offerings-heading"
          className="font-serif italic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-[#2b1810] leading-tight tracking-tight mb-12 md:mb-16"
        >
          What We&apos;re Offering At Massage Centre in Delhi
        </h2>

        {/* 3 Clean Brand Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch max-w-5xl mx-auto">
          {cards.map((item, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden ring-1 ring-amber-100/80 shadow-[0_4px_24px_rgba(43,24,16,0.06)] hover:shadow-[0_16px_36px_rgba(156,82,50,0.16)] hover:ring-[#9c5232]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Card Image flush at top */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body matching screenshot layout */}
              <div className="p-6 sm:p-7 flex flex-col items-center justify-between flex-1 gap-6">
                <h3 className="font-title text-lg sm:text-xl font-bold text-[#2b1810] group-hover:text-[#9c5232] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Theme Action Button */}
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#9c5232] hover:bg-[#834329] text-white py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-amber-950/20 transition-all duration-300 group-hover:shadow-lg"
                >
                  PRICING <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
