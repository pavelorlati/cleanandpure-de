import { useState } from "react";
import { MessageCircle, Phone, Mail, Instagram, X } from "lucide-react";

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
            <Instagram className="w-5 h-5" />
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
