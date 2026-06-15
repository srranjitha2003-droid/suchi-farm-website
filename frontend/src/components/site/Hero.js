import { MapPin, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();
  const kn = lang === "kn";
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-end overflow-hidden"
    >
      <img
        src={site.hero.image}
        alt="Suchi Farm mulberry plantation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A362D]/55 via-[#1A362D]/40 to-[#1A362D]/90" />

      <div className="absolute top-28 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center text-[#FAF8F5]/80">
        <span
          data-testid="hero-overline"
          className={`font-semibold ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.35em] uppercase"}`}
        >
          {t.hero.establishedYear}
        </span>
        <span
          className={`hidden md:inline font-semibold ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.35em] uppercase"}`}
        >
          {t.hero.region}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 w-full">
        <div className="max-w-4xl">
          <p
            data-testid="hero-eyebrow"
            className={`text-[#C5A059] font-semibold mb-8 fade-up ${kn ? "font-kannada text-base" : "text-[11px] tracking-[0.4em] uppercase"}`}
          >
            {t.hero.eyebrow}
          </p>
          <h1
            data-testid="hero-title"
            className="font-display text-[3.2rem] sm:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight text-[#FAF8F5] font-medium text-balance fade-up fade-up-delay-1"
          >
            {site.business.name}.
          </h1>
          <p
            data-testid="hero-tagline"
            className={`text-[#FAF8F5]/90 mt-6 fade-up fade-up-delay-2 ${kn ? "font-kannada text-xl md:text-2xl" : "font-display italic text-2xl md:text-3xl"}`}
          >
            {t.hero.tagline}
          </p>
          <p
            data-testid="hero-description"
            className={`text-[#FAF8F5]/85 max-w-xl mt-8 font-light leading-relaxed fade-up fade-up-delay-2 ${kn ? "font-kannada text-base" : "text-base md:text-lg"}`}
          >
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 fade-up fade-up-delay-3">
            <a
              href={site.contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-directions-btn"
              className={`inline-flex items-center justify-center gap-2 bg-[#FAF8F5] text-[#1A362D] hover:bg-[#C5A059] transition-all duration-300 rounded-full px-8 py-4 font-semibold ${kn ? "font-kannada text-sm" : "text-[12px] uppercase tracking-[0.25em]"}`}
            >
              <MapPin className="w-4 h-4" />
              {t.hero.getDirections}
            </a>
            <a
              href="#services"
              data-testid="hero-services-btn"
              className={`inline-flex items-center justify-center gap-2 border border-[#FAF8F5]/40 text-[#FAF8F5] hover:bg-[#FAF8F5]/10 transition-all duration-300 rounded-full px-8 py-4 font-semibold ${kn ? "font-kannada text-sm" : "text-[12px] uppercase tracking-[0.25em]"}`}
            >
              {t.hero.ourServices}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        data-testid="hero-scroll-indicator"
        className={`absolute bottom-8 right-6 md:right-12 z-10 text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors flex items-center gap-3 ${kn ? "font-kannada text-sm" : "text-[11px] uppercase tracking-[0.3em]"}`}
      >
        {t.hero.scroll}
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
