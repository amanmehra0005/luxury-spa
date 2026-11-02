import dynamic from "next/dynamic";

// Section 1 to 4: Above-the-fold & initial impressions
import HomeHero from "./components/home/HomeHero";
import HomeTherapistsRow from "./components/home/HomeTherapistsRow";
import HomeAboutRussian from "./components/home/HomeAboutRussian";
import HomeShowcasePhotos from "./components/home/HomeShowcasePhotos";

// Below-the-fold sections dynamically imported for high Core Web Vitals
const HomeSplitBlock1 = dynamic(() => import("./components/home/HomeSplitBlock1"));
const HomeSplitBlock2 = dynamic(() => import("./components/home/HomeSplitBlock2"));
const HomeLocationCircles = dynamic(() => import("./components/home/HomeLocationCircles"));
const HomeSplitBlock3 = dynamic(() => import("./components/home/HomeSplitBlock3"));
const HomeWhyBestSpa = dynamic(() => import("./components/home/HomeWhyBestSpa"));
const HomeLajpatAerocityShowcase = dynamic(() => import("./components/home/HomeLajpatAerocityShowcase"));
const HomePremiumRussianBanner = dynamic(() => import("./components/home/HomePremiumRussianBanner"));
const HomeNuruAerocityExperience = dynamic(() => import("./components/home/HomeNuruAerocityExperience"));
const HomeDarkVip = dynamic(() => import("./components/home/HomeDarkVip"));
const HomePricingSection = dynamic(() => import("./components/home/HomePricingSection"));
const HomeTopRatedAmenities = dynamic(() => import("./components/home/HomeTopRatedAmenities"));
const HomeLajpatDeepRelaxation = dynamic(() => import("./components/home/HomeLajpatDeepRelaxation"));
const HomeMassageCentreOfferings = dynamic(() => import("./components/home/HomeMassageCentreOfferings"));
const HomeTrustBadges = dynamic(() => import("./components/home/HomeTrustBadges"));
const HomeFullWidthBanner = dynamic(() => import("./components/home/HomeFullWidthBanner"));
const HomeOurExperts = dynamic(() => import("./components/home/HomeOurExperts"));
const HomeStatCounter = dynamic(() => import("./components/home/HomeStatCounter"));
const HomeReviews = dynamic(() => import("./components/home/HomeReviews"));
const HomeOutletsGrid = dynamic(() => import("./components/home/HomeOutletsGrid"));
const HomeCircularTreatments = dynamic(() => import("./components/home/HomeCircularTreatments"));
const HomeCalloutBanner2 = dynamic(() => import("./components/home/HomeCalloutBanner2"));
const HomeFaqSection = dynamic(() => import("./components/Homefaqsection"));
const WhatsappFloat = dynamic(() => import("./components/WhatsappFloat"));

export default function HomeClient() {
  return (
    <main className="font-sans overflow-hidden">
      {/* 1. Hero Banner (Dark luxury background, H1, subheads, green CTA button) */}
      <HomeHero />

      {/* 2. Russian Spa Therapists in Delhi (6 cards in a row) */}
      <HomeTherapistsRow />

      {/* 3. About Russian Spa in Delhi (Olive green background, calligraphy badge, 2 columns of text) */}
      <HomeAboutRussian />

      {/* 4. 3-Photo Showcase Row (Rounded cards with green borders) */}
      <HomeShowcasePhotos />

      {/* 5. Feature Block 1 (Text Left, Jacuzzi Image Right) */}
      <div className="cv-auto"><HomeSplitBlock1 /></div>

      {/* 6. Feature Block 2 (Image Left, Text Right) */}
      <div className="cv-auto"><HomeSplitBlock2 /></div>

      {/* 7. Feature Block 3 (Text Left, Dark "RUSSIAN SPA" Graphic Right) */}
      <div className="cv-auto"><HomeSplitBlock3 /></div>

      {/* Our Russian Spa in Delhi Locations (5 Circular Badges) */}
      <div className="cv-auto"><HomeLocationCircles /></div>

      {/* Why We're the Best Spa in Delhi with Full Service (4 Luxury Cards) */}
      <div className="cv-auto"><HomeWhyBestSpa /></div>

      {/* Lajpat Nagar Recharge & Aerocity 5-Star Showcase */}
      <div className="cv-auto"><HomeLajpatAerocityShowcase /></div>

      {/* Premium Russian Spa in Delhi with Full Service (Theme Banner) */}
      <div className="cv-auto"><HomePremiumRussianBanner /></div>

      {/* Experience Nuru Massage & Aerocity Guests Reviews */}
      <div className="cv-auto"><HomeNuruAerocityExperience /></div>

      {/* 15. Dark Luxury VIP Showcase (Model in red dress left, exclusive VIP text right) */}
      <div className="cv-auto"><HomeDarkVip /></div>

      {/* 16. Affordable Luxury Spa Packages (3 Pricing Cards) */}
      <div className="cv-auto"><HomePricingSection /></div>

      {/* Top Rated Massage Services with Russian (Shower, Jacuzzi, Steam, Sauna) */}
      <div className="cv-auto"><HomeTopRatedAmenities /></div>

      {/* Affordable Russian Spa in Lajpat Nagar For Deep Relaxation */}
      <div className="cv-auto"><HomeLajpatDeepRelaxation /></div>

      {/* What We're Offering At Massage Centre in Delhi (3 Optimized Luxury Cards) */}
      <div className="cv-auto"><HomeMassageCentreOfferings /></div>

      {/* 17. Trust Badges (4 horizontal icons) */}
      <div className="cv-auto"><HomeTrustBadges /></div>

      {/* 20. Full-Width Massage Panoramic Photo Banner */}
      <div className="cv-auto"><HomeFullWidthBanner /></div>

      {/* 21. "Our Experts - Russian Spa Delhi" (4 Model Photo Cards) */}
      <div className="cv-auto"><HomeOurExperts /></div>

      {/* 22. Stat Counter Bar (Olive green bar with 4 counter stats) */}
      <div className="cv-auto"><HomeStatCounter /></div>

      {/* 23. Testimonials / Client Reviews (3 white cards with 5 stars) */}
      <div className="cv-auto"><HomeReviews /></div>

      {/* 24. Delhi NCR Outlets Grid (2 Columns, 8 Olive Green Location Cards) */}
      <div className="cv-auto"><HomeOutletsGrid /></div>

      {/* 25. Signature Spa Treatments (4 Circular/Oval Badges) */}
      <div className="cv-auto"><HomeCircularTreatments /></div>

      {/* 26. Callout Banner 2 (Olive green banner) */}
      <div className="cv-auto"><HomeCalloutBanner2 /></div>

      {/* 30. Frequently Asked Questions (FAQ Section with Accordion) */}
      <div className="cv-auto"><HomeFaqSection /></div>

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsappFloat />
    </main>
  );
}
