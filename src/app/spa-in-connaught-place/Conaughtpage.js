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

// Our Connaught Place outlet is inside The Park hotel. Shown on the page and used for the DaySpa schema in ./page.js.
export const CP_ADDRESS = {
  streetAddress: "The Park New Delhi, 15 Parliament Street, Connaught Place",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110001",
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your Russian spa in Connaught Place located?",
    answer:
      "Our spa is located inside The Park New Delhi, 15 Parliament Street, Connaught Place. It is just a 2-minute walk from Patel Chowk Metro Station (Yellow Line) and 5 minutes from Rajiv Chowk Metro Station. If you are staying at any 5-star hotel in CP like The LaLiT, The Imperial, or Shangri-La Eros, our therapist can visit your hotel room directly within 15–20 minutes.",
  },
  {
    question: "What are your massage charges in Connaught Place?",
    answer:
      "We believe in 100% price transparency. Our basic Spa Outlet session starts at just ₹1,499 per session (includes full body oil/cream massage, 60-min session, hot shower, and therapist consultation). Our 5-Star Hotel Outlet package is ₹12,999 per session (includes private luxury suite, B2B massage, cream & oil therapy, and full 120-minute session). What we quote on WhatsApp is exactly what you pay—no hidden counter charges.",
  },
  {
    question: "Do you have authentic Russian and European therapists in CP?",
    answer:
      "Yes, absolutely. We have certified Russian, Ukrainian, and European therapists along with skilled Thai and Indian therapists. You can preview verified therapist profiles on our Telegram channel or WhatsApp before booking and select the therapist who matches your preference.",
  },
  {
    question: "How do 5-star hotel in-room visits work in Connaught Place?",
    answer:
      "If you are staying at The Park, The LaLiT, The Imperial, Shangri-La Eros, Radisson Blu Marina, or The Metropolitan Hotel, simply WhatsApp us your hotel name and room number. Our therapist will arrive at your room within 15 to 20 minutes carrying fresh sanitized linen, organic massage oils, and essentials.",
  },
  {
    question: "Is there any advance payment required for booking?",
    answer:
      "No. For all outlet visits at The Park, we have a strict zero-advance-payment policy. You arrive at our spa, meet your therapist in person, and pay only after you are completely satisfied with the setup. We accept Cash, UPI (Google Pay, PhonePe, Paytm), and Cards.",
  },
  {
    question: "How are you different from typical massage parlours in Connaught Place?",
    answer:
      "Typical massage parlours in CP operate from cramped commercial flats or basements with curtained cabins, unhygienic shared bathrooms, and surprise counter charges. In contrast, Luxury Russian Spa offers a true 5-star hotel ambiance inside The Park, 100% soundproof private rooms with attached hot rain showers, certified international staff, and fixed transparent rates.",
  },
  {
    question: "Is your Connaught Place spa open late at night?",
    answer:
      "Yes, we are open 24 hours a day, 7 days a week. Many corporate executives from Barakhamba Road and Janpath visit us after 9 PM, and hotel guests frequently book late-night in-room sessions to cure jet lag and fatigue.",
  },
  {
    question: "Do your rooms have attached private hot showers?",
    answer:
      "Yes. Every private massage room at our Connaught Place spa features an attached private hot rain shower, fresh sanitized cotton towels, premium bathrobes, and imported toiletries for your complete comfort and privacy.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Hotel, label: "The Park Hotel, CP" },
  { icon: Users, label: "Russian & European Therapists" },
  { icon: TrainFront, label: "Near Rajiv Chowk Metro" },
  { icon: Clock, label: "Open 24/7 (Late Nights)" },
];

const quickFacts = [
  { value: "₹1,499", label: "First Visit Offer", note: "Welcome massage rate" },
  { value: "24/7", label: "Always Open", note: "Day & late night slots" },
  { value: "5+ CP Hotels", label: "In-Room Visits", note: "15-min room delivery" },
  { value: "0", label: "Hidden Charges", note: "Fixed price on WhatsApp" },
];

