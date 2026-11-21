import Aeropage, { AEROCITY_ADDRESS, faqs } from "./Aeropage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-aerocity";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/spa-treatments.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Spa in Aerocity).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Aerocity", item: PAGE_URL },
  ],
};

// The Aerocity outlet as its own local business, for local search.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Aerocity",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-8799716197",
  priceRange: "₹1499 - ₹12999",
  address: { "@type": "PostalAddress", ...AEROCITY_ADDRESS, addressCountry: "IN" },
  areaServed: ["Aerocity", "Mahipalpur", "IGI Airport", "Dwarka", "Vasant Kunj", "New Delhi"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Russian Spa in Aerocity At Just ₹1499 | Open 24/7 Near Airport",
  description:
    "Best Russian Spa in Aerocity near IGI Airport & Lemon Tree. Certified Russian & European therapists, attached hot rain shower, in-room hotel visits & ₹1499 offer. Open 24/7.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Russian Spa in Aerocity At Just ₹1499 | Open 24/7 Near Airport",
    description:
      "Best Russian Spa in Aerocity near IGI Airport & Lemon Tree. Certified Russian & European therapists, attached hot rain shower, in-room hotel visits & ₹1499 offer. Open 24/7.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1920, height: 1280, alt: "Russian Spa in Aerocity at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa in Aerocity At Just ₹1499 | Open 24/7 Near Airport",
    description:
      "Best Russian Spa in Aerocity near IGI Airport & Lemon Tree. Certified Russian & European therapists, attached hot rain shower, in-room hotel visits & ₹1499 offer. Open 24/7.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-aerocity"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Aeropage />
    </>
  );
}
