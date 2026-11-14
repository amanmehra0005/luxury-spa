import HomeClient from "./HomeClient";

export const metadata = {
  title: "Luxury Russian Spa in Delhi | Best Full Body Massage From ₹1499",
  description:
    "Experience premier Russian spa in Delhi with certified Russian & Indian therapists across 12+ luxury outlets & 5-star hotel visits in Aerocity, Lajpat Nagar & Mahipalpur. First visit @ ₹1499.",

  keywords: [
    "russian spa in delhi",
    "luxury spa in delhi",
    "full body massage in delhi",
    "russian spa in aerocity",
    "russian spa in lajpat nagar",
    "russian spa in mahipalpur",
    "sandwich massage delhi",
    "nuru massage in delhi",
    "b2b massage in delhi",
    "5 star spa in delhi",
  ],

  alternates: {
    canonical: "https://www.luxuryrussianspa.com/",
  },

  openGraph: {
    title: "Luxury Russian Spa in Delhi | Best Full Body Massage From ₹1499",
    description:
      "Certified Russian and Indian therapists, private suites with attached hot showers, and 5-star hotel visits across Delhi NCR. First visit offer @ ₹1499.",
    url: "https://www.luxuryrussianspa.com/",
    siteName: "Luxury Russian Spa",
    images: [
      {
        url: "/images/luxurySpaRoom.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Russian Spa in Delhi",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Russian Spa in Delhi | Best Full Body Massage From ₹1499",
    description:
      "Certified Russian and Indian therapists, private suites with attached hot showers, and 5-star hotel visits across Delhi NCR. First visit offer @ ₹1499.",
    images: ["/images/luxurySpaRoom.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where Can I Find a Russian Massage in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luxury Russian Spa operates 12+ luxury outlets across Delhi NCR, including Aerocity, Lajpat Nagar, Mahipalpur, Connaught Place, Dwarka, Rohini, and Gurgaon. We also provide 24/7 in-room 5-star hotel visits near Delhi Airport and across the capital.",
      },
    },
    {
      "@type": "Question",
      name: "How to choose a safe spa in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To ensure a safe and hygienic experience, check verified customer reviews, look for real ambience photos of private rooms with attached showers, and confirm that therapists are certified professionals. At Luxury Russian Spa, all sessions are held in clean, private suites with complete safety and discretion.",
      },
    },
    {
      "@type": "Question",
      name: "How to book a Russian spa in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Booking is simple and fast. You can message us on WhatsApp or call our 24/7 helpdesk. Our team will share available therapist profiles, confirm outlet or hotel visit options, and lock in your preferred appointment slot with no advance payment required.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the Russian spa in Aerocity famous for Luxury Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aerocity is home to Delhi's top 5-star hotels and luxury hospitality. Luxury Russian Spa in Aerocity provides five-star standard in-room hotel sessions with certified Russian and European therapists, making it the top choice for international business travelers and transit passengers near IGI Airport.",
      },
    },
    {
      "@type": "Question",
      name: "Is a Russian spa in Lajpat Nagar affordable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Russian spa in Lajpat Nagar offers luxury bodywork at highly accessible rates. We provide an exclusive first visit offer starting from just ₹1499 for a full body massage in a private air-conditioned room with an attached hot shower.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Nuru massage in Delhi with a Russian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide authentic Nuru massage in Delhi using genuine seaweed-based warm gel with certified Russian and European therapists. We also offer sandwich massage, B2B massage, Swedish therapy, and couples packages across our Delhi outlets.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
