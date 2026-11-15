import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["rohini"];

export const metadata = {
  title: "Russian Spa in Rohini | Best Full Body Massage From ₹1999",
  description:
    "Best Russian Spa in Rohini covering Sectors 3 to 24 & City Centre Mall. Certified therapists, attached private rain shower & ₹1499 first visit offer. Book on WhatsApp!",
  keywords: [
    "spa in rohini",
    "massage in rohini",
    "full body massage in rohini",
    "massage centre in rohini",
    "body massage near me rohini",
    "spa near rohini metro station",
    "home spa in rohini",
    "hotel spa in rohini",
    "couple massage in rohini",
    "best spa in rohini delhi",
    "spa in rohini sector 3",
    "spa in rohini sector 7",
    "spa in rohini sector 16",
    "spa in rohini sector 17",
    "spa in rohini sector 24",
    "spa rohini sector 16",
    "spa near me rohini",
    "spa near rohini",
    "spa in city centre mall rohini",
    "russian spa in rohini",
    "spa with female therapists in rohini",
    "night spa in rohini",
  ],
  openGraph: {
    title: "Russian Spa in Rohini (₹1499 Offer) Near City Centre Mall & Metro",
    description:
      "Best Russian Spa in Rohini covering Sector 3 to 24 & City Centre Mall. Certified therapists, attached private rain shower & ₹1499 first visit offer. Book on WhatsApp!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981900_woman-getting-back-massage-from-masseur_23-2150461404.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-rohini",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-rohini",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981900_woman-getting-back-massage-from-masseur_23-2150461404.jpg"],
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
