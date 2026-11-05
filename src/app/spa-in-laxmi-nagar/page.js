import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["laxmi-nagar"];

export const metadata = {
  title: "Russian Spa in Laxmi Nagar (₹1499 Offer) | East Delhi Spa",
  description:
    "Best Russian Spa near Laxmi Nagar Metro, East Delhi. Full body Russian oil massage, attached hot shower & ₹1499 first visit offer. Open 24/7. Book on WhatsApp!",
  keywords: [
    "spa in laxmi nagar",
    "spa in laxminagar",
    "body massage in laxmi nagar",
    "massage in laxmi nagar",
    "spa in laxmi nagar delhi",
    "spa laxmi nagar delhi",
    "spa near laxmi nagar",
    "best spa in laxmi nagar",
    "body massage in laxmi nagar delhi",
    "body massage spa in laxmi nagar delhi",
    "body massage spa laxmi nagar",
    "body spa in laxmi nagar",
    "body spa in laxmi nagar delhi",
    "full body massage in laxmi nagar",
    "massage center in laxmi nagar",
    "couple massage in laxmi nagar",
    "home spa in laxmi nagar",
    "hotel spa in laxmi nagar",
  ],
  openGraph: {
    title: "Russian Spa in Laxmi Nagar (₹1499 Offer) | East Delhi Spa",
    description:
      "Best Russian Spa in Laxmi Nagar for full body & body spa near Vikas Marg Metro. Certified therapists, hygienic private rooms, attached shower. Book from ₹1499!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-laxmi-nagar",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-laxmi-nagar",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_750_1758779654_happy-pretty-lady-lying-down-massage-bed-wellness-center-beauty-concept_151013-4029.jpg"],
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