const therapists = [
  { name: "Russian", note: "Long, flowing classical strokes for deep sensory relaxation" },
  { name: "European", note: "Gentle Swedish pressure to release chronic mental stress" },
  { name: "Thai", note: "Passive rhythmic stretching and acupressure without oil" },
  { name: "Indian", note: "Warm herbal oil therapy targeting stubborn muscle stiffness" },
];

const hotels = [
  {
    name: "The Park New Delhi",
    area: "15 Parliament Street, CP",
    image: "/images/thePrak_CP.jpg",
    text: "Our physical luxury outlet is right here. Walk in for your session in a private suite, or book directly if you are staying in the hotel.",
    outlet: true,
  },
  {
    name: "The LaLiT New Delhi",
    area: "Barakhamba Avenue, CP",
    image: "/images/theLalit_CP.jpg",
    text: "Staying at The LaLiT after corporate meetings? Message your room number and our therapist reaches within 15–20 minutes with fresh linens and essential oils.",
  },
  {
    name: "The Imperial New Delhi",
    area: "Janpath, CP",
    image: "/images/theImperial_CP.jpeg",
    text: "Unwind quietly inside your room after walking Janpath market. A soothing full body massage right inside your private hotel suite.",
  },
  {
    name: "Shangri-La Eros New Delhi",
    area: "Ashoka Road, Connaught Place",
    image: "/images/shangri-la-s-eros-hotel-connaught-place-delhi-5-star-hotels-2zj8oj1.avif",
    text: "Business travelers at Shangri-La love our fast 24/7 room service. Re-energize between flight layovers and busy conference days.",
  },
  {
    name: "Radisson Blu Marina",
    area: "G-Block, Connaught Circus",
    image: "/images/radissonblu_CP.jpg",
    text: "Situated right on the CP inner circle. Enjoy complete privacy and genuine therapy without having to step outside into Delhi traffic.",
  },
];

const services = [
  {
    title: "Russian Full Body Massage",
    text: "Head to toe soothing strokes using warm aromatic oils to release muscle fatigue, calm the mind, and restore natural energy. Our most popular massage in Connaught Place.",
    time: "60–90 min",
    href: "/full-body-massage-in-delhi",
  },
  {
    title: "B2B Body Spa Massage",
    text: "A premium, deeply relaxing body-to-body therapy in complete privacy. Performed by certified Russian therapists with warm oils and attached hot shower.",
    time: "60–90 min",
    href: "/b2b-massage-in-connaught-place",
  },
  {
    title: "Deep Tissue Therapy",
    text: "Targeted firm pressure on chronic knots in your neck, stiff shoulders, and lower back caused by long hours of desk work or meetings around Barakhamba.",
    time: "60–90 min",
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    title: "Traditional Thai Massage",
    text: "Oil-free rhythmic stretching and pressure-point techniques on a comfortable floor mat. The perfect cure for tired legs after shopping around Janpath and CP.",
    time: "60–90 min",
    href: "/thai-massage-in-delhi",
  },
  {
    title: "Luxury Couple Massage",
    text: "Two dedicated massage tables in one spacious, candle-lit private suite. Ideal for couples, anniversaries, or a relaxing weekend treat in Central Delhi.",
    time: "60–120 min",
    href: "/couple-massage",
  },
  {
    title: "Four-Hands Sandwich Massage",
    text: "Two certified therapists working in perfect synchronized harmony. Twice the hands, double the relaxation, and complete stress relief in one sitting.",
    time: "60–90 min",
    href: "/sandwich-massage",
  },
];

