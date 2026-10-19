import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["vasant-kunj"];

export const metadata = {
  title: "Russian Spa in Vasant Kunj - Luxury Full Body Massage",
  description:
    "Spa in Vasant Kunj for full body, deep tissue & couple massage near Ambience Mall. Certified therapists, hygienic rooms. Book from ₹1999 today!",
  keywords: [
    "spa in vasant kunj",
    "massage in vasant kunj",
    "full body massage in vasant kunj",
    "massage centre in vasant kunj",
    "body massage near me vasant kunj",
    "spa near ambience mall vasant kunj",
    "home spa in vasant kunj",
    "hotel spa in vasant kunj",
    "couple massage in vasant kunj",
    "best spa in vasant kunj",
    "russian spa in vasant kunj",
    "spa with female therapists in vasant kunj",
    "night spa in vasant kunj",
    "spa in vasant kunj sector d",
  ],
  openGraph: {
    title: "Spa in Vasant Kunj - Luxury Full Body Massage | Luxury Russian Spa",
    description:
      "Spa in Vasant Kunj for full body, deep tissue & couple massage near Ambience Mall. Certified therapists, hygienic rooms. Book from ₹1999 today!",
    images: ["https://www.luxuryrussianspa.com/images/pexels-olly-3673941.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-vasant-kunj",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-vasant-kunj",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/pexels-olly-3673941.jpg"],
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
