import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["mahipalpur"];

export const metadata = {
  title: "Russian Spa in Mahipalpur - Open 24/7 Near IGI Airport",
  description:
    "Best spa in Mahipalpur for massage, body massage & russian spa near IGI Airport. Certified therapists, hygienic private rooms, hotel & home spa. Book from ₹1999!",
  keywords: [
    "spa in mahipalpur",
    "best spa in mahipalpur",
    "best spa mahipalpur",
    "massage in mahipalpur",
    "best massage in mahipalpur",
    "body massage in mahipalpur",
    "russian spa in mahipalpur",
    "best russian spa in mahipalpur",
    "russian body spa mahipalpur",
    "full body massage in mahipalpur",
    "massage centre in mahipalpur",
    "body massage near me mahipalpur",
    "spa near igi airport mahipalpur",
    "home spa in mahipalpur",
    "hotel spa in mahipalpur",
    "couple massage in mahipalpur",
    "spa with female therapists in mahipalpur",
    "night spa in mahipalpur",
    "spa near delhi airport",
  ],
  openGraph: {
    title: "Best Spa in Mahipalpur - Massage Near IGI Airport | Luxury Russian Spa",
    description:
      "Best spa in Mahipalpur for massage, body massage & russian spa near IGI Airport. Certified therapists, hygienic private rooms, hotel & home spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-mahipalpur",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-mahipalpur",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
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
