import { preload } from "react-dom";
import { AlertTriangle, CalendarCheck, Clock, Flame, Home, MapPin, MessageCircle, Phone, Plus, Sparkles, Waves, Zap } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import HomeHeading from "../components/HomeHeading";
import MassagePicker from "../components/MassagePicker";
import WhatsappFloat from "../components/WhatsappFloat";
import { PHONE_LABEL, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from "../components/siteContact";

// Also used for the FAQPage schema in ./page.js, so the page and schema never drift apart.
export const faqs = [
  {
    question: "What is the difference between deep tissue massage and Swedish?",
    answer:
      "The main difference is pressure and purpose. A Swedish massage uses long, flowing strokes with light to medium pressure to relax you all over. A deep tissue massage uses slow, firm pressure from the thumbs, knuckles and forearms to reach the deeper layers of muscle and work on specific knots. Swedish is mostly about relaxing, deep tissue is mostly about fixing tightness.",
  },
  {
    question: "Swedish or deep tissue massage: which should I book for my first massage?",
    answer:
      "For most people, Swedish. It lets you find out what pressure you like without any risk of feeling sore the next day. If you already know you have a stiff neck or tight shoulders, ask for a Swedish massage with some deeper work on those spots. That way you get a bit of both.",
  },
  {
    question: "Is Swedish or deep tissue massage better for back pain?",
    answer:
      "If the ache comes from tight, overworked muscles, like after long hours at a desk or behind the wheel, deep tissue often feels like it does more. If your back is very tender or you're mostly stressed, Swedish can help just as much. A 2011 study on chronic low back pain found a relaxation massage and a deeper structural massage helped about equally. If the pain is sharp, follows an injury or runs down your leg, see a doctor before booking either.",
  },
  {
    question: "Does deep tissue massage hurt more than Swedish?",
    answer:
      "It feels more intense, yes, especially on knots. But it shouldn't be properly painful. A good deep tissue massage feels like strong pressure you can still breathe through. If anything feels sharp, burning or makes you hold your breath, tell your therapist to ease off. Swedish shouldn't hurt at all.",
  },
  {
    question: "Is a 'deep massage' the same as a deep tissue massage?",
    answer:
      "Not always. Some people say deep massage when they just mean firm pressure. A Swedish massage done with firm pressure is still a Swedish massage: same flowing strokes, just pressed harder. Deep tissue is a different technique. It's slower and works on one area at a time, getting into the deeper muscle layers. If you simply want it firmer, ask for a firm Swedish.",
  },
  {
    question: "Will I be sore after a Swedish or a deep tissue massage?",
    answer:
      "After Swedish, most people feel relaxed, a bit sleepy, and not sore at all. After deep tissue, it's normal to feel tender for a day or two, a bit like the day after a workout. Drinking water, having a warm shower and going easy on the gym that day all help.",
  },
  {
    question: "What is the difference between Swedish, deep tissue and sports massage?",
    answer:
      "Swedish is the relaxing one, with light to medium pressure all over. Deep tissue is slow and firm, and focuses on knots and long-standing tightness. Sports massage uses firm pressure too, but adds stretching and focuses on the muscles you use for your sport. Its timing usually works around your training as well.",
  },
  {
    question: "How does hot stone massage compare with Swedish and deep tissue?",
    answer:
      "Hot stone massage is usually a Swedish-style massage where the therapist also uses smooth, heated stones. The warmth loosens muscles so they relax without much pressure. That makes it a good middle ground if Swedish feels too light but deep tissue sounds like too much. Ask on WhatsApp whether hot stone is available at your nearest outlet.",
  },
  {
    question: "Which one is better for stress and sleep?",
    answer:
      "Swedish, most of the time. The slow, rhythmic strokes help your body switch off, and plenty of people fall asleep halfway through. Deep tissue can be relaxing too, but it asks a bit more of you, since you're breathing through strong pressure rather than just drifting off.",
  },
  {
    question: "Which is better after the gym or a long run?",
    answer:
      "A day or two after a hard session, deep tissue or a sports-style massage usually works best for tight legs, hips and shoulders. Right before a race or a heavy workout, keep it light. A Swedish or a gentle sports massage won't leave your muscles feeling tired.",
  },
  {
    question: "Can I ask for Swedish strokes with deep tissue on my back?",
    answer:
      "Yes, and it's one of the most popular ways to book. Your therapist does a relaxing Swedish massage all over and spends extra time with deeper pressure on your problem areas. A 90-minute session gives enough time for both.",
  },
  {
    question: "How much do Swedish and deep tissue massage cost in Delhi?",
    answer:
      "At our Delhi outlets, both cost the same: ₹1,999 for 60 minutes. A 90-minute session at your home or hotel is ₹14,999, and the 120-minute 5-star hotel session is ₹19,999. You choose the style. The price doesn't change, and we confirm it on WhatsApp before you book.",
  },
  {
    question: "Who should avoid deep tissue massage?",
    answer:
      "Check with your doctor first if you're pregnant, take blood thinners, have had recent surgery or an injury, or have osteoporosis, a disc problem or sciatica. The same goes for unexplained pain or swelling. In many of these cases a gentle Swedish massage may still be fine once your doctor agrees.",
  },
];

// Side-by-side comparison table
const compareRows = [
  { label: "Main goal", swedish: "Relaxing your whole body and calming the mind", deep: "Loosening knots and long-standing tightness" },
  { label: "Pressure", swedish: "Light to medium, can go firm if you ask", deep: "Firm and slow, built up gradually" },
  { label: "Strokes", swedish: "Long, gliding, rhythmic strokes (effleurage), kneading and gentle tapping", deep: "Slow strokes across the muscle, trigger point pressure, stripping along tight bands" },
  { label: "Therapist uses", swedish: "Palms and fingers", deep: "Thumbs, knuckles, forearms, sometimes elbows" },
  { label: "Coverage", swedish: "Head to toe, evenly", deep: "Mostly one or two problem areas" },
  { label: "How it feels", swedish: "Soothing, warm, often sleep-inducing", deep: "Intense on knots, a \"good hurt\", then release" },
  { label: "Afterwards", swedish: "Relaxed and a bit drowsy, rarely sore", deep: "Looser, but tender for 24 to 48 hours is normal" },
  { label: "Best for", swedish: "Stress, poor sleep, first massage, general tension", deep: "Desk neck, tight shoulders, lower back stiffness, gym recovery" },
  { label: "Price at our Delhi outlets", swedish: "₹1,999 / 60 min", deep: "₹1,999 / 60 min" },
];

// "Which one should you book" picker
const moods = [
  {
    id: "stress",
    label: "I'm stressed and not sleeping well",
    emoji: "😮‍💨",
    pick: "Swedish Massage",
    time: "60–90 min",
    why: "You don't need anyone digging into your muscles. You need your nervous system to slow down, and long, slow Swedish strokes are great for that. Most people are half asleep by the end.",
    points: ["Light to medium pressure", "Full body, head to toe", "No soreness the next day"],
    href: "/swedish-massage-in-delhi",
  },
  {
    id: "desk",
    label: "My neck and shoulders are locked up",
    emoji: "💻",
    pick: "Deep Tissue Massage",
    time: "60 min",
    why: "Tightness from looking at a screen all day usually sits deep in the upper back and neck. Swedish feels nice, but it often wears off by the next morning. Slow, firm work on those spots tends to last longer.",
    points: ["Focus on neck, shoulders and upper back", "Firm pressure, adjusted to you", "Mild tenderness for a day is normal"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "first",
    label: "It's my first massage",
    emoji: "🌱",
    pick: "Swedish Massage",
    time: "60 min",
    why: "Start gentle and work out what you like. You can always ask for more pressure halfway through. Starting with deep tissue on your first visit can feel like a lot.",
    points: ["Easy, comfortable introduction", "Tell your therapist if you want it firmer", "Try deep tissue next time if you want more"],
    href: "/swedish-massage-in-delhi",
  },
  {
    id: "gym",
    label: "I run, lift or play sport",
    emoji: "🏃",
    pick: "Deep Tissue / Sports Style",
    time: "60–90 min",
    why: "Firm pressure on the muscles you actually use, plus some stretching. Book it a day or two after a hard session, not the day before a big one.",
    points: ["Legs, hips or shoulders, your choice", "Pressure plus stretching", "Tell us your sport when you book"],
    href: "/deep-tissue-massage-in-delhi",
  },
  {
    id: "both",
    label: "I want firm but still relaxing",
    emoji: "⚖️",
    pick: "Swedish + Deep Tissue",
    time: "90 min",
    why: "A relaxing Swedish massage all over, with deeper pressure where you're tight. This is what a lot of guests book once they've tried both.",
    points: ["Gentle overall, firm where needed", "A good first step into deep tissue", "Best as a 90-minute booking"],
    href: "/full-body-massage-in-delhi",
  },
];

// Pressure meter (out of 5)
const pressureScale = [
  { name: "Swedish", level: 2, note: "Light to medium, flowing" },
  { name: "Hot stone", level: 2, note: "Gentle, with warmth doing the work" },
  { name: "Deep tissue", level: 4, note: "Slow, firm, aimed at knots" },
  { name: "Sports", level: 5, note: "Firm pressure plus stretching" },
];

// Four-way comparison: Swedish vs deep tissue vs hot stone vs sports massage
const fourWays = [
  {
    icon: Waves,
    name: "Swedish",
    pressure: "Light to medium",
    best: "Stress, sleep, first-timers",
    text: "The classic relaxation massage, with long flowing strokes, kneading and oil all over the body. If you just want to feel calm and lighter, this is the one.",
    href: "/swedish-massage-in-delhi",
    cta: "Swedish massage in Delhi",
  },
  {
    icon: Zap,
    name: "Deep tissue",
    pressure: "Firm",
    best: "Knots, desk posture, chronic tightness",
    text: "Slow, focused pressure that reaches the deeper muscle and connective tissue (fascia). Less of a treat and more of a fix for the spots that keep tightening up.",
    href: "/deep-tissue-massage-in-delhi",
    cta: "Deep tissue massage in Delhi",
  },
  {
    icon: Flame,
    name: "Hot stone",
    pressure: "Gentle",
    best: "Cold, stiff muscles, deep relaxation",
    text: "Usually a Swedish massage with heated stones placed on and glided over the body. The heat helps muscles let go without much pressure, so it's a good middle ground.",
    href: "/how-hot-stone-massage-works-in-delhi-spa",
    cta: "How hot stone massage works",
  },
  {
    icon: Sparkles,
    name: "Sports",
    pressure: "Firm, with stretching",
    best: "Runners, gym-goers, players",
    text: "Firm work and assisted stretching on the muscles your sport uses, timed around training. It's close to deep tissue, but more about recovery and range of movement.",
    href: "/deep-tissue-massage-in-delhi",
    cta: "Book a sports-style session",
  },
];

// Common themes from massage threads on Reddit and forums (paraphrased, not quotes)
const forumThemes = [
  {
    title: "\"Deep tissue\" doesn't have to mean painful",
    text: "This comes up in almost every thread. People who left a session wincing often say the therapist went too hard, too fast. Experienced therapists in those discussions say good deep work is slow, and you should be able to breathe through it.",
  },
  {
    title: "A lot of people really just want a firm Swedish",
    text: "Plenty of people book deep tissue because Swedish once felt too light. Later they realise a Swedish massage with firm pressure was what they were after. If you mainly want to relax and just like it firmer, say so.",
  },
  {
    title: "Speak up about pressure. Therapists want you to.",
    text: "The most repeated advice from therapists on Reddit is that they can't feel what you feel. Saying \"a bit lighter\" or \"you can go deeper there\" is normal and never rude.",
  },
  {
    title: "Some soreness after deep tissue is normal. Bruising isn't the goal.",
    text: "Feeling tender for a day or two is widely reported and expected. Bruises, numbness or pain that gets worse over several days are not. Mention those to your therapist or a doctor.",
  },
];

const backPain = [
  {
    title: "Dull ache from sitting or driving",
    pick: "Deep tissue, or Swedish with deep work on the back",
    text: "This is the classic case for deep tissue. Hours in a chair tighten the lower back, hips and glutes, and slow, firm pressure there often brings real relief.",
  },
  {
    title: "Back feels tense because you're stressed",
    pick: "Swedish",
    text: "When the tightness comes from stress, a relaxing full body massage can help as much as a deep one, and you won't be sore the next day.",
  },
  {
    title: "Very tender, or you bruise easily",
    pick: "Swedish or hot stone",
    text: "If your back hurts when you press it lightly, deep pressure will probably feel like too much. Gentle strokes and warmth are kinder.",
  },
  {
    title: "Sharp, shooting or radiating pain",
    pick: "See a doctor first",
    warn: true,
    text: "Pain that runs down your leg, comes after a fall or injury, or comes with numbness or tingling needs a doctor or physio before any massage.",
  },
];

const areaLinks = [
  { name: "Connaught Place", href: "/spa-in-connaught-place" },
  { name: "Karol Bagh", href: "/spa-in-karol-bagh" },
  { name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
  { name: "Greater Kailash", href: "/spa-in-greater-kailash" },
  { name: "Saket", href: "/spa-in-saket" },
  { name: "Hauz Khas", href: "/spa-in-hauz-khas" },
  { name: "Rajouri Garden", href: "/spa-in-rajouri-garden" },
  { name: "Janakpuri", href: "/spa-in-janakpuri" },
  { name: "Dwarka", href: "/spa-in-dwarka" },
  { name: "Mahipalpur", href: "/spa-in-mahipalpur" },
  { name: "Aerocity", href: "/spa-in-aerocity" },
  { name: "Rohini", href: "/spa-in-rohini" },
  { name: "Pitampura", href: "/spa-in-pitampura" },
  { name: "Laxmi Nagar", href: "/spa-in-laxmi-nagar" },
];

const priceRows = [
  { option: "Outlet in Delhi", time: "60 min", price: "₹1,999", note: "Swedish or deep tissue, same price" },
  { option: "Home or Hotel", time: "90 min", price: "₹14,999", note: "Enough time for Swedish + deep work" },
  { option: "5 Star Hotel Spa", time: "120 min", price: "₹19,999", note: "International therapist" },
];

const cautions = [
  "Pregnancy (ask for a gentle, pregnancy-safe session)",
  "Blood thinners or a bleeding disorder",
  "Recent surgery, a fracture or a fresh injury",
  "Osteoporosis, a disc problem or sciatica",
  "Fever, infection or a skin condition in the area",
  "Unexplained pain, swelling or numbness",
];

const toc = [
  { href: "#short-answer", label: "The short answer" },
  { href: "#compare", label: "Side-by-side table" },
  { href: "#which", label: "Which should you book?" },
  { href: "#back-pain", label: "For back pain" },
  { href: "#four-way", label: "vs hot stone & sports" },
  { href: "#reddit", label: "What people say online" },
  { href: "#faq", label: "FAQs" },
];

const linkClass = "font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:decoration-amber-700";

// Hero is a pre-resized static image (no on-demand optimizer) so the mobile LCP is fast and stable.
const HERO_SM = "/images/gallery/g15-sm.webp";
const HERO_SRCSET = `${HERO_SM} 700w, /images/gallery/g15-lg.webp 1600w`;

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

export default function Swedishvsdeeptissue() {
  // Starts the hero image download from <head>, before the CSS is parsed
  preload(HERO_SM, { as: "image", imageSrcSet: HERO_SRCSET, imageSizes: "100vw", fetchPriority: "high" });

  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero */}
      <section aria-labelledby="svd-hero-title" className="relative bg-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_SM}
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Therapist giving a warm oil back massage, comparing Swedish and deep tissue pressure"
          width={700}
          height={544}
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-10 pt-14 pb-24 md:pt-20 md:pb-28 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/70">
            <a href="/" className="hover:text-secondary">Home</a>
            <span className="mx-2">/</span>
            <a href="/blog" className="hover:text-secondary">Blog</a>
            <span className="mx-2">/</span>
            <span className="text-white">Swedish vs Deep Tissue Massage</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-black/30 px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3.5 text-secondary" /> Massage Guide <Sparkles className="size-3.5 text-secondary" />
          </span>

          <h1
            id="svd-hero-title"
            className="mt-6 font-title font-bold text-[38px] leading-[1.1] sm:text-6xl lg:text-7xl bg-gradient-to-b from-[#fff3e8] via-[#f6d2b4] to-[#e8a57a] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Swedish vs Deep Tissue Massage
          </h1>

          <p className="mt-5 font-title text-lg sm:text-2xl text-white">
            The Real Difference, How Each One Feels, and Which to Book
          </p>

          <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
            Our therapists in Delhi hear the same question every day: &quot;Should I get Swedish or deep tissue?&quot;
            Here&apos;s the honest answer they give, with notes on back pain, soreness, and how hot stone and sports
            massage fit in.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton>Ask Which Suits Me</WhatsAppButton>
            <a
              href={PHONE_LINK}
              aria-label={`Call Luxury Russian Spa at ${PHONE_LABEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              <Phone className="size-4 text-secondary" /> {PHONE_LABEL}
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-xs text-white/70">
            <Clock className="size-4 text-secondary" /> 8 minute read · Updated October 2026
          </p>
        </div>
      </section>

      {/* 2. Short answer + contents */}
      <section id="short-answer" aria-labelledby="svd-short-title" className="relative z-10 -mt-12 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1fr_260px]">
          <div className="rounded-3xl bg-white p-6 md:p-9 shadow-[0_20px_50px_rgba(43,24,16,0.15)] ring-1 ring-amber-100">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">The short answer</p>
            <h2 id="svd-short-title" className="mt-2 font-title text-2xl md:text-3xl font-bold text-amber-900">
              What&apos;s the difference between Swedish and deep tissue massage?
            </h2>
            <p className="mt-4 leading-relaxed text-bodycolor">
              <strong className="text-amber-900">Swedish massage</strong> uses long, flowing strokes with light to
              medium pressure to relax your whole body. <strong className="text-amber-900">Deep tissue massage</strong>{" "}
              uses slow, firm pressure to reach deeper muscle layers and work on specific knots. Pick Swedish when
              you&apos;re stressed or new to massage. Pick deep tissue when the same spot, usually your neck, shoulders
              or lower back, keeps tightening up.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="/swedish-massage-in-delhi" className="group rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100 transition-colors hover:bg-amber-100">
                <span className="block text-xs font-semibold uppercase tracking-wider text-amber-700">Want to relax?</span>
                <span className="mt-1 block font-title text-lg font-bold text-amber-900 group-hover:underline">Swedish massage in Delhi →</span>
              </a>
              <a href="/deep-tissue-massage-in-delhi" className="group rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100 transition-colors hover:bg-amber-100">
                <span className="block text-xs font-semibold uppercase tracking-wider text-amber-700">Want knots gone?</span>
                <span className="mt-1 block font-title text-lg font-bold text-amber-900 group-hover:underline">Deep tissue massage in Delhi →</span>
              </a>
            </div>
          </div>

          <nav aria-label="On this page" className="rounded-3xl bg-dark p-6 text-white shadow-[0_20px_50px_rgba(43,24,16,0.15)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">On this page</p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {toc.map((t, i) => (
                <li key={t.href}>
                  <a href={t.href} className="flex gap-3 text-white/85 hover:text-secondary">
                    <span className="font-title text-secondary">{String(i + 1).padStart(2, "0")}</span> {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* 3. What each one is */}
      <section aria-labelledby="svd-what-title" className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="svd-what-title"
            eyebrow="Swedish Massage and Deep Tissue Massage"
            title="What Is a Deep Tissue Massage"
            highlight="vs Swedish?"
            text="They both use oil, they're both done on a massage table, and on a spa menu they can look almost the same. On your body, they feel very different."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-amber-50 ring-1 ring-amber-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/g14-sm.webp" alt="Guest relaxing during a Swedish full body massage" width={700} height={700} loading="lazy" decoding="async" className="h-56 w-full object-cover md:h-64" />
              <div className="p-6 md:p-8">
                <h3 className="font-title text-2xl font-bold text-amber-900">Swedish massage: the relaxing one</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodycolor">
                  This is what most people picture when they think of a spa massage. Your therapist warms the muscles
                  with long gliding strokes (effleurage), then kneads them (petrissage), adds small circular friction
                  and sometimes light tapping. The rhythm stays steady and slow, which is why it helps your mind as
                  much as your muscles. Circulation picks up, breathing slows, and a lot of guests nod off.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bodycolor">
                  Pressure is light to medium by default. You can ask for it firmer and it&apos;s still a Swedish
                  massage, just pressed a bit harder.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl bg-amber-50 ring-1 ring-amber-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/deep-tissue/hero-640.webp" alt="Therapist using forearm pressure during a deep tissue back massage" width={640} height={427} loading="lazy" decoding="async" className="h-56 w-full object-cover md:h-64" />
              <div className="p-6 md:p-8">
                <h3 className="font-title text-2xl font-bold text-amber-900">Deep tissue massage: the fixing one</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodycolor">
                  Deep tissue starts the same way, with a few minutes of lighter strokes, because cold muscles
                  don&apos;t like deep pressure. Then things slow right down. Your therapist uses thumbs, knuckles and
                  forearms to work across the muscle fibres, hold pressure on trigger points and strip along tight
                  bands. The aim is to reach the deeper layers of muscle and the connective tissue (fascia) around
                  them.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bodycolor">
                  It usually covers less of the body in more detail. One full hour on your back and shoulders is
                  completely normal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Comparison table */}
      <section id="compare" aria-labelledby="svd-compare-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="svd-compare-title"
            eyebrow="Side by Side"
            title="Swedish Massage Compared"
            highlight="to Deep Tissue"
            text="Everything that actually changes between the two, in one table."
          />
          {/* Mobile: one card per row with both columns side by side */}
          <div className="space-y-3 md:hidden">
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-dark px-4 py-3 text-center font-title text-base font-bold text-white">
              <span>Swedish</span>
              <span className="text-secondary">Deep Tissue</span>
            </div>
            {compareRows.map((r) => (
              <div key={r.label} className="rounded-2xl bg-white p-4 ring-1 ring-amber-100">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">{r.label}</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-sm leading-snug">
                  <p className="text-bodycolor">{r.swedish}</p>
                  <p className="border-l border-amber-100 pl-3 text-amber-900">{r.deep}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block overflow-hidden rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Swedish massage vs deep tissue massage comparison</caption>
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col" className="p-4 sm:p-5 w-[28%] font-title text-base">&nbsp;</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Swedish</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg text-secondary">Deep Tissue</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.label} className="border-b border-amber-50 last:border-0 even:bg-amber-50/40">
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-amber-900">{r.label}</th>
                    <td className="p-4 sm:p-5 text-bodycolor">{r.swedish}</td>
                    <td className="p-4 sm:p-5 text-bodycolor">{r.deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pressure meter */}
          <div className="mt-10 rounded-3xl bg-white p-6 md:p-8 ring-1 ring-amber-100">
            <p className="font-title text-xl font-bold text-amber-900">How firm does each one feel?</p>
            <p className="mt-1 text-sm text-bodycolor">A rough guide. Every therapist adjusts to you, so treat these as starting points.</p>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {pressureScale.map((p) => (
                <li key={p.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-amber-900">{p.name}</span>
                    <span className="text-xs text-bodycolor">{p.note}</span>
                  </div>
                  <div className="mt-2 flex gap-1.5" role="img" aria-label={`${p.name}: pressure ${p.level} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={`h-2.5 flex-1 rounded-full ${n <= p.level ? "bg-primary" : "bg-amber-100"}`} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Picker */}
      <section id="which" aria-labelledby="svd-which-title" className="bg-white py-16 md:py-20 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="svd-which-title"
            eyebrow="Deep Tissue Massage or Swedish?"
            title="Which One Should"
            highlight="You Book?"
            text="Tap whichever sounds most like you. This is roughly what our therapists would suggest if you asked them at the front desk."
          />
          <MassagePicker moods={moods} defaultId="stress" />
        </div>
      </section>

      {/* 6. Back pain */}
      <section id="back-pain" aria-labelledby="svd-back-title" className="bg-cream py-16 md:py-20 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="svd-back-title"
            eyebrow="Most Asked"
            title="Swedish vs Deep Tissue Massage"
            highlight="for Back Pain"
            text="People expect deep tissue to win here every time. It depends on what kind of back pain you have."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {backPain.map((b) => (
              <div
                key={b.title}
                className={`rounded-3xl p-6 md:p-7 ring-1 ${b.warn ? "bg-dark text-white ring-dark" : "bg-white ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]"}`}
              >
                <h3 className={`font-title text-xl font-bold ${b.warn ? "text-white" : "text-amber-900"}`}>{b.title}</h3>
                <p className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${b.warn ? "bg-white/10 text-secondary" : "bg-amber-100 text-amber-800"}`}>
                  {b.warn && <AlertTriangle className="size-3.5" />} {b.pick}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${b.warn ? "text-white/80" : "text-bodycolor"}`}>{b.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-white p-6 md:p-8 ring-1 ring-amber-100">
            <p className="text-sm leading-relaxed text-bodycolor">
              <strong className="text-amber-900">What the research says:</strong> massage generally gives short-term
              relief for chronic low back pain, but harder isn&apos;t automatically better. A 2011 US trial (Cherkin et
              al., <em>Annals of Internal Medicine</em>) compared a relaxation-style massage with a deeper, structural
              massage for people with chronic low back pain. Both helped about equally. So if deep pressure makes you
              tense up, a Swedish massage isn&apos;t a weaker choice. Massage is not a replacement for medical treatment,
              and our therapists are trained in massage, not physiotherapy.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Four-way comparison */}
      <section id="four-way" aria-labelledby="svd-four-title" className="bg-white py-16 md:py-20 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <HomeHeading
            id="svd-four-title"
            eyebrow="Beyond the Two"
            title="Swedish vs Deep Tissue vs"
            highlight="Hot Stone vs Sports Massage"
            text="If you're comparing more than two, here's where each one sits."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fourWays.map(({ icon: Icon, name, pressure, best, text, href, cta }) => (
              <div key={name} className="flex flex-col rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-title text-2xl font-bold text-amber-900">{name}</h3>
                <dl className="mt-3 space-y-1 text-xs">
                  <div className="flex gap-1.5"><dt className="font-bold text-amber-800">Pressure:</dt><dd className="text-bodycolor">{pressure}</dd></div>
                  <div className="flex gap-1.5"><dt className="font-bold text-amber-800">Best for:</dt><dd className="text-bodycolor">{best}</dd></div>
                </dl>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bodycolor">{text}</p>
                <a href={href} className="mt-5 text-sm font-semibold text-primary hover:underline">{cta} →</a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            Hot stone isn&apos;t on every outlet&apos;s menu every day, so{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>ask on WhatsApp</a> before you go.
          </p>
        </div>
      </section>

      {/* 8. What people say online */}
      <section id="reddit" aria-labelledby="svd-reddit-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <HomeHeading
            id="svd-reddit-title"
            eyebrow="Swedish vs Deep Tissue on Reddit"
            title="What People Keep Saying"
            highlight="Online"
            text="Read enough massage threads on Reddit and forums and the same few points come up again and again. Here they are, summed up in our own words."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {forumThemes.map((t) => (
              <div key={t.title} className="rounded-3xl bg-white p-6 md:p-7 ring-1 ring-amber-100 shadow-[0_6px_20px_rgba(43,24,16,0.05)]">
                <MessageCircle className="size-6 text-amber-700" aria-hidden="true" />
                <h3 className="mt-3 font-title text-lg font-bold text-amber-900">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodycolor">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bodycolor">
            We agree with all four. At our outlets, your therapist will ask about pressure before they start and again
            partway through.
          </p>
        </div>
      </section>

      {/* 9. Prices + areas */}
      <section aria-labelledby="svd-price-title" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <HomeHeading
            id="svd-price-title"
            eyebrow="Book in Delhi"
            title="Same Price,"
            highlight="Your Choice of Style"
            text={
              <>
                You don&apos;t pay extra for deep tissue. Choose either one, or ask for both in the same session. Every
                rate is on our <a href="/spa-price-in-delhi" className={linkClass}>spa price in Delhi</a> page.
              </>
            }
          />
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_15px_40px_rgba(43,24,16,0.1)] ring-1 ring-amber-100">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Swedish and deep tissue massage prices in Delhi</caption>
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Where</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Time</th>
                  <th scope="col" className="p-4 sm:p-5 font-title text-base sm:text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r) => (
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

          <p className="mt-10 text-center font-title text-xl font-bold text-amber-900">Find an outlet near you</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
            {areaLinks.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200 transition-colors hover:bg-primary hover:text-white"
                >
                  <MapPin className="size-3.5" /> {a.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-bodycolor">
            <Home className="size-4 shrink-0 text-amber-700" /> Prefer to stay in? A therapist can come to your home or hotel anywhere in Delhi.
          </p>
        </div>
      </section>

      {/* 10. Safety */}
      <section aria-labelledby="svd-safety-title" className="bg-dark py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <HomeHeading light id="svd-safety-title" align="left" eyebrow="Be Safe" title="When to Check With" highlight="a Doctor First" className="!mb-6" />
            <p className="leading-relaxed text-white/80">
              This matters most for deep tissue, but it applies to any massage. If something on this list applies to
              you, talk to your doctor before booking. Then tell us what they said, and your therapist will keep the
              pressure where it should be.
            </p>
          </div>
          <ul className="space-y-3">
            {cautions.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-secondary" />
                <span className="text-sm text-white/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" aria-labelledby="svd-faq-title" className="bg-[#fffaf5] py-16 md:py-20 px-4 md:px-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <HomeHeading id="svd-faq-title" eyebrow="Questions? We're Here To Help" title="Swedish vs Deep Tissue" highlight="FAQs" />
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
          <p className="mt-8 text-center text-sm text-bodycolor">
            Keep reading: <a href="/full-body-massage-in-delhi" className={linkClass}>full body massage in Delhi</a>,{" "}
            <a href="/thai-massage-in-delhi" className={linkClass}>Thai massage</a> or{" "}
            <a href="/blog/what-is-the-difference-between-spa-and-massage" className={linkClass}>spa vs massage</a>.
          </p>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section aria-labelledby="svd-cta-title" className="relative overflow-hidden bg-dark py-16 md:py-20 px-4 md:px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <HomeHeading
            light
            id="svd-cta-title"
            eyebrow="Still Not Sure?"
            title="Tell Us How You Feel,"
            highlight="We'll Pick the Style"
            text="Send something like 'tight shoulders, desk job, Lajpat Nagar, 7pm'. We'll suggest Swedish, deep tissue or a mix, and confirm the price on the same chat."
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
