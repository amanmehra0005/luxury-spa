import { preload } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Home,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// One price list for every outlet. Change these two and the whole page (and the schema in ./page.js) follows.
export const PRICES = {
  outlet: { price: 1499, label: "₹1,499", time: "60 min" },
  fiveStar: { price: 12999, label: "₹12,999", time: "120 min" },
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What is the Russian spa price in Delhi?",
    answer:
      "Our authentic Russian spa outlet session starts at just ₹1,499 for 60 minutes. Our 5-star hotel suite / in-room package is ₹12,999 for a full 120-minute luxury session including B2B massage, organic oils, and attached private hot shower. There are zero hidden charges.",
  },
  {
    question: "What is the Russian girl price / Russian therapist massage rate in Delhi?",
    answer:
      "Clients searching for 'Russian girl price' or 'Russian massage in Delhi' often encounter unverified classified scams. At Luxury Russian Spa, we offer professional, certified Russian and European female therapists. Our rates are 100% fixed: ₹1,499 for a 60-min outlet session and ₹12,999 for a 120-min 5-star hotel suite experience. You can preview verified therapist profiles on our Telegram channel before booking, and you pay only after meeting your therapist.",
  },
  {
    question: "How much does a full body massage cost in Delhi?",
    answer:
      "A complete 60-minute full body massage (Swedish, Aromatherapy, or Deep Tissue) is ₹1,499 at our outlets. For in-room 5-star hotel visits, the 120-minute suite package is ₹12,999 with therapist room delivery in 15–20 minutes.",
  },
  {
    question: "What is the Thai massage price in Delhi?",
    answer:
      "A 60-minute traditional Thai massage at our outlets is ₹1,499. It is performed on a comfortable floor mat with passive rhythmic stretching and acupressure in clean loose attire, without oil.",
  },
  {
    question: "What is the B2B massage price in Delhi?",
    answer:
      "Our premium B2B body spa therapy in a private soundproof suite with attached hot rain shower is available at ₹1,499 for outlet sessions and ₹12,999 for a comprehensive 120-minute 5-star hotel suite package.",
  },
  {
    question: "What does a couple spa in Delhi cost?",
    answer:
      "Couple massage sessions take place in an exclusive private suite with side-by-side tables, ambient lighting, and hot showers. Rates start from ₹2,999 for a 60-min outlet session. Message us on WhatsApp for custom anniversary and private suite packages.",
  },
  {
    question: "Are there any hidden counter charges, tips, or extra taxes?",
    answer:
      "No, absolutely not. Unlike cheap street massage parlours that advertise ₹999 and demand ₹4,000 at the counter, what we quote on WhatsApp is exactly what you pay. Fresh linen, organic massage oils, disposable essentials, and attached hot showers are 100% included. Tips are never demanded.",
  },
  {
    question: "Do I have to pay any advance deposit before booking?",
    answer:
      "No. For all outlet bookings across Delhi NCR, we maintain a strict zero-advance-payment policy. You arrive at the spa, meet your therapist, and pay by UPI, Cash, or Card only after your session is completed.",
  },
  {
    question: "Is the price different in Mahipalpur, Aerocity, Connaught Place, or Lajpat Nagar?",
    answer:
      "No. We maintain unified transparent rates across all our Delhi NCR outlets. Whether you visit Aerocity, CP (The Park), Lajpat Nagar, Mahipalpur, or Karol Bagh, the outlet rate starts at ₹1,499.",
  },
  {
    question: "How do 5-star hotel in-room visits work?",
    answer:
      "If you are staying at any 5-star hotel in Delhi NCR (Novotel, Pullman, The Park, The LaLiT, Shangri-La, The Imperial, Radisson, etc.), simply WhatsApp us your hotel name and room number. Our certified therapist reaches your room within 15 to 20 minutes with fresh linens and organic oils.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1280].map((w) => `/images/price/hero-${w}.webp ${w}w`).join(", ");

// In-page navigation ("On this page")
const sections = [
  { id: "price-tiers", label: "Core Rates" },
  { id: "therapists", label: "Therapists" },
  { id: "price-list", label: "Massage Price List" },
  { id: "included", label: "What's Included" },
  { id: "area-prices", label: "Prices by Area" },
  { id: "faq", label: "FAQs" },
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
  { id: 1, image: "/images/Russian-massage-girls.webp", alt: "Certified Russian Spa Therapist in Delhi" },
  { id: 2, image: "/images/lajpat/therapist-2.webp", alt: "Russian Body Massage Expert Delhi NCR" },
  { id: 3, image: "/images/lajpat/therapist-3.webp", alt: "European Spa Therapist at Luxury Delhi Spa" },
  { id: 4, image: "/images/image2.webp", alt: "Professional Thai and Russian Therapist Hotel Visit" },
  { id: 5, image: "/images/lajpat/therapist-5.webp", alt: "Luxury Russian Spa Expert Delhi" },
];

const tiers = [
  {
    icon: Leaf,
    title: "Spa Outlet",
    ...PRICES.outlet,
    description: "At any of our luxury outlets in Delhi NCR",
    features: ["Any massage on our menu", "100% Private room", "Attached hot rain shower", "Pay after your session"],
  },
  {
    icon: Star,
    title: "5 Star Hotel Outlet",
    ...PRICES.fiveStar,
    description: "Private suite or in-room hotel session",
    features: ["Certified Russian / European therapist", "Private luxury suite", "B2B massage & aromatherapy", "Full 120-minute session"],
    popular: true,
  },
];

// Every massage, with a link to its own page and a WhatsApp link that already names the massage
const WHATSAPP_NUMBER_URL = "https://wa.me/919990193385";
const askPriceUrl = (massage, price) =>
  `${WHATSAPP_NUMBER_URL}?text=${encodeURIComponent(`Hi! What's the booking process for a ${massage} (${price})? I'd like to book at an outlet / at hotel.`)}`;

const priceList = [
  {
    name: "Russian Full Body Massage",
    href: "/full-body-massage-in-delhi",
    emoji: "💆",
    price: "₹2,499",
    durations: ["60 min", "90 min"],
    note: "Head to toe with warm aromatic oils. Our most booked Russian massage in Delhi.",
    tag: "Most booked",
  },
  {
    name: "Swedish Relaxing Massage",
    href: "/swedish-massage-in-delhi",
    emoji: "🌙",
    price: "₹1,499",
    durations: ["60 min", "90 min"],
    note: "Light, flowing strokes with organic essential oils. Great for first-timers.",
    tag: "Intro Offer",
  },
  {
    name: "Traditional Thai Massage",
    href: "/thai-massage-in-delhi",
    emoji: "🧘",
    price: "₹1,999",
    durations: ["60 min", "90 min"],
    note: "Passive stretching on a comfortable floor mat in loose clothes. No oil.",
  },
  {
    name: "Aromatherapy Massage",
    href: "/aromatherapy-massage-in-delhi",
    emoji: "🌿",
    price: "₹1,999",
    durations: ["60 min", "90 min"],
    note: "Gentle therapeutic massage with custom mood-enhancing essential oils.",
  },
  {
    name: "Deep Tissue Therapy",
    href: "/deep-tissue-massage-in-delhi",
    emoji: "💪",
    price: "₹2,499",
    durations: ["60 min", "90 min"],
    note: "Firm pressure targeting chronic knots in the neck, stiff shoulders, and back.",
  },
  {
    name: "B2B Body Spa Massage",
    href: "/b2b-massage-in-delhi",
    emoji: "✨",
    price: "₹2,999",
    durations: ["60 min", "90 min"],
    note: "Sensory body-to-body therapy in complete privacy with attached hot rain shower.",
    tag: "Popular",
  },
  {
    name: "Four-Hands Sandwich Massage",
    href: "/sandwich-massage",
    emoji: "👐",
    price: "₹3,999",
    durations: ["60 min", "90 min"],
    note: "Two synchronized therapists working on you simultaneously for double relief.",
  },
  {
    name: "Luxury Couple Massage",
    href: "/couple-massage",
    emoji: "💑",
    price: "₹4,999",
    durations: ["60 min", "90 min"],
    note: "Side-by-side tables in a private suite, romantic lighting, and hot shower.",
    tag: "VIP Suite",
  },
];

const durations = [PRICES.outlet, PRICES.fiveStar];

const included = [
  { icon: ShieldCheck, title: "A private room", text: "Just you and your therapist. Cleaned after every guest, with fresh linen each time." },
  { icon: Sparkles, title: "Oils and towels", text: "Good quality oils and clean towels are part of the price, not an add-on." },
  { icon: Check, title: "A hot shower after", text: "At the outlet, so you don't leave feeling oily. Home visits skip this, obviously." },
  { icon: CreditCard, title: "No surprise extras", text: "The price we quote on WhatsApp is the price you pay. Tips are never expected." },
];

const notIncluded = [
  "Hidden \"service charges\" added at the end",
  "Pressure to buy a package before you leave",
  "A different price once you're on the table",
];

// Same rates everywhere, so areas are grouped by zone and each links to its own page instead of repeating the price.
const areaZones = [
  {
    zone: "Near the Airport",
    emoji: "✈️",
    areas: [
      { area: "Mahipalpur", href: "/spa-in-mahipalpur", note: "Open 24/7" },
      { area: "Aerocity", href: "/spa-in-aerocity", note: "Outlet + hotel visits" },
    ],
  },
  {
    zone: "Central Delhi",
    emoji: "🏛️",
    areas: [
      { area: "Connaught Place", href: "/spa-in-connaught-place", note: "At The Park hotel" },
      { area: "Karol Bagh", href: "/spa-in-karol-bagh" },
      { area: "Paharganj", href: "/spa-in-paharganj", note: "Near New Delhi station" },
    ],
  },
  {
    zone: "South Delhi",
    emoji: "🌳",
    areas: [
      { area: "New Friends Colony", href: "/spa-in-new-friends-colony", note: "Near The Suryaa Hotel" },
      { area: "Defence Colony", href: "/spa-in-defence-colony", note: "Near Def Col Market" },
      { area: "Lajpat Nagar", href: "/spa-in-lajpat-nagar", note: "Near Central Market" },
      { area: "Saket", href: "/spa-in-saket" },
    ],
  },
  {
    zone: "West Delhi",
    emoji: "🌇",
    areas: [
      { area: "Uttam Nagar", href: "/spa-in-uttam-nagar" },
      { area: "Rajouri Garden", href: "/spa-in-rajouri-garden" },
      { area: "Dwarka", href: "/spa-in-dwarka" },
    ],
  },
  {
    zone: "North & East Delhi",
    emoji: "🧭",
    areas: [
      { area: "Rohini", href: "/spa-in-rohini" },
      { area: "Laxmi Nagar", href: "/spa-in-laxmi-nagar" },
    ],
  },
  {
    zone: "Delhi NCR",
    emoji: "🏙️",
    areas: [
      { area: "Gurgaon", href: "/spa-in-gurgaon" },
      { area: "Noida", href: "/spa-in-noida" },
    ],
  },
];

const nearestOutletUrl = `https://wa.me/919990193385?text=${encodeURIComponent("Hi! Which of your outlets is nearest to me? My area is: ")}`;

const getPriceSteps = [
  { title: "Tell us three things", text: "Which massage, how long, and whether it's at an outlet, your home or a hotel. That's all we need." },
  { title: "We reply with the price", text: "Usually within a few minutes on WhatsApp, along with a time that works and who your therapist will be." },
  { title: "Book, then pay after", text: "Once you're happy with the price, we lock in the slot. For outlet visits you pay after your session." },
];

// "Where next" links so visitors can move on to a service, an outlet or the home page easily
const nextLinks = [
  { label: "Home", href: "/", text: "Back to the main page" },
  { label: "All Massage Services", href: "/massage-in-delhi", text: "Every massage we offer in Delhi" },
  { label: "Full Body Massage", href: "/full-body-massage-in-delhi", text: "Our most booked massage" },
  { label: "Couple Massage", href: "/couple-massage", text: "Two therapists, one room" },
  { label: "Our Outlets", href: "/outlets", text: "Find the one nearest you" },
  { label: "Contact Us", href: "/contact", text: "Call, WhatsApp or Telegram" },
];

function WhatsAppButton({ children = "Get My Price on WhatsApp", className = "" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 ${className}`}
    >
      <FaWhatsapp className="size-5" /> {children}
    </a>
  );
}

export default function Pricpage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/price/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="price-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/price/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Private spa room in Delhi"
          width={1280}
          height={845}
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <a href="/massage-in-delhi" className="hover:text-secondary">Services</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa Price in Delhi</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Delhi Spa Price List <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="price-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa Price in Delhi
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Russian Spa Price <span className="text-secondary">·</span> Body Massage Price{" "}
            <span className="text-secondary">·</span> 5-Star Hotel Suites From ₹1,499
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/40 px-4 py-1.5 text-xs font-semibold text-secondary">
            <Sparkles className="size-3.5" /> 100% Fixed Rates · Attached Hot Rain Shower · Zero Advance Payment
          </div>

          <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Looking for authentic Russian spa prices and body massage price in Delhi without hidden counter charges?
            We keep our rates completely transparent: ₹1,499 for a 60-min spa outlet session and ₹12,999 for a 120-min
            luxury 5-star hotel suite / in-room package. Every session includes certified Russian, European or Thai therapists,
            clean sanitized private suites, fresh towels, organic oils, and attached hot rain showers. Pay only after your session.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa at ${PHONE_LABEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4 text-secondary" /> {PHONE_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* Price strip, overlapping the hero */}
      <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-8">
        <dl className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-px overflow-hidden rounded-3xl bg-amber-100 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100">
          <div className="bg-white p-4 md:p-6 text-center">
            <dt className="text-xs sm:text-sm font-semibold text-amber-900">Spa Outlet</dt>
            <dd>
              <span className="mt-1 block font-title text-2xl md:text-4xl font-bold text-primary">₹1,499</span>
              <span className="block text-xs text-bodycolor">60 min session</span>
            </dd>
          </div>
          <div className="bg-white p-4 md:p-6 text-center">
            <dt className="text-xs sm:text-sm font-semibold text-amber-900">5-Star Hotel Outlet</dt>
            <dd>
              <span className="mt-1 block font-title text-2xl md:text-4xl font-bold text-primary">₹12,999</span>
              <span className="block text-xs text-bodycolor">120 min suite session</span>
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-white p-4 md:p-6 text-center">
            <dt className="text-xs sm:text-sm font-semibold text-amber-900">Advance Deposit</dt>
            <dd>
              <span className="mt-1 block font-title text-2xl md:text-4xl font-bold text-emerald-700">₹0 Advance</span>
              <span className="block text-xs text-bodycolor">Pay after meeting</span>
            </dd>
          </div>
        </dl>
      </div>

      {/* On this page */}
      <nav aria-label="On this page" className="bg-white px-4 pt-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">On this page</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 2. Core Price Tiers */}
      <section id="price-tiers" aria-labelledby="price-tiers-title" className="scroll-mt-24 relative bg-[#2b1810] py-16 md:py-24 px-4 md:px-8 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#24130d] to-[#1c0f09] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#9c5232]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fdc28c]">
              Clear & Transparent Rates
            </span>
            <h2 id="price-tiers-title" className="mt-3 font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Delhi <span className="italic font-normal text-[#fdc28c]">Spa Prices</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/70">
              No surprise charges at the reception. Our ₹1,499 spa outlet session and ₹12,999 5-star hotel outlet package come with everything included. What we confirm on WhatsApp is exactly what you pay.
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

      {/* 2b. Therapists Gallery */}
      <section id="therapists" aria-labelledby="price-therapists-title" className="scroll-mt-24 bg-white py-14 md:py-20 px-4 md:px-8 border-b border-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-amber-700">
            Certified International Staff
          </span>
          <h2
            id="price-therapists-title"
            className="mt-2 font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c86d5e]"
          >
            Meet Our Therapists At Luxury Russian Spa Delhi
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-bodycolor">
            Wondering about Russian girl price or therapist profiles in Delhi? At our spa, every therapist is certified, professional, and verified.
            Preview real therapist photos and videos on our official Telegram channel before booking.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
            {galleryTherapists.map((t) => (
              <div key={t.id} className="flex flex-col items-center">
                <div className="relative aspect-[3/4.6] w-full overflow-hidden rounded-[20px] border-[3px] border-[#5a616c] shadow-md transition-transform duration-300 hover:scale-[1.02]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0088cc] px-2.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-[#0077b5] active:scale-95"
                >
                  <FaTelegramPlane className="size-4 shrink-0" />
                  <span className="truncate">View On Telegram</span>
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-bodycolor">
            Want to check live availability right now? Message us on{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
              WhatsApp (+91 99901 93385)
            </a>{" "}
            and we will confirm your therapist profile and slot immediately.
          </p>
        </div>
      </section>

      {/* 3. Price list by massage */}
      <section id="price-list" aria-labelledby="price-list-title" className="scroll-mt-24 bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="price-list-title"
            eyebrow="Massage Rates in Delhi"
            title="Delhi Spa Price List"
            highlight="by Massage"
            text="Transparent rates based on technique, therapist expertise, and session duration. Starting from ₹1,499 welcome rate up to customized VIP packages. Tap 'Ask Price' to get instant confirmation on WhatsApp."
          />

          {/* Quick Rates Overview */}
          <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-white p-4 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Transparent Rates Summary</p>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-amber-50 px-3 py-3 text-center ring-1 ring-amber-200">
                <dt className="text-[11px] sm:text-xs text-bodycolor">Spa Outlet · Starting Rate</dt>
                <dd className="font-title text-xl sm:text-2xl font-bold text-primary">From ₹1,499</dd>
              </div>
              <div className="rounded-xl bg-amber-50 px-3 py-3 text-center ring-1 ring-amber-200">
                <dt className="text-[11px] sm:text-xs text-bodycolor">5-Star Hotel Suite · 120 min</dt>
                <dd className="font-title text-xl sm:text-2xl font-bold text-primary">₹12,999</dd>
              </div>
            </dl>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {priceList.map((m) => (
              <li
                key={m.name}
                className={`relative flex flex-col rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                  m.onRequest
                    ? "bg-dark text-white shadow-[0_20px_45px_rgba(43,24,16,0.3)]"
                    : "bg-white ring-1 ring-amber-100 shadow-[0_8px_24px_rgba(43,24,16,0.06)] hover:shadow-[0_20px_45px_rgba(43,24,16,0.12)] hover:ring-amber-300"
                }`}
              >
                {m.tag && (
                  <span className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-secondary px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-dark">
                    {m.tag}
                  </span>
                )}
                <span className={`flex size-10 sm:size-12 items-center justify-center rounded-xl sm:rounded-2xl text-xl sm:text-2xl ${m.onRequest ? "bg-white/10" : "bg-amber-50"}`} aria-hidden="true">
                  {m.emoji}
                </span>
                <h3 className={`mt-3 sm:mt-4 font-title text-base sm:text-xl font-bold leading-snug ${m.onRequest ? "text-white" : "text-amber-900"}`}>{m.name}</h3>
                <p className={`mt-1 flex-1 text-xs sm:text-sm ${m.onRequest ? "text-white/75" : "text-bodycolor"}`}>{m.note}</p>

                <div className="mt-4 sm:mt-5">
                  <p className="flex items-baseline gap-1.5">
                    <span className="text-xs text-bodycolor">From</span>
                    <span className="font-title text-2xl sm:text-3xl font-bold text-primary">{m.price}</span>
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Session lengths">
                    {m.durations.map((time) => (
                      <li
                        key={time}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          m.onRequest ? "bg-white/10 text-white/80" : "bg-amber-50 text-amber-800 ring-1 ring-amber-200"
                        }`}
                      >
                        {time}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 sm:mt-6 grid gap-2">
                  <a
                    href={askPriceUrl(m.name, m.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#15803d] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
                  >
                    <FaWhatsapp className="size-4" /> Ask Price<span className="sr-only"> for {m.name} on WhatsApp</span>
                  </a>
                  <a
                    href={m.href}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
                      m.onRequest ? "text-white/90 ring-1 ring-white/30 hover:bg-white/10" : "text-primary ring-1 ring-amber-200 hover:bg-amber-50"
                    }`}
                  >
                    Details<span className="sr-only"> about {m.name}</span> <ArrowRight className="size-4" />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-bodycolor">
            Want to compare the massages first? See <a href="/massage-in-delhi" className={linkClass}>all our massage services in Delhi</a>.
          </p>
        </div>
      </section>

      {/* 4. What's included */}
      <section id="included" aria-labelledby="included-title" className="scroll-mt-24 bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="included-title"
            eyebrow="What You Pay For"
            title="What's Included in"
            highlight="the Price"
            text="When you compare spa charges in Delhi, check what each price actually covers. Here's what ours does."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-lg font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-dark p-7 md:p-10 text-white">
            <p className="font-title text-2xl font-bold">And what you won&apos;t find on your bill</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {notIncluded.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-white/85">
                  <X className="mt-0.5 size-4 shrink-0 text-secondary" strokeWidth={3} /> {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Prices by area */}
      <section id="area-prices" aria-labelledby="area-prices-title" className="scroll-mt-24 bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="area-prices-title"
            eyebrow="Same Rates Everywhere"
            title="Spa Prices"
            highlight="by Area"
            text="Searching for a spa in Mahipalpur with price, or a spa in Uttam Nagar with price? You don't need to compare outlets. The rate is the same wherever you go."
          />

          {/* One price statement instead of repeating it on every area */}
          <div className="relative mb-10 overflow-hidden rounded-3xl bg-dark p-6 md:p-8 text-white shadow-[0_20px_50px_rgba(43,24,16,0.25)]">
            <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">At every outlet</p>
                <p className="mt-1 font-title text-5xl font-bold text-white">{PRICES.outlet.label}</p>
                <p className="text-sm text-white/70">for {PRICES.outlet.time}</p>
              </div>
              <ul className="grid gap-2 text-sm text-white/85 sm:grid-cols-3 md:border-l md:border-white/15 md:pl-8">
                {["No area surcharge", "Same quality everywhere", "Price confirmed first"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-secondary" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
              <a
                href={nearestOutletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-white"
              >
                <FaWhatsapp className="size-4" /> Find My Nearest Outlet
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areaZones.map((z) => (
              <div key={z.zone} className="rounded-3xl bg-white p-6 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
                <h3 className="flex items-center gap-2.5 font-title text-lg font-bold text-amber-900">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-amber-50 text-lg" aria-hidden="true">{z.emoji}</span>
                  {z.zone}
                </h3>
                <ul className="mt-4 divide-y divide-amber-100">
                  {z.areas.map((a) => (
                    <li key={a.href}>
                      <a href={a.href} className="group flex items-center gap-3 py-3">
                        <MapPin className="size-4 shrink-0 text-primary" />
                        <span className="flex-1">
                          <span className="block font-semibold text-amber-900 group-hover:text-primary">Spa in {a.area}</span>
                          {a.note && <span className="text-xs text-bodycolor">{a.note}</span>}
                        </span>
                        <ArrowRight className="size-4 text-primary opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Don&apos;t see your area? <a href="/outlets" className={linkClass}>See all 24+ outlets</a>, or tap &quot;Find My Nearest Outlet&quot; above.
          </p>
        </div>
      </section>

      {/* 6. How to get your exact price */}
      <section id="get-price" aria-labelledby="get-price-title" className="scroll-mt-24 bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="get-price-title"
            eyebrow="Couple, Longer or Custom Sessions"
            title="Get Your Exact Price"
            highlight="in a Few Minutes"
            text="For couple massages, longer outlet sessions or anything a bit different, we'll quote you on WhatsApp. It's quick."
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {getPriceSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-title text-lg font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <WhatsAppButton>Ask for My Price</WhatsAppButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-bodycolor">
              <Clock className="size-4" /> We take booking messages 24 hours a day
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" aria-labelledby="price-faq-title" className="scroll-mt-24 bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="price-faq-title"
            eyebrow="Questions About Price?"
            title="Spa Price in Delhi"
            highlight="FAQs"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                open={i === 0}
                className="group rounded-2xl bg-white ring-1 ring-amber-100 transition-shadow open:shadow-[0_10px_30px_rgba(43,24,16,0.08)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-4">
                    <span className="font-title text-lg font-bold text-amber-700">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-sans text-base font-semibold text-amber-900">{faq.question}</h3>
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-primary ring-1 ring-amber-200 transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="px-5 pb-6 pl-[3.75rem] text-sm leading-relaxed text-bodycolor md:px-6 md:pl-[4.25rem]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Where next */}
      <nav aria-labelledby="next-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="next-title"
            eyebrow="Keep Exploring"
            title="Where to"
            highlight="Next?"
            text="Know the price, now pick your massage or your nearest outlet."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nextLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group flex h-full items-center gap-4 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:ring-amber-300"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                    {i === 0 ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
                  </span>
                  <span>
                    <span className="block font-title text-lg font-bold text-amber-900">{l.label}</span>
                    <span className="text-xs text-bodycolor">{l.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 9. Final CTA */}
      <section aria-labelledby="price-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="price-cta-title"
            eyebrow="Book Today"
            title="Happy With the Price?"
            highlight="Let's Book It"
            text="Message us the massage, a time and your area. We'll confirm the therapist and the exact price on the same chat."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#15803d] hover:!bg-[#166534] !shadow-black/30">Book on WhatsApp</WhatsAppButton>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d6fa5] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#185d8a]"
            >
              <FaTelegramPlane className="size-5" /> Chat on Telegram
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4" /> Call Now
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
            <CalendarCheck className="size-4" /> No advance payment for outlet bookings
          </p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
