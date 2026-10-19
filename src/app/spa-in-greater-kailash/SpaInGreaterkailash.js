import Image from "next/image";
import { preload } from "react-dom";
import {
  ArrowRight,
  CalendarCheck,
  Car,
  Check,
  Clock,
  CreditCard,
  Home,
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
import MassagePicker from "../components/MassagePicker";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "Where is your spa in Greater Kailash?",
    answer:
      "Our spa in Greater Kailash is a short drive from M Block Market and N Block Market in GK 1. We send the exact location on WhatsApp as soon as your slot is confirmed. If you'd rather stay in, we can also come to your home anywhere in GK 1 or GK 2.",
  },
  {
    question: "Do you cover both GK 1 and GK 2?",
    answer:
      "Yes. Guests from GK 1, GK 2, Kailash Colony and East of Kailash all book with us, and our home service also covers Nehru Place, CR Park, Alaknanda and Chirag Delhi.",
  },
  {
    question: "How much does a body massage in Greater Kailash cost?",
    answer:
      "A 60-minute body massage at our outlet is ₹1,999. A 90-minute session at your home or hotel is ₹14,999, and our 120-minute 5-star package is ₹19,999. We confirm the price on WhatsApp before you book, and nothing gets added later.",
  },
  {
    question: "Do you have a Russian spa in Greater Kailash?",
    answer:
      "Yes. Our team includes therapists from Russia, Uzbekistan and Thailand along with experienced Indian therapists. Ask for a Russian therapist when you book and we'll confirm who's free.",
  },
  {
    question: "Can I get a massage at home in GK?",
    answer:
      "Yes. The therapist comes to your home with fresh towels and oils. All you need is a quiet room with a little space around the bed.",
  },
  {
    question: "Can we book a couple massage?",
    answer:
      "Yes. Two therapists work at the same time in one private room, at our outlet or at your home. It's a popular way to spend an anniversary or a quiet Sunday.",
  },
  {
    question: "Can I choose a female therapist?",
    answer:
      "Yes. Male guests can ask for a female therapist, and female guests can choose a male or female therapist. Just mention it when you book.",
  },
  {
    question: "How do I book?",
    answer:
      "WhatsApp or call +91 87997 16197 with the massage you'd like, a time, and whether you're coming to us or want us at home. We confirm the slot, therapist and price on the same chat.",
  },
];

