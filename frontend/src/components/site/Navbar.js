import { useState, useEffect } from "react";
import { Menu, X, MapPin, Languages } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: t.nav.home, href: "#home" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "services", label: t.nav.services, href: "#services" },
    { id: "gallery", label: t.nav.gallery, href: "#gallery" },
    { id: "live", label: t.nav.live, href: "#live" },
    { id: "contact", label: t.nav.contact, href: "#contact" },
  ];

  const labelClass =
    lang === "kn"
      ? "font-kannada text-[14px] tracking-normal"
      : "text-[13px] uppercase tracking-[0.2em]";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/85 backdrop-blur-xl border-b border-[#E8E2D9]/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a
          href="#home"
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-full bg-[#1A362D] flex items-center justify-center text-[#C5A059] font-display text-lg leading-none">
            S
          </span>
          <span className="font-display text-2xl text-[#1A362D] tracking-tight">
            {site.business.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              data-testid={`nav-link-${item.id}`}
              className={`${labelClass} text-[#4A5D54] hover:text-[#1A362D] transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            data-testid="lang-toggle"
            aria-label="Toggle language"
            className={`hidden sm:inline-flex items-center gap-1.5 text-[#1A362D] hover:text-[#B85C38] transition-colors px-3 py-2 rounded-full border border-[#1A362D]/15 hover:border-[#B85C38]/40 ${
              lang === "kn"
                ? "font-display text-sm tracking-tight"
                : "font-kannada text-sm"
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            {t.nav.lang}
          </button>

          <a
            href={site.contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-directions-btn"
            className={`hidden md:inline-flex items-center gap-2 bg-[#1A362D] text-[#FAF8F5] hover:bg-[#2C4A3F] transition-colors rounded-full px-5 py-2.5 font-semibold ${
              lang === "kn"
                ? "font-kannada text-sm tracking-normal"
                : "text-[12px] uppercase tracking-[0.18em]"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            {t.nav.visitUs}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden text-[#1A362D] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="lg:hidden bg-[#FAF8F5] border-t border-[#E8E2D9] px-6 py-6"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${item.id}`}
                className={`${labelClass} text-[#1A362D]`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggle();
                setOpen(false);
              }}
              data-testid="mobile-lang-toggle"
              className={`inline-flex items-center gap-2 text-[#1A362D] self-start ${
                lang === "kn"
                  ? "font-display text-sm tracking-tight"
                  : "font-kannada text-sm"
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              {t.nav.lang}
            </button>
            <a
              href={site.contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-navbar-directions-btn"
              className={`inline-flex items-center justify-center gap-2 bg-[#1A362D] text-[#FAF8F5] rounded-full px-5 py-3 font-semibold mt-2 ${
                lang === "kn"
                  ? "font-kannada text-sm"
                  : "text-[12px] uppercase tracking-[0.18em]"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              {t.nav.visitUs}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
