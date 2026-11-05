import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["kalkaji"];

export const metadata = {
  title: "Russian Spa in Kalkaji (₹1499 Offer) Near Nehru Place & Metro",
  description:
    "Top Russian Spa in Kalkaji near Nehru Place & Kalkaji Metro. Full body, B2B & deep tissue massage from ₹1499. Private hygienic suites & zero advance payment. Book on WhatsApp!",
  keywords: [
    "spa in kalkaji",
    "massage in kalkaji",
    "full body massage in kalkaji",
    "massage centre in kalkaji",
    "body massage near me kalkaji",
    "spa near kalkaji temple",
    "spa near nehru place",
    "home spa in kalkaji",
    "hotel spa in kalkaji",
    "couple massage in kalkaji",
    "best spa in kalkaji",
    "russian spa in kalkaji",
    "spa with female therapists in kalkaji",
    "night spa in kalkaji",
    "spa near kalkaji metro station",
  ],
  openGraph: {
    title: "Russian Spa in Kalkaji (₹1499 Offer) Near Nehru Place & Metro",
    description:
      "Spa in Kalkaji near Kalkaji Temple & Nehru Place for full body, deep tissue & couple massage. Certified therapists, private hygienic rooms. Book from ₹1499 today!",
    images: ["https://www.luxuryrussianspa.com/images/Reflexology.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-kalkaji",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-kalkaji",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Reflexology.jpg"],
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
