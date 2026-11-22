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
  Plane,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Shown on the page and used for the DaySpa schema in ./page.js.
export const AEROCITY_ADDRESS = {
  streetAddress: "Asset 6, Northern Access Road, Near Lemon Tree Aerocity",
  addressLocality: "New Delhi",
  addressRegion: "DL",
  postalCode: "110037",
};

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your Russian spa in Aerocity located?",
    answer:
      "Our Aerocity spa outlet is located at Asset 6, Northern Access Road, right near Lemon Tree Premier and the Aerocity Metro Station, New Delhi 110037. We are only 5 to 8 minutes from IGI Airport Terminal 3 and Terminal 1. If you are staying at any hotel in Aerocity, we can also send a therapist straight to your room.",
  },
  {
    question: "Can I book an in-room massage at JW Marriott, Novotel, or Pullman?",
    answer:
      "Yes. We provide 24/7 in-room hotel visits across all Aerocity hotels including JW Marriott, Novotel, Pullman, Roseate House, Lemon Tree Premier, Aloft, Andaz Delhi, Pride Plaza, and ibis. Just share your hotel name and room number on WhatsApp (+91-9990193385), and our certified therapist will arrive with warm oils and clean towels within 15 to 25 minutes.",
  },
  {
    question: "What are your spa and body massage prices in Aerocity?",
    answer:
      "Our Aerocity spa outlet starts at ₹1,499 per session (which includes a full body oil massage, cream massage, 60 min shower & consultation). For guests staying in Aerocity hotels seeking a premium luxury experience in their suite, sessions are ₹12,999 per session (includes oil & cream massage, private suite, B2B massage & 120 min session). What we quote on WhatsApp is exactly what you pay, with zero hidden charges.",
  },
  {
    question: "Are you open 24/7 for late night flights and airport layovers?",
    answer:
      "Yes, we are open 24 hours a day, 7 days a week, 365 days a year. Flights land in Delhi at all hours—whether you land at 1:00 AM, 3:00 AM, or during an afternoon layover, our reception desk and therapists are always ready. Message us on WhatsApp before you board or right after landing.",
  },
  {
    question: "Can I take a hot shower and keep my luggage safe during my layover?",
    answer:
      "Yes, absolutely. Our Aerocity outlet has fully private, air-conditioned rooms with attached hot rain showers, fresh steam-sanitized towels, and shower gel. We also provide safe luggage storage while you relax, making it ideal if you have a 3 to 8 hour layover at IGI Airport.",
  },
  {
    question: "Can I choose a Russian, European, or Indian female therapist?",
    answer:
      "Yes. We have certified Russian, European, and experienced Indian female therapists. You can browse therapist photos on our Telegram channel or ask us on WhatsApp to confirm who is on duty before booking your slot.",
  },
  {
    question: "Do I need to pay any advance deposit for booking?",
    answer:
      "No advance deposit is needed for outlet bookings. Unlike random online broker sites that ask for advance UPI transfers, you pay only after you arrive and meet your therapist. For hotel visits, we confirm transparent pricing on WhatsApp with zero surprises.",
  },
  {
    question: "How do I book a session right now?",
    answer:
      "Booking takes less than a minute. Simply send us a message on WhatsApp or call +91 99901 93385. Tell us your preferred time, the massage style you want, and whether you will visit our outlet or want an in-room visit to your Aerocity hotel.",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

const heroChips = [
  { icon: Plane, label: "5 Mins From IGI Airport" },
  { icon: Hotel, label: "In-Room Hotel Sessions" },
  { icon: Users, label: "Russian & European Therapists" },
  { icon: Clock, label: "Open 24/7 Round The Clock" },
];

const quickFacts = [
  { value: "24/7", label: "Open Always", note: "Even for 2 AM flights" },
  { value: "8+", label: "Aerocity Hotels", note: "Fast room visits" },
  { value: "₹1,499", label: "Starting Price", note: "Zero hidden charges" },
  { value: "45–120", label: "Session Length", note: "Tailored to your schedule" },
];

const hotels = [
  {
    name: "JW Marriott Hotel Aerocity",
    image: "/images/jw-marriott-hotel-aerocity.jpg",
    text: "Staying at JW Marriott Aerocity? Message us and our therapist comes directly to your room with warm oils and fresh towels.",
  },
  {
    name: "Novotel New Delhi Aerocity",
    image: "/images/novotel-new-delhi-aerocity.webp",
    text: "A favorite for international business arrivals. Book right as you check in to shake off long-haul flight fatigue.",
  },
  {
    name: "Pullman New Delhi Aerocity",
    image: "/images/pullman-new-delhi-aerocity.jpg",
    text: "Deep relaxation and signature oil massages set up in your suite. Ideal after meetings at Worldmark.",
  },
  {
    name: "Lemon Tree Premier Aerocity",
    image: "/images/lemon-tree-premier-aerocity.jpg",
    text: "Our physical outlet is just a 2-minute walk from Lemon Tree. Walk over anytime or call us to your room.",
  },
  {
    name: "Roseate House & Andaz Delhi",
    image: "/images/pride-plaza-hotel-aerocity.jpg",
    text: "Ultra-luxury hotel visits with verified foreign therapists for guests looking for complete discretion and calm.",
  },
  {
    name: "Pride Plaza & Aloft Aerocity",
    image: "/images/ibis-new-delhi-aerocity.jpg",
    text: "Quick 15-minute therapist arrival for transit guests wanting a refreshing massage before their next flight.",
  },
];

const services = [
  { title: "Full Body Massage", text: "Head-to-toe warm oil therapy. Perfect reset when long flights have caught up with your body.", href: "/full-body-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Slow, firm pressure targeting stiff necks, shoulders, and lower back from cramped airplane seats.", href: "/deep-tissue-massage-in-delhi" },
  { title: "B2B Massage", text: "Signature full body wellness in complete privacy with attached hot rain shower.", href: "/b2b-massage-in-delhi" },
  { title: "Thai Massage", text: "Oil-free yoga stretching on a firm mat. Relieves tight hips and improves circulation after sitting for hours.", href: "/thai-massage-in-delhi" },
  { title: "Couple Massage", text: "Two massage tables in one private room with two therapists. Great for couples traveling together.", href: "/couple-massage" },
  { title: "Sandwich Massage", text: "Two therapists working in harmony on your body. Twice the relaxation in half the time.", href: "/sandwich-massage" },
];

const whoComes = [
  "Travellers with a 3–8 hour layover at IGI Airport",
  "Business guests attending conferences at Worldmark Aerocity",
  "Tourists landing late at night needing a hot shower & massage",
  "Couples staying at JW Marriott, Novotel or Pullman for staycations",
  "Airline pilots and cabin crew winding down after long shifts",
  "Anyone in Mahipalpur, Dwarka or Vasant Kunj wanting a verified luxury spa",
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
  { id: 1, image: "/images/Russian-massage-girls.webp", alt: "Russian Spa Therapist in Aerocity Near IGI Airport" },
  { id: 2, image: "/images/lajpat/therapist-2.webp", alt: "Certified Russian Body Massage Therapist Aerocity" },
  { id: 3, image: "/images/lajpat/therapist-3.webp", alt: "European Spa Therapist at Aerocity Luxury Spa" },
  { id: 4, image: "/images/image2.webp", alt: "Professional Thai and Russian Therapist Aerocity Hotel Visit" },
  { id: 5, image: "/images/lajpat/therapist-5.webp", alt: "Luxury Russian Spa Expert Aerocity Delhi" },
];

const steps = [
  {
    title: "Quick WhatsApp Chat",
    text: "Tell us what time suits you, and whether you want to visit our outlet or have a therapist come to your hotel room.",
    image: "/images/spa-booking-consultation.webp",
  },
  {
    title: "Walk In or Stay in Bed",
    text: "Come to our quiet, private outlet near Lemon Tree, or stay comfortably in your hotel room. We bring everything needed.",
    image: "/images/private-spa-room-delhi.webp",
  },
  {
    title: "Feel Rested & Energized",
    text: "Enjoy a soothing massage, hot shower, and walk away feeling light, loose, and completely refreshed for your next flight.",
    image: "/images/hb2.webp",
  },
];

const nearby = [
  { area: "Mahipalpur", note: "Right next to Aerocity", href: "/spa-in-mahipalpur" },
  { area: "Dwarka", note: "15 minutes from IGI Airport", href: "/spa-in-dwarka" },
  { area: "Vasant Kunj", note: "South Delhi, short drive", href: "/spa-in-vasant-kunj" },
  { area: "Lajpat Nagar", note: "Central Market, South Delhi", href: "/spa-in-lajpat-nagar" },
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

export default function Aeropage() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="aerocity-hero-title" className="relative bg-dark">
        <Image
          src="/images/spa-treatments.jpg"
          alt="Russian Spa in Aerocity near IGI Airport Delhi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa in Aerocity</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/40 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Open 24/7 Near IGI Airport <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="aerocity-hero-title"
            className="mt-6 font-title font-bold text-[38px] leading-[1.15] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Russian Spa in Aerocity
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            Near IGI Airport <span className="text-secondary" aria-hidden="true">·</span> Hotel Room Visits{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,499
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
            Stiff neck and sore back from long flights? Or stuck on a 5-hour airport layover? Our Russian spa in Aerocity
            is located at Asset 6 (near Lemon Tree Premier and the Aerocity Metro Station), open 24 hours every day. Walk into
            our clean en-suite rooms for a hot rain shower and full body massage, or request an in-room therapist visit straight to your hotel bed.
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
      <section aria-labelledby="aerocity-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/services.webp"
                alt="Massage room at our Aerocity spa with attached hot shower"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaservices1.jpg"
                alt="Aerocity Russian massage therapy session with warm essential oil"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              5 Mins From Airport
            </span>
          </div>

          <div>
            <HomeHeading
              id="aerocity-intro-title"
              align="left"
              eyebrow="Genuine Relaxation"
              title="A Russian Spa in Aerocity"
              highlight="Made for Real Travellers"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Most of our guests in Aerocity are not locals. They are international business executives, tourists
              landing after an 8-hour flight, or transit passengers waiting for a connecting morning flight. That is
              why we keep things simple, private, and stress-free. There are no confusing menus, no aggressive upselling,
              and our outlet stays open 24/7 so you never have to worry about flight delays.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              If you have already checked into your hotel and do not want to step back out, our therapists visit all
              major Aerocity hotels every day. Travelers consistently rank us as the best spa in Aerocity because you
              get genuine, deeply relaxing therapy with zero advance payment tricks and no travel headache.
            </p>

            <address className="mt-8 flex gap-4 rounded-2xl bg-amber-50 p-5 not-italic ring-1 ring-amber-100">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <MapPin className="size-6" />
              </span>
              <span>
                <span className="block font-title text-lg font-bold text-amber-900">Our Aerocity Outlet</span>
                <span className="mt-1 block text-sm leading-relaxed text-bodycolor">
                  {AEROCITY_ADDRESS.streetAddress}, {AEROCITY_ADDRESS.addressLocality} {AEROCITY_ADDRESS.postalCode}
                </span>
                <a href={PHONE_LINK} className="mt-1 inline-block text-sm font-semibold text-primary hover:underline">
                  {PHONE_LABEL}
                </a>
              </span>
            </address>
          </div>
        </div>
      </section>

      {/* 3. Partner hotels */}
      <section aria-labelledby="aerocity-hotels-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-hotels-title"
            eyebrow="In-Room Hotel Service"
            title="Hotels We Visit in Aerocity"
            highlight="(Within 15–20 Mins)"
            text="Staying in an Aerocity hotel? Send us your hotel name and room number on WhatsApp. A verified therapist will come straight to your room with fresh linen and aromatic oils."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <article
                key={h.name}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(43,24,16,0.08)] ring-1 ring-amber-100 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(43,24,16,0.14)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={h.image}
                    alt={`${h.name} spa and in-room massage service Aerocity`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-title text-xl font-bold text-amber-900">{h.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bodycolor">{h.text}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <FaWhatsapp className="text-emerald-600" /> Book to My Room
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Massages */}
      <section aria-labelledby="aerocity-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-services-title"
            eyebrow="Popular Treatments"
            title="Massage Spa in Aerocity:"
            highlight="What You Can Book"
            text="These are the therapies travelers ask for most after landing at Delhi airport. Tap any card to read more, or see our complete Delhi menu."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100 transition-colors duration-300 hover:bg-white hover:ring-amber-300"
                >
                  <span>
                    <span className="block font-title text-lg font-bold text-amber-900 group-hover:text-primary">{title}</span>
                    <span className="text-sm text-bodycolor">{text}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Looking for other specialty sessions? See every option on our <a href="/massage-in-delhi" className={linkClass}>massage in Delhi</a> page.
          </p>
        </div>
      </section>

      {/* 5. Layover & Flight tiredness */}
      <section aria-labelledby="aerocity-who-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)] lg:order-last">
            <Image
              src="/images/5StarHotelSpa.jpg"
              alt="Private massage suite at our Russian spa in Aerocity Delhi"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl">
              <p className="font-title text-lg font-bold text-amber-900">Landing at 1 AM or 3 AM?</p>
              <p className="mt-1 text-sm text-bodycolor">Message us on WhatsApp before you board your flight. We will keep your private room and therapist ready when you touch down.</p>
            </div>
          </div>

          <div>
            <HomeHeading
              id="aerocity-who-title"
              align="left"
              eyebrow="Airport Transit Care"
              title="Spa Near Aerocity for"
              highlight="Jetlagged Travellers"
              text="Our guests come from all over the world. Here are the travelers we welcome most every single day:"
              className="!mb-8"
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {whoComes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_4px_16px_rgba(43,24,16,0.05)]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-amber-900">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8">Check Available Slots Today</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 6. Therapists: Meet Our Therapists At Russian Spa in Aerocity */}
      <section aria-labelledby="aero-therapists-gallery-title" className="bg-white py-14 md:py-20 px-4 md:px-8 border-y border-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            id="aero-therapists-gallery-title"
            className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c86d5e]"
          >
            Meet Our Therapists At Russian Spa in Aerocity
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-bodycolor">
            Pick the therapist you like best. Our team includes certified Russian, European, and Indian therapists available 24/7 for outlet visits and hotel in-room sessions.
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
              WhatsApp (+91-9990193385)
            </a>{" "}
            and we will confirm your therapist and appointment immediately.
          </p>
        </div>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" aria-labelledby="aerocity-pricing-title" className="relative bg-[#2b1810] py-16 md:py-24 px-4 md:px-8 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1810] via-[#24130d] to-[#1c0f09] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#9c5232]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#fdc28c]">
              Clear Prices
            </span>
            <h2 id="aerocity-pricing-title" className="mt-3 font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Aerocity <span className="italic font-normal text-[#fdc28c]">Spa Prices</span>
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

      {/* 8. How to book */}
      <section aria-labelledby="aerocity-steps-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="aerocity-steps-title"
            eyebrow="Simple Booking"
            title="Book Your Aerocity Massage in"
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

      {/* 9. Why us */}
      <section aria-labelledby="aerocity-why-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="aerocity-why-title"
            eyebrow="Trust & Hygiene"
            title="Why Guests Pick Our"
            highlight="Aerocity Russian Spa"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Clock, title: "Late night landings are normal", text: "Touch down at 1 AM or 3 AM? Message us on WhatsApp before takeoff. We will have your room and therapist ready the moment you exit Terminal 3." },
              { icon: ShieldCheck, title: "Zero advance payment scam", text: "Never pay an advance online deposit. For outlet bookings, you pay only after reaching our reception and meeting your therapist in person." },
              { icon: Users, title: "Choose your therapist", text: "Russian, European, or Indian female therapists. Soft relaxation or firm deep tissue pressure—you decide every detail of your session." },
            ].map(({ icon: Icon, title, text }) => (
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

      {/* 10. Nearby outlets */}
      <section aria-labelledby="aerocity-nearby-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="aerocity-nearby-title"
            eyebrow="Spa Near Aerocity"
            title="Not Staying in Aerocity?"
            highlight="Try These Nearby Outlets"
            text="If you are staying near Mahipalpur, Dwarka, or South Delhi, we have verified luxury spas close to you."
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
            Exploring other areas in Delhi? <a href="/outlets" className={linkClass}>See all 24+ luxury outlets</a>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="aerocity-faq-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="aerocity-faq-title"
            eyebrow="Questions & Answers"
            title="Spa in Aerocity"
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
                    <span className="font-title text-lg font-bold text-amber-500">{String(i + 1).padStart(2, "0")}</span>
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
      <section aria-labelledby="aerocity-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/novotel-new-delhi-aerocity.webp" alt="Aerocity Russian Spa booking" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="aerocity-cta-title"
            eyebrow="Instant 24/7 Booking"
            title="Ready to Unwind"
            highlight="in Aerocity?"
            text="Message us with your time and hotel name, or let us know you are coming to our outlet. We reply instantly on WhatsApp at all hours."
            className="!mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#25d366] hover:!bg-[#1ebe5b] !shadow-black/30" />
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#229ED9] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b8bc0]"
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
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/70">
            <CalendarCheck className="size-4 text-secondary" /> No advance payment needed for outlet bookings
          </p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
