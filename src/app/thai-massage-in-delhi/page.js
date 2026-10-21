import ServicePage, { ServiceSchemas } from "../components/ServicePage";
import services from "../components/services";

const svc = services["thai"];
const PAGE_URL = "https://www.luxuryrussianspa.com/thai-massage-in-delhi";
const IMAGE_URL = `https://www.luxuryrussianspa.com/images/gallery/${svc.hero}-lg.webp`;

export const metadata = {
  title: "Thai Massage in Delhi - Thai Therapists | From ₹1999",
  description:
    "Traditional Thai massage in Delhi by Thai therapists: stretching and pressure points on a mat, no oil. 24+ outlets or at home. ₹1,999 for 60 min.",
  keywords: [
    "thai massage in delhi",
    "thai massage in delhi near me",
    "best thai massage in delhi",
    "thai massage spa delhi",
    "full body thai massage in delhi",
    "thai massage price in delhi"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Thai Massage in Delhi - Thai Therapists | From ₹1999",
    description: "Traditional Thai massage in Delhi by Thai therapists: stretching and pressure points on a mat, no oil. 24+ outlets or at home. ₹1,999 for 60 min.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, alt: svc.heroAlt }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Massage in Delhi - Thai Therapists | From ₹1999",
    description: "Traditional Thai massage in Delhi by Thai therapists: stretching and pressure points on a mat, no oil. 24+ outlets or at home. ₹1,999 for 60 min.",
    images: [IMAGE_URL],
  },
};

export default function page() {
  return (
    <>
      <ServiceSchemas svc={svc} />
      <ServicePage svc={svc} />
    </>
  );
}
