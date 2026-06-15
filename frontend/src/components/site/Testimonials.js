import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = site.testimonials.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const t = site.testimonials[idx];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-36 bg-[#1A362D] text-[#FAF8F5] overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#C5A059]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#B85C38]/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <p
          data-testid="testimonials-overline"
          className="text-[11px] tracking-[0.35em] uppercase text-[#C5A059] font-semibold mb-8"
        >
          — Kind Words
        </p>

        <Quote className="w-12 h-12 text-[#C5A059] mx-auto mb-8 opacity-70" />

        <blockquote
          data-testid="testimonial-quote"
          key={idx}
          className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light italic fade-up text-balance"
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="mt-12 fade-up fade-up-delay-1" key={`meta-${idx}`}>
          <p
            data-testid="testimonial-author"
            className="font-display text-2xl text-[#FAF8F5]"
          >
            {t.author}
          </p>
          <p
            data-testid="testimonial-role"
            className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] mt-2"
          >
            {t.role}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-14">
          <button
            onClick={prev}
            data-testid="testimonial-prev-btn"
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-[#FAF8F5]/30 flex items-center justify-center hover:bg-[#FAF8F5]/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 px-4">
            {site.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                data-testid={`testimonial-dot-${i}`}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-[#C5A059]" : "w-1.5 bg-[#FAF8F5]/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            data-testid="testimonial-next-btn"
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-[#FAF8F5]/30 flex items-center justify-center hover:bg-[#FAF8F5]/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
