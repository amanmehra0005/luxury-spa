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

// Our New Friends Colony outlet is near The Suryaa Hotel & Community Centre. Shown on the page and used for DaySpa schema in ./page.js.
export const NFC_ADDRESS = {
  streetAddress: "Community Centre, Near The Suryaa Hotel, New Friends Colony",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110025",
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your Russian spa in New Friends Colony located?",
    answer:
      "Our luxury spa is located at the Community Centre in New Friends Colony (NFC), right opposite The Suryaa New Delhi hotel and minutes from Mathura Road. We are just 3 minutes from Sukhdev Vihar Metro Station (Magenta Line Gate 2) and 5 minutes from Ashram Metro Station. If you are staying at The Suryaa, Eros Hotel Nehru Place, or Crowne Plaza Okhla, our certified therapist can also visit your hotel room directly within 15–20 minutes.",
  },
  {
    question: "Can I book an authentic Russian in NFC / Russian girl in NFC?",
    answer:
      "Yes, absolutely. If you are searching for an authentic Russian in NFC or certified Russian / foreigner therapist, Luxury Russian Spa offers verified professional Russian and foreigner staff. You can preview live therapist profiles on our Telegram channel (@luxuryrussianspa7), select your therapist, and meet her in person at our outlet or in your 5-star hotel suite. We maintain a strict zero-advance-deposit policy so you never deal with online broker scams.",
  },
  {
    question: "What therapies are included in your body spa and B2B spa in NFC?",
    answer:
      "Our body spa in NFC includes full-body Swedish relaxation, deep tissue muscle recovery, infused aromatherapy oils, and authentic Thai stretching. For clients seeking sensory relaxation, our B2B spa in NFC offers deep body-to-body therapy in complete privacy within soundproof suites featuring attached hot rain showers and luxury bathrobes.",
  },
  {
    question: "What are your massage charges in New Friends Colony?",
    answer:
      "We follow 100% transparent pricing with zero hidden counter charges. Our basic Spa Outlet session starts at just ₹1,499 (includes full body oil/cream massage, 60-min session, attached hot shower, and therapist consultation). Our 5-Star Hotel Outlet package is ₹12,999 (includes private luxury suite, signature B2B massage, organic aromatherapy oils, and a full 120-minute session). What we confirm on WhatsApp is the exact amount you pay.",
  },
  {
    question: "What is the Russian girl price / Russian therapist rate in New Friends Colony?",
    answer:
      "When people search for 'Russian girl price in New Friends Colony' or 'Russian in NFC', they often run into shady classified broker scams asking for advance UPI transfers. At Luxury Russian Spa, we offer genuine, certified Russian and foreigner female therapists in a strictly hygienic, legal wellness spa environment. Our rates are completely fixed: ₹1,499 for outlet sessions and ₹12,999 for 5-star hotel suite experiences. You can preview verified therapist profiles on Telegram before booking, and you pay zero advance deposit.",
  },
  {
    question: "Do you offer in-room visits at The Suryaa New Delhi and other South Delhi hotels?",
    answer:
      "Yes. The Suryaa New Delhi is our flagship partner property right in NFC. We also deliver in-room 5-star hotel visits to Eros Hotel Nehru Place, Crowne Plaza Okhla, The Manor in Friends Colony West, and luxury residences across Maharani Bagh, Friends Colony East, and Defence Colony. Simply share your hotel name and room number on WhatsApp—our therapist reaches within 15 to 20 minutes with sanitized towels and essential oils.",
  },
  {
    question: "Is there any advance payment required to book a session?",
    answer:
      "No. For all outlet visits in New Friends Colony, we have a strict zero-advance-payment policy. You arrive at our spa, meet your therapist in person, inspect the private suite, and pay only after you are completely comfortable. We accept UPI (Google Pay, PhonePe, Paytm), Cash, and Cards.",
  },
  {
    question: "How is Luxury Russian Spa different from typical massage parlours in NFC?",
    answer:
      "Typical massage parlours in South-East Delhi operate in crowded basements with curtained partitions, unhygienic towels, and sudden counter extortion. In contrast, Luxury Russian Spa offers 100% soundproof private VIP suites, attached hot rain showers, fresh sterilized linen, certified international therapists (Russian, Foreigner, Thai), and fixed pre-confirmed rates.",
  },
  {
    question: "Is your New Friends Colony spa open late at night?",
    answer:
      "Yes, we are open 24 hours a day, 7 days a week. Many guests arriving late at Hazrat Nizamuddin Railway Station, corporate travelers staying at The Suryaa, and locals from Maharani Bagh or Sukhdev Vihar visit us after 10 PM for late-night relaxation.",
  },
  {
    question: "Do your rooms have attached private hot showers?",
    answer:
      "Yes. Every private treatment suite at our New Friends Colony spa features an attached private hot rain shower, fresh cotton towels, disposable spa essentials, luxury bathrobes, and gentle skin body wash so you leave refreshed without feeling greasy.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Hotel, label: "Near The Suryaa Hotel" },
  { icon: Users, label: "Russian & Foreigner Staff" },
  { icon: TrainFront, label: "3 Min Sukhdev Vihar Metro" },
  { icon: Clock, label: "Open 24/7 Day & Night" },
];

