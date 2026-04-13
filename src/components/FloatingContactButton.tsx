import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Expanded options */}
      {open && (
        <div className="flex flex-col gap-3 mr-3 animate-in slide-in-from-right duration-200">
          <a
            href="tel:04035966171"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Anrufen"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/cleanandpure.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="mailto:info@cleanandpure.de"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="E-Mail"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-l-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Kontakt öffnen"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
