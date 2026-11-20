import Image from "next/image";
import { preload } from "react-dom";
import {
  ArrowRight,
  CalendarCheck,
  Car,
  Check,
  Clock,
  CreditCard,
  Hotel,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrainFront,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";
import MassagePicker from "../components/MassagePicker";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your Russian spa in Lajpat Nagar located?",
    answer:
      "Our spa is located in Lajpat Nagar 2, just 3 minutes from Central Market and Lajpat Nagar Metro Station (Violet & Pink Lines, Gate 2 & 5). Guests from Lajpat Nagar 4, Defence Colony, and South Extension reach us in minutes. We send the exact location and GPS pin on WhatsApp as soon as your slot is confirmed.",
  },
  {
    question: "What is the Lajpat Nagar spa contact number?",
    answer:
      "You can call or WhatsApp us directly on +91 87997 16197. The same number works 24/7 for booking, checking today's free therapist slots, or asking about prices. We reply instantly on WhatsApp at all hours.",
  },
  {
    question: "What are your body massage and Russian spa prices in Lajpat Nagar?",
    answer:
      "Our Lajpat Nagar spa outlet starts at ₹1,499 per session (includes oil massage, cream massage, 60 min shower & consultation). For guests seeking a premium luxury experience in a 5-star hotel suite, sessions are ₹12,999 per session (includes oil & cream massage, private suite, B2B massage & 120 min session). What we quote on WhatsApp is exactly what you pay, with zero hidden charges.",
  },
  {
    question: "Do you offer authentic Thai massage in Lajpat Nagar?",
    answer:
      "Yes, traditional Thai massage in Lajpat Nagar is one of our most requested treatments. Performed on a traditional firm mat with passive yoga stretching and rhythmic acupressure (with or without warm oil), it is the perfect body massage after a long day of shopping in Central Market.",
  },
  {
    question: "How is your spa different from third-party Russian booking websites?",
    answer:
      "Unlike third-party aggregator portals or unverified online Russian booking networks that charge broker commissions and offer no guarantee of hygiene or safety, we run a direct, fully verified luxury day spa outlet in Lajpat Nagar 2. You get certified European, Russian and Indian therapists, spotless private rooms with attached hot rain showers, fresh steam-sanitized towels, and 100% upfront pricing.",
  },
  {
    question: "Which is the best spa in Lajpat Nagar for a body massage or body spa?",
    answer:
      "Guests looking for genuine relaxation choose us for three key reasons: complete privacy in soundproof en-suites, certified Russian, European, Thai, and Indian therapists, and transparent fixed pricing. Our Russian body massage is our most booked full body therapy, and our deep tissue massage is popular with people with neck and back stiffness.",
  },
  {
    question: "Do you offer B2B and couple massage in Lajpat Nagar?",
    answer:
      "Yes, B2B massage, Nuru body spa, and luxury couple massages are available at our Lajpat Nagar spa in fully private, climate-controlled rooms with attached hot showers. Message us on WhatsApp and we will share available therapists, timings, and rates before you book.",
  },
  {
    question: "Is your spa near Lajpat Nagar Central Market and Metro?",
    answer:
      "Yes. We are located right near Central Market and just 300 meters from Lajpat Nagar Metro Station. Many of our guests finish shopping, enjoy an hour of restorative body massage or Thai massage, take a hot shower, and head home fully refreshed.",
  },
  {
    question: "Can I choose a Russian or European female therapist?",
    answer:
      "Yes. Male guests can request a European, Russian, Thai, or Indian female therapist, and female guests can choose their preferred male or female therapist. Mention your preference when you book on WhatsApp and we will confirm who is available.",
  },
  {
    question: "Can I walk in without booking, and how do I pay?",
    answer:
      "Walk-ins are welcome, but a quick WhatsApp message 30 to 60 minutes before arriving is recommended because popular afternoon and evening slots fill quickly. You can pay conveniently at the outlet by UPI (GPay, PhonePe, Paytm), cash, or card. No advance payment is needed for outlet bookings.",
  },
];