const quickFacts = [
  { value: "₹1,499", label: "First Visit Offer", note: "Welcome outlet rate" },
  { value: "24/7", label: "Always Open", note: "Day & midnight slots" },
  { value: "The Suryaa", label: "Hotel Partner", note: "In-room in 15 mins" },
  { value: "0", label: "Hidden Charges", note: "Fixed price on WhatsApp" },
];

const therapists = [
  { name: "Russian", note: "Long, flowing classical strokes for deep sensory relaxation and tension release" },
  { name: "Foreigner", note: "Gentle Swedish rhythm with organic lavender oils to eliminate mental fatigue" },
  { name: "Thai", note: "Passive rhythmic yoga stretching and pressure-point therapy on a comfortable floor mat" },
  { name: "Indian", note: "Warm herbal oil therapy targeting stubborn muscle knots in the back and shoulders" },
];

const hotels = [
  {
    name: "The Suryaa New Delhi",
    area: "Community Centre, NFC",
    image: "/images/TheSuryaaNewDelhi(NFC).webp",
    text: "Our physical luxury outlet is situated right beside The Suryaa. Walk in for an exclusive suite session, or enjoy in-room therapy delivered directly to your hotel suite.",
    outlet: true,
  },
  {
    name: "Eros Hotel New Delhi",
    area: "Nehru Place (7 mins from NFC)",
    image: "/images/ErosHotel_lajpatnagar.jpg",
    text: "Staying at Eros Hotel after corporate conferences? Message your room number and our therapist arrives within 15–20 minutes with fresh linens and essential oils.",
  },
  {
    name: "Crowne Plaza New Delhi Okhla",
    area: "Okhla Phase 1 (10 mins from NFC)",
    image: "/images/crowne-plaza-lajpatnagar.jpg",
    text: "Industrial and business travelers at Crowne Plaza Okhla enjoy prompt 24/7 room delivery for Jet-Lag recovery and deep tissue relaxation.",
  },
  {
    name: "The Manor New Delhi",
    area: "Friends Colony West",
    image: "/images/5StarHotelSpa.jpg",
    text: "Boutique luxury hotel in Friends Colony West. Enjoy quiet, secluded therapy right in your private suite without stepping out into Delhi traffic.",
  },
];

