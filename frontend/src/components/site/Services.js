import { Leaf, Sprout, Award, Fish, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

const iconList = [Award, Sprout, Fish];

export default function Services() {
  const { t, lang } = useLang();
  const kn = lang === "kn";

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-36 bg-[#F2EBE1]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <p
              data-testid="services-overline"
              className={`text-[#B85C38] font-semibold mb-6 ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.35em] uppercase"}`}
            >
              — {t.services.overline}
            </p>
            <h2
              data-testid="services-title"
              className={`text-[#1A362D] leading-[1.05] tracking-tight font-medium ${kn ? "font-kannada text-3xl md:text-4xl" : "font-display text-4xl md:text-5xl lg:text-6xl"}`}
            >
              {t.services.title}
            </h2>
          </div>
          <p
            className={`text-[#4A5D54] max-w-md font-light leading-relaxed ${kn ? "font-kannada text-base" : "text-base"}`}
          >
            {t.services.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((s, i) => {
            const Icon = iconList[i] || Leaf;
            const img = site.services[i]?.image;
            return (
              <article
                key={i}
                data-testid={`service-card-${i}`}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8E2D9] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(26,54,45,0.25)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5 bg-[#FAF8F5]/95 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1A362D]" />
                  </div>
                  <span
                    className={`absolute top-5 right-5 bg-[#1A362D] text-[#FAF8F5] px-3 py-1 rounded-full font-semibold ${kn ? "font-kannada text-xs" : "text-[10px] tracking-[0.2em] uppercase"}`}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3
                      data-testid={`service-title-${i}`}
                      className={`text-[#1A362D] font-medium leading-tight ${kn ? "font-kannada text-xl md:text-2xl" : "font-display text-2xl md:text-3xl"}`}
                    >
                      {s.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#B85C38] mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p
                    data-testid={`service-description-${i}`}
                    className={`text-[#4A5D54] font-light leading-relaxed ${kn ? "font-kannada text-sm" : "text-[15px]"}`}
                  >
                    {s.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
