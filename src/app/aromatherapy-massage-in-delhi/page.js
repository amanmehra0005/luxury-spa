import ServicePage, { ServiceSchemas } from "../components/ServicePage";
import services from "../components/services";

const svc = services["aromatherapy"];
const PAGE_URL = "https://www.luxuryrussianspa.com/aromatherapy-massage-in-delhi";
const IMAGE_URL = `https://www.luxuryrussianspa.com/images/gallery/${svc.hero}-lg.webp`;

export const metadata = {
  title: "Aromatherapy Massage in Delhi - Essential Oils | ₹1999",
  description:
    "Aromatherapy massage in Delhi with lavender, lemongrass or eucalyptus oils you choose. Gentle, calming, 24+ outlets or at home. ₹1,999 for 60 min.",
  keywords: [
    "aromatherapy massage in delhi",
    "aromatherapy massage near me",
    "essential oil massage delhi",
    "aromatherapy massage benefits",
    "aromatherapy massage price in delhi",
    "best aromatherapy spa in delhi",
    "aromatherapy for stress relief",
    "full body aromatherapy massage delhi",
    "lavender oil massage delhi"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Aromatherapy Massage in Delhi - Essential Oils | ₹1999",
    description: "Aromatherapy massage in Delhi with lavender, lemongrass or eucalyptus oils you choose. Gentle, calming, 24+ outlets or at home. ₹1,999 for 60 min.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, alt: svc.heroAlt }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aromatherapy Massage in Delhi - Essential Oils | ₹1999",
    description: "Aromatherapy massage in Delhi with lavender, lemongrass or eucalyptus oils you choose. Gentle, calming, 24+ outlets or at home. ₹1,999 for 60 min.",
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
