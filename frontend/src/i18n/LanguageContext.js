import { createContext, useContext, useEffect, useState } from "react";
import translations from "@/i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "suchifarm.lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore
    }
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "kn" : "en"));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback to english if used outside provider
    return { lang: "en", setLang: () => {}, toggle: () => {}, t: translations.en };
  }
  return ctx;
}
