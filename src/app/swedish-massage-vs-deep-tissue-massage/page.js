import Swedishvsdeeptissue, { faqs } from "./Swedishvsdeeptissue";

const SITE = "https://www.luxuryrussianspa.com";
const PAGE_URL = `${SITE}/swedish-massage-vs-deep-tissue-massage`;
const IMAGE_URL = `${SITE}/images/gallery/g15-lg.webp`;
const TITLE = "Swedish vs Deep Tissue Massage: Difference & Which to Choose";
const DESCRIPTION =
  "Swedish massage vs deep tissue: how the pressure, feel and soreness differ, which is better for back pain, and how both compare with hot stone and sports massage.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// Mirrors the visible breadcrumb on the page (Home / Blog / Swedish vs Deep Tissue Massage).
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
    { "@type": "ListItem", position: 3, name: "Swedish vs Deep Tissue Massage", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Swedish vs Deep Tissue Massage: The Real Difference, How Each Feels, and Which to Book",
  description: DESCRIPTION,
  image: IMAGE_URL,
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  datePublished: "2026-07-31",
  dateModified: "2026-10-27",
  inLanguage: "en-IN",
  about: [
    { "@type": "Thing", name: "Swedish massage" },
    { "@type": "Thing", name: "Deep tissue massage" },
  ],
  author: { "@type": "Organization", name: "Luxury Russian Spa", url: `${SITE}/` },
  publisher: {
    "@type": "Organization",
    name: "Luxury Russian Spa",
    url: `${SITE}/`,
    logo: { "@type": "ImageObject", url: `${SITE}/images/logo.png` },
  },
};

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "swedish massage vs deep tissue massage",
    "swedish massage vs deep tissue",
    "swedish vs deep tissue",
    "deep tissue massage or swedish",
    "swedish massage or deep tissue massage",
    "difference between deep tissue massage and swedish",
    "difference swedish and deep tissue massage",
    "what is a deep tissue massage vs swedish",
    "swedish massage compared to deep tissue",
    "swedish massage and deep tissue massage",
    "deep massage vs swedish",
    "swedish v deep tissue",
    "swedish vs deep tissue massage for back pain",
    "swedish massage vs deep tissue vs hot stone",
    "swedish vs deep tissue vs sports massage",
    "swedish vs deep tissue massage reddit",
    "is deep tissue massage painful",
    "soreness after deep tissue massage",
    "relaxation massage vs therapeutic massage",
    "swedish massage in delhi",
    "deep tissue massage in delhi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description:
      "Not sure whether to book Swedish or deep tissue? A plain-English comparison from our Delhi therapists, with notes on back pain, soreness, hot stone and sports massage.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, width: 1600, height: 1244, alt: "Swedish vs deep tissue massage" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Not sure whether to book Swedish or deep tissue? A plain-English comparison from our Delhi therapists.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-swedish-massage-vs-deep-tissue-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="article-schema-swedish-massage-vs-deep-tissue-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="faq-schema-swedish-massage-vs-deep-tissue-massage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Swedishvsdeeptissue />
    </>
  );
}
