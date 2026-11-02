import { ShieldCheck, UserCheck, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Certified Russian Therapists",
    desc: "Handpicked and certified therapists from Russia, Uzbekistan, and Europe with years of clinical massage experience.",
  },
  {
    icon: ShieldCheck,
    title: "100% Privacy & Discretion",
    desc: "Private, soundproof suites with private attached showers. We maintain strict client confidentiality at all times.",
  },
  {
    icon: Sparkles,
    title: "Premium Herbal Oils",
    desc: "We exclusively use pure cold-pressed organic almond, jojoba, and essential lavender oils imported for deep nourishment.",
  },
  {
    icon: Clock,
    title: "24/7 In-Room & Hotel Service",
    desc: "Available 24 hours every day across our outlets and for in-room visits at partner 5-star hotels in Delhi NCR.",
  },
];

export default function HomeWhyChooseGrid() {
  return (
    <section aria-labelledby="why-choose-heading" className="bg-white py-14 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9c5232]">The Gold Standard</p>
        <h2 id="why-choose-heading" className="mt-2 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Luxury Russian Spa Delhi
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
          Discover why discerning travelers, business executives, and wellness enthusiasts trust us as Delhi&apos;s leading Russian body spa.
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 text-center ring-1 ring-amber-100 shadow-sm hover:shadow-xl hover:ring-[#9c5232] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center"
              >
                <div className="size-14 rounded-2xl bg-[#fff3e8] text-[#9c5232] flex items-center justify-center mb-5 shadow-inner">
                  <Icon className="size-7" />
                </div>
                <h3 className="font-title text-base sm:text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
