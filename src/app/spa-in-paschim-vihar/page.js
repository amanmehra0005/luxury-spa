import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["paschim-vihar"];

export const metadata = {
  title: "Russian Spa in Paschim Vihar - Full Body Massage | ₹1999",
  description:
    "Best spa in Paschim Vihar for full body & body massage near the metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in paschim vihar",
    "best spa in paschim vihar",
    "body massage in paschim vihar",
    "body spa in paschim vihar",
    "full body massage in paschim vihar",
    "full body massage paschim vihar",
    "massage center in paschim vihar",
    "massage in paschim vihar",
    "home spa in paschim vihar",
    "hotel spa in paschim vihar",
    "couple massage in paschim vihar",
    "russian spa in paschim vihar",
    "deep tissue massage in paschim vihar",
    "spa near paschim vihar metro station",
    "spa near rani bagh",
  ],
  openGraph: {
    title: "Best Spa in Paschim Vihar - Full Body Massage | Luxury Russian Spa",
    description:
      "Best spa in Paschim Vihar for full body & body massage near the metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982753_woman-getting-back-massage-from-female-masseur_23-2150461424.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-paschim-vihar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-paschim-vihar",
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