// Our spa vs a typical massage parlour in CP (targets "massage parlours in connaught place" honestly)
const comparison = [
  { point: "Location & Hygiene", us: "Inside The Park 5-star hotel, fresh linen every guest", them: "Dingy basements or crowded shop alleys" },
  { point: "Privacy & Facilities", us: "100% private soundproof suite with attached hot rain shower", them: "Curtained cabins or shared washing spaces" },
  { point: "Pricing Transparency", us: "Fixed ₹1,499 & ₹12,999 confirmed on WhatsApp before arrival", them: "Bait rates that double at the reception counter" },
  { point: "Therapist Quality", us: "Certified Russian, European, Thai & Indian female staff", them: "Untrained local staff with no therapy skills" },
  { point: "Advance Payment", us: "Zero advance deposit for outlet visits. Pay after meeting", them: "Advance UPI transfers that lead to scams" },
  { point: "Operating Hours", us: "Open 24/7 with dedicated late-night and morning slots", them: "Close early with rushed, low-quality sessions" },
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
  { id: 1, image: "/images/Russian-massage-girls.webp", alt: "Russian Spa Therapist in Connaught Place Near Rajiv Chowk" },
  { id: 2, image: "/images/lajpat/therapist-2.webp", alt: "Certified Russian Body Massage Therapist Connaught Place" },
  { id: 3, image: "/images/lajpat/therapist-3.webp", alt: "European Spa Therapist at Connaught Place Luxury Spa" },
  { id: 4, image: "/images/image2.webp", alt: "Professional Thai and Russian Therapist Connaught Place Hotel Visit" },
  { id: 5, image: "/images/lajpat/therapist-5.webp", alt: "Luxury Russian Spa Expert Connaught Place Delhi" },
];

const steps = [
  {
    title: "Send a Quick Message",
    text: "WhatsApp, Telegram or call us. Tell us your preferred time, treatment, and whether you're visiting The Park or want an in-room 5-star hotel visit.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Preview Therapist & Lock Price",
    text: "We share therapist photos, confirm your slot, and lock in the transparent rate (₹1,499 outlet or ₹12,999 hotel suite). Zero advance payment needed.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Arrive, Relax & Pay Later",
    text: "Step into our serene private suite with attached hot shower at The Park, or welcome your therapist to your hotel suite. Pay by Cash or UPI after meeting.",
    image: "/images/hb2.webp",
  },
];

const gettingHere = [
  { icon: TrainFront, title: "By Metro", text: "Patel Chowk Metro (Yellow Line Gate 2) is a 2-minute walk. Rajiv Chowk Metro (Gate 6) is just 5 minutes away." },
  { icon: MapPin, title: "Prime Landmark", text: "Inside The Park New Delhi, 15 Parliament Street, right opposite Jantar Mantar and steps from CP Outer Circle." },
  { icon: Clock, title: "24/7 Availability", text: "Open day and night. Late night slots after 10 PM and early morning transit sessions are readily available." },
];

