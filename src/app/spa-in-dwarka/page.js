import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["dwarka"];

export const metadata = {
  title: "Russian Spa in Dwarka - Best Spa & Body Massage | ₹1999",
  description:
    "Russian spa in Dwarka with Russian, Uzbek, Thai & Indian therapists. Body massage & body spa near IGI Airport, private rooms, home & hotel visits. From ₹1999.",
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
    title: "Best Spa in Dwarka - Luxury Body Massage Near IGI Airport | Luxury Russian Spa",
    description:
      "Best spa in Dwarka for luxury body massage & body spa near IGI Airport. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
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
