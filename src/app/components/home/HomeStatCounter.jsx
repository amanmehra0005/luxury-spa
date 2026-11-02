const stats = [
  { value: "10+", label: "Years of Excellence", sub: "Since 2014 in Delhi" },
  { value: "45+", label: "Massage & Treatments", sub: "Russian & International" },
  { value: "24+", label: "Luxury Outlets", sub: "Across Delhi NCR" },
  { value: "4.9★", label: "Customer Rating", sub: "15,000+ Happy Guests" },
];

export default function HomeStatCounter() {
  return (
    <section aria-label="Our Achievements" className="bg-[#9c5232] text-white py-10 md:py-12 px-4 md:px-8 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-title text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight py-1">
                {item.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fdc28c]">
                {item.label}
              </span>
              {/* <span className="text-[11px] text-[#fff3e8] font-light">{item.sub}</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
