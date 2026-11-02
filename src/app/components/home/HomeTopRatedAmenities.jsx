import Image from "next/image";
import Link from "next/link";

const amenities = [
  {
    icon: "/images/icons8-shower-64.webp",
    name: "Shower",
    alt: "Private hot shower facility at Luxury Russian Spa Delhi",
  },
  {
    icon: "/images/icons8-jacuzzi-64.webp",
    name: "Jacuzzi Bath",
    alt: "Hydrotherapy Jacuzzi Bath at Luxury Russian Spa Delhi",
  },
  {
    icon: "/images/icons8-bathhouse-64.webp",
    name: "Steam Bath",
    alt: "Herbal Steam Bath therapy at Luxury Russian Spa Delhi",
  },
  {
    icon: "/images/icons8-sauna-64.webp",
    name: "Souna",
    alt: "Traditional Russian Sauna at Luxury Russian Spa Delhi",
  },
];

export default function HomeTopRatedAmenities() {
  return (
    <section aria-labelledby="top-rated-massage-title" className="bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading in Brand Deep Espresso */}
        <h2
          id="top-rated-massage-title"
          className="font-serif italic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-[#2b1810] leading-tight tracking-tight"
        >
          Top Rated Massage Services in Delhi With Russian
        </h2>

        {/* Description matching exact text */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-[15px] text-gray-600 leading-relaxed font-light">
          We offer Russian spa in south Delhi, Kalkaji, CP and Aerocity. Get Genuine{" "}
          <Link
            href="/massage-in-delhi"
            className="text-gray-900 font-medium underline underline-offset-4 hover:text-[#9c5232] transition-colors"
          >
            Massage Service in Delhi
          </Link>{" "}
          like Nuru massage, b2b massage, hot stone &amp; oil massage and many more.
        </p>

        {/* 4 Amenities Icons Row */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto items-center">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="relative size-16 sm:size-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="size-14 sm:size-16 object-contain"
                />
              </div>
              <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold text-[#2b1810] group-hover:text-[#9c5232] transition-colors">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

