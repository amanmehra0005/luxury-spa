import SpaInGreaterkailash, { faqs } from "./SpaInGreaterkailash";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-greater-kailash";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/gallery/g05-lg.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Spa in Greater Kailash).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Greater Kailash", item: PAGE_URL },
  ],
};

// The GK outlet as its own local business. No street address: the exact location is shared on booking.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Greater Kailash",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-9990193385",
  priceRange: "₹1499 - ₹19999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Kailash, New Delhi",
    addressRegion: "DL",
    postalCode: "110048",
    addressCountry: "IN",
  },
  areaServed: ["Greater Kailash 1", "Greater Kailash 2", "Kailash Colony", "East of Kailash", "Nehru Place", "CR Park", "Alaknanda", "South Delhi"],
  paymentAccepted: "Cash, UPI, Credit Card",
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Russian Spa in Greater Kailash | Best Body Massage ₹1999",
  description:
    "Luxury Russian Spa in Greater Kailash near M-Block Market & Kailash Colony Metro. Certified foreign therapists, private VIP suites & ₹1499 welcome rate. Book on WhatsApp!",
  keywords: [
    "spa in greater kailash",
    "spa gk",
    "spa gk 1",
    "spa gk 2",
    "spa in gk 2",
    "spa in gk1",
    "spa in greater kailash 1",
    "spa in greater kailash 2",
    "best spa in gk",
    "best spa in gk 2",
    "best spa in greater kailash",
    "body massage in greater kailash",
    "body spa in greater kailash",
    "massage in greater kailash",
    "full body massage in greater kailash",
    "massage centre in greater kailash",
    "body massage near me greater kailash",
    "spa near m block market gk",
    "home spa in greater kailash",
    "hotel spa in greater kailash",
    "couple massage in greater kailash",
    "russian spa in greater kailash",
    "spa with female therapists in greater kailash",
    "spa near kailash colony metro",
  ],
  openGraph: {
    title: "Russian Spa in Greater Kailash (₹1499 Offer) | Spa in GK 1 & GK 2",
    description:
      "Private rooms near M Block Market, Russian & European therapists and ₹1,499 first visit offer. Attached hot rain showers. Book on WhatsApp!",
    images: [IMAGE_URL],
    type: "website",
    url: PAGE_URL,
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-greater-kailash",
  },
  twitter: {
    card: "summary_large_image",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-greater-kailash"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-greater-kailash"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-greater-kailash"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SpaInGreaterkailash />
    </>
  );
}
