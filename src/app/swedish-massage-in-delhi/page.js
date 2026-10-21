import ServicePage, { ServiceSchemas } from "../components/ServicePage";
import services from "../components/services";

const svc = services["swedish"];
const PAGE_URL = "https://www.luxuryrussianspa.com/swedish-massage-in-delhi";
const IMAGE_URL = `https://www.luxuryrussianspa.com/images/gallery/${svc.hero}-lg.webp`;

export const metadata = {
  title: "Swedish Massage in Delhi - Relaxing Full Body | ₹1999",
  description:
    "Swedish massage in Delhi with warm oil and long, gentle strokes. Ideal for stress, sleep and a first massage. 24+ outlets or at home, ₹1,999 for 60 min.",
  keywords: [
    "swedish massage in delhi",
    "swedish massage near me",
    "full body swedish massage delhi",
    "swedish massage benefits",
    "swedish massage price in delhi",
    "best swedish massage spa in delhi",
    "relaxation massage in delhi",
    "swedish massage for stress relief",
    "swedish massage vs deep tissue massage"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Swedish Massage in Delhi - Relaxing Full Body | ₹1999",
    description: "Swedish massage in Delhi with warm oil and long, gentle strokes. Ideal for stress, sleep and a first massage. 24+ outlets or at home, ₹1,999 for 60 min.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, alt: svc.heroAlt }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swedish Massage in Delhi - Relaxing Full Body | ₹1999",
    description: "Swedish massage in Delhi with warm oil and long, gentle strokes. Ideal for stress, sleep and a first massage. 24+ outlets or at home, ₹1,999 for 60 min.",
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
