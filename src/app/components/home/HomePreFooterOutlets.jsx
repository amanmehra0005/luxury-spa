const preFooterOutlets = [
  { name: "DEFENCE\nCOLONY", label: "DEFENCE COLONY", link: "/outlets" },
  { name: "MAHIPALPUR", label: "MAHIPALPUR", link: "/spa-in-mahipalpur" },
  { name: "GURGAON", label: "GURGAON", link: "/spa-in-gurgaon" },
  { name: "NOIDA", label: "NOIDA", link: "/spa-in-noida" },
  { name: "PAHARGANJ", label: "PAHARGANJ", link: "/spa-in-paharganj" },
];

export default function HomePreFooterOutlets() {
  return (
    <section aria-label="Popular Spa Locations" className="bg-white py-7 sm:py-9 px-4 border-t border-stone-200">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {preFooterOutlets.map((outlet) => (
          <a
            key={outlet.label}
            href={outlet.link}
            className="flex items-center justify-center text-center h-[54px] sm:h-[58px] px-3 bg-[#9c5232] hover:bg-[#24140d] text-white border-2 border-[#7e3b22] hover:border-[#fdc28c] hover:text-[#fdc28c] font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-pre-line leading-tight last:col-span-2 sm:last:col-span-1"
          >
            {outlet.name}
          </a>
        ))}
      </div>
    </section>
  );
}

