import { MapPin } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t, lang } = useLang();
  const kn = lang === "kn";

  const navItems = [
    { id: "home", label: t.nav.home, href: "#home" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "services", label: t.nav.services, href: "#services" },
    { id: "gallery", label: t.nav.gallery, href: "#gallery" },
    { id: "live", label: t.nav.live, href: "#live" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  const labelClass = kn
    ? "font-kannada text-xs"
    : "text-[10px] tracking-[0.3em] uppercase";

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
            <p
              className={`text-[#FAF8F5]/70 font-light leading-relaxed mt-6 max-w-sm ${kn ? "font-kannada text-sm" : ""}`}
            >
              {t.hero.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className={`text-[#C5A059] font-semibold mb-5 ${labelClass}`}>
              {t.footer.explore}
            </p>
            <ul className="space-y-3">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    data-testid={`footer-link-${n.id}`}
                    className={`text-[#FAF8F5]/85 hover:text-[#C5A059] transition-colors ${kn ? "font-kannada text-sm" : "text-sm"}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className={`text-[#C5A059] font-semibold mb-5 ${labelClass}`}>
              {t.footer.reachUs}
            </p>
            <ul
              className={`space-y-3 text-[#FAF8F5]/85 font-light ${kn ? "font-kannada text-sm" : "text-sm"}`}
            >
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
              className={`inline-flex items-center gap-2 mt-6 text-[#C5A059] hover:text-[#FAF8F5] transition-colors ${kn ? "font-kannada text-sm" : "text-[11px] tracking-[0.25em] uppercase"}`}
            >
              <MapPin className="w-3.5 h-3.5" />
              {t.footer.getDirections}
            </a>
          </div>
        </div>

        <div className="border-t border-[#FAF8F5]/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p
            className={`text-[#FAF8F5]/55 tracking-wide ${kn ? "font-kannada text-xs" : "text-xs"}`}
          >
            © {new Date().getFullYear()} {site.business.name}. {t.footer.copyright}
          </p>
          <p
            className={`text-[#FAF8F5]/45 ${kn ? "font-kannada text-xs" : "text-[10px] tracking-[0.3em] uppercase"}`}
          >
            {t.footer.tag}
          </p>
        </div>
      </div>
    </footer>
  );
}
