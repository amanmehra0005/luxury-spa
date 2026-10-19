import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["pitampura"];

export const metadata = {
  title: "Russian Spa in Pitampura - Luxury Body Massage Centre",
  description:
    "Best spa in Pitampura for full body & body massage near NSP. Luxury spa Pitampura with certified therapists, hygienic private rooms. Book from ₹1999!",
  keywords: [
    "spa in pitampura",
    "best spa in pitampura",
    "body massage in pitampura",
    "luxury spa pitampura",
    "massage center in pitampura",
    "massage in pitampura",
    "russian spa in pitampura",
    "spa near pitampura",
    "body massage spa in pitampura",
    "full body massage in pitampura",
    "massage spa in pitampura",
    "spa near netaji subhash place",
    "spa near metro walk mall",
    "home spa in pitampura",
    "hotel spa in pitampura",
    "couple massage in pitampura",
  ],
  openGraph: {
    title: "Best Spa in Pitampura - Luxury Body Massage Centre | Luxury Russian Spa",
    description:
      "Best spa in Pitampura for full body & body massage near NSP. Luxury spa Pitampura with certified therapists, hygienic private rooms. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981956_female-masseur-preparing-bed-massage-session_23-2150461392.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-pitampura",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-pitampura",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758981956_female-masseur-preparing-bed-massage-session_23-2150461392.jpg"],
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
