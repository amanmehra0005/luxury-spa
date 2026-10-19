import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["janakpuri"];

export const metadata = {
  title: "Russian Spa in Janakpuri - Full Body Massage Near Metro",
  description:
    "Spa in Janakpuri for full body, deep tissue & couple massage near Janakpuri West Metro. Certified therapists, hygienic private rooms. Book today!",
  keywords: [
    "spa in janakpuri",
    "massage in janakpuri",
    "full body massage in janakpuri",
    "massage centre in janakpuri",
    "body massage near me janakpuri",
    "spa near janakpuri west metro station",
    "home spa in janakpuri",
    "hotel spa in janakpuri",
    "couple massage in janakpuri",
    "best spa in janakpuri",
    "russian spa in janakpuri",
    "spa with female therapists in janakpuri",
    "night spa in janakpuri",
    "spa near janakpuri district centre",
  ],
  openGraph: {
    title: "Spa in Janakpuri - Full Body Massage Near Metro | Luxury Russian Spa",
    description:
      "Spa in Janakpuri for full body, deep tissue & couple massage near Janakpuri West Metro. Certified therapists, hygienic private rooms. Book today!",
    images: ["https://www.luxuryrussianspa.com/images/pexels-pavel-danilyuk-9119782.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-janakpuri",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-janakpuri",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/pexels-pavel-danilyuk-9119782.jpg"],
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
