import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  Hotel,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  TrainFront,
  Users,
  X,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

export const DEFENCE_ADDRESS = {
  streetAddress: "Near Main Market & Ring Road, Defence Colony",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110024",
};

export const faqs = [
  {
    question: "Where is your Russian spa in Defence Colony located?",
    answer:
      "Our luxury spa is located right near Defence Colony Main Market and Ring Road, just 3 minutes from Moolchand Metro Station (Violet Line Gate 1) and 4 minutes from Lajpat Nagar Metro Interchange. If you live or are staying in Defence Colony (A, B, C Blocks), South Extension, or nearby hotels like The Lodhi, our certified therapists can also visit your private residence or hotel suite within 15–20 minutes.",
  },
  {
    question: "What are the spa and massage prices in Defence Colony?",
    answer:
      "We maintain 100% transparent pricing without hidden counter charges. Our introductory Spa Outlet session starts at ₹1,499 for 60 minutes with full body oil/cream massage and private attached hot shower. Our 5-Star Hotel / Luxury In-Room Suite package is ₹12,999 for an extended 120-minute sensory session including B2B massage and premium aromatherapy oils.",
  },
  {
    question: "What is the Russian girl price / Russian therapist rate in Defence Colony?",
    answer:
      "Searches for 'Russian girl price in Defence Colony' often lead to deceptive third-party broker ads asking for advance online deposits. At Luxury Russian Spa, we provide authentic, certified Russian and foreigner female therapists in an upscale, 100% safe wellness setting. Our rates are strictly fixed: ₹1,499 for outlet sessions and ₹12,999 for 5-star hotel visits. You can preview verified therapist profiles on Telegram, and you pay zero advance deposit.",
  },
  {
    question: "Do you offer in-room home and hotel visits in Defence Colony?",
    answer:
      "Yes. Defence Colony is one of our primary South Delhi in-room service zones. We serve luxury bungalows, service apartments, and nearby 5-star hotels (The Lodhi, The Oberoi, Eros Hotel). Simply share your location on WhatsApp and our therapist arrives within 15 to 20 minutes with sanitized towels and therapeutic oils.",
  },
  {
    question: "Is there any advance payment required?",
    answer:
      "No. We have a strict zero-advance policy for all appointments. You meet your therapist in person, inspect the private room, and pay by UPI, Cash, or Card only after your session is completed.",
  },
  {
    question: "Are your private suites equipped with attached hot showers?",
    answer:
      "Yes. Every private suite at our Defence Colony spa features an attached private hot rain shower, fresh cotton towels, disposable innerwear, and luxury toiletries for total privacy and hygiene.",
  },
  {
    question: "Is your Defence Colony spa open late at night?",
    answer:
      "Yes, we operate 24 hours a day, 7 days a week. Midnight appointments and late-evening sessions after corporate dinners or flights are welcomed.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: MapPin, label: "Near Def Col Main Market" },
  { icon: Users, label: "Russian & Foreigner Therapists" },
  { icon: TrainFront, label: "Near Moolchand Metro" },
  { icon: Clock, label: "Open 24/7 Day & Night" },
];

const quickFacts = [
  { value: "₹1,499", label: "Welcome Offer", note: "Starting outlet rate" },
  { value: "24/7", label: "Always Open", note: "Day & late night slots" },
  { value: "15 Mins", label: "Home / Hotel Visit", note: "Across South Delhi" },
  { value: "0", label: "Advance Deposit", note: "Pay after meeting" },
];

const hotels = [
  {
    name: "The Lodhi New Delhi",
    area: "Lodhi Road (5 mins from Def Col)",
    image: "/images/5StarHotelSpa.jpg",
    text: "Ultra-luxury hotel near Defence Colony. Enjoy quiet, bespoke in-room spa therapy in your private suite within 15 minutes of booking.",
  },
  {
    name: "The Oberoi New Delhi",
    area: "Dr. Zakir Hussain Marg (7 mins)",
    image: "/images/TheParkConnaughtPlace.webp",
    text: "World-class business travelers at The Oberoi enjoy discrete, professional Russian massage delivered straight to their hotel room.",
  },
  {
    name: "Defence Colony Luxury Residences",
    area: "Blocks A, B, C & Flyover Market",
    image: "/images/hotel-room-bed-with-white-towels.webp",
    text: "Private home visits delivered directly to upscale bungalows and residences across Defence Colony with full discretion.",
  },
  {
    name: "Eros Hotel New Delhi",
    area: "Nehru Place (8 mins)",
    image: "/images/ErosHotel_lajpatnagar.jpg",
    text: "Corporate guests enjoy post-meeting deep tissue therapy and relaxing aromatherapy without leaving the comfort of their room.",
  },
];

const services = [
  {
    title: "Russian Full Body Massage",
    text: "Signature Russian techniques using warm aromatic oils to release muscular stiffness and calm mental anxiety. Our most requested therapy in Defence Colony.",
    time: "60–90 min",
    price: "From ₹2,499",
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "B2B Body Spa Massage",
    text: "Sensory, deeply relaxing body-to-body therapy in total privacy. Performed by certified Russian and foreigner therapists with warm oils and attached hot shower.",
    time: "60–90 min",
    price: "From ₹2,999",
    href: "/b2b-massage-in-delhi",
  },
  {
    title: "Swedish Relaxing Massage",
    text: "Long, flowing gliding strokes with organic lavender oils. Gentle pressure ideal for releasing stress and restoring natural sleep cycles.",
    time: "60–90 min",
    price: "From ₹1,499",
    href: "/swedish-massage-in-delhi",
  },
  {
    title: "Traditional Thai Massage",
    text: "Dry stretching and rhythmic acupressure on a comfortable floor mat in loose clothes. Relieves joint stiffness and lower back pain.",
    time: "60–90 min",
    price: "From ₹1,999",
    href: "/thai-massage-in-delhi",
  },
  {
    title: "Deep Tissue Therapy",
    text: "Firm myofascial pressure targeting chronic knots in the neck, stiff shoulders, and back caused by long hours of desk work.",
    time: "60–90 min",
    price: "From ₹2,499",
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Aromatherapy Massage",
    text: "Infused therapeutic botanical oils (eucalyptus, lavender, lemongrass) to restore mood and eliminate physical fatigue.",
    time: "60–90 min",
    price: "From ₹1,999",
    href: "/aromatherapy-massage-in-delhi",
  },
  {
    title: "Four-Hands Sandwich Massage",
    text: "Two synchronized therapists working in perfect harmony for double the tension release and complete full-body relaxation.",
    time: "60–90 min",
    price: "From ₹3,999",
    href: "/sandwich-massage",
  },
  {
    title: "Luxury Couple Massage",
    text: "Side-by-side tables in an expansive private suite with romantic ambient lighting and private hot shower. Ideal for couples.",
    time: "60–120 min",
    price: "From ₹4,999",
    href: "/couple-massage",
  },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1499/-",
    period: "Per Session",
    features: [
      "Oil Massage",
      "Cream Massage",
      "Shower 60 min",
      "Consultation",
    ],
    popular: false,
  },
  {
    title: "5 Star Hotel Outlet",
    price: "₹12,999/-",
    period: "Per Session",
    features: [
      "Oil Massage",
      "Cream Massage",
      "Private Suite",
      "B2B Massage",
      "120 min Session",
    ],
    popular: true,
  },
];

