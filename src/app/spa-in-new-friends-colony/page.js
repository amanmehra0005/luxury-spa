import NewFriendsColonyPage, { NFC_ADDRESS, faqs } from "./NewFriendsColonyPage";

const PAGE_URL = "https://www.luxuryrussianspa.com/spa-in-new-friends-colony";
const IMAGE_URL = "https://www.luxuryrussianspa.com/images/nfc/hero-therapist.jpg";

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
    { "@type": "ListItem", position: 3, name: "Spa in New Friends Colony", item: PAGE_URL },
  ],
};

const spaSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${PAGE_URL}#spa`,
  name: "Luxury Russian Spa - New Friends Colony",
  url: PAGE_URL,
  image: IMAGE_URL,
  telephone: "+91-9990193385",
  priceRange: "₹1499 - ₹12999",
  address: { "@type": "PostalAddress", ...NFC_ADDRESS, addressCountry: "IN" },
  areaServed: [
    "New Friends Colony",
    "Friends Colony East",
    "Friends Colony West",
    "Maharani Bagh",
    "Sukhdev Vihar",
    "Mathura Road",
    "Ashram",
    "Nizamuddin",
    "Okhla",
    "Jasola",
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
  title: "Russian Spa in New Friends Colony (NFC) | ₹1499 | Open 24/7",
  description:
    "Experience authentic Russian spa & luxury body massage in New Friends Colony (NFC). Certified European therapists, private suites & zero-advance booking near The Suryaa.",
  keywords: [
    "russian in nfc",
    "russian girl in nfc",
    "russian spa in nfc",
    "body spa in nfc",
    "massage spa in nfc",
    "b2b spa in nfc",
    "thai massage in nfc",
    "body massage in nfc",
    "b2b massage in nfc",
    "spa in new friends colony",
    "russian spa in new friends colony",
    "russian spa center in new friends colony",
    "best spa in new friends colony",
    "body massage in new friends colony",
    "body spa in new friends colony",
    "thai massage in new friends colony",
    "b2b massage in new friends colony",
    "couple spa in new friends colony",
    "deep tissue massage in new friends colony",
    "massage in nfc",
    "spa in nfc delhi",
    "spa near the suryaa new delhi",
    "the suryaa hotel spa",
    "russian girl price in new friends colony",
    "russian girl price in nfc",
    "massage parlours in nfc",
    "massage parlours in new friends colony",
    "spa in friends colony east",
    "spa in friends colony west",
    "spa in maharani bagh",
    "spa in sukhdev vihar",
    "spa in ashram",
    "5 star hotel spa new friends colony",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Russian Spa in New Friends Colony (NFC) | ₹1499 | Open 24/7",
    description:
      "Experience authentic Russian spa & luxury body massage in New Friends Colony (NFC). Certified European therapists, private suites & zero-advance booking near The Suryaa.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 800, height: 600, alt: "Russian Spa in New Friends Colony NFC" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa in New Friends Colony (NFC) | ₹1499 | Open 24/7",
    description:
      "Experience authentic Russian spa & luxury body massage in New Friends Colony (NFC). Certified European therapists, private suites & zero-advance booking near The Suryaa.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-spa-in-new-friends-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="dayspa-schema-spa-in-new-friends-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
      />
      <script
        id="faq-schema-spa-in-new-friends-colony"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NewFriendsColonyPage />
    </>
  );
}
