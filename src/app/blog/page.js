import Bolgpage from "./Bolgpage";
// src/app/page.js
// <-- NO "use client" here -->

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luxuryrussianspa.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.luxuryrussianspa.com/blog" },
  ],
};

export const metadata = {
  title: "Russian Spa & Massage Blog Delhi | Guides & Rates (2026)",
  description:
    "Explore expert Delhi spa guides: B2B massage process, sandwich massage benefits, Thai stretching, price lists from ₹1499, and tips to choose the best Russian spa in Delhi NCR.",
  keywords: [
    "russian spa blog delhi",
    "massage blog delhi",
    "b2b massage guide delhi",
    "sandwich massage guide",
    "spa prices delhi",
    "luxury spa delhi guides",
  ],
  openGraph: {
    title: "Russian Spa & Massage Blog Delhi: Guides, Prices & Offers (2026)",
    description:
      "Read the Luxury Russian Spa blog for expert guides on massage types, prices from ₹1499, wellness tips, and spa treatments in Delhi NCR.",
    images: ["https://www.luxuryrussianspa.com/images/banner1.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/banner1.jpg"],
  },
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Bolgpage />
    </>
  );
}