const galleryTherapists = [
  { id: 1, image: "/images/defence/therapist-1.jpg", alt: "Russian Spa Therapist in Defence Colony Near Moolchand" },
  { id: 2, image: "/images/defence/therapist-2.jpg", alt: "Certified Russian Body Massage Therapist Defence Colony" },
  { id: 3, image: "/images/lajpat/therapist-3.webp", alt: "Russian Spa Therapist Defence Colony Luxury Spa" },
  { id: 4, image: "/images/image2.webp", alt: "Professional Thai and Russian Therapist Defence Colony Hotel Visit" },
  { id: 5, image: "/images/defence/therapist-5.jpg", alt: "Luxury Russian Spa Expert Defence Colony Delhi" },
];

const steps = [
  {
    title: "Send a Quick Message",
    text: "WhatsApp, Telegram or call us. Tell us your preferred time, treatment, and whether you're visiting our outlet or prefer an in-room hotel/home visit.",
  },
  {
    title: "Preview Therapist & Confirm Price",
    text: "We share therapist photos, confirm your slot, and lock in the transparent rate (₹1,499 outlet or ₹12,999 hotel suite). Zero advance payment needed.",
  },
  {
    title: "Arrive, Relax & Pay Later",
    text: "Step into our serene private suite with attached hot shower near Defence Colony, or welcome your therapist to your suite. Pay by UPI, Cash or Card after meeting.",
  },
];