const services = [
  {
    title: "Russian Full Body Massage",
    text: "Head to toe soothing strokes using warm aromatic oils to release muscular stiffness, calm anxiety, and revive energy. Our most booked Russian massage in New Friends Colony.",
    time: "60–90 min",
    price: "From ₹2,499",
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "B2B Body Spa Massage",
    text: "A premium, deeply relaxing body-to-body therapy in complete privacy. Performed by certified Russian and foreigner therapists with warm oils and attached hot rain shower.",
    time: "60–90 min",
    price: "From ₹2,999",
    href: "/b2b-massage-in-delhi",
  },
  {
    title: "Swedish Relaxing Massage",
    text: "Light, flowing gliding strokes with organic essential oils. Gentle pressure ideal for first-time visitors seeking pure relaxation and restful sleep.",
    time: "60–90 min",
    price: "From ₹1,499",
    href: "/swedish-massage-in-delhi",
  },
  {
    title: "Traditional Thai Massage",
    text: "Oil-free rhythmic stretching and acupressure techniques on a comfortable floor mat in loose attire. Excellent for stiff joints and back fatigue.",
    time: "60–90 min",
    price: "From ₹1,999",
    href: "/thai-massage-in-delhi",
  },
  {
    title: "Deep Tissue Therapy",
    text: "Targeted firm pressure on chronic knots in the neck, stiff shoulders, and lower back caused by long desk hours or frequent highway driving.",
    time: "60–90 min",
    price: "From ₹2,499",
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Aromatherapy Massage",
    text: "Custom-blended mood-enhancing botanical essential oils (lavender, lemongrass, eucalyptus) to soothe sensory overload and refresh the skin.",
    time: "60–90 min",
    price: "From ₹1,999",
    href: "/aromatherapy-massage-in-delhi",
  },
  {
    title: "Four-Hands Sandwich Massage",
    text: "Two certified therapists working in synchronized harmony. Twice the hands, double the relaxation, and unparalleled stress release in one session.",
    time: "60–90 min",
    price: "From ₹3,999",
    href: "/sandwich-massage",
  },
  {
    title: "Luxury Couple Massage",
    text: "Two massage tables in a spacious candle-lit private suite with attached hot shower. Perfect for couples, anniversaries, or a weekend wellness treat.",
    time: "60–120 min",
    price: "From ₹4,999",
    href: "/couple-massage",
  },
];

// Comparison table: Our spa vs typical street parlours in NFC / South-East Delhi
const comparison = [
  { point: "Location & Hygiene", us: "Beside The Suryaa 5-star hotel; fresh sterilized linen every guest", them: "Cramped basements or market back-alleys" },
  { point: "Privacy & Facilities", us: "100% private soundproof suite with attached hot rain shower", them: "Curtained cabins or shared unhygienic toilets" },
  { point: "Pricing Transparency", us: "Fixed ₹1,499 & ₹12,999 confirmed on WhatsApp before arrival", them: "Bait ₹999 ads that jump to ₹5,000 at the counter" },
  { point: "Therapist Quality", us: "Certified Russian, Foreigner, Thai & Indian female professionals", them: "Untrained local staff with zero massage skills" },
  { point: "Advance Payment", us: "Strict zero advance deposit policy. Pay after meeting therapist", them: "Demand online advance transfers that lead to scams" },
  { point: "Operating Hours", us: "Open 24/7 with dedicated late-night and morning slots", them: "Close early with hurried, 25-minute cut sessions" },
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
  { id: 1, image: "/images/nfc/therapist-1.jpg", alt: "Russian Spa Therapist in New Friends Colony Near The Suryaa" },
  { id: 2, image: "/images/nfc/therapist-2.jpg", alt: "Certified Russian Body Massage Therapist New Friends Colony" },
  { id: 3, image: "/images/lajpat/therapist-3.webp", alt: "Russian Spa Therapist at New Friends Colony Luxury Spa" },
  { id: 4, image: "/images/image2.webp", alt: "Professional Thai and Russian Therapist NFC Hotel Visit" },
  { id: 5, image: "/images/nfc/therapist-5.jpg", alt: "Luxury Russian Spa Expert New Friends Colony Delhi" },
];

