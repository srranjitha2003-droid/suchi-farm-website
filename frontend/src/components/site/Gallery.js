import { Play } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

export default function Gallery() {
  const { t, lang } = useLang();
  const kn = lang === "kn";
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 md:py-36 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <p
              data-testid="gallery-overline"
              className={`text-[#B85C38] font-semibold mb-6 ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.35em] uppercase"}`}
            >
              — {t.gallery.overline}
            </p>
            <h2
              data-testid="gallery-title"
              className={`text-[#1A362D] leading-[1.05] tracking-tight font-medium max-w-xl ${kn ? "font-kannada text-3xl md:text-4xl" : "font-display text-4xl md:text-5xl lg:text-6xl"}`}
            >
              {t.gallery.title}
            </h2>
          </div>
          <a
            href={site.contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-visit-link"
            className={`text-[#1A362D] underline underline-offset-8 decoration-[#C5A059] hover:text-[#B85C38] transition-colors self-start md:self-auto ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.3em] uppercase"}`}
          >
            {t.gallery.visit}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] md:auto-rows-[280px] gap-4 md:gap-6">
          {site.gallery.map((g, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`relative overflow-hidden rounded-3xl group bg-[#1A362D] ${g.span}`}
            >
              {g.type === "video" ? (
                <>
                  <video
                    src={g.src}
                    poster={g.poster}
                    data-testid={`gallery-video-${i}`}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    onLoadedData={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                  />
                  <div
                    className={`absolute top-5 left-5 bg-[#FAF8F5]/95 backdrop-blur-md rounded-full px-3 py-1.5 text-[#1A362D] font-semibold flex items-center gap-1.5 pointer-events-none ${kn ? "font-kannada text-xs" : "text-[10px] tracking-[0.25em] uppercase"}`}
                  >
                    <Play className="w-3 h-3 fill-[#1A362D]" />
                    {t.live.liveBadge}
                  </div>
                </>
              ) : (
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span
                className={`absolute bottom-5 left-5 right-5 text-[#FAF8F5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${kn ? "font-kannada text-xs" : "text-[11px] tracking-[0.25em] uppercase"}`}
              >
                {g.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
