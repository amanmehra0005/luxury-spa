import { Award, Shield, Sparkles, Clock } from "lucide-react";

const badges = [
  { icon: Award, title: "100% Certified Therapists", sub: "Russian & European" },
  { icon: Sparkles, title: "5-Star Hygiene Standards", sub: "Sanitized After Every Guest" },
  { icon: Shield, title: "100% Privacy & Discretion", sub: "Private Closed Suites" },
  { icon: Clock, title: "24/7 Service Across Delhi NCR", sub: "Instant Confirmation" },
];

export default function HomeTrustBadges() {
  return (
    <section aria-label="Trust & Quality Guarantees" className="bg-[#fffaf5] py-8 px-4 md:px-8 border-b border-amber-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-[#fff3e8] text-[#9c5232] flex items-center justify-center mb-2.5 shadow-sm">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-title text-xs sm:text-sm font-bold text-[#2b1810]">{item.title}</h3>
                <p className="text-[11px] text-gray-500 font-medium">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
