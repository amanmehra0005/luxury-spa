import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["punjabi-bagh"];

export const metadata = {
  title: "Russian Spa in Punjabi Bagh | Best Club Road Spa From ₹1999",
  description:
    "Best Russian Spa on Club Road, Punjabi Bagh. Certified European & Russian therapists, attached rain shower & ₹1499 introductory offer. Open 24/7. Book on WhatsApp!",
  keywords: [
    "spa in punjabi bagh",
    "a one spa punjabi bagh",
    "b one spa punjabi bagh",
    "best spa in punjabi bagh",
    "spa in punjabi bagh club road",
    "body massage in punjabi bagh",
    "body massage spa in punjabi bagh",
    "body spa in punjabi bagh",
    "full body massage punjabi bagh",
    "luxury spa in punjabi bagh",
    "massage center in punjabi bagh",
    "massage spa in punjabi bagh",
    "punjabi bagh spa centre",
    "spa near punjabi bagh club",
    "spa near punjabi bagh metro station",
    "couple massage in punjabi bagh",
    "deep tissue massage in punjabi bagh",
    "russian spa in punjabi bagh",
  ],
  openGraph: {
    title: "Russian Spa in Punjabi Bagh (₹1499 Offer) | Club Road Spa",
    description:
      "Best Russian Spa on Club Road, Punjabi Bagh. Certified European & Russian therapists, attached rain shower & ₹1499 introductory offer. Open 24/7. Book on WhatsApp!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-punjabi-bagh",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-punjabi-bagh",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
  },
};

export default function page() {
  return (
    <>
      <LocationSchemas loc={loc} />
      <LocationPage loc={loc} />
    </>
  );
}