const gettingHere = [
  { icon: TrainFront, title: "By Metro", text: "Moolchand Metro (Violet Line Gate 1) is a 3-minute walk. Lajpat Nagar Interchange (Pink & Violet Lines) is 4 minutes away." },
  { icon: MapPin, title: "Prime Location", text: "Near Defence Colony Main Market, Ring Road, and Andrews Ganj flyover. Minutes from South Extension." },
  { icon: Clock, title: "24/7 Availability", text: "Open day and night. Late night slots after 10 PM and early morning sessions are readily supported." },
];

const areasCovered = [
  "Defence Colony (Block A, B, C)",
  "Def Col Main Market",
  "South Extension 1 & 2",
  "Andrews Ganj",
  "Moolchand",
  "Lajpat Nagar",
  "Jangpura & Bhogal",
  "Lodhi Road",
  "Gulmohar Park",
  "New Friends Colony",
];

const nearbyOutlets = [
  { area: "Lajpat Nagar", note: "Just 3 minutes away", href: "/spa-in-lajpat-nagar" },
  { area: "New Friends Colony", note: "Near The Suryaa Hotel", href: "/spa-in-new-friends-colony" },
  { area: "Connaught Place", note: "Inside The Park Hotel", href: "/spa-in-connaught-place" },
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
];

function WhatsAppButton({ children = "Book on WhatsApp", className = "" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#15803d] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(21,128,61,0.25)] transition-all hover:bg-[#166534] hover:shadow-[0_14px_30px_rgba(21,128,61,0.35)] active:scale-95 ${className}`}
    >
      <FaWhatsapp className="size-4 shrink-0 text-white" />
      <span>{children}</span>
    </a>
  );
}

