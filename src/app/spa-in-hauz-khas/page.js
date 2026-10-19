import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["hauz-khas"];

export const metadata = {
  title: "Russian Spa in Hauz Khas - Spa Near Hauz Khas Village",
  description:
    "Spa near Hauz Khas Village for full body and deep tissue massage. Private rooms, Russian & Indian therapists, ₹1,999 for 60 min. Book on WhatsApp.",
  keywords: [
    "spa in hauz khas",
    "massage hauz khas",
    "spa near hauz khas",
    "best spa in hauz khas",
    "best spa in hauz khas village",
    "body massage hauz khas",
    "body massage in hauz khas village",
    "body massage spa in hauz khas",
    "body spa hauz khas",
    "full body massage in hauz khas",
    "massage spa in hauz khas",
    "russian spa in hauz khas",
    "spa in hauz khas market",
    "spa in hauz khas village",
    "massage center in hauz khas",
    "luxury spa in hauz khas",
    "couple massage in hauz khas",
    "deep tissue massage in hauz khas",
    "spa near hauz khas metro station",
    "spa near green park",
  ],
  openGraph: {
    title: "Best Spa in Hauz Khas Village - Body Massage | Luxury Russian Spa",
    description:
      "Best spa in Hauz Khas Village for full body & body massage near the market. Certified therapists, hygienic private rooms, home & hotel spa. Book from ₹1999!",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg"],
    type: "website",
    url: "https://www.luxuryrussianspa.com/spa-in-hauz-khas",
  },
  alternates: {
    canonical: "https://www.luxuryrussianspa.com/spa-in-hauz-khas",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.luxuryrussianspa.com/images/fpkdl.com_960_1758982845_cute-woman-relaxing-massage-spa-salon_118454-10400.jpg"],
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
