import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {open && (
        <div className="flex flex-col gap-3 mr-3 animate-in slide-in-from-right duration-200">
          <a
            href="tel:04035966171"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform ring-4 ring-primary/30"
            aria-label="Anrufen"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/cleanandpure.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform ring-4 ring-primary/30"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="mailto:info@cleanandpure.de"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform ring-4 ring-primary/30"
            aria-label="E-Mail"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-l-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all animate-pulse hover:animate-none ring-4 ring-primary/40"
        aria-label="Kontakt öffnen"
      >
        {open ? (
          <X className="w-7 h-7" />
        ) : (
          <div className="flex flex-col items-center gap-0.5">
            <Phone className="w-6 h-6" />
            <span className="text-[9px] font-bold tracking-wider uppercase">Kontakt</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;
