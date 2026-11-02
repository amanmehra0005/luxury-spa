import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../siteContact";

const therapists = [
  { label: "Foreigner Therapist", image: "/images/a1.webp" },
  { label: "5 Star Hotels Spa", image: "/images/a2.webp" },
  { label: "Home Spa", image: "/images/a3.webp" },
  { label: "Thai Massage", image: "/images/a4.webp" },
  { label: "B2B Therapy", image: "/images/a5.webp" },
  { label: "Night Spa", image: "/images/1.jpg" },
];

export default function HomeTherapistsRow() {
  return (
    <section aria-labelledby="therapists-row-heading" className="bg-white py-14 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading - Script/Cursive style like the image */}
        <h2
          id="therapists-row-heading"
          className="text-center font-serif italic text-5xl sm:text-4xl md:text-[35px] leading-snug font-bold text-[#2b1810]"
        >
          Book Full Night Russian Spa in Delhi With Full Service
        </h2>

        {/* Description Paragraph */}
        <p className="mt-5 max-w-6xl mx-auto text-center text-sm sm:text-[15px] text-gray-600 leading-relaxed">
          Book a Russian spa in Delhi with extra service for your international massage experience. At{" "}
          <strong className="font-semibold text-gray-800">Luxury Russian Spa</strong>, we have 12+ spa outlets all over Delhi,
          Noida and Gurgaon. Try our{" "}
          <strong className="font-semibold text-gray-800">full night spa in Delhi with full service</strong>{" "}
          for your deep relaxation. We offer b2b massage, sandwich massage, full body massage and Nuru massage in Delhi
          with expert therapists. Our first visit started at just ₹1499 for a full body massage in Delhi with a shower.
          We are open 24/7 at a full night spa in Delhi. By{" "}
          <strong className="font-semibold text-gray-800">booking Russian spa in Delhi</strong>{" "}
          for night you will get next level experience.
        </p>

        {/* 6 Therapist Cards Grid */}
        <div className="mt-10 max-w-[1040px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {therapists.map((item, idx) => (
            <a
              key={idx}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[20px] bg-stone-100 shadow-sm hover:shadow-md transition-all duration-300">
                <Image
                  src={item.image}
                  alt={`${item.label} - Luxury Russian Spa Delhi`}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3.5 text-center font-bold text-sm sm:text-[15px] text-[#2b1810] group-hover:text-[#9c5232] transition-colors leading-snug px-1 max-w-[130px]">
                {item.label}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
