import ServicePage, { ServiceSchemas } from "../components/ServicePage";
import services from "../components/services";

const svc = services["b2b"];
const PAGE_URL = "https://www.luxuryrussianspa.com/b2b-massage-in-delhi";
const IMAGE_URL = `https://www.luxuryrussianspa.com/images/gallery/${svc.hero}-lg.webp`;

export const metadata = {
  title: "B2B Massage in Delhi - Private Premium Session | ₹1999",
  description:
    "B2B massage in Delhi in a fully private room with a therapist you choose. 24+ Delhi outlets, or at your home or hotel. Price confirmed before you book.",
  keywords: [
    "b2b massage in delhi",
    "best b2b massage in delhi",
    "full body massage by a female therapist in delhi",
    "full b2b massage in delhi",
    "b2b massage at home in delhi",
    "b2b massage in delhi connaught place",
    "b2b massage in delhi ncr",
    "b2b massage near airport delhi",
    "b2b massage in dwarka delhi",
    "b2b massage spa in delhi",
    "b2b massage in saket delhi",
    "b2b massage in south delhi",
    "b2b massage in new delhi",
    "b2b massage price in delhi"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "B2B Massage in Delhi - Private Premium Session | ₹1999",
    description: "B2B massage in Delhi in a fully private room with a therapist you choose. 24+ Delhi outlets, or at your home or hotel. Price confirmed before you book.",
    url: PAGE_URL,
    siteName: "Luxury Russian Spa",
    images: [{ url: IMAGE_URL, alt: svc.heroAlt }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Massage in Delhi - Private Premium Session | ₹1999",
    description: "B2B massage in Delhi in a fully private room with a therapist you choose. 24+ Delhi outlets, or at your home or hotel. Price confirmed before you book.",
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
