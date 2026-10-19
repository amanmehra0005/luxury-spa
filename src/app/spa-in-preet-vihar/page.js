import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["preet-vihar"];

export const metadata = {
  title: "Russian Spa in Preet Vihar - Body Massage Near Vikas Marg",
  description:
    "Best spa in Preet Vihar for full body & body massage near Vikas Marg Metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in preet vihar",
    "best spa in preet vihar",
    "spa near preet vihar",
    "body spa in preet vihar",
    "massage in preet vihar",
    "preet vihar spa centre",
    "massage center in preet vihar",
    "full body massage in preet vihar",
    "body massage in preet vihar",
    "massage spa in preet vihar",
    "luxury spa in preet vihar",
    "couple massage in preet vihar",
    "deep tissue massage in preet vihar",
    "russian spa in preet vihar",
    "spa near preet vihar metro station",
    "spa near vikas marg",
    "home spa in preet vihar",
    "hotel spa in preet vihar",
  ],
  openGraph: {
    title: "Best Spa in Preet Vihar - Full Body Massage Near Vikas Marg | Luxury Russian Spa",
    description:
      "Best spa in Preet Vihar for full body & body massage near Vikas Marg Metro. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982094_exfoliation-with-natural-bristle-brush-dry-brush-massage-preparing-skin-epilation_470400-470.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-preet-vihar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-preet-vihar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982094_exfoliation-with-natural-bristle-brush-dry-brush-massage-preparing-skin-epilation_470400-470.jpg"],
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
