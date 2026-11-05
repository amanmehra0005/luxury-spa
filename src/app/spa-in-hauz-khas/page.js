import LocationPage, { LocationSchemas } from "../components/LocationPage";
import locations from "../components/locations";

const loc = locations["hauz-khas"];

export const metadata = {
  title: "Russian Spa in Hauz Khas Village (₹1499 Offer) | South Delhi",
  description:
    "Best Russian Spa near Hauz Khas Village & Green Park. Certified European therapists, private hot rain shower & ₹1499 first visit offer. Open 24/7. Book on WhatsApp!",
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
    title: "Russian Spa in Hauz Khas Village (₹1499 Offer) | South Delhi",
    description:
      "Best Russian Spa near Hauz Khas Village & Green Park. Certified European therapists, private hot rain shower & ₹1499 first visit offer. Open 24/7. Book on WhatsApp!",
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
