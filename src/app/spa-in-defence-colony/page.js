import DefenceColonyPage, { DEFENCE_ADDRESS, faqs } from "./DefenceColonyPage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-defence-colony";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/defence/hero-therapist.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Outlets", item: "https://www.luxuryrussianspa.com/outlets" },
    { "@type": "ListItem", position: 3, name: "Spa in Defence Colony", item: PAGE_URL },
  ],
};

const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - Defence Colony",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-9990193385",
  priceRange: "₹1499 - ₹12999",
  address: { "@type": "PostalAddress", ...DEFENCE_ADDRESS, addressCountry: "IN" },
  areaServed: [
    "Defence Colony",
    "South Extension",
    "Moolchand",
    "Andrews Ganj",
    "Lajpat Nagar",
    "Lodhi Road",
    "Gulmohar Park",
    "South Delhi",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: { "@type": "Organization", name: "Luxury Russian Spa", url: "https://www.luxuryrussianspa.com/" },
};

export const metadata = {
  title: "Russian Spa in Defence Colony (Def Col) | ₹1499 | Open 24/7",
  description:
    "Experience authentic Russian spa & luxury body massage in Defence Colony (Def Col). Certified Russian therapists, private VIP suites & zero-advance booking near Moolchand.",
  keywords: [
    "russian in defence colony",
    "russian girl in defence colony",
    "russian in def col",
    "russian girl in def col",
    "russian spa in defence colony",
    "body spa in defence colony",
    "massage spa in defence colony",
    "b2b spa in defence colony",
    "b2b massage in defence colony",
    "thai massage in defence colony",
    "body massage in defence colony",
    "russian girl price in defence colony",
    "massage in def col",
    "spa in def col",
    "spa in defence colony",
    "best spa in defence colony",
    "couple spa in defence colony",
    "deep tissue massage in defence colony",
    "massage in defence colony market",
    "spa near moolchand metro",
    "5 star hotel spa defence colony",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Russian Spa in Defence Colony (Def Col) | ₹1499 | Open 24/7",
    description:
      "Experience authentic Russian spa & luxury body massage in Defence Colony (Def Col). Certified Russian therapists, private VIP suites & zero-advance booking near Moolchand.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 800, height: 600, alt: "Russian Spa in Defence Colony at Luxury Russian Spa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa in Defence Colony (Def Col) | ₹1499 | Open 24/7",
    description:
      "Experience authentic Russian spa & luxury body massage in Defence Colony (Def Col). Certified Russian therapists, private VIP suites & zero-advance booking near Moolchand.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-defence-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-defence-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-defence-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DefenceColonyPage />
    </>
  );
}