const steps = [
  {
    title: "Send a Quick Message",
    text: "WhatsApp, Telegram or call us. Tell us your preferred time, massage therapy, and whether you want an outlet visit near The Suryaa or an in-room hotel visit.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Preview Therapist & Confirm Price",
    text: "We share therapist photos, confirm your slot, and lock in the transparent rate (₹1,499 outlet or ₹12,999 hotel suite). Zero advance payment needed.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Arrive, Relax & Pay Later",
    text: "Step into our serene private suite with attached hot shower at New Friends Colony, or welcome your therapist to your hotel room. Pay by UPI, Cash or Card after meeting.",
    image: "/images/hb2.webp",
  },
];

const gettingHere = [
  { icon: TrainFront, title: "By Metro", text: "Sukhdev Vihar Metro (Magenta Line Gate 2) is a 3-minute walk. Ashram Metro (Pink Line) is just 5 minutes away." },
  { icon: MapPin, title: "Prime Landmark", text: "Community Centre, New Friends Colony, right opposite The Suryaa New Delhi and steps from NFC Club and Mathura Road." },
  { icon: Clock, title: "24/7 Availability", text: "Open round the clock. Midnight relaxation after flights or train arrivals at Nizamuddin Station is fully supported." },
];

const areasCovered = [
  "New Friends Colony (NFC)",
  "Friends Colony East",
  "Friends Colony West",
  "Maharani Bagh",
  "Sukhdev Vihar",
  "Mathura Road",
  "Ashram Chowk",
  "Hazrat Nizamuddin",
  "Zakir Nagar",
  "Okhla Phase 1, 2, 3",
  "Jasola & Sarita Vihar",
  "Defence Colony & South Ext",
];

