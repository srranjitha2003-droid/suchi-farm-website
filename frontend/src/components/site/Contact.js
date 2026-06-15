import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const items = [
  { icon: Phone, label: "Phone", valueKey: "phone", href: (v) => `tel:${v.replace(/\s+/g, "")}` },
  { icon: Mail, label: "Email", valueKey: "email", href: (v) => `mailto:${v}` },
  { icon: MapPin, label: "Address", valueKey: "address", href: null },
  { icon: Clock, label: "Hours", valueKey: "hours", href: null },
];

export default function Contact() {
  const { contact } = site;
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-36 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Details */}
          <div className="lg:col-span-5">
            <p
              data-testid="contact-overline"
              className="text-[11px] tracking-[0.35em] uppercase text-[#B85C38] font-semibold mb-6"
            >
              — Come Visit
            </p>
            <h2
              data-testid="contact-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A362D] leading-[1.05] tracking-tight font-medium"
            >
              Find us on the map.
            </h2>
            <p className="text-[#4A5D54] mt-6 text-base md:text-lg font-light leading-relaxed max-w-md">
              The farm welcomes friends, buyers, and curious neighbours alike.
              Tap the link below for turn-by-turn directions.
            </p>

            <div className="mt-12 space-y-2">
              {items.map((it) => {
                const Icon = it.icon;
                const v = contact[it.valueKey];
                const href = it.href ? it.href(v) : null;
                const Content = (
                  <div className="flex items-start gap-5 py-5 border-b border-[#E8E2D9] group">
                    <div className="w-11 h-11 rounded-full bg-[#F2EBE1] flex items-center justify-center shrink-0 group-hover:bg-[#1A362D] transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#1A362D] group-hover:text-[#C5A059] transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#7A8C84] font-semibold mb-1">
                        {it.label}
                      </p>
                      <p
                        data-testid={`contact-${it.valueKey}`}
                        className="text-[#1A362D] text-lg font-light"
                      >
                        {v}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={it.label}
                    href={href}
                    data-testid={`contact-${it.valueKey}-link`}
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={it.label}>{Content}</div>
                );
              })}
            </div>

            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-directions-btn"
              className="inline-flex items-center gap-3 bg-[#1A362D] text-[#FAF8F5] hover:bg-[#B85C38] transition-colors duration-300 rounded-full px-8 py-4 text-[12px] uppercase tracking-[0.25em] font-semibold mt-12"
            >
              Get Directions on Google Maps
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] overflow-hidden border border-[#E8E2D9] shadow-[0_30px_60px_-20px_rgba(26,54,45,0.25)] bg-white">
              <iframe
                src={contact.embedSrc}
                title="Suchi Farm location map"
                data-testid="contact-map-iframe"
                className="w-full h-[480px] md:h-[600px] block"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={contact.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="map-overlay-link"
                className="absolute bottom-5 right-5 bg-[#FAF8F5] text-[#1A362D] hover:bg-[#C5A059] transition-colors rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.25em] font-semibold inline-flex items-center gap-2 shadow-lg"
              >
                Open in Maps
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
