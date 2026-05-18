import { Phone, Mail } from "lucide-react";

const FloatingContactButton = () => (
  <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
    <a
      href="tel:+494035966171"
      aria-label="Anrufen"
      className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-glow transition-colors"
    >
      <Phone className="w-4 h-4" />
    </a>
    <a
      href="mailto:info@cleanandpure.de"
      aria-label="E-Mail"
      className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-glow transition-colors"
    >
      <Mail className="w-4 h-4" />
    </a>
  </div>
);

export default FloatingContactButton;
