import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_URL } from "../siteContact";

const treatments = [
  {
    title: "B2B Full Body Massage",
    desc: "Sensory, head-to-toe full body relaxation using warm organic essential oils and rhythmic Russian techniques.",
    image: "/images/b2b-full-body-massage.jpg",
    link: "/b2b-massage-in-delhi",
  },
  {
    title: "Warm Candle Oil Massage",
    desc: "Melted organic soy candle wax infused with shea butter and lavender gently massaged into tired muscles.",
    image: "/images/oil-massage-candle-lit-spa-delhi.jpg",
    link: "/aromatherapy-massage-in-delhi",
  },
  {
    title: "Potli & Hot Stone Therapy",
    desc: "Heated herbal pouches and smooth volcanic stones placed on key acupressure points to release chronic stiffness.",
    image: "/images/potliMassage.jpg",
    link: "/how-hot-stone-massage-works-in-delhi-spa",
  },
];

export default function HomeSpecializedTreatments() {
  return (
    <section aria-labelledby="specialized-heading" className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9c5232]">Handcrafted Treatments</p>
        <h2 id="specialized-heading" className="mt-2 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Popular Massage Therapies at Luxury Russian Spa
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-gray-600">
          Explore specialized wellness rituals designed to melt stress, soothe joints, and elevate your senses.
        </p>

        {/* 3 Treatment Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {treatments.map((item, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-amber-100 hover:ring-[#9c5232] flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Luxury Russian Spa in Delhi`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-title text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#9c5232] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-left">
                <a
                  href={`${WHATSAPP_URL}&text=Hi!%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(item.title)}%20at%20Luxury%20Russian%20Spa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#9c5232] hover:bg-[#834329] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  Book Therapy <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
