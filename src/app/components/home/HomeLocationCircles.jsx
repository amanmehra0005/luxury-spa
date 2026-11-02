import Link from "next/link";

const locations = [
  { label: "Spa in Defence Colony", href: "/spa-in-defence-colony" },
  { label: "Spa in Mahipalpur", href: "/spa-in-mahipalpur" },
  { label: "Spa in Gurgoan", href: "/spa-in-gurgaon" },
  { label: "Spa in Noida", href: "/spa-in-noida" },
  { label: "Spa in Paharganj", href: "/spa-in-paharganj" },
];

export default function HomeLocationCircles() {
  return (
    <section aria-labelledby="location-circles-heading" className="bg-gradient-to-b from-white via-gray-50/80 to-gray-100/60 py-14 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          id="location-circles-heading"
          className="text-center font-serif italic text-3xl sm:text-4xl md:text-[2.6rem] text-[#2b1810] font-bold leading-snug"
        >
          Our Russian Spa in Delhi Locations
        </h2>

        {/* 5 Circles */}
        <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {locations.map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="group flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-gray-500 group-hover:text-[#9c5232] transition-colors duration-300 leading-snug px-4">
                {loc.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

