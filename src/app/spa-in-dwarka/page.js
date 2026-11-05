import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["dwarka"];

export const metadata = {
  title: "Russian Spa in Dwarka (₹1499 Offer) Near IGI Airport & Metro",
  description:
    "Best Russian Spa in Dwarka near Metro & IGI Airport. Certified Russian therapists, attached private shower & ₹1499 welcome rate. Open 24/7. Book on WhatsApp!",
  keywords: [
    "spa in dwarka",
    "best spa in dwarka",
    "body massage dwarka",
    "body spa dwarka",
    "dwarka sec 7 spa",
    "dwarka sector 7 spa",
    "luxury spa in dwarka",
    "russian spa in dwarka",
    "spa dwarka sec 7",
    "spa in dwarka mor",
    "spa in dwarka sec 12",
    "best massage spa in dwarka",
    "massage in dwarka",
    "full body massage in dwarka",
    "couple massage in dwarka",
    "home spa in dwarka",
    "hotel spa in dwarka",
    "spa near igi airport",
    "spa near dwarka sector 21",
    "night spa in dwarka",
  ],
  openGraph: {
    title: "Russian Spa in Dwarka (₹1499 Offer) Near IGI Airport & Metro",
    description:
      "Best Russian Spa in Dwarka near Metro & IGI Airport. Certified Russian therapists, attached private shower & ₹1499 welcome rate. Open 24/7. Book on WhatsApp!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-dwarka",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-dwarka",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758983028_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg"],
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
