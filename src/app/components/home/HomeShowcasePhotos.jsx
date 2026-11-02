const videos = [
  {
    src: "/images/spavideo.mp4",
    alt: "Luxury Russian Spa experience - Therapist session",
  },
  {
    src: "/images/spavideo2.mp4",
    alt: "Professional body massage at Luxury Russian Spa Delhi",
  },
  {
    src: "/images/spavideo3.mp4",
    alt: "Relaxing spa therapy at Russian Spa Delhi",
  },
];

export default function HomeShowcasePhotos() {
  return (
    <section aria-label="Spa Video Highlights" className="bg-[#fffaf5] py-10 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center font-serif italic text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b1810] mb-8 md:mb-10">
          Watch Our Exclusive Russian Spa Experience
        </h2>

        {/* 3 Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {videos.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-2 ring-[#9c5232] group"
            >
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
