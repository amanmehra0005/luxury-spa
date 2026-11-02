import Link from "next/link";
import { FaTelegramPlane, FaCheckCircle } from "react-icons/fa";
import { TELEGRAM_URL } from "../siteContact";

export default function HomePricingSection() {
  return (
    <section aria-labelledby="pricing-heading" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 text-left">
            <h2
              id="pricing-heading"
              className="font-serif italic text-3xl sm:text-4xl md:text-[2.6rem] text-[#2b1810] font-bold leading-tight"
            >
              Our Full Night Russian Pricing
            </h2>
            <p className="mt-5 text-sm sm:text-[15px] text-gray-700 leading-relaxed font-normal">
              Experience <strong className="font-semibold text-gray-900">Russian Spa in Delhi</strong> at very affordable prices.
              Contact Us for Best{" "}
              <Link
                href="/spa-price-in-delhi"
                className="text-gray-900 font-medium underline underline-offset-4 hover:text-[#9c5232] transition-colors"
              >
                Spa Price in Delhi
              </Link>
              .
            </p>
          </div>

          {/* Center Card: Spa Outlet */}
          <div className="lg:col-span-4">
            <div className="relative bg-[#faf9f6] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-[70px] p-7 sm:p-8 border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(156,82,50,0.14)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between min-h-[460px]">
              {/* Subtle decorative leaf silhouette in background */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-amber-100/40 via-transparent to-transparent pointer-events-none rounded-tr-[70px]" />

              <div className="relative text-center">
                <h3 className="font-title text-2xl sm:text-[26px] font-bold text-[#2b1810] tracking-wide">
                  Spa Outlet
                </h3>

                <div className="my-4 border-t border-gray-300/80 w-4/5 mx-auto" />

                <div className="text-2xl sm:text-3xl font-bold">
                  <span className="text-[#9c5232]">₹1499</span>
                  <span className="text-[#3b4b59] font-title text-xl sm:text-2xl font-semibold">/Session</span>
                </div>

                <div className="my-4 border-t border-gray-300/80 w-4/5 mx-auto" />

                <ul className="space-y-3.5 text-center mt-6 text-sm text-gray-600 font-light">
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Full Body Massage</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>One Session</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Indian therapist</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Private Room</span>
                  </li>
                </ul>
              </div>

              <div className="relative mt-8 pt-4">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#0084c8] hover:bg-[#0070aa] text-white py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaTelegramPlane className="text-base" /> JOIN TELEGRAM
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: 5 Star Hotels outlets */}
          <div className="lg:col-span-4">
            <div className="relative bg-[#faf9f6] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-[70px] p-7 sm:p-8 border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(156,82,50,0.14)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between min-h-[460px]">
              {/* Subtle decorative leaf silhouette in background */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-amber-100/40 via-transparent to-transparent pointer-events-none rounded-tr-[70px]" />

              <div className="relative text-center">
                <h3 className="font-title text-2xl sm:text-[26px] font-bold text-[#2b1810] tracking-wide">
                  5 Star Hotels outlets
                </h3>

                <div className="my-4 border-t border-gray-300/80 w-4/5 mx-auto" />

                <div className="text-2xl sm:text-3xl font-bold">
                  <span className="text-[#9c5232]">₹14999</span>
                  <span className="text-[#3b4b59] font-title text-xl sm:text-2xl font-semibold">/Session</span>
                </div>

                <div className="my-4 border-t border-gray-300/80 w-4/5 mx-auto" />

                <ul className="space-y-3 text-center mt-6 text-sm text-gray-600 font-light">
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Full Body Massage</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>One Session</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Foreign therapist</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Private Room</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Steam With Jacuzzi Bath</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-[#9c5232] text-sm shrink-0" />
                    <span>Free Consultation</span>
                  </li>
                </ul>
              </div>

              <div className="relative mt-8 pt-4">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#0084c8] hover:bg-[#0070aa] text-white py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaTelegramPlane className="text-base" /> JOIN TELEGRAM
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Centered "KNOW MORE" Button */}
        <div className="mt-12 text-center">
          <Link
            href="/spa-price-in-delhi"
            className="inline-flex items-center justify-center rounded-full bg-white hover:bg-gray-50 text-gray-800 hover:text-black px-10 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] border border-gray-200/80 transition-all duration-300 hover:-translate-y-0.5"
          >
            KNOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