const nearby = [
  { area: "Karol Bagh", note: "About 15 minutes away", href: "/spa-in-karol-bagh" },
  { area: "Paharganj", note: "Right behind New Delhi station", href: "/spa-in-paharganj" },
  { area: "Lajpat Nagar", note: "South Delhi", href: "/spa-in-lajpat-nagar" },
  { area: "Aerocity", note: "Near IGI Airport", href: "/spa-in-aerocity" },
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

export default function Conaughtpage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="cp-hero-title" className="relative bg-dark">
        <Image
          src="/images/TheParkConnaughtPlace.webp"
          alt="Spa in Connaught Place at The Park New Delhi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa in Connaught Place</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Luxury Spa in Connaught Place <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="cp-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Russian Spa in Connaught Place
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Russian Spa <span className="text-secondary" aria-hidden="true">·</span> Body Massage{" "}
            <span className="text-secondary" aria-hidden="true">·</span> The Park Hotel{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,499
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/40 px-4 py-1.5 text-xs font-semibold text-secondary">
            <Sparkles className="size-3.5" /> First Visit Special Offer: Full Body Massage @ ₹1,499 Only
          </div>

          <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Tired from long office hours around Barakhamba Road or walking the vibrant markets of Janpath and Connaught Place?
            Step into a peaceful world of luxury relaxation. Our Russian spa in Connaught Place is located inside The Park New Delhi
            on Parliament Street. Enjoy quiet, sanitized private suites, certified European and Russian therapists, attached hot rain
            showers, and fixed pricing with zero hidden charges. Walk in 24/7 or book an in-room 5-star hotel visit.
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

      {/* 2. Intro + address */}
      <section aria-labelledby="cp-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Private massage room at our spa in Connaught Place"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist at our Connaught Place massage centre"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              The Park · CP Central
            </span>
          </div>

          <div>
            <HomeHeading
              id="cp-intro-title"
              align="left"
              eyebrow="Russian Spa & Body Massage in Connaught Place"
              title="Authentic Russian Spa, Body Spa &"
              highlight="Body Massage in Connaught Place"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Connaught Place is the busy commercial heart of Delhi. Between high-stakes corporate meetings in Barakhamba towers,
              embassy appointments, long walking hours through Janpath and CP circle shops, and traffic jams on the outer ring,
              both mental exhaustion and muscular fatigue build up quickly. That is exactly why clients choose our luxury Russian spa in
              Connaught Place. The moment you step through our doors inside The Park New Delhi on Parliament Street, the chaotic city noise
              fades into silence, replaced by tranquil music, gentle aromatherapy scents, and welcoming certified therapists.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              As the top-rated Russian body massage centre in Connaught Place, we specialize in authentic Russian classical strokes,
              relaxing Swedish oil massages, intensive deep tissue recovery, and soothing Thai stretching. Unlike typical street massage
              parlours in Connaught Place that crowd guests into curtained cubicles with surprise counter charges, we provide 100% soundproof,
              air-conditioned private suites with personal attached hot rain showers. Plus, we maintain a strict <strong>Zero Advance Payment</strong> policy
              for all outlet bookings—you arrive, meet your therapist in person, and pay the fixed price after your session.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> Connaught Place Spa Contact & Bookings
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                {CP_ADDRESS.streetAddress}, {CP_ADDRESS.addressLocality} {CP_ADDRESS.postalCode} (Near Rajiv Chowk & Patel Chowk Metro).
                Call or WhatsApp for immediate slots, therapist previews, and direct bookings.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#15803d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
                >
                  <FaWhatsapp /> WhatsApp Booking
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  <Phone className="size-4" /> Call Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Russian spa: therapists */}
      <section aria-labelledby="cp-russian-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="cp-russian-title"
              align="left"
              eyebrow="Certified International Team"
              title="A Russian Spa in Connaught Place,"
              highlight="Tailored To Your Body"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              Our Russian spa in Connaught Place features a verified team of certified therapists from Russia, Ukraine,
              and Europe, alongside expert Thai and Indian therapists. Each therapist brings years of professional training in anatomy,
              muscle release, and stress relief. Whether you prefer gentle Swedish pressure, firm Russian rhythmic strokes, or focused
              deep tissue relief for a stiff back, we personalize every minute of your session to leave you completely recharged.
            </p>
            <WhatsAppButton className="mt-8 !bg-secondary !text-dark hover:!bg-white">Choose My Therapist</WhatsAppButton>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {therapists.map((t) => (
              <li
                key={t.name}
                className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-secondary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Users className="size-5" />
                </span>
                <p className="mt-4 font-title text-xl font-bold text-white">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">Therapist</p>
                <p className="mt-3 text-sm text-white/80">{t.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3b. Therapists Gallery: Meet Our Therapists At Russian Spa in Connaught Place */}
      <section aria-labelledby="cp-therapists-gallery-title" className="bg-white py-14 md:py-20 px-4 md:px-8 border-y border-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            id="cp-therapists-gallery-title"
            className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c86d5e]"
          >
            Meet Our Therapists At Russian Spa in Connaught Place
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-bodycolor">
            Pick the therapist you like best. Our team includes certified Russian, European, and Indian therapists available 24/7 for outlet visits inside The Park hotel and hotel in-room sessions across CP.
          </p>

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

          <p className="mt-8 text-xs sm:text-sm text-bodycolor">
            Want to check who is available right now? Message us on{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
              WhatsApp (+91-8799716197)
            </a>{" "}
            and we will confirm your therapist and appointment immediately.
          </p>
        </div>
      </section>

      {/* 4. Hotels */}
      <section aria-labelledby="cp-hotels-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-hotels-title"
            eyebrow="5-Star Hotel In-Room Visits"
            title="CP Spa Outlet & 5-Star Hotel"
            highlight="In-Room Visits in 15 Mins"
            text="Visit our private outlet inside The Park on Parliament Street, or stay relaxed in your hotel room. Send us your hotel name and room number on WhatsApp, and our certified therapist reaches within 15–20 minutes with fresh linens and essential oils."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <article
                key={h.name}
                className={`group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)] ${
                  h.outlet ? "ring-2 ring-primary" : "ring-amber-100"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={h.image}
                    alt={`${h.name}, ${h.area}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow ${
                      h.outlet ? "bg-primary text-white" : "bg-white/90 text-primary"
                    }`}
                  >
                    {h.outlet ? "Our CP Outlet" : "In-Room Sessions"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-xl font-bold text-amber-900">{h.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                    <MapPin className="size-3.5" /> {h.area}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-bodycolor">{h.text}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <FaWhatsapp /> {h.outlet ? "Book at The Park" : "Book to My Room"}
                  </a>
                </div>
              </article>
            ))}
            {/* Fills the last grid cell with a booking prompt for hotels not listed */}
            <div className="flex flex-col justify-center rounded-3xl bg-primary p-8 text-white shadow-[0_10px_30px_rgba(43,24,16,0.15)]">
              <Hotel className="size-10 text-secondary" />
              <p className="mt-4 font-title text-2xl font-bold">Staying at another hotel in CP?</p>
              <p className="mt-2 text-sm text-white">
                Near the Metropolitan Hotel Bangla Sahib Road, Janpath, or Barakhamba? Message us your location and we will send
                our nearest therapist to your hotel suite within 20 minutes.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary hover:text-dark"
              >
                <FaWhatsapp /> Request In-Room Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Massages */}
      <section aria-labelledby="cp-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-services-title"
            eyebrow="Best Body Massage in Connaught Place"
            title="Body Massage Spa in Connaught Place:"
            highlight="Our Premium Menu"
            text="Every session is conducted in a soundproof private suite with warm organic oils, temperature control, and an attached hot rain shower. Tap any treatment to learn more."
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
            Want to explore all specialized therapies? Check our full <a href="/massage-in-delhi" className={linkClass}>body massage in Delhi</a> menu.
          </p>
        </div>
      </section>

      {/* 6. Spa vs massage parlour */}
      <section aria-labelledby="cp-compare-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="cp-compare-title"
            eyebrow="5-Star Hotel Spa vs CP Parlours"
            title="Why We Are Better Than Typical"
            highlight="Massage Parlours in Connaught Place"
            text="There are dozens of shady massage parlours in Connaught Place with hidden charges and thin curtains. Here is why discerning guests choose our 5-star hotel luxury spa instead."
          />
          <div className="overflow-x-auto rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-amber-100">
                  <th scope="col" className="p-3 sm:p-5 font-semibold text-bodycolor"><span className="sr-only">Compared on</span></th>
                  <th scope="col" className="bg-primary p-3 sm:p-5 font-title text-sm sm:text-lg font-bold text-white">Luxury Russian Spa</th>
                  <th scope="col" className="p-3 sm:p-5 font-title text-sm sm:text-lg font-bold text-amber-900">Typical CP Parlour</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.point} className="border-b border-amber-50 last:border-0">
                    <th scope="row" className="p-3 sm:p-5 font-semibold text-amber-900">{row.point}</th>
                    <td className="bg-amber-50/70 p-3 sm:p-5">
                      <span className="flex items-start gap-2 text-amber-900">
                        <Check className="mt-0.5 hidden size-4 shrink-0 text-green-600 sm:block" strokeWidth={3} /> {row.us}
                      </span>
                    </td>
                    <td className="p-3 sm:p-5">
                      <span className="flex items-start gap-2 text-bodycolor">
                        <X className="mt-0.5 hidden size-4 shrink-0 text-rose-400 sm:block" strokeWidth={3} /> {row.them}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" aria-labelledby="cp-pricing-title" className="relative bg-[#2b1810] py-16 md:py-24 px-4 md:px-8 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#24130d] to-[#1c0f09] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#9c5232]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fdc28c]">
              Clear & Transparent Rates
            </span>
            <h2 id="cp-pricing-title" className="mt-3 font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Connaught Place <span className="italic font-normal text-[#fdc28c]">Spa Prices</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/70">
              No surprise charges at the counter. Our ₹1,499 spa outlet session and ₹12,999 5-star hotel outlet package come with everything included. What we confirm on WhatsApp is exactly what you pay.
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

      {/* 8. How to book */}
      <section aria-labelledby="cp-steps-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="cp-steps-title"
            eyebrow="Simple Booking"
            title="Book Your CP Massage in"
            highlight="3 Easy Steps"
          />
          <ol className="relative grid gap-10 md:grid-cols-3">
            <span className="absolute left-[16%] right-[16%] top-24 hidden border-t-2 border-dashed border-amber-300 md:block" aria-hidden="true" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <div className="relative mx-auto size-48">
                  <div className="relative size-48 overflow-hidden rounded-full border-[6px] border-white shadow-[0_15px_40px_rgba(43,24,16,0.15)]">
                    <Image src={s.image} alt={s.title} fill sizes="192px" className="object-cover" />
                  </div>
                  <span className="absolute -right-1 top-3 flex size-12 items-center justify-center rounded-full bg-primary font-title text-lg font-bold text-white ring-4 ring-white">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-title text-xl font-bold text-amber-900">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-bodycolor">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. Getting here */}
      <section aria-labelledby="cp-directions-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="cp-directions-title"
            eyebrow="Prime Central Delhi Location"
            title="How to Reach Our Spa"
            highlight="Near Rajiv Chowk Metro"
          />
          <div className="grid gap-5 md:grid-cols-3">
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
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Clean and private", text: "Every room is cleaned after each guest, with fresh linen every time." },
              { icon: Users, title: "Your choice of therapist", text: "Russian or Indian, male or female, soft or firm pressure." },
              { icon: CalendarCheck, title: "Pay at the outlet", text: "No advance payment for outlet bookings. The price is fixed before you arrive." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-amber-900">{title}</span>
                  <span className="text-sm text-bodycolor">{text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Nearby outlets */}
      <section aria-labelledby="cp-nearby-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="cp-nearby-title"
            eyebrow="Spa Near Connaught Place"
            title="Not in CP Today?"
            highlight="Try These"
            text="If you're looking for a spa near Connaught Place, one of these outlets might be closer to you."
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
            Planning your visit? Read our <a href="/blog/spa-in-connaught-place" className={linkClass}>guide to spas in Connaught Place</a>, or{" "}
            <a href="/outlets" className={linkClass}>see all 24+ outlets</a>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="cp-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="cp-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Connaught Place"
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
      <section aria-labelledby="cp-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/theLalit_CP.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="cp-cta-title"
            eyebrow="24/7 Appointments & In-Room Visits"
            title="Ready For True Relaxation"
            highlight="in Connaught Place?"
            text="Message us with your preferred time and hotel name, or drop by our private suite at The Park New Delhi on Parliament Street. Open 24/7 with 100% fixed rates and zero advance deposit."
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
