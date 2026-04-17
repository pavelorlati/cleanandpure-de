import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {open && (
        <div className="flex flex-col gap-3 mr-3">
          <a
            href="tel:04035966171"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Anrufen"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/cleanandpure_gebaeudereinigung/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="mailto:info@cleanandpure.de"
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="E-Mail"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-28 md:w-11 md:h-32 rounded-l-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Kontakt öffnen"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <span
            className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            Kontakt
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;
