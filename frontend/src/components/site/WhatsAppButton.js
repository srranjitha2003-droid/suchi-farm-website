import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  const text = encodeURIComponent(
    `Hello Suchi Farm, I'd like to enquire about your silk cocoons / fishery.`,
  );
  const href = `https://wa.me/${site.contact.whatsapp}?text=${text}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-btn"
      aria-label="Chat with Suchi Farm on WhatsApp"
      className="fixed bottom-6 left-6 z-40 group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1FB855] text-white rounded-full pl-4 pr-5 py-3 shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-60" />
      </span>
      <span className="text-[12px] tracking-[0.15em] uppercase font-semibold hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
