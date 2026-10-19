import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["gurgaon"];

export const metadata = {
  title: "Russian Spa in Gurgaon - Full Body Massage | From ₹1999",
  description: "Spa in Gurgaon offering genuine full body massage by top-rated certified therapists. Claim our first-visit offer for a relaxing session. Book your slot today!",
  keywords: ["spa in gurgaon", "massage in gurgaon", "full body massage gurgaon", "body spa gurgaon"],
  openGraph: {
    title: "Get Full Body Massage At Our Spa In Gurgaon",
    description: "We offer genuine full body massage at our best spa in gurgaon. Experience our top -notch spa service by our top rated spa massage therapists. Claim our First visit offer and enjoy your spa Session.",
    images: ["https://www.luxuryrussianspa.com/images/Hyatt_Regency_Gurgaon.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-gurgaon",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/Hyatt_Regency_Gurgaon.jpg"]
  }
};

export default function page() {
  return (
    <>
      <LocationSchemas loc={loc} />
      <LocationPage loc={loc} />
    </>
  );
}
