import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

export default function Contact() {
  const { contact } = site;
  const { t, lang } = useLang();
  const kn = lang === "kn";

  const labelClass = kn
    ? "font-kannada text-xs"
    : "text-[10px] tracking-[0.3em] uppercase";
  const valueClass = kn ? "font-kannada text-base md:text-lg" : "text-lg font-light";

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
              className={`text-[#B85C38] font-semibold mb-6 ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.35em] uppercase"}`}
            >
              — {t.contact.overline}
            </p>
            <h2
              data-testid="contact-title"
              className={`text-[#1A362D] leading-[1.05] tracking-tight font-medium ${kn ? "font-kannada text-3xl md:text-4xl" : "font-display text-4xl md:text-5xl lg:text-6xl"}`}
            >
              {t.contact.title}
            </h2>
            <p
              className={`text-[#4A5D54] mt-6 font-light leading-relaxed max-w-md ${kn ? "font-kannada text-base" : "text-base md:text-lg"}`}
            >
              {t.contact.description}
            </p>

            <div className="mt-12 space-y-2">
              <div className="py-5 border-b border-[#E8E2D9] group">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBE1] flex items-center justify-center shrink-0 group-hover:bg-[#1A362D] transition-colors duration-300">
                    <Phone className="w-4 h-4 text-[#1A362D] group-hover:text-[#C5A059] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-[#7A8C84] font-semibold mb-2 ${labelClass}`}>
                      {t.contact.phone}
                    </p>
                    <div className="flex flex-col gap-1">
                      {contact.phones.map((p, i) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s+/g, "")}`}
                          data-testid={`contact-phone-${i}`}
                          className={`text-[#1A362D] hover:text-[#B85C38] transition-colors w-fit ${valueClass}`}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${contact.email}`}
                data-testid="contact-email-link"
                className="block"
              >
                <div className="flex items-start gap-5 py-5 border-b border-[#E8E2D9] group">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBE1] flex items-center justify-center shrink-0 group-hover:bg-[#1A362D] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-[#1A362D] group-hover:text-[#C5A059] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-[#7A8C84] font-semibold mb-1 ${labelClass}`}>
                      {t.contact.email}
                    </p>
                    <p data-testid="contact-email" className={`text-[#1A362D] break-all ${valueClass}`}>
                      {contact.email}
                    </p>
                  </div>
                </div>
              </a>

              <div className="py-5 border-b border-[#E8E2D9] group">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBE1] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#1A362D]" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-[#7A8C84] font-semibold mb-1 ${labelClass}`}>
                      {t.contact.address}
                    </p>
                    <p data-testid="contact-address" className={`text-[#1A362D] ${valueClass}`}>
                      {contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 border-b border-[#E8E2D9] group">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBE1] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#1A362D]" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-[#7A8C84] font-semibold mb-1 ${labelClass}`}>
                      {t.contact.hours}
                    </p>
                    <p data-testid="contact-hours" className={`text-[#1A362D] ${valueClass}`}>
                      {contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-directions-btn"
              className={`inline-flex items-center gap-3 bg-[#1A362D] text-[#FAF8F5] hover:bg-[#B85C38] transition-colors duration-300 rounded-full px-8 py-4 font-semibold mt-12 ${kn ? "font-kannada text-sm" : "text-[12px] uppercase tracking-[0.25em]"}`}
            >
              {t.contact.directionsBtn}
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
                className={`absolute bottom-5 right-5 bg-[#FAF8F5] text-[#1A362D] hover:bg-[#C5A059] transition-colors rounded-full px-5 py-3 font-semibold inline-flex items-center gap-2 shadow-lg ${kn ? "font-kannada text-xs" : "text-[11px] uppercase tracking-[0.25em]"}`}
              >
                {t.contact.openInMaps}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
