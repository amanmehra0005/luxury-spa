import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["uttam-nagar"];

export const metadata = {
  title: "Russian Spa in Uttam Nagar - Spa With Price | From ₹1999",
  description:
    "Spa near Uttam Nagar metro with clear prices: ₹1,999 for 60 min, no extras. Body massage, Thai massage & home visits. Book on WhatsApp in a minute.",
  keywords: [
    "spa in uttam nagar",
    "uttam nagar spa",
    "best spa in uttam nagar",
    "body massage spa in uttam nagar",
    "body spa in uttam nagar",
    "spa in uttam nagar home service",
    "uttam nagar spa contact number",
    "thai massage",
    "thai massage in uttam nagar",
    "massage in uttam nagar",
    "full body massage in uttam nagar",
    "massage centre in uttam nagar",
    "body massage near me uttam nagar",
    "spa near uttam nagar metro station",
    "home spa in uttam nagar",
    "hotel spa in uttam nagar",
    "couple massage in uttam nagar",
    "spa with female therapists in uttam nagar",
    "night spa in uttam nagar",
  ],
  openGraph: {
    title: "Best Spa in Uttam Nagar - Body Massage & Thai Spa | Luxury Russian Spa",
    description:
      "Best spa in Uttam Nagar for body massage, body spa & Thai massage near the metro. Certified therapists, hygienic private rooms, home service. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982563_side-view-woman-getting-massaged-spa_23-2149871287.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-uttam-nagar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-uttam-nagar",
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
