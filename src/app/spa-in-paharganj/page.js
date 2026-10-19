import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["paharganj"];

export const metadata = {
  title: "Russian Spa in Paharganj - Near New Delhi Railway Station",
  description:
    "Best spa in Paharganj near New Delhi Railway Station & Main Bazaar. 24 hours booking, certified therapists, home & hotel spa available. Book from ₹1999!",
  keywords: [
    "best spa in paharganj",
    "spa in paharganj",
    "body massage in paharganj",
    "massage in paharganj",
    "paharganj spa center",
    "spa near paharganj",
    "24 hours spa in paharganj",
    "b2b spa paharganj",
    "body massage spa in paharganj",
    "body spa in paharganj",
    "full body massage in paharganj",
    "massage spa in paharganj",
    "spa center in paharganj",
    "thai spa in paharganj",
  ],
  openGraph: {
    title: "Best Spa in Paharganj - Near New Delhi Railway Station | Luxury Russian Spa",
    description:
      "Best spa in Paharganj near New Delhi Railway Station & Main Bazaar. 24 hours booking, certified therapists, home & hotel spa available. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-paharganj",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-paharganj",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982849_female-masseur-giving-back-massage-client_23-2150461442.jpg"],
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
