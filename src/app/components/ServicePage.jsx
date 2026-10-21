import Image from "next/image";
import { preload } from "react-dom";
import {
  AlertTriangle,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Home,
  Hotel,
  Leaf,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "./HomeHeading";
import MassagePicker from "./MassagePicker";
import WhatsappFloat from "./WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "./siteContact";
import photos from "../gallery/galleryData";

/**
 * Shared template for the "[service] in Delhi" pages. Each page passes an `svc` object (see services.js) with its
 * own copy, picker options, FAQs and so on. Prices, Delhi area links, promises and the booking CTA are shared.
 * `serviceSchemas(svc)` builds the JSON-LD from the same data, so visible FAQs and schema never drift apart.
 */

const SITE = "https://www.luxuryrussianspa.com";
const PRICES = [
  { option: "Outlet", time: "60 min", price: "₹1,999", value: 1999, note: "Private room, hot shower after" },
  { option: "Home or Hotel", time: "90 min", price: "₹14,999", value: 14999, note: "Therapist comes to you" },
  { option: "5 Star Hotel Spa", time: "120 min", price: "₹19,999", value: 19999, note: "International therapist" },
];

// Delhi only: every chip links to that neighbourhood's outlet page
const DELHI_ZONES = [
  { zone: "South Delhi", areas: [["Saket", "saket"], ["Hauz Khas", "hauz-khas"], ["Lajpat Nagar", "lajpat-nagar"], ["Greater Kailash", "greater-kailash"], ["Kalkaji", "kalkaji"], ["Vasant Kunj", "vasant-kunj"]] },
  { zone: "West Delhi", areas: [["Rajouri Garden", "rajouri-garden"], ["Janakpuri", "janakpuri"], ["Punjabi Bagh", "punjabi-bagh"], ["Paschim Vihar", "paschim-vihar"], ["Uttam Nagar", "uttam-nagar"], ["Dwarka", "dwarka"]] },
  { zone: "Central Delhi", areas: [["Connaught Place", "connaught-place"], ["Karol Bagh", "karol-bagh"], ["Paharganj", "paharganj"]] },
  { zone: "North & East Delhi", areas: [["Rohini", "rohini"], ["Pitampura", "pitampura"], ["Laxmi Nagar", "laxmi-nagar"], ["Preet Vihar", "preet-vihar"]] },
  { zone: "Near the Airport", areas: [["Mahipalpur", "mahipalpur"], ["Aerocity", "aerocity"]] },
];

const ways = [
  { icon: Leaf, title: "At an Outlet", price: "₹1,999 / 60 min", text: "Walk into one of our 24+ outlets across Delhi, from Saket and Rajouri Garden to Rohini and Laxmi Nagar." },
  { icon: Home, title: "At Home", price: "₹14,999 / 90 min", text: "A therapist comes to your home anywhere in Delhi with towels and oils. No traffic on the way back." },
  { icon: Hotel, title: "At Your Hotel", price: "₹14,999–₹19,999", text: "Staying in Delhi? Send your hotel and room number and we'll come up to you." },
];

const promises = [
  { icon: ShieldCheck, title: "Clean and private", text: "Fresh linen for every guest and a room cleaned after each session." },
  { icon: Users, title: "Your choice of therapist", text: "Russian, Thai or Indian, male or female, soft or firm." },
  { icon: CreditCard, title: "Price fixed first", text: "Confirmed on WhatsApp. That's exactly what you pay." },
  { icon: CalendarCheck, title: "Pay after", text: "UPI, cash or card, once your massage is done." },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

function heroPhoto(svc) {
  const p = photos.find((x) => x.id === svc.hero) || photos[0];
  return { ...p, sm: `/images/gallery/${p.id}-sm.webp`, lg: `/images/gallery/${p.id}-lg.webp` };
}

export function serviceSchemas(svc) {
  const url = `${SITE}/${svc.slug}`;
  const image = `${SITE}${heroPhoto(svc).lg}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/massage-in-delhi` },
        { "@type": "ListItem", position: 3, name: `${svc.name} in Delhi`, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: svc.name,
      name: `${svc.name} in Delhi`,
      url,
      image,
      description: svc.schemaDescription,
      provider: { "@type": "Organization", name: "Luxury Russian Spa", telephone: "+91-8799716197", url: `${SITE}/` },
      areaServed: [{ "@type": "City", name: "Delhi" }, { "@type": "City", name: "New Delhi" }],
      offers: PRICES.map((p) => ({ "@type": "Offer", name: `${svc.name}, ${p.option.toLowerCase()}, ${p.time}`, price: String(p.value), priceCurrency: "INR" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: svc.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];
}

export function ServiceSchemas({ svc }) {
  return serviceSchemas(svc).map((s, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
  ));
}

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

export default function ServicePage({ svc }) {
  const id = svc.id;
  const hero = heroPhoto(svc);
  const heroSrcSet = `${hero.sm} 700w, ${hero.lg} 1600w`;
  preload(hero.sm, { as: "image", imageSrcSet: heroSrcSet, imageSizes: "100vw", fetchPriority: "high" });

  const heroChips = [
    { icon: MapPin, label: "24+ Outlets in Delhi" },
    { icon: Home, label: "Home & Hotel Visits" },
    { icon: Users, label: svc.therapistChip || "Choose Your Therapist" },
    { icon: Clock, label: "Bookings 24/7" },
  ];
  const quickFacts = [
    { value: "₹1,999", label: "Starting Price", note: "60-minute session" },
    { value: "24+", label: "Delhi Outlets", note: "South, West, North & East" },
    { value: svc.durationFact || "60–120", label: "Minutes", note: "Pick your session" },
    { value: "₹0", label: "Hidden Charges", note: "Price fixed before you book" },
  ];

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby={`${id}-hero-title`} className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.sm} srcSet={heroSrcSet} sizes="100vw" alt={svc.heroAlt} width={hero.w} height={hero.h} fetchPriority="high" decoding="sync" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-36 md:pt-20 md:pb-44 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <a href="/massage-in-delhi" className="hover:text-secondary">Services</a>
            <span className="mx-2">/</span>
            <span className="text-white">{svc.name} in Delhi</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> {svc.badge} <Sparkles className="size-3.5 text-secondary" />
          </span>
          <h1 id={`${id}-hero-title`} className="mt-6 font-title font-bold text-[40px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            {svc.name} in Delhi
          </h1>
          <p className="mt-5 font-title text-lg sm:text-2xl text-white">{svc.tagline}</p>
          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">{svc.heroText}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton />
            <a href={PHONE_LINK} aria-label={`Call Luxury Russian Spa at ${PHONE_LABEL}`} className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink">
              <Phone className="size-4 text-secondary" /> {PHONE_LABEL}
            </a>
          </div>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/90">
            {heroChips.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2"><Icon className="size-4 text-secondary" /> {label}</li>
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

      {/* 2. What it is + at a glance */}
      <section aria-labelledby={`${id}-what-title`} className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <HomeHeading id={`${id}-what-title`} align="left" eyebrow="What Is It?" title={svc.what.title} highlight={svc.what.highlight} className="!mb-6" />
            {svc.what.paras.map((p, i) => (
              <p key={i} className={`leading-relaxed text-bodycolor ${i ? "mt-4" : ""}`}>{p}</p>
            ))}
            {svc.what.link && (
              <p className="mt-4 text-sm text-bodycolor">
                {svc.what.link.before} <a href={svc.what.link.href} className={linkClass}>{svc.what.link.text}</a>
                {svc.what.link.after}
              </p>
            )}
          </div>
          <div className="rounded-3xl bg-amber-50 p-6 md:p-8 ring-1 ring-amber-100">
            <p className="font-title text-xl font-bold text-amber-900">{svc.name} at a glance</p>
            <dl className="mt-5 divide-y divide-amber-200/70">
              {svc.glance.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[120px_1fr] gap-4 py-3 text-sm">
                  <dt className="font-semibold text-amber-900">{k}</dt>
                  <dd className="text-bodycolor">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 3. Who it suits */}
      {svc.moods && (
        <section aria-labelledby={`${id}-who-title`} className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <HomeHeading id={`${id}-who-title`} eyebrow="Is It Right for You?" title={svc.whoTitle || `Who Books a ${svc.name}?`} highlight="" text="Tap whichever sounds most like you. We'll show you how we'd usually approach it." />
            <MassagePicker moods={svc.moods} defaultId={svc.moods[0].id} />
          </div>
        </section>
      )}

      {/* 4. Ways to book */}
      <section aria-labelledby={`${id}-ways-title`} className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading id={`${id}-ways-title`} eyebrow={`${svc.name} Near You`} title="Outlet, Home" highlight="or Hotel" text="Same therapists and the same care, wherever in Delhi you'd like the session." />
          <div className="grid gap-6 md:grid-cols-3">
            {ways.map(({ icon: Icon, title, price, text }) => (
              <div key={title} className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(43,24,16,0.07)] ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30"><Icon className="size-7" /></span>
                <h3 className="mt-6 font-title text-2xl font-bold text-amber-900">{title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{price}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bodycolor">{text}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-max items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  <FaWhatsapp /> Book {title.toLowerCase()}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Price */}
      <section id="pricing" aria-labelledby={`${id}-price-title`} className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id={`${id}-price-title`}
            eyebrow="Clear Prices"
            title={`${svc.name} Price`}
            highlight="in Delhi"
            text={<>No surprises at the end. We confirm the price on WhatsApp before you book. See every rate on our <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.</>}
          />
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{svc.name} price in Delhi</caption>
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Where</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Time</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((r) => (
                  <tr key={r.option} className="border-b border-amber-50 last:border-0">
                    <th scope="row" className="p-4 sm:p-5">
                      <span className="block font-semibold text-amber-900">{r.option}</span>
                      <span className="text-xs font-normal text-bodycolor">{r.note}</span>
                    </th>
                    <td className="p-4 sm:p-5 text-bodycolor">{r.time}</td>
                    <td className="p-4 sm:p-5 font-title text-xl font-bold text-primary">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center"><WhatsAppButton>Ask About Today&apos;s Offer</WhatsAppButton></div>
        </div>
      </section>

      {/* 6. Session steps */}
      <section aria-labelledby={`${id}-session-title`} className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading id={`${id}-session-title`} eyebrow={`First ${svc.name}?`} title="What Happens" highlight="in a Session" text={svc.sessionIntro} />
          <ol className="relative space-y-6 border-l-2 border-dashed border-amber-300 pl-8 md:pl-10">
            {svc.steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[49px] md:-left-[57px] top-1 flex size-8 items-center justify-center rounded-full bg-primary font-title text-sm font-bold text-white ring-4 ring-[#fffaf5]">{i + 1}</span>
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

      {/* 7. Benefits (+ optional safety note) */}
      <section aria-labelledby={`${id}-benefits-title`} className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/hb3.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto">
          <HomeHeading light id={`${id}-benefits-title`} eyebrow="Why Book It?" title={`What a Good ${svc.name}`} highlight="Does for You" text="Nothing magical, just the things guests notice most after a session." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {svc.benefits.map((b) => (
              <div key={b.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <Check className="size-6 text-secondary" strokeWidth={3} />
                <h3 className="mt-4 font-title text-xl font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-white/80">{b.text}</p>
              </div>
            ))}
          </div>
          {svc.checkFirst && (
            <div className="mt-10 rounded-3xl bg-white/5 p-6 md:p-8 ring-1 ring-white/10">
              <p className="font-title text-xl font-bold text-white">Check with a doctor first if you have:</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {svc.checkFirst.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/85"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-secondary" /> {c}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-8 text-center text-xs text-white/60">Massage isn&apos;t a substitute for medical care. If you have an injury or ongoing pain, please check with a doctor first.</p>
        </div>
      </section>

      {/* 8. Across Delhi */}
      <section aria-labelledby={`${id}-area-title`} className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id={`${id}-area-title`}
            eyebrow={`${svc.name} Near Me in Delhi`}
            title={`${svc.name} Across`}
            highlight="Delhi"
            text={`Book a ${svc.name.toLowerCase()} at the outlet nearest you. Tap your area to see that outlet, or ask us to send a therapist home.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DELHI_ZONES.map((z) => (
              <div key={z.zone} className="rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100">
                <h3 className="flex items-center gap-2 font-title text-lg font-bold text-amber-900"><MapPin className="size-4 text-primary" /> {svc.name} in {z.zone}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {z.areas.map(([name, slug]) => (
                    <li key={slug}>
                      <a href={`/spa-in-${slug}`} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-amber-900 ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white">
                        {name} <ArrowRight className="size-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-3xl bg-primary p-6 text-white">
              <p className="font-title text-xl font-bold">Area not listed?</p>
              <p className="mt-2 text-sm text-white/85">We cover most of Delhi with home visits. Send us your area and we&apos;ll tell you the nearest outlet.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-secondary hover:text-dark">
                <FaWhatsapp /> Ask Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Promises + related */}
      <section aria-labelledby={`${id}-promise-title`} className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading id={`${id}-promise-title`} eyebrow="Why Guests Come Back" title={`Looking for the Best ${svc.name}`} highlight="in Delhi?" text="We'll let you decide that. Here's what we promise on every booking, though." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7 text-center shadow-[0_10px_30px_rgba(43,24,16,0.06)] ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30"><Icon className="size-6" /></span>
                <h3 className="mt-5 font-title text-lg font-bold text-amber-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Want to compare? See our{" "}
            {svc.related.map((r, i) => (
              <span key={r.href}>
                <a href={r.href} className={linkClass}>{r.text}</a>
                {i < svc.related.length - 2 ? ", " : i === svc.related.length - 2 ? " or " : ""}
              </span>
            ))}
            , or browse <a href="/massage-in-delhi" className={linkClass}>every massage in Delhi</a> we offer.
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section aria-labelledby={`${id}-faq-title`} className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading id={`${id}-faq-title`} eyebrow="Questions? We're Here To Help" title={`${svc.name} in Delhi`} highlight="FAQs" />
          <div className="space-y-4">
            {svc.faqs.map((faq, i) => (
              <details key={faq.question} open={i === 0} className="group rounded-2xl bg-white ring-1 ring-amber-100 transition-shadow open:shadow-[0_10px_30px_rgba(43,24,16,0.08)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-4">
                    <span className="font-title text-lg font-bold text-amber-700">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-sans text-base font-semibold text-amber-900">{faq.question}</h3>
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-primary ring-1 ring-amber-200 transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white"><Plus className="size-4" /></span>
                </summary>
                <p className="px-5 pb-6 pl-[3.75rem] text-sm leading-relaxed text-bodycolor md:px-6 md:pl-[4.25rem]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section aria-labelledby={`${id}-cta-title`} className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <Image src="/images/gallery/g02-lg.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading light id={`${id}-cta-title`} eyebrow="Book Today" title={svc.ctaTitle} highlight={svc.ctaHighlight} text="Message us your area and a time. We'll tell you the nearest outlet, or when a therapist can reach your home, along with the price." className="!mb-8" />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="!bg-[#15803d] hover:!bg-[#166534] !shadow-black/30" />
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1d6fa5] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#185d8a]">
              <FaTelegramPlane className="size-5" /> Chat on Telegram
            </a>
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink">
              <Phone className="size-4" /> Call Now
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60"><CalendarCheck className="size-4" /> No advance payment for outlet bookings</p>
        </div>
      </section>

      <WhatsappFloat />
    </main>
  );
}
