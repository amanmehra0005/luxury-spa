import Conaughtpage, { CP_ADDRESS, faqs } from "./Conaughtpage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-connaught-place";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/TheParkConnaughtPlace.webp";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Spa in Connaught Place).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Spa in Connaught Place", item: PAGE_URL },
  ],
};

// The Connaught Place outlet as its own local business, for local search.
const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Connaught Place",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-9990193385",
  priceRange: "₹1499 - ₹12999",
  address: { "@type": "PostalAddress", ...CP_ADDRESS, addressCountry: "IN" },
  areaServed: ["Connaught Place", "Janpath", "Barakhamba Road", "Rajiv Chowk", "Gole Market", "Central Delhi", "New Delhi"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Russian Spa in Connaught Place At Just ₹1499 | Open 24/7 Near Rajiv Chowk",
  description:
    "Best Russian Spa in Connaught Place inside The Park hotel & near Rajiv Chowk. Certified Russian therapists, attached hot rain shower, in-room hotel visits & ₹1499 offer. Open 24/7.",
  keywords: [
    "spa in connaught place",
    "russian spa in connaught place",
    "best spa in connaught place",
    "metropolitan hotel connaught place",
    "massage parlours in connaught place",
    "massage in connaught place",
    "body massage in cp",
    "spa in cp delhi",
    "full body massage in connaught place",
    "spa near rajiv chowk",
    "5 star hotel spa connaught place",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Russian Spa in Connaught Place At Just ₹1499 | Open 24/7 Near Rajiv Chowk",
    description:
      "Best Russian Spa in Connaught Place inside The Park hotel & near Rajiv Chowk. Certified Russian therapists, attached hot rain shower, in-room hotel visits & ₹1499 offer. Open 24/7.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 800, height: 600, alt: "Spa in Connaught Place at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa in Connaught Place At Just ₹1499 | Open 24/7 Near Rajiv Chowk",
    description:
      "Best Russian Spa in Connaught Place inside The Park hotel & near Rajiv Chowk. Certified Russian therapists, attached hot rain shower, in-room hotel visits & ₹1499 offer. Open 24/7.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-connaught-place"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Conaughtpage />
    </>
  );
}
