import Pricpage, { PRICES, faqs } from "./Pricpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-price-in-delhi";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/price/hero-1280.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Services / Spa Price in Delhi).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.luxuryrussianspa.com/massage-in-delhi" },
    { "@type": "ListItem", position: 3, name: "Spa Price in Delhi", item: PAGE_URL },
  ],
};

// The price list as an offer catalog, matching the actual realistic rates.
const massageOffers = [
  { name: "Swedish Relaxing Massage", outletPrice: "1499", hotelPrice: "12999" },
  { name: "Traditional Thai Massage", outletPrice: "1999", hotelPrice: "12999" },
  { name: "Aromatherapy Massage", outletPrice: "1999", hotelPrice: "12999" },
  { name: "Russian Full Body Massage", outletPrice: "2499", hotelPrice: "12999" },
  { name: "Deep Tissue Therapy", outletPrice: "2499", hotelPrice: "12999" },
  { name: "B2B Body Spa Massage", outletPrice: "2999", hotelPrice: "12999" },
  { name: "Four-Hands Sandwich Massage", outletPrice: "3999", hotelPrice: "14999" },
  { name: "Luxury Couple Massage", outletPrice: "4999", hotelPrice: "16999" },
];

const priceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#prices`,
  name: "Spa and Massage Prices in Delhi",
  serviceType: "Massage therapy",
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: "Luxury Russian Spa",
    telephone: "+91-9990193385",
    url: "https://www.luxuryrussianspa.com/",
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Delhi Spa Price List",
    itemListElement: massageOffers.flatMap((m) => [
      {
        "@type": "Offer",
        name: `${m.name} at spa outlet (60 min)`,
        price: m.outletPrice,
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: m.name },
      },
      {
        "@type": "Offer",
        name: `${m.name} in 5-star hotel suite / in-room (120 min)`,
        price: m.hotelPrice,
        priceCurrency: "INR",
        itemOffered: { "@type": "Service", name: m.name },
      },
    ]),
  },
};

export const metadata = {
  title: "Spa Price in Delhi (2026): Russian Spa & Massage Rates From ₹1499",
  description:
    "Check complete 2026 spa price in Delhi. Russian spa price, full body massage, B2B & Thai massage rates from ₹1499 at outlet & ₹12,999 in 5-star hotel suite. Attached hot shower, zero advance payment. Book on WhatsApp!",
  keywords: [
    "spa price in delhi",
    "russian spa price in delhi",
    "russian price in delhi",
    "russian girl price",
    "russian massage price in delhi",
    "russian girl massage price",
    "delhi spa price",
    "spa delhi price list",
    "delhi spa center price list",
    "delhi spa rates",
    "spa rate in delhi",
    "spa charges in delhi",
    "spa cost in delhi",
    "best spa in delhi with price",
    "full body massage in delhi price",
    "full body massage price in delhi",
    "full body massage cost in delhi",
    "full body massage delhi price",
    "full body spa price in delhi",
    "body massage in delhi price",
    "body massage price delhi",
    "body massage rate in delhi",
    "body massage charges in delhi",
    "b2b massage price in delhi",
    "thai massage in delhi price",
    "couple spa in delhi price",
    "5 star hotel spa price in delhi",
    "mahipalpur spa price",
    "lajpat nagar spa prices",
    "connaught place spa price",
    "aerocity spa price",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Spa Price in Delhi (2026): Russian Spa & Massage Rates From ₹1499",
    description:
      "Check complete 2026 spa price in Delhi. Russian spa price, full body massage, B2B & Thai massage rates from ₹1499 at outlet & ₹12,999 in 5-star hotel suite. Attached hot shower, zero advance payment. Book on WhatsApp!",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1280, height: 845, alt: "Spa price in Delhi at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Price in Delhi (2026): Russian Spa & Massage Rates From ₹1499",
    description:
      "Check complete 2026 spa price in Delhi. Russian spa price, full body massage, B2B & Thai massage rates from ₹1499 at outlet & ₹12,999 in 5-star hotel suite. Attached hot shower, zero advance payment. Book on WhatsApp!",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="price-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <script
        id="faq-schema-spa-price-in-delhi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Pricpage />
    </>
  );
}