// Options for the "how are you feeling today?" picker
const moods = [
  {
    id: "shopping",
    label: "Tired after M Block Market",
    emoji: "🛍️",
    pick: "Thai Massage",
    time: "60 min",
    why: "An afternoon of walking round M Block and N Block is hard on the legs. Thai massage stretches you out on a mat, with no oil and no shower needed after.",
    points: ["Good for legs, hips and lower back", "Done by our Thai therapists", "Finished in an hour"],
    href: "/thai-massage-in-delhi",
  },
  {
    id: "stressed",
    label: "Stressed and worn out",
    emoji: "😮‍💨",
    pick: "Full Body Massage",
    time: "60–90 min",
    why: "Warm oil, head to toe, and an hour where nobody needs anything from you. This is what most of our GK guests book.",
    points: ["Our most booked massage", "Quiet private room", "Most people sleep better that night"],
    href: "/full-body-massage-in-delhi",
  },
  {
    id: "desk",
    label: "Stiff neck from Nehru Place",
    emoji: "💻",
    pick: "Deep Tissue Massage",
    time: "60–90 min",
    why: "Long days at a desk lock up your neck and shoulders. Deep tissue uses slow, firm pressure right where the knots are.",
    points: ["Firm pressure on problem areas", "Tell us where it hurts", "You'll feel looser by morning"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "couple",
    label: "Coming as a couple",
    emoji: "💑",
    pick: "Couple Massage",
    time: "60–120 min",
    why: "Two tables, two therapists, one private room. You can each choose a different massage if you like.",
    points: ["Private room for two", "Same or different massages", "At our outlet or at home"],
    href: "/couple-massage",
  },
  {
    id: "calm",
    label: "Want to feel calm",
    emoji: "🌿",
    pick: "Aromatherapy Massage",
    time: "60–90 min",
    why: "A gentler massage with essential oils chosen to settle you down. Book this one when your mind is more tired than your body.",
    points: ["Pick your oil", "Light to medium pressure", "Very quiet and relaxing"],
    href: "/aromatherapy-massage-in-delhi",
  },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero uses the pre-resized gallery files (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO = { sm: "/images/gallery/g05-sm.webp", lg: "/images/gallery/g05-lg.webp" };
const HERO_SRCSET = `${HERO.sm} 700w, ${HERO.lg} 1600w`;

const heroChips = [
  { icon: ShoppingBag, label: "Near M Block Market" },
  { icon: Home, label: "Home Visits in GK 1 & 2" },
  { icon: Users, label: "Russian & Indian Therapists" },
  { icon: Clock, label: "Bookings 24/7" },
];

const quickFacts = [
  { value: "₹1,999", label: "Starting Price", note: "60-minute massage" },
  { value: "GK 1 & 2", label: "Covered", note: "Outlet or at home" },
  { value: "60–120", label: "Minutes", note: "Pick your session" },
  { value: "₹0", label: "Hidden Charges", note: "Price fixed before you come" },
];

const services = [
  { title: "Full Body Massage", text: "Warm oil, head to toe. The one most people in GK book first.", time: "60–90 min", href: "/full-body-massage-in-delhi" },
  { title: "Deep Tissue Massage", text: "Slow, firm pressure for a stiff neck, tight shoulders and a sore back.", time: "60–90 min", href: "/deep-tissue-massage-in-delhi" },
  { title: "Thai Massage", text: "Stretching on a mat, no oil. Great after a day on your feet.", time: "60 min", href: "/thai-massage-in-delhi" },
  { title: "Couple Massage", text: "Two therapists, one private room. At our outlet or at home.", time: "60–120 min", href: "/couple-massage" },
  { title: "Sandwich Massage", text: "Two therapists working on you at once. It has to be tried to be believed.", time: "60–90 min", href: "/sandwich-massage" },
  { title: "Aromatherapy Massage", text: "Gentle pressure and essential oils, for when your mind needs the break.", time: "60–90 min", href: "/aromatherapy-massage-in-delhi" },
];

const therapists = [
  { name: "Russian", note: "Long, flowing strokes that help you switch off" },
  { name: "Uzbek", note: "Firm and steady, good for tired muscles" },
  { name: "Thai", note: "Stretching and pressure points, no oil" },
  { name: "Indian", note: "Warm oil and deep, familiar techniques" },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1,999",
    period: "60 min",
    description: "At our outlet near M Block Market",
    features: ["Oil, Cream or Dry Massage", "Private Room", "Quick Consultation", "Hot Shower After"],
    icon: Leaf,
  },
  {
    title: "Home & Hotel Spa",
    price: "₹14,999",
    period: "90 min",
    description: "At your home in GK or your hotel room",
    features: ["Oil, Cream or Dry Massage", "Therapist brings towels & oils", "Complimentary Refreshments", "90 min Session"],
    icon: Home,
    popular: true,
  },
  {
    title: "5 Star Hotel Spa",
    price: "₹19,999",
    period: "120 min",
    description: "Two full hours with an international therapist",
    features: ["International Therapists", "5-Star Property", "Aromatherapy Oils", "120 min Session"],
    icon: Star,
  },
];

const visitSteps = [
  {
    time: "Before you come",
    title: "Send us a message",
    text: "A WhatsApp text is plenty. Something like \"full body, 6 pm, outlet\" works fine. If you'd like a particular therapist, mention it in the same message.",
  },
  {
    time: "When you arrive",
    title: "Straight to your room",
    text: "We send the exact location once your slot is confirmed. Someone meets you at the door and takes you to your own private room, so there's no waiting around.",
  },
  {
    time: "First few minutes",
    title: "A quick chat",
    text: "Your therapist asks where you're sore and how firm you like it. \"Medium, and my shoulders are stiff\" is a perfectly good answer.",
  },
  {
    time: "60 to 90 minutes",
    title: "The massage",
    text: "Low lights, warm oil, and nobody talking unless you want to. Plenty of guests drift off halfway through, and that's fine with us.",
  },
  {
    time: "Afterwards",
    title: "Take your time",
    text: "There's a hot shower if you want one. Have some water, sit for a minute, and head back into GK feeling a lot lighter.",
  },
];

const areas = ["GK 1", "GK 2", "M Block Market", "N Block Market", "Kailash Colony", "East of Kailash", "Nehru Place", "CR Park", "Alaknanda", "Chirag Delhi", "Kalkaji", "Masjid Moth"];

const gettingHere = [
  {
    icon: TrainFront,
    title: "By Metro",
    text: "Kailash Colony and Nehru Place stations on the Violet Line are the closest, and Greater Kailash station on the Magenta Line works too. From there it's a short auto ride.",
  },
  {
    icon: Car,
    title: "By Car",
    text: "Parking around M Block fills up quickly in the evenings and on weekends. If you're driving, a weekday afternoon is much easier.",
  },
  {
    icon: Clock,
    title: "Best Time",
    text: "Weekday afternoons are the quietest. Evenings and weekends get busy, so send us a message a few hours ahead.",
  },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room cleaned after each session." },
  { icon: Users, title: "Your choice of therapist", text: "Russian or Indian, male or female, soft or firm. You decide." },
  { icon: CreditCard, title: "Price fixed in advance", text: "We confirm it on WhatsApp. That's exactly what you pay." },
  { icon: CalendarCheck, title: "Pay after", text: "UPI, cash or card, once your massage is done." },
];

const nearby = [
  { area: "Kalkaji", note: "Next door, near Nehru Place", href: "/spa-in-kalkaji" },
  { area: "Lajpat Nagar", note: "Near Central Market", href: "/spa-in-lajpat-nagar" },
  { area: "Saket", note: "Near Select Citywalk", href: "/spa-in-saket" },
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

export default function SpaInGreaterkailash() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload(HERO.sm, { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="gk-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.sm}
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Candle-lit massage room at our spa in Greater Kailash"
          width={1600}
          height={1067}
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
            <a href="/outlets" className="hover:text-secondary">Outlets</a>
            <span className="mx-2">/</span>
            <span className="text-white">Spa in Greater Kailash</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Russian Spa in Greater Kailash <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="gk-hero-title"
            className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Spa in Greater Kailash
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            For GK 1 &amp; GK 2 <span className="text-secondary" aria-hidden="true">·</span> Near M Block Market{" "}
            <span className="text-secondary" aria-hidden="true">·</span> From ₹1,999
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Whether you've spent the afternoon at M Block Market or the whole week at a desk in Nehru Place, an hour
            on the massage table helps. Come to our spa near M Block, or stay home in GK and we'll send a therapist to
            you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa Greater Kailash at ${PHONE_LABEL}`}
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
      <section aria-labelledby="gk-intro-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-20">
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(43,24,16,0.18)]">
              <Image
                src="/images/luxurySpaRoom.jpg"
                alt="Private treatment room at our spa in Greater Kailash"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-white shadow-xl">
              <Image
                src="/images/spaexpert3.webp"
                alt="Therapist at our Greater Kailash spa"
                fill
                sizes="(max-width:1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow">
              GK 1 &amp; GK 2
            </span>
          </div>

          <div>
            <HomeHeading
              id="gk-intro-title"
              align="left"
              eyebrow="Spa GK"
              title="About Our Spa in"
              highlight="Greater Kailash"
              className="!mb-6"
            />
            <p className="leading-relaxed text-bodycolor">
              Greater Kailash has no shortage of places offering a massage, and from the photos most of them look the
              same. So here's simply how we work. You get a private room, you choose your therapist, and we tell you
              the price on WhatsApp before you come. Nothing gets added at the end.
            </p>
            <p className="mt-4 leading-relaxed text-bodycolor">
              Our outlet is a short drive from M Block Market, so it's easy to reach from both GK 1 and GK 2. A lot of
              our guests also come over from Kailash Colony, CR Park and Nehru Place. And if going out is the hard
              part, we'll bring the massage to your home instead.
            </p>

            <div className="mt-8 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 font-title text-lg font-bold text-amber-900">
                <Phone className="size-5 text-primary" /> GK Spa Booking Number
              </p>
              <a href={PHONE_LINK} className="mt-2 block font-title text-3xl font-bold text-primary hover:underline">
                {PHONE_LABEL}
              </a>
              <p className="mt-2 text-sm text-bodycolor">
                It's the same number for calls and WhatsApp. Most people just message &quot;free at 6 today?&quot; and
                we take it from there. The exact address comes on WhatsApp after you book.
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
      <section aria-labelledby="gk-picker-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gk-picker-title"
            eyebrow="Not Sure What to Book?"
            title="Which Massage Should"
            highlight="You Book?"
            text="Tap whatever matches how you feel today. We've put our honest suggestion next to each one."
          />
          <MassagePicker moods={moods} defaultId="stressed" />
        </div>
      </section>

      {/* 4. Services */}
      <section aria-labelledby="gk-services-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gk-services-title"
            eyebrow="Body Spa in Greater Kailash"
            title="Body Massage in GK:"
            highlight="Our Menu"
            text="Every massage happens in a private room at our outlet, or at your home. Tap one to read more."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, time, href }, i) => (
              <li key={title}>
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
                    About {title} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Want the full list? Have a look at all our <a href="/massage-in-delhi" className={linkClass}>massage services</a>.
          </p>
        </div>
      </section>

      {/* 5. Therapists */}
      <section aria-labelledby="gk-russian-title" className="relative overflow-hidden bg-dark py-16 md:py-24 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <HomeHeading
              light
              id="gk-russian-title"
              align="left"
              eyebrow="Russian Spa in GK"
              title="Russian, Thai or Indian?"
              highlight="You Choose"
              className="!mb-6"
            />
            <p className="leading-relaxed text-white/80">
              Quite a few people message us looking for a Russian spa in Greater Kailash and then find out we've got
              more than Russian therapists. Some of the team are from Uzbekistan or Thailand, and our Indian
              therapists have years of practice. You don't have to know which is which. Tell us whether you like firm
              or soft pressure, and whether you want oil, and we'll pick someone for you.
            </p>
            <WhatsAppButton className="mt-8 !bg-secondary !text-dark hover:!bg-white">Pick My Therapist</WhatsAppButton>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {therapists.map((t) => (
              <li
                key={t.name}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-secondary/50"
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

      {/* 6. Pricing */}
      <section id="pricing" aria-labelledby="gk-pricing-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gk-pricing-title"
            eyebrow="Clear Prices"
            title="Spa Price"
            highlight="in Greater Kailash"
            text={
              <>
                Three options, and nothing added at the end. What we quote on WhatsApp is what you pay. Every rate is
                also on our <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
              </>
            }
          />
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {pricingPlans.map(({ title, price, period, description, features, icon: Icon, popular }) => (
              <div
                key={title}
                className={`relative flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  popular
                    ? "bg-dark text-white shadow-[0_25px_60px_rgba(43,24,16,0.35)] md:-my-4 md:py-12"
                    : "bg-amber-50 ring-1 ring-amber-100"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-dark">
                    Most Popular
                  </span>
                )}
                <span className={`flex size-12 items-center justify-center rounded-xl ${popular ? "bg-white/10 text-secondary" : "bg-white text-primary"}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className={`mt-5 font-title text-2xl font-bold ${popular ? "text-white" : "text-amber-900"}`}>{title}</h3>
                <p className={`mt-1 text-sm ${popular ? "text-white/70" : "text-bodycolor"}`}>{description}</p>
                <p className="mt-6 flex items-end gap-2">
                  <span className={`font-title text-4xl font-bold ${popular ? "text-secondary" : "text-primary"}`}>{price}</span>
                  <span className={`pb-1 text-sm ${popular ? "text-white/60" : "text-bodycolor"}`}>/ {period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className={`size-4 shrink-0 ${popular ? "text-secondary" : "text-primary"}`} strokeWidth={3} />
                      <span className={popular ? "text-white/90" : "text-amber-900"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-colors duration-300 ${
                    popular ? "bg-secondary text-dark hover:bg-white" : "bg-white text-primary ring-1 ring-amber-200 hover:bg-primary hover:text-white"
                  }`}
                >
                  <FaWhatsapp className="size-4" /> Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Your visit, step by step */}
      <section aria-labelledby="gk-visit-title" className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="gk-visit-title"
            eyebrow="First Time Here?"
            title="What Your Visit"
            highlight="Looks Like"
            text="Plenty of our guests have never been to a spa before. This is roughly how it goes, from the first message to walking back out."
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
      <section aria-labelledby="gk-area-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="gk-area-title"
            eyebrow="Spa Near Me in GK"
            title="Spa in GK 1, GK 2"
            highlight="and Nearby"
            text="Visit our outlet near M Block Market, or book a home massage in any of these areas. Not listed? Ask us anyway."
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
      <section aria-labelledby="gk-promise-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="gk-promise-title"
            eyebrow="Why Guests Come Back"
            title="Looking for the Best Spa"
            highlight="in GK?"
            text="We'll leave the verdict to you. Here's what we promise on every booking, though."
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
      <section aria-labelledby="gk-nearby-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="gk-nearby-title"
            eyebrow="Spa Near Greater Kailash"
            title="Not in GK Today?"
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
            <a href="/outlets" className={linkClass}>See all our outlets</a> or browse the <a href="/gallery" className={linkClass}>spa gallery</a>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="gk-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="gk-faq-title"
            eyebrow="Questions? We're Here To Help"
            title="Spa in Greater Kailash"
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
      <section aria-labelledby="gk-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/gallery/g02-lg.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="gk-cta-title"
            eyebrow="Book Today"
            title="Free This Evening?"
            highlight="Let's Book It"
            text="Drop us a WhatsApp with a time and the massage you'd like, and tell us if it's the outlet or your place. We usually reply within a few minutes with your therapist and the price."
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
