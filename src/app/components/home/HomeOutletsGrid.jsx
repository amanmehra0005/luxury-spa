import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

const hotels = [
  {
    name: "JW Marriott Hotel Aerocity",
    location: "Locations – Aerocity, New Delhi",
    desc: "JW Marriott Aerocity is one best and most luxurious spas in Aerocity that is known for its style. This also offers all the relaxing therapies, including the best massage in Aerocity, which is designed to give relaxation to your body. You can sleep during massage in the spa room as all the facilities are provided there.",
    image: "/images/jw-marriott-hotel-aerocity.jpg",
    link: "/spa-in-aerocity",
  },
  {
    name: "Lemon Tree Premier Aerocity",
    location: "Locations – Aerocity, New Delhi",
    desc: "In case you are at Lemon Tree Premier, do not forget to avail the spa experience. It is famed for comfort, excellent service, and professional therapies. For those looking for a Russian spa in Aerocity, this is highly recommended. With a massage spa in Delhi and other locations, the spa facility ensures that you get the best treatment near your home.",
    image: "/images/lemon-tree-premier-aerocity.jpg",
    link: "/spa-in-aerocity",
  },
  {
    name: "Novotel New Delhi Aerocity",
    location: "Locations – Aerocity, New Delhi",
    desc: "Novotel Aerocity provides a contemporary and rejuvenating hotel spa in Delhi. The spa menu provides body massages, aromatherapy, and wellness treatments. Visitors also appreciate the renowned Premium Body spa in Aerocity, which frees one from tiredness and revitalizes the mind. A great option for both corporate visitors and families.",
    image: "/images/novotel-new-delhi-aerocity.webp",
    link: "/spa-in-aerocity",
  },
  {
    name: "The Grand New Delhi",
    location: "Locations – Vasant Kunj, New Delhi",
    desc: "The Grand New Delhi offers a luxury spa that provides relaxation with comfort. It provides special massages, body treatments, and wellness care. If you need a Spa in Vasant Kunj or near the area this can be a great option. It's the perfect destination to relax and indulge in a refreshing experience amidst the city.",
    image: "/images/TheGrandNewDelhi.webp",
    link: "/spa-in-vasant-kunj",
  },
  {
    name: "IBIS New Delhi Aerocity",
    location: "Locations – Aerocity, New Delhi",
    desc: "If you're flying in or out, the IBIS Aerocity Spa offers the perfect layover luxury. Experience a premium Russian Spa in Aerocity menu right beside the airport. Whether you choose a revitalizing Thai, B2B, sensual Nuru, or couple treatment, skilled international staff ensure relaxation. Spa bundles start at ₹12,999, and the first-visitor offer is a tempting ₹1,499.",
    image: "/images/ibis-new-delhi-aerocity.jpg",
    link: "/spa-in-aerocity",
  },
  {
    name: "The Park Connaught Place",
    location: "Locations – The Park Hotel, C.P",
    desc: "Experience pure relaxation at The Park with our premium Russian Spa in Connaught Place. Enjoy a luxury spa session with Thai massage, Aroma therapy, and Couple massage delivered by certified Russian and Thai therapists. Our 5-star spa experience starts from ₹12,999, and first-time guests can enjoy a special welcome offer at just ₹1,499.",
    image: "/images/TheParkConnaughtPlace.webp",
    link: "/spa-in-connaught-place",
  },
  {
    name: "The Suryaa New Delhi (NFC)",
    location: "Locations – New Friends Colony, South",
    desc: "The Suryaa New Delhi (NFC) offers a calm break for body and mind. The spa menu features real Russian therapies, with therapists ready to melt away tension expertly. Escape into this tranquil slice of luxury and let a day of stress fade. Relaxation and rejuvenation are what we do best at this luxury hotel spa in South Delhi.",
    image: "/images/TheSuryaaNewDelhi(NFC).webp",
    link: "/spa-in-new-friends-colony",
  },
  {
    name: "The Ashok (Chanakyapuri)",
    location: "Locations – Chanakyapuri, New Delhi",
    desc: "Visit The Ashok Hotel for a truly premium and relaxing escape with Russian Spa Delhi's most loved therapies. Enjoy a calm, luxury setting with trained Russian and Thai specialists, offering soothing aromatic massage and couple massage for complete comfort. It's a perfect choice if you are searching for a night spa in Delhi with full service in a five-star ambience.",
    image: "/images/TheAshok(Chanakyapuri).webp",
    link: "/spa-in-connaught-place",
  },
];

export default function HomeOutletsGrid() {
  return (
    <section
      aria-labelledby="outlets-heading"
      className="bg-[#fffaf5] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-amber-100"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c5232] mb-2">
          Luxury Treatment with 5 star Outlet
        </p>

        {/* Cursive / Script Main Title in Brand Espresso */}
        <h2
          id="outlets-heading"
          className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#2b1810] leading-tight tracking-tight mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          Our 5 Star Hotels for Russian Service in Delhi
        </h2>

        {/* 2-Columns Grid of 8 Optimized Luxury Cards in Brand Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 text-left">
          {hotels.map((hotel, idx) => (
            <article
              key={idx}
              className="group bg-[#2b1810] text-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ring-1 ring-amber-900/40 hover:ring-[#9c5232]/80"
            >
              <div className="flex flex-col-reverse sm:flex-row gap-5 items-start justify-between">
                {/* Left: Info & Description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-title text-xl sm:text-2xl font-bold text-white group-hover:text-[#fdc28c] transition-colors leading-snug">
                    <Link href={hotel.link} className="hover:underline">
                      {hotel.name}
                    </Link>
                  </h3>

                  <span className="inline-block text-xs font-semibold text-[#fdc28c] tracking-wide mt-1">
                    {hotel.location}
                  </span>

                  <p className="mt-3 text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light">
                    {hotel.desc}
                  </p>
                </div>

                {/* Right: Hotel Image */}
                <div className="relative w-full sm:w-36 md:w-40 aspect-[16/10] sm:aspect-square shrink-0 rounded-xl overflow-hidden shadow-md ring-1 ring-white/10 bg-black/30">
                  <Image
                    src={hotel.image}
                    alt={`${hotel.name} - 5 Star Russian Spa Outlet in Delhi`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom: Telegram Join Button matching screenshot */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0088cc] hover:bg-[#0077b5] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:shadow-cyan-900/40"
                >
                  <FaTelegramPlane className="text-sm" /> JOIN FOR DAILY UPDATES
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
