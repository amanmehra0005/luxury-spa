import Logo from "./Logo";
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socials = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/+yulqEcJa2dxhM2I9" },
  { name: "WhatsApp", icon: FaWhatsapp, link: "https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer." },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/delhi.luxury_spa/" },
];

const locations = [
  { name: "Gurgaon", link: "/spa-in-gurgaon" },
  { name: "Noida", link: "/spa-in-noida" },
  { name: "Paharganj", link: "/spa-in-paharganj" },
  { name: "Karol Bagh", link: "/spa-in-karol-bagh" },
  { name: "Lajpat Nagar", link: "/spa-in-lajpat-nagar" },
];

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "All Services", link: "/massage-in-delhi" },
  { name: "Outlets", link: "/outlets" },
  { name: "Pricing", link: "/spa-price-in-delhi" },
  { name: "Contact", link: "/contact" },
];

const preFooterOutlets = [
  { name: "DEFENCE\nCOLONY", label: "DEFENCE COLONY", link: "/outlets" },
  { name: "MAHIPALPUR", label: "MAHIPALPUR", link: "/spa-in-mahipalpur" },
  { name: "GURGAON", label: "GURGAON", link: "/spa-in-gurgaon" },
  { name: "NOIDA", label: "NOIDA", link: "/spa-in-noida" },
  { name: "PAHARGANJ", label: "PAHARGANJ", link: "/spa-in-paharganj" },
];

function Heading({ children }) {
  return <p className="font-title text-base sm:text-lg font-bold text-white mb-4 tracking-wide">{children}</p>;
}

export default function Footer() {
  return (
    <footer aria-label="Site Footer">
      {/* Pre-footer Outlets Row (matching reference image) */}
      <section aria-label="Popular Spa Locations" className="bg-white py-7 sm:py-9 px-4 border-t border-stone-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {preFooterOutlets.map((outlet) => (
            <a
              key={outlet.label}
              href={outlet.link}
              className="flex items-center justify-center text-center h-[54px] sm:h-[58px] px-3 bg-[#9c5232] hover:bg-[#24140d] text-white border-2 border-[#7e3b22] hover:border-[#fdc28c] hover:text-[#fdc28c] font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-pre-line leading-tight last:col-span-2 sm:last:col-span-1"
            >
              {outlet.name}
            </a>
          ))}
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[#24140d] text-gray-300 border-t border-amber-950/60">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="min-w-0">
            <a href="/" aria-label="Luxury Russian Spa home" className="inline-block mb-5">
              <Logo light={true} />
            </a>
            <p className="text-sm leading-relaxed mb-6 text-gray-300">
              Luxury spa experiences for complete rejuvenation in the heart of Delhi. Certified international therapists &amp; 5-star hotel visits.
            </p>
            <p className="font-title text-base font-bold text-white mb-3">Follow Us</p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ name, icon: Icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 text-white shadow-md transition duration-300 hover:bg-[#9c5232] hover:text-white hover:-translate-y-0.5 ring-1 ring-white/15"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Our Locations */}
          <div className="min-w-0">
            <Heading>Our Locations</Heading>
            <ul className="space-y-2.5 text-sm">
              {locations.map((loc) => (
                <li key={loc.link}>
                  <a href={loc.link} className="hover:text-[#fdc28c] transition-colors">
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/outlets" className="mt-4 inline-block text-xs sm:text-sm font-bold text-[#fdc28c] hover:text-white hover:underline underline-offset-4 transition-colors">
              View All Outlets →
            </a>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <Heading>Quick Links</Heading>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="hover:text-[#fdc28c] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/918799716197?text=Hi!%20How%20can%20I%20book%20an%20appointment%20at%20your%205-star%20hotel%20spa%20outlets%3A%20The%20Suryaa%20(NFC)%2C%20The%20Park%20(CP)%20or%20Novotel%20(Aerocity)%3F%20Please%20send%20me%20today%27s%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs sm:text-sm font-bold text-[#fdc28c] hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Book a Session →
            </a>
          </div>

          {/* Contact Us */}
          <div className="min-w-0">
            <Heading>Contact Us</Heading>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+918799716197" className="flex items-center gap-3 hover:text-[#fdc28c] transition-colors">
                  <span className="size-9 shrink-0 rounded-full bg-[#9c5232]/25 text-[#fdc28c] ring-1 ring-[#9c5232]/50 flex items-center justify-center">
                    <FaPhoneAlt size={13} />
                  </span>
                  +91 8799716197
                </a>
              </li>
              <li>
                <a href="mailto:luxuryrussianspa1947@gmail.com" className="flex items-center gap-3 hover:text-[#fdc28c] transition-colors">
                  <span className="size-9 shrink-0 rounded-full bg-[#9c5232]/25 text-[#fdc28c] ring-1 ring-[#9c5232]/50 flex items-center justify-center">
                    <FiMail size={15} />
                  </span>
                  <span className="break-all">luxuryrussianspa1947@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Novotel+New+Delhi+Aerocity+GMR+Hospitality+District+IGI+Airport+New+Delhi+110037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#fdc28c] transition-colors"
                >
                  <span className="size-9 shrink-0 rounded-full bg-[#9c5232]/25 text-[#fdc28c] ring-1 ring-[#9c5232]/50 flex items-center justify-center mt-0.5">
                    <FaMapMarkerAlt size={14} />
                  </span>
                  <address className="not-italic leading-relaxed text-xs sm:text-sm text-gray-300">
                    Novotel Lobby Level, Asset No 02 GMR Hospitality District IGI Airport, Northern Access Rd, Aerocity, New Delhi, Delhi 110037
                  </address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400 space-y-1.5">
          <p>&copy; {new Date().getFullYear()} Luxury Russian Spa. All rights reserved.</p>
          <p>
            Mail <a href="mailto:luxuryrussianspa1947@gmail.com" className="hover:text-[#fdc28c] transition-colors">luxuryrussianspa1947@gmail.com</a> | Phone{" "}
            <a href="tel:+918799716197" className="hover:text-[#fdc28c] transition-colors">+91 8799716197</a>
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