function PhoneButton({ children = "Call +91 99901 93385", className = "" }) {
  return (
    <a
      href={PHONE_LINK}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-amber-900/20 bg-white/80 px-6 py-3.5 text-sm font-semibold text-amber-950 backdrop-blur-sm transition-all hover:border-amber-900/40 hover:bg-white active:scale-95 ${className}`}
    >
      <Phone className="size-4 shrink-0 text-primary" />
      <span>{children}</span>
    </a>
  );
}

export default function DefenceColonyPage() {
  return (
    <main className="bg-white text-[#2b1810]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf5] via-white to-amber-50/30 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-bodycolor">
              <li>
                <a href="/" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>/</li>
              <li>
                <a href="/outlets" className="hover:text-primary transition-colors">Outlets</a>
              </li>
              <li>/</li>
              <li className="font-semibold text-primary">Spa in Defence Colony</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 ring-1 ring-amber-300/60">
                <Sparkles className="size-3.5 text-amber-700" /> Premium Russian Spa · Defence Colony
              </span>

              <h1 className="mt-4 font-title text-3xl font-extrabold tracking-tight text-[#2b1810] sm:text-4xl md:text-5xl lg:leading-[1.15]">
                Russian Spa in <span className="text-[#9c5232]">Defence Colony</span> at Just ₹1,499
              </h1>

              <p className="mt-4 text-base leading-relaxed text-bodycolor sm:text-lg">
                Step into elite South Delhi relaxation right near{" "}
                <strong className="font-semibold text-dark">Defence Colony Main Market</strong> and{" "}
                <strong className="font-semibold text-dark">Moolchand Metro</strong>. Certified Russian, foreigner,
                and Thai therapists, 100% soundproof private suites with attached hot rain showers, and a strict
                zero-advance policy.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroChips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-dark shadow-sm ring-1 ring-amber-200"
                    >
                      <Icon className="size-3.5 text-primary" />
                      {chip.label}
                    </span>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <WhatsAppButton>Book Def Col Spa on WhatsApp</WhatsAppButton>
                <PhoneButton />
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-50 px-5 py-3.5 text-sm font-semibold text-sky-800 transition-all hover:bg-sky-100 active:scale-95"
                >
                  <FaTelegramPlane className="size-4 text-sky-600" />
                  <span>Preview Therapists</span>
                </a>
              </div>

              <p className="mt-4 text-xs text-bodycolor flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                <span>Zero Advance Deposit · Pay after meeting your therapist · 100% Private & Discreet</span>
              </p>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-amber-50 p-2 ring-1 ring-amber-200/80 shadow-2xl">
                <Image
                  src="/images/defence/hero-therapist.jpg"
                  alt="Russian Spa Therapist in Defence Colony South Delhi"
                  width={600}
                  height={600}
                  priority
                  className="h-80 w-full rounded-2xl object-cover sm:h-96"
                />
                {/* <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/75 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fdc28c]">Elite South Delhi Spa</p>
                  <p className="font-title text-base font-bold">Near Def Col Market & Moolchand</p>
                  <p className="text-xs text-white/80">3 min from Moolchand Metro · Open 24/7</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Facts Banner */}
      <section className="border-y border-amber-200/60 bg-[#fffaf5] py-8 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white p-4 text-center ring-1 ring-amber-100 shadow-sm">
                <p className="font-title text-2xl sm:text-3xl font-extrabold text-[#9c5232]">{fact.value}</p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#2b1810]">{fact.label}</p>
                <p className="text-[11px] text-bodycolor">{fact.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section id="pricing" className="relative bg-[#2b1810] py-16 md:py-24 px-4 md:px-8 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#24130d] to-[#1c0f09] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#9c5232]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fdc28c]">
              Fixed & Transparent Rates
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Defence Colony <span className="italic font-normal text-[#fdc28c]">Spa Prices</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/70">
              Zero counter surprise charges. Clean, fixed prices confirmed on WhatsApp before arrival.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2 items-stretch">
            {pricingPlans.map(({ title, price, period, features, popular }) => (
              <div
                key={title}
                className={`relative flex flex-col rounded-[26px] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 ${
                  popular
                    ? "bg-white/[0.08] backdrop-blur-md border border-[#fdc28c]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-[#fdc28c]/20"
                    : "bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-xl hover:border-white/20"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-[#fdc28c] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2b1810] shadow-md">
                    Popular
                  </span>
                )}

                <h3 className="font-title text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h3>

                <div className="mt-4">
                  <p className={`font-title text-4xl sm:text-5xl font-bold tracking-tight ${popular ? "text-[#fdc28c]" : "text-white"}`}>
                    {price}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-white/75 font-medium">{period}</p>
                </div>

                <div className="my-6 h-px w-full bg-white/10" />

                <ul className="flex-1 space-y-3.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-white/95">
                      <Check className={`size-4 shrink-0 ${popular ? "text-[#fdc28c]" : "text-white"}`} strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 px-6 text-sm font-bold text-[#2b1810] shadow-lg transition-all duration-200 hover:bg-[#fdc28c] hover:text-[#2b1810] active:scale-95"
                >
                  <FaWhatsapp className="size-4 text-emerald-600" />
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Verified Therapists Gallery */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Verified International Staff
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2b1810]">
              Russian & Foreigner <span className="text-[#9c5232]">Therapists in Defence Colony</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-bodycolor">
              Certified female therapists from Russia, foreign countries, Thailand, and India. Preview verified profiles on Telegram before booking.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
            {galleryTherapists.map((t) => (
              <div key={t.id} className="flex flex-col items-center">
                <div className="relative aspect-[3/4.6] w-full overflow-hidden rounded-[20px] border-[3px] border-[#5a616c] shadow-md transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0088cc] px-2.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-[#0077b5] active:scale-95"
                >
                  <FaTelegramPlane className="size-4 shrink-0" />
                  <span className="truncate">View More On Telegram</span>
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs sm:text-sm text-bodycolor">
            Want to check who is available right now? Message us on{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
              WhatsApp (+91-9990193385)
            </a>{" "}
            and we will confirm your therapist and appointment immediately.
          </p>
        </div>
      </section>

      {/* 5. Complete Services Menu */}
      <section className="bg-[#fffaf5] py-16 md:py-24 px-4 md:px-8 border-y border-amber-200/60">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="services-heading"
            eyebrow="Spa & Massage Menu"
            title="Massage Treatments in"
            highlight="Defence Colony"
            text="From deep tissue relief to gentle Swedish and sensory B2B body massage, our therapies are designed for complete rejuvenation."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-[0_8px_24px_rgba(43,24,16,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-amber-300"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-amber-900">
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 ring-1 ring-amber-200">{s.time}</span>
                  <span className="font-title text-sm font-bold text-[#9c5232]">{s.price}</span>
                </div>

                <h3 className="mt-4 font-title text-lg font-bold text-[#2b1810]">{s.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-bodycolor">{s.text}</p>

                <div className="mt-5 pt-4 border-t border-amber-100/80 flex items-center justify-between">
                  <a href={s.href} className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-amber-800">
                    Details <ArrowRight className="size-3.5" />
                  </a>
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I want to book ${s.title} in Defence Colony.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <FaWhatsapp className="size-3.5" /> Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hotel & Luxury Residence In-Room Visits */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Discreet In-Room Service
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2b1810]">
              Hotel & Home Visits in <span className="text-[#9c5232]">Defence Colony</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-bodycolor">
              Enjoy private therapy delivered right to your luxury bungalow, service suite, or nearby 5-star hotel in 15–20 minutes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotels.map((h) => (
              <div
                key={h.name}
                className="group overflow-hidden rounded-3xl bg-amber-50/50 ring-1 ring-amber-200/60 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={h.image}
                    alt={`${h.name} in ${h.area}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-title text-base font-bold text-[#2b1810]">{h.name}</h3>
                  <p className="text-xs font-semibold text-primary">{h.area}</p>
                  <p className="mt-2 text-xs leading-relaxed text-bodycolor">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Directions & Location Context */}
      <section className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8 border-y border-amber-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Easy Access
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl font-bold text-[#2b1810]">
              Reaching Our <span className="text-[#9c5232]">Defence Colony Spa</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {gettingHere.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-title text-base font-bold text-dark">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-bodycolor">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-amber-200">
            <h3 className="font-title text-base sm:text-lg font-bold text-[#2b1810] text-center">
              Nearby South Delhi Areas We Serve
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {areasCovered.map((a) => (
                <span key={a} className="rounded-full bg-amber-50 px-3.5 py-1 text-xs font-medium text-amber-900 ring-1 ring-amber-200">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section id="faqs" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl font-bold text-[#2b1810]">
              Questions About <span className="text-[#9c5232]">Defence Colony Spa</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group rounded-2xl bg-amber-50/50 p-5 ring-1 ring-amber-200/60 transition-all hover:bg-amber-50"
              >
                <summary className="flex cursor-pointer items-center justify-between font-title text-base font-bold text-dark">
                  <span>{f.question}</span>
                  <Plus className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-bodycolor">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Other Outlets Section */}
      <section className="bg-[#fffaf5] py-12 px-4 md:px-8 border-t border-amber-200/60">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-title text-xl font-bold text-dark">Explore Our Other Delhi Outlets</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {nearbyOutlets.map((o) => (
              <a
                key={o.area}
                href={o.href}
                className="group rounded-2xl bg-white px-5 py-3 text-left ring-1 ring-amber-200 transition-all hover:shadow-md hover:ring-amber-400"
              >
                <p className="font-title text-sm font-bold text-primary group-hover:text-amber-800">{o.area}</p>
                <p className="text-[11px] text-bodycolor">{o.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
