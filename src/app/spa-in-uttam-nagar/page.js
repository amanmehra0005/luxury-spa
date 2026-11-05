import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["uttam-nagar"];

export const metadata = {
  title: "Russian Spa in Uttam Nagar (₹1499 Offer) Near Metro",
  description:
    "Best Russian Spa near Uttam Nagar East & West Metro. Transparent prices from ₹1499 (welcome offer). Attached hot shower & certified therapists. Book on WhatsApp in 1 min!",
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
    title: "Russian Spa in Uttam Nagar (₹1499 Offer) Near Metro",
    description:
      "Best Russian Spa in Uttam Nagar near Metro. Full body massage, Thai spa & attached rain shower. Welcome offer from ₹1499!",
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
