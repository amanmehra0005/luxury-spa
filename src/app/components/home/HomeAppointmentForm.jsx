"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeAppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Russian Full Body Massage",
    location: "Aerocity (IGI Airport)",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Luxury Russian Spa! I would like to book an appointment:%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Service: ${formData.service}%0A- Location: ${formData.location}%0A- Date/Time: ${formData.date} ${formData.time}`;
    window.open(`https://wa.me/918799716197?text=${text}`, "_blank");
  };

  return (
    <section aria-labelledby="appointment-form-heading" className="bg-white py-16 md:py-20 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7 bg-[#fffaf5] p-6 sm:p-8 md:p-10 rounded-2xl ring-1 ring-amber-100 shadow-md">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9c5232]">Reserve Your Session</span>
            <h2 id="appointment-form-heading" className="mt-1 font-title text-2xl sm:text-3xl font-bold text-gray-900">
              Quick Appointment Booking
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              Fill in your details below for instant confirmation with our spa manager on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-[#9c5232] focus:ring-1 focus:ring-[#9c5232] outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="client-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-[#9c5232] focus:ring-1 focus:ring-[#9c5232] outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="therapy-select" className="block text-xs font-semibold text-gray-700 mb-1">
                    Select Therapy
                  </label>
                  <select
                    id="therapy-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 focus:border-[#9c5232] focus:ring-1 focus:ring-[#9c5232] outline-none transition"
                  >
                    <option>Russian Full Body Massage</option>
                    <option>B2B Signature Therapy</option>
                    <option>Sensory Sandwich Massage</option>
                    <option>Swedish Relaxation Massage</option>
                    <option>Deep Tissue Therapy</option>
                    <option>Couples VIP Spa Package</option>
                    <option>Thai Herbal &amp; Stretching</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="outlet-select" className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Location / Outlet
                  </label>
                  <select
                    id="outlet-select"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 focus:border-[#9c5232] focus:ring-1 focus:ring-[#9c5232] outline-none transition"
                  >
                    <option>Aerocity (IGI Airport 5-Star Hub)</option>
                    <option>Connaught Place (Central Delhi)</option>
                    <option>Karol Bagh (Central West Delhi)</option>
                    <option>Mahipalpur (Airport Gateway)</option>
                    <option>Gurgaon (Cyber Hub)</option>
                    <option>Noida (Sector 18)</option>
                    <option>South Delhi (Saket)</option>
                    <option>Dwarka Hub (West Delhi)</option>
                    <option>5-Star Hotel In-Room Session</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date-input" className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="date-input"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 focus:border-[#9c5232] focus:ring-1 focus:ring-[#9c5232] outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="time-input" className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <input
                    id="time-input"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 focus:border-[#9c5232] focus:ring-1 focus:ring-[#9c5232] outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#9c5232] hover:bg-[#834329] text-white py-3 px-6 text-sm font-bold uppercase tracking-wider shadow-md shadow-amber-950/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-lg text-[#fdc28c]" /> Book Appointment Now
              </button>
            </form>
          </div>

          {/* Right Image: 5 cols */}
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-100">
            <Image
              src="/images/best-friends-robes-eating-some-food - Copy.jpg"
              alt="Relaxed guests enjoying spa day in luxury bathrobes at Luxury Russian Spa Delhi"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#fdc28c] block">Private Ambiance</span>
              <p className="font-title text-base sm:text-lg font-bold">Unwind in Total Comfort with Russian Hospitality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
