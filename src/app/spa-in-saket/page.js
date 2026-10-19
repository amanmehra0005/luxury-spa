import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["saket"];

export const metadata = {
  title: "Russian Spa in Saket - Body Massage Near Select Citywalk",
  description:
    "Best spa in Saket for full body & body massage near Select Citywalk. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
  keywords: [
    "spa in saket",
    "best spa in saket",
    "body massage in saket",
    "massage in saket",
    "saket spa centre",
    "spa near saket",
    "best massage spa in saket",
    "body massage near saket",
    "body spa in saket",
    "full body massage in saket",
    "massage center in saket",
    "massage spa in saket",
    "spa center in saket",
    "couple massage in saket",
    "deep tissue massage in saket",
    "spa near select citywalk",
    "spa near saket metro station",
  ],
  openGraph: {
    title: "Spa in Saket - Best Body Massage Near Select Citywalk | Luxury Russian Spa",
    description:
      "Best spa in Saket for full body & body massage near Select Citywalk. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/steptodown.com800611.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-saket",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-saket",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/steptodown.com800611.jpg"],
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
