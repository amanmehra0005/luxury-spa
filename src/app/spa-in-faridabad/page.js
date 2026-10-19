import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["faridabad"];

export const metadata = {
  title: "Russian Spa in Faridabad - Body Massage Near NIT",
  description:
    "Best spa in Faridabad for body massage & body spa near NIT. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in faridabad",
    "russian spa in faridabad",
    "best spa in faridabad",
    "body massage faridabad",
    "body spa faridabad",
    "faridabad massage centres",
    "full body massage faridabad",
    "night spa in faridabad",
    "best body spa in faridabad",
    "massage center in faridabad",
    "home spa in faridabad",
    "hotel spa in faridabad",
    "couple massage in faridabad",
    "deep tissue massage in faridabad",
    "spa near nit faridabad",
    "spa near sector 15 faridabad",
    "spa near neelam chowk faridabad",
  ],
  openGraph: {
    title: "Best Spa in Faridabad - Body Massage Near NIT | Luxury Russian Spa",
    description:
      "Best spa in Faridabad for body massage & body spa near NIT. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-faridabad",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-faridabad",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"],
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