const nearbyOutlets = [
  { area: "Lajpat Nagar", note: "Just 7 minutes via Ring Road", href: "/spa-in-lajpat-nagar" },
  { area: "Connaught Place", note: "Inside The Park Hotel", href: "/spa-in-connaught-place" },
  { area: "Aerocity", note: "Beside IGI Airport", href: "/spa-in-aerocity" },
  { area: "Mahipalpur", note: "Open 24/7 near Airport", href: "/spa-in-mahipalpur" },
  { area: "Noida", note: "Sector 18 & Atta Market", href: "/spa-in-noida" },
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

export default function NewFriendsColonyPage() {
  return (
    <main className="bg-white text-[#2b1810]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf5] via-white to-amber-50/30 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          {/* Breadcrumb */}
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
              <li className="font-semibold text-primary">Spa in New Friends Colony</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 ring-1 ring-amber-300/60">
                <Sparkles className="size-3.5 text-amber-700" /> Premium Russian Spa · New Friends Colony
              </span>

              <h1 className="mt-4 font-title text-3xl font-extrabold tracking-tight text-[#2b1810] sm:text-4xl md:text-5xl lg:leading-[1.15]">
                Russian Spa in <span className="text-[#9c5232]">New Friends Colony</span> at Just ₹1,499
              </h1>

              <p className="mt-4 text-base leading-relaxed text-bodycolor sm:text-lg">
                Experience authentic Russian wellness and deep muscle relief right near{" "}
                <strong className="font-semibold text-dark">The Suryaa Hotel</strong> and{" "}
                <strong className="font-semibold text-dark">NFC Community Centre</strong>. Certified Russian, foreigner,
                and Thai female therapists, 100% soundproof private suites with attached hot rain showers, and strict
                zero-advance payment.
              </p>

              {/* Chips */}
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

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <WhatsAppButton>Book NFC Spa on WhatsApp</WhatsAppButton>
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

            {/* Hero Image */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-amber-50 p-2 ring-1 ring-amber-200/80 shadow-2xl">
                <Image
                  src="/images/nfc/hero-therapist.jpg"
                  alt="Russian Spa Therapist in New Friends Colony Near The Suryaa"
                  width={600}
                  height={600}
                  priority
                  className="h-80 w-full rounded-2xl object-cover sm:h-96"
                />
                {/* <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/75 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fdc28c]">Flagship South Delhi Location</p>
                  <p className="font-title text-base font-bold">Near The Suryaa Hotel & NFC Community Centre</p>
                  <p className="text-xs text-white/80">3 min from Sukhdev Vihar Metro · Open 24 Hours</p>
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

      {/* 3. Pricing Section (Matching Site Theme & Image Reference) */}
      <section id="pricing" className="relative bg-[#2b1810] py-16 md:py-24 px-4 md:px-8 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#24130d] to-[#1c0f09] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#9c5232]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fdc28c]">
              Transparent South Delhi Rates
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              New Friends Colony <span className="italic font-normal text-[#fdc28c]">Spa Prices</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/70">
              Clear rates with zero surprise charges at the reception. What we quote on WhatsApp is exactly what you pay.
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

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-white/70">
              Want a custom couple suite or extended 3-hour VIP therapy?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#fdc28c] underline underline-offset-4 font-semibold">
                Chat with our NFC concierge on WhatsApp
              </a>
            </p>
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
              Russian & Foreigner <span className="text-[#9c5232]">Therapists in NFC</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-bodycolor">
              Our therapists are certified professionals trained in authentic Russian therapy, sensory relaxation, and traditional Thai bodywork. Preview verified real-time photos and choose your preferred therapist before booking.
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

      {/* 5. Complete Services & Broad Category Menu */}
      <section className="bg-[#fffaf5] py-16 md:py-24 px-4 md:px-8 border-y border-amber-200/60">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="services-heading"
            eyebrow="Therapy Menu"
            title="Massage & Body Spa Services in"
            highlight="New Friends Colony"
            text="Whether you need deep myofascial tension release after a tiring week, soothing aromatherapy, or sensory B2B relaxation, our therapies are tailored to your needs."
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
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-amber-800"
                  >
                    Details <ArrowRight className="size-3.5" />
                  </a>
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I want to book ${s.title} in New Friends Colony.`)}`}
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

          <p className="mt-8 text-center text-xs sm:text-sm text-bodycolor">
            Looking for comprehensive price details across all outlets? See our{" "}
            <a href="/spa-price-in-delhi" className={linkClass}>
              complete Delhi spa price list
            </a>
            .
          </p>
        </div>
      </section>

      {/* 5B. In-Depth Guide: Russian in NFC, Body Spa & B2B Massage Insights */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Local Wellness Guide · NFC Delhi
            </span>
            <h2 className="mt-3 font-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b1810]">
              Looking for a <span className="text-[#9c5232]">Russian in NFC</span> or Luxury Body Spa?
            </h2>
            <p className="mt-3 text-sm text-bodycolor">
              Everything you need to know about genuine international therapies, verified staff, and transparent rates near The Suryaa Hotel &amp; NFC Community Centre.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* 1. Russian in NFC & Russian Girl Massage */}
            <div className="rounded-3xl bg-amber-50/40 p-6 sm:p-8 ring-1 ring-amber-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 mb-3">
                  Russian in NFC
                </span>
                <h3 className="font-title text-xl font-bold text-[#2b1810]">
                  Authentic Russian &amp; Foreigner Therapists in NFC
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  When clients search for <strong>&ldquo;Russian in NFC&rdquo;</strong> or <strong>&ldquo;Russian girl in NFC&rdquo;</strong>, they often encounter shady classified broker ads asking for advance UPI transfers or baiting with fake photos. At Luxury Russian Spa, we eliminate these worries.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  We provide 100% verified, certified Russian and foreigner female therapists in an upscale 5-star standard wellness environment. You can preview live therapist profiles on our Telegram channel before booking, and you pay <strong>zero advance deposit</strong>.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold">
                <span className="text-primary">Welcome Rate: From ₹1,499</span>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                  Preview on Telegram &rarr;
                </a>
              </div>
            </div>

            {/* 2. Body Spa in NFC & Massage Spa in NFC */}
            <div className="rounded-3xl bg-amber-50/40 p-6 sm:p-8 ring-1 ring-amber-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 mb-3">
                  Body Spa in NFC
                </span>
                <h3 className="font-title text-xl font-bold text-[#2b1810]">
                  Full Body Massage &amp; Rejuvenating Body Spa
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  Looking for the most relaxing <strong>body spa in NFC</strong> or a professional <strong>massage spa in NFC</strong> near Mathura Road? Our signature head-to-toe full body therapies use warm organic almond and olive oils to melt away chronic fatigue, neck stiffness, and corporate work stress.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  Whether you prefer gentle Swedish strokes, firm deep tissue pressure, or detoxifying aromatherapy, every session takes place in an exclusive soundproof suite with fresh sanitized linen and attached hot rain shower.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold">
                <span className="text-primary">Session: 60 / 90 / 120 Min</span>
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I want to book a Body Spa in NFC.")}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                  Book Body Spa &rarr;
                </a>
              </div>
            </div>

            {/* 3. B2B Spa in NFC */}
            <div className="rounded-3xl bg-amber-50/40 p-6 sm:p-8 ring-1 ring-amber-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 mb-3">
                  B2B Spa in NFC
                </span>
                <h3 className="font-title text-xl font-bold text-[#2b1810]">
                  Sensory B2B Spa in 100% Soundproof Private Suites
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  Our <strong>B2B spa in NFC</strong> is one of our most requested luxury therapies. Performed by skilled Russian and foreigner female therapists in complete confidentiality, this sensual body-to-body therapy uses warm aromatic oils for intense relaxation and full-body sensory release.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  Every suite has an attached private hot rain shower, disposable bathrobes, and luxury toiletries so you don&apos;t leave feeling oily. Available at our outlet or as an in-room 5-star hotel visit at The Suryaa.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold">
                <span className="text-primary">From ₹2,999 (Outlet) · ₹12,999 (Hotel)</span>
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I want to book a B2B Spa session in NFC.")}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                  Inquire on WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* 4. Thai Massage in NFC */}
            <div className="rounded-3xl bg-amber-50/40 p-6 sm:p-8 ring-1 ring-amber-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 mb-3">
                  Thai Massage in NFC
                </span>
                <h3 className="font-title text-xl font-bold text-[#2b1810]">
                  Traditional Dry Acupressure &amp; Passive Yoga Stretching
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  Searching for authentic <strong>Thai massage in NFC</strong>? Traditional Thai bodywork is oil-free, performed on a comfortable padded floor mat while wearing clean, loose cotton attire.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-bodycolor leading-relaxed">
                  Our certified therapists use rhythmic palm pressure, thumb acupressure along body energy lines (Sen), and gentle passive stretching. It is the ultimate antidote for stiff joints, lower back ache, and fatigue after long flights or highway travel.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold">
                <span className="text-primary">Starting from ₹1,999</span>
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I want to book Thai Massage in NFC.")}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                  Book Thai Massage &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 5-Star Hotel In-Room Visits Section */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              On-Demand Room Delivery
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#2b1810]">
              5-Star Hotel Visits in <span className="text-[#9c5232]">NFC & South Delhi</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-bodycolor">
              Staying at The Suryaa or visiting business hubs around Nehru Place and Okhla? Our certified therapists deliver private in-room spa therapy directly to your 5-star hotel room or luxury apartment within 15–20 minutes.
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
                  {h.outlet && (
                    <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                      Outlet Location
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-title text-base font-bold text-[#2b1810]">{h.name}</h3>
                  <p className="text-xs font-semibold text-primary">{h.area}</p>
                  <p className="mt-2 text-xs leading-relaxed text-bodycolor">{h.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-amber-50 p-6 text-center ring-1 ring-amber-200 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-amber-950">
              Staying at a private residence in Maharani Bagh, Friends Colony East, or Defence Colony?
            </p>
            <p className="mt-1 text-xs text-bodycolor">
              We also arrange discreet luxury home visits across South Delhi. Message us with your location for instant confirmation.
            </p>
            <div className="mt-4">
              <WhatsAppButton>Book Hotel / Home Visit</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us vs Local Parlours (Comparison Table) */}
      <section className="bg-[#fffaf5] py-16 md:py-24 px-4 md:px-8 border-t border-amber-200/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Honest Quality Comparison
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl font-bold text-[#2b1810]">
              Why Choose Luxury Russian Spa <span className="text-[#9c5232]">Over Street Parlours</span>
            </h2>
            <p className="mt-3 text-sm text-bodycolor">
              See the difference between authentic 5-star hospitality and unregulated local massage setups.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-amber-200/80">
            <div className="grid grid-cols-12 bg-[#2b1810] p-4 text-xs sm:text-sm font-bold text-white">
              <div className="col-span-4 sm:col-span-3">Feature</div>
              <div className="col-span-4 sm:col-span-5 text-emerald-400">Luxury Russian Spa (NFC)</div>
              <div className="col-span-4 text-rose-300">Typical Street Parlours</div>
            </div>

            <div className="divide-y divide-amber-100">
              {comparison.map((c) => (
                <div key={c.point} className="grid grid-cols-12 p-4 text-xs sm:text-sm items-center hover:bg-amber-50/40">
                  <div className="col-span-4 sm:col-span-3 font-semibold text-dark">{c.point}</div>
                  <div className="col-span-4 sm:col-span-5 text-emerald-800 font-medium flex items-start gap-1.5 pr-2">
                    <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{c.us}</span>
                  </div>
                  <div className="col-span-4 text-bodycolor flex items-start gap-1.5">
                    <X className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{c.them}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Easy 3-Step Booking Process */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Simple & Confidential
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl font-bold text-[#2b1810]">
              How to Book Your <span className="text-[#9c5232]">NFC Spa Session</span>
            </h2>
            <p className="mt-2 text-sm text-bodycolor">Three easy steps with zero advance deposit.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((st, idx) => (
              <div
                key={st.title}
                className="relative rounded-3xl bg-amber-50/60 p-6 ring-1 ring-amber-200/80 shadow-sm transition-all hover:shadow-md"
              >
                <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-base font-bold text-white shadow">
                  {idx + 1}
                </span>
                <h3 className="mt-4 font-title text-lg font-bold text-dark">{st.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-bodycolor">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Directions & Location Context */}
      <section className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8 border-y border-amber-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Prime Connectivity
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl font-bold text-[#2b1810]">
              Getting to Our <span className="text-[#9c5232]">New Friends Colony Outlet</span>
            </h2>
            <p className="mt-2 text-sm text-bodycolor">Convenient access from Central, South, and East Delhi.</p>
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

          {/* Local Areas Covered */}
          <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-amber-200">
            <h3 className="font-title text-base sm:text-lg font-bold text-[#2b1810] text-center">
              Nearby South Delhi Areas & Pockets We Serve
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {areasCovered.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-amber-50 px-3.5 py-1 text-xs font-medium text-amber-900 ring-1 ring-amber-200"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs Section */}
      <section id="faqs" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9c5232]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-title text-3xl sm:text-4xl font-bold text-[#2b1810]">
              Questions About <span className="text-[#9c5232]">NFC Spa Booking</span>
            </h2>
            <p className="mt-2 text-sm text-bodycolor">Everything you need to know before visiting our spa.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
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

      {/* 11. Other Outlets Section */}
      <section className="bg-[#fffaf5] py-12 px-4 md:px-8 border-t border-amber-200/60">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-title text-xl font-bold text-dark">Explore Our Other Delhi NCR Outlets</h2>
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

      {/* Floating WhatsApp CTA */}
      <WhatsappFloat />
    </main>
  );
}
