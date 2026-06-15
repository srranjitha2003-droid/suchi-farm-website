import { MapPin, ArrowDown } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-end overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1533757879476-8f4a3cb1ae4b?w=2000&q=80"
        alt="Suchi Farm landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A362D]/55 via-[#1A362D]/30 to-[#1A362D]/85" />

      {/* Top overline */}
      <div className="absolute top-28 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center text-[#FAF8F5]/80">
        <span
          data-testid="hero-overline"
          className="text-[11px] tracking-[0.35em] uppercase font-semibold"
        >
          {site.business.establishedYear}
        </span>
        <span className="hidden md:inline text-[11px] tracking-[0.35em] uppercase font-semibold">
          Karnataka · India
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 w-full">
        <div className="max-w-4xl">
          <p
            data-testid="hero-eyebrow"
            className="text-[11px] tracking-[0.4em] uppercase text-[#C5A059] font-semibold mb-8 fade-up"
          >
            Silk · Fishery · Aquaculture
          </p>
          <h1
            data-testid="hero-title"
            className="font-display text-[3.2rem] sm:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight text-[#FAF8F5] font-medium text-balance fade-up fade-up-delay-1"
          >
            {site.business.name}.
          </h1>
          <p
            data-testid="hero-tagline"
            className="font-display italic text-2xl md:text-3xl text-[#FAF8F5]/90 mt-6 fade-up fade-up-delay-2"
          >
            {site.business.tagline}
          </p>
          <p
            data-testid="hero-description"
            className="text-[#FAF8F5]/85 max-w-xl mt-8 text-base md:text-lg font-light leading-relaxed fade-up fade-up-delay-2"
          >
            {site.business.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 fade-up fade-up-delay-3">
            <a
              href={site.contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-directions-btn"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF8F5] text-[#1A362D] hover:bg-[#C5A059] hover:text-[#1A362D] transition-all duration-300 rounded-full px-8 py-4 text-[12px] uppercase tracking-[0.25em] font-semibold"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href="#services"
              data-testid="hero-services-btn"
              className="inline-flex items-center justify-center gap-2 border border-[#FAF8F5]/40 text-[#FAF8F5] hover:bg-[#FAF8F5]/10 transition-all duration-300 rounded-full px-8 py-4 text-[12px] uppercase tracking-[0.25em] font-semibold"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 right-6 md:right-12 z-10 text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]"
      >
        Scroll
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