// Options for the "How are you feeling today?" picker
const moods = [
  {
    id: "sore",
    label: "Sore back & neck",
    emoji: "😣",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "Firm, slow pressure on the knots that build up after long hours at a desk or behind the wheel.",
    points: ["Works on shoulders, neck and lower back", "Tell us how firm you want it", "You'll feel looser the same evening"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "stressed",
    label: "Stressed & tired",
    emoji: "😮‍💨",
    pick: "Full Body Massage",
    time: "60–90 min",
    why: "Warm oil, long strokes, head to toe. The one most guests book when they just need to switch off.",
    points: ["Our most booked massage in Lajpat Nagar", "Soft music, dim lights, no rush", "Good for better sleep that night"],
    href: "/full-body-massage-in-delhi",
  },
  {
    id: "couple",
    label: "Coming as a couple",
    emoji: "💑",
    pick: "Couple Massage",
    time: "60–120 min",
    why: "Two tables in one private room, two therapists, same time. Nice for an anniversary or a lazy Sunday.",
    points: ["Private room for just the two of you", "Choose the same or different massages", "Add a longer session if you like"],
    href: "/couple-massage",
  },
  {
    id: "shopping",
    label: "Legs tired from shopping",
    emoji: "🛍️",
    pick: "Thai Massage",
    time: "60 min",
    why: "Stretching and pressure points on a mat, no oil. Perfect after a long walk round Central Market.",
    points: ["No oil, so no need to shower after", "Great for tight hips and legs", "Done in an hour"],
    href: "/thai-massage-in-lajpat-nagar",
  },
  {
    id: "treat",
    label: "Want a real treat",
    emoji: "✨",
    pick: "B2B or Sandwich Massage",
    time: "60–90 min",
    why: "Our premium body spa options in a fully private room. Ask us on WhatsApp and we'll explain each one.",
    points: ["Fully private room", "Choose your therapist", "Price confirmed before you come"],
    href: "/b2b-massage-in-delhi",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SRCSET = [640, 828, 1402].map((w) => `/images/lajpat/hero-${w}.webp ${w}w`).join(", ");

const heroChips = [
  { icon: ShoppingBag, label: "Near Central Market" },
  { icon: Users, label: "Russian & Indian Therapists" },
  { icon: ShieldCheck, label: "Private Rooms" },
  { icon: Clock, label: "Bookings 24/7" },
];

const quickFacts = [
  { value: "₹1,499", label: "First Visit Offer", note: "Welcome massage rate" },
  { value: "4", label: "Therapist Styles", note: "Russian, Uzbek, Thai, Indian" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "0", label: "Hidden Charges", note: "Price fixed before you come" },
];

const services = [
  { title: "Full Body Massage", text: "Warm oil, head to toe. The body massage most people in Lajpat Nagar book.", time: "60–90 min", href: "/full-body-massage-in-delhi" },
  { title: "B2B Massage", text: "A premium body spa session in a fully private room. Ask us for details.", time: "60–90 min", href: "/b2b-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Firm pressure for a stiff neck, tight shoulders and that office-chair back.", time: "60–90 min", href: "/deep-tissue-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching on a mat, no oil. Our Lajpat Nagar guests love it after shopping.", time: "60 min", href: "/thai-massage-in-lajpat-nagar" },
  { title: "Couple Massage", text: "Two tables, one private room. Good for anniversaries and lazy Sundays.", time: "60–120 min", href: "/couple-massage" },
  { title: "Sandwich Massage", text: "Two therapists working together. Twice the hands, half the stress.", time: "60–90 min", href: "/sandwich-massage" },
];

const galleryTherapists = [
  { id: 1, image: "/images/lajpat/therapist-1.webp", alt: "Russian Spa Therapist in Lajpat Nagar" },
  { id: 2, image: "/images/lajpat/therapist-2.webp", alt: "Certified Russian Body Massage Therapist Lajpat Nagar" },
  { id: 3, image: "/images/lajpat/therapist-3.webp", alt: "European Spa Therapist at Lajpat Nagar Spa" },
  { id: 4, image: "/images/lajpat/therapist-4.webp", alt: "Professional Thai and Russian Therapist Lajpat Nagar" },
  { id: 5, image: "/images/lajpat/therapist-5.webp", alt: "Luxury Russian Spa Expert Lajpat Nagar Central Market" },
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

const areas = ["Lajpat Nagar 1", "Lajpat Nagar 2", "Lajpat Nagar 3", "Lajpat Nagar 4", "Central Market", "Amar Colony", "Defence Colony", "Andrews Ganj", "Moolchand", "Jangpura", "Ashram", "South Extension"];

const gettingHere = [
  {
    icon: TrainFront,
    title: "By Metro",
    text: "Get off at Lajpat Nagar. Both the Violet and Pink lines stop there, so whether you're coming from the ITO side or from Mayur Vihar, you won't have to change trains much.",
  },
  {
    icon: Car,
    title: "By Car",
    text: "Driving over on a Saturday or Sunday? Be ready to go round once or twice near Central Market before you find a spot. On weekdays it's usually not a problem.",
  },
  {
    icon: Clock,
    title: "Best Time",
    text: "If you can, come on a weekday afternoon. It's quieter and you'll usually get the therapist you asked for. After 7 p.m. and on Sundays we fill up fast, so message us a day before.",
  },
];

const visitSteps = [
  {
    time: "Before you come",
    title: "Drop us a message",
    text: "A WhatsApp text is enough. Just let us know what time suits you and which massage you have in mind. If you'd like a female therapist, or someone in particular, mention that too.",
  },
  {
    time: "When you get here",
    title: "We take you straight in",
    text: "Someone from our team will be there to greet you. You'll get a glass of water and then go to your own room, so there's no sitting around in a waiting area with strangers.",
  },
  {
    time: "First few minutes",
    title: "A short chat",
    text: "Your therapist will ask a couple of things before starting. Is your back or neck bothering you? Do you like it soft or firm? Keep it short if you want. Most people just say \"medium, please\".",
  },
  {
    time: "60 to 90 minutes",
    title: "The massage itself",
    text: "The lights stay low and the oil is warmed before it touches your skin. Honestly, a lot of our guests doze off halfway through, and that's completely fine with us.",
  },
  {
    time: "Afterwards",
    title: "Take your time",
    text: "There's a hot shower if you want one. Sit for a minute, drink some water and don't rush out. Central Market isn't going anywhere.",
  },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room that's cleaned after each session." },
  { icon: Users, title: "Your choice of therapist", text: "Russian or Indian, male or female, soft or firm. You decide." },
  { icon: CreditCard, title: "Price fixed in advance", text: "We confirm it on WhatsApp. That's exactly what you pay." },
  { icon: CalendarCheck, title: "No advance payment", text: "Pay at the spa by UPI, cash or card after your session." },
];

const nearby = [
  { area: "Greater Kailash", note: "Just down the road", href: "/spa-in-greater-kailash" },
  { area: "Kalkaji", note: "About 10 minutes away", href: "/spa-in-kalkaji" },
  { area: "Saket", note: "South Delhi", href: "/spa-in-saket" },
  { area: "Hauz Khas", note: "South Delhi", href: "/spa-in-hauz-khas" },
];

function WhatsAppButton({ children = "Book on WhatsApp", className = "" }) {
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

export default function Lajpatpage() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload("/images/lajpat/hero-828.webp", { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="ln-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lajpat/hero-828.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Massage table at our spa in Lajpat Nagar"
          width={1402}
          height={1122}
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa in Lajpat Nagar</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Luxury Spa in Lajpat Nagar <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="ln-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Russian Spa in Lajpat Nagar
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Russian Spa <span className="text-secondary" aria-hidden="true">·</span> Body Massage{" "}
            <span className="text-secondary" aria-hidden="true">·</span> Thai Massage{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,499
          </p>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/40 px-4 py-1.5 text-xs font-semibold text-secondary">
            <Sparkles className="size-3.5" /> First Visit Welcome Offer: Starting @ ₹1,499
          </div>

          <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Spent the day walking around Central Market? Or just tired after a long week? Come in, lie down and relax.
            Our Russian spa in Lajpat Nagar offers peaceful private rooms with an attached hot rain shower, certified
            therapists, and fixed prices with no hidden charges.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa Lajpat Nagar at ${PHONE_LABEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4 text-secondary" /> {PHONE_LABEL}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/90">
            {heroChips.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-secondary" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick facts strip, overlapping the hero */}
      <div className="relative z-10 -mt-20 md:-mt-24 px-4 md:px-8">
        <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-amber-100 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100">
          {quickFacts.map((f) => (
            <div key={f.label} className="bg-white p-5 md:p-7 text-center">
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-title text-3xl md:text-4xl font-bold text-primary">{f.value}</span>
                <span className="mt-1 block text-sm font-semibold text-amber-900">{f.label}</span>
                <span className="block text-xs text-bodycolor">{f.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 2. Intro + contact */}
      <section aria-labelledby="ln-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Private room at our luxury spa in Lajpat Nagar"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist at our Lajpat Nagar massage spa"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              Near Central Market
            </span>
          </div>

          <div>
            <HomeHeading
              id="ln-intro-title"
              align="left"
              eyebrow="Russian Spa & Body Massage in Lajpat Nagar"
              title="Authentic Russian Spa, Body Spa &"
              highlight="Body Massage in Lajpat Nagar"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              If you live or work around South Delhi, you know Lajpat Nagar never really slows down. Shoppers fill
              Central Market, the Ring Road is jammed during peak hours, and the metro stations are packed. That is
              exactly why clients visit our luxury Russian spa in Lajpat Nagar. You step in, the chaotic street noise
              drops away, and you are welcomed into a serene, air-conditioned sanctuary where certified international
              therapists take complete care of your body.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              We are recognized as the premier body massage spa in Lajpat Nagar, offering authentic Russian classical
              bodywork, traditional Thai massage, deep tissue therapy, and soothing aromatherapy body spa sessions.
              Unlike unverified online Russian booking agents or third-party classifieds, we operate a direct, sanitized
              spa facility in Lajpat Nagar 2, serving clients across Lajpat Nagar 1, 3, 4, Amar Colony, Defence Colony,
              and South Extension. No hidden commissions, no awkward upselling—just pure European relaxation and total
              privacy with attached hot rain showers.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> Lajpat Nagar Spa Contact Number
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                Call or WhatsApp for bookings, today&apos;s free slots and prices. We send the exact spa location on
                WhatsApp once your slot is confirmed.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  <Phone className="size-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Massage picker */}
      <section aria-labelledby="ln-picker-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-picker-title"
            eyebrow="Not Sure What to Book?"
            title="How Are You Feeling"
            highlight="Today?"
            text="Pick the one that sounds most like you, and we'll suggest a Lajpat Nagar massage that fits."
          />
          <MassagePicker moods={moods} defaultId="stressed" />
        </div>
      </section>

      {/* 4. Services */}
      <section aria-labelledby="ln-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-services-title"
            eyebrow="Body Spa in Lajpat Nagar"
            title="Body Massage Spa in Lajpat Nagar:"
            highlight="Our Menu"
            text="Six massages, all done in a private room. Tap any one to read more about it."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, time, href }, i) => (
              <li key={href}>
                <a
                  href={href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(43,24,16,0.12)] hover:ring-amber-300"
                >
                  {/* Decorative big number drawn by CSS so it is not read as low-contrast text */}
                  <span
                    data-n={String(i + 1).padStart(2, "0")}
                    className="absolute -right-2 -top-4 font-title text-7xl font-bold text-amber-200/60 transition-colors before:content-[attr(data-n)] group-hover:text-amber-200"
                    aria-hidden="true"
                  />
                  <span className="relative inline-flex w-max items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
                    <Clock className="size-3" /> {time}
                  </span>
                  <span className="relative mt-4 block font-title text-xl font-bold text-amber-900 group-hover:text-primary">{title}</span>
                  <span className="relative mt-2 flex-1 text-sm text-bodycolor">{text}</span>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Looking for something else? See every option on our <a href="/massage-in-delhi" className={linkClass}>massage in Delhi</a> page.
          </p>
        </div>
      </section>

      {/* 5. Therapists: Meet Our Therapists At Russian Spa in Lajpat Nagar */}
      <section aria-labelledby="ln-therapists-gallery-title" className="bg-[#fffaf5] py-14 md:py-20 px-4 md:px-8 border-y border-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            id="ln-therapists-gallery-title"
            className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c86d5e]"
          >
            Meet Our Therapists At Russian Spa in Lajpat Nagar
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-bodycolor">
            Pick the therapist you like best. Our team includes certified Russian, European, Thai, and Indian therapists who take real care of your body.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
            {galleryTherapists.map((t) => (
              <div key={t.id} className="flex flex-col items-center">
                <div className="relative aspect-[3/4.6] w-full overflow-hidden rounded-[24px] border-[3px] border-[#555a64] shadow-md transition-transform duration-300 hover:scale-[1.02]">
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
                  <FaTelegramPlane className="size-3.5 shrink-0" />
                  <span className="truncate">View More On Telegram</span>
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-bodycolor">
            Want to check who is available today? Message us on{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
              WhatsApp (+91-8799716197)
            </a>{" "}
            and we will confirm your slot and therapist right away.
          </p>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" aria-labelledby="ln-pricing-title" className="relative bg-[#2b1810] py-16 md:py-24 px-4 md:px-8 overflow-hidden text-white">
        {/* Subtle decorative background gradient with brand espresso and copper tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#24130d] to-[#1c0f09] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#9c5232]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fdc28c]">
              Clear Prices
            </span>
            <h2 id="ln-pricing-title" className="mt-3 font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Lajpat Nagar <span className="italic font-normal text-[#fdc28c]">Spa Prices</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/70">
              Transparent rates with our ₹1,499 spa outlet session and ₹12,999 5-star hotel outlet package. What we quote on WhatsApp is what you pay.
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

      {/* 7. Your visit, step by step */}
      <section aria-labelledby="ln-visit-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="ln-visit-title"
            eyebrow="First Time Here?"
            title="What Your Visit"
            highlight="Looks Like"
            text="First time at a spa? Lots of our guests are. This is roughly how it goes, from the first message to walking back out."
          />
          <ol className="relative space-y-6 border-l-2 border-dashed border-amber-300 pl-8 md:pl-10">
            {visitSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[49px] md:-left-[57px] top-1 flex size-8 items-center justify-center rounded-full bg-primary font-title text-sm font-bold text-white ring-4 ring-cream">
                  {i + 1}
                </span>
                <div className="rounded-2xl bg-white p-5 md:p-6 shadow-[0_6px_20px_rgba(43,24,16,0.06)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">{s.time}</span>
                  <h3 className="mt-1 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bodycolor">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Area + getting here */}
      <section aria-labelledby="ln-area-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="ln-area-title"
            eyebrow="Spa Near You"
            title="Spa in Lajpat Nagar 2, 4"
            highlight="and Nearby"
            text="We're close to Central Market, so getting here is easy from most of South and Central Delhi. These are the areas our guests usually come from."
          />
          <ul className="flex flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-100">
                <MapPin className="size-3.5 text-primary" /> {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gettingHere.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-100">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-xl font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Promises */}
      <section aria-labelledby="ln-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="ln-promise-title"
            eyebrow="Why Guests Come Back"
            title="What Makes Us the Best Spa in"
            highlight="Lajpat Nagar"
            text="We'll let you be the judge of that. But here's what we promise every single guest."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7 text-center shadow-[0_10px_30px_rgba(43,24,16,0.06)] ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-lg font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Nearby outlets */}
      <section aria-labelledby="ln-nearby-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="ln-nearby-title"
            eyebrow="Spa Near Lajpat Nagar"
            title="Not in Lajpat Nagar Today?"
            highlight="Try These"
            text="If another part of South Delhi is closer, one of these outlets might suit you better."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {nearby.map(({ area, note, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-amber-100 shadow-[0_4px_16px_rgba(43,24,16,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:ring-amber-300"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <MapPin className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-title text-lg font-bold text-amber-900">Spa in {area}</span>
                    <span className="text-xs text-bodycolor">{note}</span>
                  </span>
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Just want a stretch? Read about our <a href="/thai-massage-in-lajpat-nagar" className={linkClass}>Thai massage in Lajpat Nagar</a>, or{" "}
            <a href="/outlets" className={linkClass}>see all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="ln-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="ln-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Lajpat Nagar"
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

      {/* 12. Final CTA */}
      <section aria-labelledby="ln-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/spa-booking-consultation.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="ln-cta-title"
            eyebrow="Book Today"
            title="Your Hour of Quiet"
            highlight="Is One Message Away"
            text="Tell us the time and the massage. We'll confirm your slot, your therapist and the price on the same chat."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#15803d] hover:!bg-[#166534] !shadow-black/30" />
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
