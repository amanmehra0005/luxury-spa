import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["rajouri-garden"];

export const metadata = {
  title: "Russian Spa in Rajouri Garden | Best Body Massage From ₹1999",
  description:
    "Best Russian Spa in Rajouri Garden near City Square Mall & Metro. Certified European therapists, private hot rain shower & ₹1499 first visit offer. Open 24/7. Book on WhatsApp!",
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
    title: "Best Russian Spa in Rajouri Garden - Near City Square Mall | Luxury Russian Spa",
    description:
      "Best Russian Spa in Rajouri Garden near City Square Mall & Metro. Certified therapists, attached private shower & ₹1499 welcome rate. Book on WhatsApp!",
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
