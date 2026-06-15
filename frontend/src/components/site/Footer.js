import { MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1A362D] text-[#FAF8F5] pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <a
              href="#home"
              data-testid="footer-logo"
              className="flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1A362D] font-display text-xl">
                S
              </span>
              <span className="font-display text-3xl">{site.business.name}</span>
            </a>
            <p className="text-[#FAF8F5]/70 font-light leading-relaxed mt-6 max-w-sm">
              {site.business.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-semibold mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {site.nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    data-testid={`footer-link-${n.id}`}
                    className="text-[#FAF8F5]/85 hover:text-[#C5A059] transition-colors text-sm"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-semibold mb-5">
              Reach Us
            </p>
            <ul className="space-y-3 text-sm text-[#FAF8F5]/85 font-light">
              {site.contact.phones.map((p, i) => (
                <li key={p} data-testid={`footer-phone-${i}`}>
                  <a
                    href={`tel:${p.replace(/\s+/g, "")}`}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li data-testid="footer-email">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-[#C5A059] transition-colors break-all"
                >
                  {site.contact.email}
                </a>
              </li>
              <li data-testid="footer-address">{site.contact.address}</li>
              <li data-testid="footer-hours">{site.contact.hours}</li>
            </ul>
            <a
              href={site.contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-directions-btn"
              className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.25em] uppercase text-[#C5A059] hover:text-[#FAF8F5] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-[#FAF8F5]/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-[#FAF8F5]/55 tracking-wide">
            © {new Date().getFullYear()} {site.business.name}. A family business,
            tended with care.
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#FAF8F5]/45">
            Silk Cocoons · Mulberry · Grading
          </p>
        </div>
      </div>
    </footer>
  );
}
