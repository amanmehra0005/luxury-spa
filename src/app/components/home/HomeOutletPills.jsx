const pills = [
  { name: "Aerocity", href: "/spa-in-aerocity" },
  { name: "Connaught Place", href: "/spa-in-connaught-place" },
  { name: "New Friends Colony", href: "/spa-in-new-friends-colony" },
  { name: "Defence Colony", href: "/spa-in-defence-colony" },
  { name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
  { name: "Karol Bagh", href: "/spa-in-karol-bagh" },
  { name: "Mahipalpur", href: "/spa-in-mahipalpur" },
  { name: "Gurgaon", href: "/spa-in-gurgaon" },
  { name: "Noida", href: "/spa-in-noida" },
  { name: "South Delhi (Saket)", href: "/spa-in-saket" },
  { name: "Dwarka Hub", href: "/spa-in-dwarka" },
];

export default function HomeOutletPills() {
  return (
    <section aria-label="Explore Outlets Across Delhi NCR" className="bg-[#fffaf5] py-8 px-4 md:px-8 border-b border-amber-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9c5232] mb-4">
          Quick Access Outlets Across Delhi NCR
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {pills.map((pill) => (
            <a
              key={pill.name}
              href={pill.href}
              className="inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold text-gray-800 ring-1 ring-[#9c5232]/40 hover:bg-[#9c5232] hover:text-white hover:ring-[#9c5232] transition-all duration-200 shadow-sm"
            >
              Spa in {pill.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
