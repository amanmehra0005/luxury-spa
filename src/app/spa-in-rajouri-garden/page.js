import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["rajouri-garden"];

export const metadata = {
  title: "Russian Spa in Rajouri Garden - Spa Near City Square Mall",
  description:
    "A few minutes from City Square Mall and the metro. Private rooms, Russian & Indian therapists, ₹1,999 for 60 min. Check today's free slots on WhatsApp.",
  keywords: [
    "spa in rajouri garden",
    "best spa in rajouri garden",
    "best spa rajouri garden",
    "massage in rajouri garden",
    "rajouri garden mall spa",
    "spa in rajouri garden mall",
    "spa near rajouri garden",
    "best body massage in rajouri garden",
    "body massage in rajouri garden",
    "body massage rajouri garden",
    "massage centre in rajouri garden",
    "full body massage in rajouri garden",
    "home spa in rajouri garden",
    "hotel spa in rajouri garden",
    "couple massage in rajouri garden",
    "spa near rajouri garden metro station",
    "spa near city square mall",
  ],
  openGraph: {
    title: "Best Spa in Rajouri Garden - Near City Square Mall | Luxury Russian Spa",
    description:
      "Best spa in Rajouri Garden for body massage near the mall & metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981994_female-masseur-preparing-bed-massage-session_23-2150461390.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-rajouri-garden",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-rajouri-garden",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981994_female-masseur-preparing-bed-massage-session_23-2150461390.jpg"],
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
