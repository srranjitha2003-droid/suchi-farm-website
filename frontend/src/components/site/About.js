import { site } from "@/data/site";

export default function About() {
  const { about } = site;
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-36 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <p
              data-testid="about-overline"
              className="text-[11px] tracking-[0.35em] uppercase text-[#B85C38] font-semibold mb-8"
            >
              — {about.overline}
            </p>
            <h2
              data-testid="about-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A362D] leading-[1.05] tracking-tight font-medium"
            >
              {about.title}
            </h2>
            <div className="divider-leaf my-10" />
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                data-testid={`about-paragraph-${i}`}
                className="text-[#4A5D54] text-base md:text-lg font-light leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-[#E8E2D9] pt-10">
              {about.stats.map((s, i) => (
                <div key={i} data-testid={`about-stat-${i}`}>
                  <div className="font-display text-4xl md:text-5xl text-[#1A362D] font-medium">
                    {s.value}
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-[#7A8C84] mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem]">
              <img
                src={about.image}
                alt="Inside Suchi Farm"
                data-testid="about-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-[#1A362D] text-[#FAF8F5] px-8 py-6 rounded-2xl max-w-[260px] hidden md:block">
              <p className="font-display italic text-2xl leading-snug">
                &ldquo;We grow slowly, on purpose.&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.25em] uppercase mt-3 text-[#C5A059]">
                — The Suchi Family
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
