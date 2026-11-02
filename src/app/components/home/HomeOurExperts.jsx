import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "../siteContact";

const experts = [
  {
    name: "Angelina",
    role: "STAFF",
    image: "/images/a5.webp",
    alt: "Angelina - Russian Spa Therapist in Delhi",
  },
  {
    name: "Mariya",
    role: "STAFF",
    image: "/images/staff5.jpg",
    alt: "Mariya - Russian Spa Therapist in Delhi",
  },
  {
    name: "Avery",
    role: "STAFF",
    image: "/images/model1.jpg",
    alt: "Mariya - Luxury Russian Spa Therapist",
  },
  {
    name: "Aksinia",
    role: "STAFF",
    image: "/images/a4.webp",
    alt: "Aksinia - Russian Spa Therapist in Delhi",
  },
];

export default function HomeOurExperts() {
  return (
    <section
      aria-labelledby="experts-heading"
      className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Calligraphy Watermark / Big Cursive Heading matching screenshot */}
        <div className="relative flex flex-col items-center justify-center mb-3">
          {/* Very large cursive "Our Experts" */}
          <span
            className="font-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#e3e6e3] select-none pointer-events-none tracking-normal leading-none font-normal block"
            style={{ fontFamily: "'Playfair Display', Georgia, cursive, serif" }}
          >
            Our Experts
          </span>

          {/* Overlapping Main Heading in Brand Espresso Theme */}
          <h2
            id="experts-heading"
            className="mt-[-24px] sm:mt-[-34px] md:mt-[-44px] lg:mt-[-22px] font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] text-[#2b1810] relative z-10 leading-[1.2] tracking-tight max-w-4xl px-2"
          >
            Our Expert Therapist at Hotels &amp; Spa in
            <br />
            Delhi
          </h2>
        </div>

        {/* Subtitle with Spa Jobs Link */}
        <p className="max-w-6xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-4 mb-12 sm:mb-16">
          Our therapy staff is highly trained, experienced, and dedicated to providing personalized care. Get premium massage in Delhi by Russian therapists.{" "}
          We also offer{" "}
          <Link
            href="/spa-therapist-jobs-in-delhi"
            className="text-[#9c5232] underline font-bold hover:text-[#834329] transition-colors"
          >
            spa jobs in Delhi
          </Link>
          . Join our team and earn extra income.
        </p>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {experts.map((item, idx) => (
            <a
              key={idx}
              href={`${WHATSAPP_URL}&text=Hi!%20I%20would%20like%20to%20book%20a%20session%20with%20therapist%20${item.name}%20at%20Luxury%20Russian%20Spa.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book session with therapist ${item.name}`}
              className="group relative aspect-[1/2] sm:aspect-[9/16] w-full rounded-2xl md:rounded-[22px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ring-1 ring-black/5 bg-gray-900 block"
            >
              {/* Therapist Photo */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                unoptimized
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Bottom Details matching screenshot */}
              <div className="absolute bottom-4 sm:bottom-6 inset-x-0 text-center px-3 z-10 pointer-events-none">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-md">
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/80 mt-0.5">
                  {item.role}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
