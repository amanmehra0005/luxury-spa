import Image from "next/image";

const amenities = [
  { icon: "/images/icons8-jacuzzi-64.webp", name: "Jacuzzi Bath", sub: "Hydrotherapy" },
  { icon: "/images/icons8-sauna-64.webp", name: "Steam & Sauna", sub: "Detoxification" },
  { icon: "/images/icons8-bathhouse-64.webp", name: "Private Suites", sub: "100% Soundproof" },
  { icon: "/images/icons8-spa-care-64.webp", name: "Organic Oils", sub: "Pure Essential" },
  { icon: "/images/icons8-shower-64.webp", name: "Hot Shower", sub: "Fresh Linen & Robes" },
];

export default function HomeCircularAmenities() {
  return (
    <section aria-labelledby="amenities-heading" className="bg-[#fffaf5] py-14 md:py-18 px-4 md:px-8 border-y border-amber-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9c5232]">Premium Comfort Standards</p>
        <h2 id="amenities-heading" className="mt-2 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Top Amenities &amp; Facilities At Luxury Russian Spa
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-sm text-gray-600">
          Every session is paired with five-star amenities to ensure absolute comfort and complete sensory rejuvenation.
        </p>

        {/* 5 Circular Items Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="size-20 sm:size-24 rounded-full bg-white shadow-lg ring-1 ring-amber-100 flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-[#9c5232]">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="size-12 object-contain group-hover:rotate-6 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3.5 font-title text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#9c5232] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
