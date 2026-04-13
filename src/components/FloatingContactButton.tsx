import { useState, useEffect, useRef } from "react";
import { Phone, Mail, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const [onPrimary, setOnPrimary] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const cy = rect.top + rect.height / 2;
      const cx = rect.left + rect.width / 2;

      // Hide button temporarily to get element behind it
      const el = btnRef.current;
      const prev = el.style.pointerEvents;
      el.style.pointerEvents = "none";
      const behind = document.elementFromPoint(cx, cy);
      el.style.pointerEvents = prev;

      if (behind) {
        const bg = window.getComputedStyle(behind).backgroundColor;
        // Check if background is close to our primary petrol color
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const [, r, g, b] = match.map(Number);
          // Primary is ~hsl(181,100%,25%) ≈ rgb(0,128,127)
          // Detect teal/petrol backgrounds
          const isTeal = g > 80 && b > 80 && r < 50 && Math.abs(g - b) < 30;
          setOnPrimary(isTeal);
        } else {
          setOnPrimary(false);
        }
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const bgClass = onPrimary
    ? "bg-foreground text-background"
    : "bg-primary text-primary-foreground";

  const glowColor = onPrimary
    ? "0 0 20px 6px rgba(0,0,0,0.5), 0 0 40px 12px rgba(0,0,0,0.3)"
    : "0 0 20px 6px hsl(181 100% 25% / 0.5), 0 0 40px 12px hsl(181 100% 25% / 0.3)";

  const iconGlow = onPrimary
    ? "0 0 12px 4px rgba(0,0,0,0.4), 0 0 24px 8px rgba(0,0,0,0.2)"
    : "0 0 12px 4px hsl(181 100% 25% / 0.4), 0 0 24px 8px hsl(181 100% 25% / 0.2)";

  return (
    <div
      ref={btnRef}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
    >
      {open && (
        <div className="flex flex-col gap-3 mr-3 animate-in slide-in-from-right duration-200">
          <a
            href="tel:04035966171"
            className={`w-11 h-11 md:w-14 md:h-14 rounded-full ${bgClass} flex items-center justify-center transition-all duration-300 hover:scale-110`}
            style={{ boxShadow: iconGlow }}
            aria-label="Anrufen"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/cleanandpure_gebaeudereinigung/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 md:w-14 md:h-14 rounded-full ${bgClass} flex items-center justify-center transition-all duration-300 hover:scale-110`}
            style={{ boxShadow: iconGlow }}
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="mailto:info@cleanandpure.de"
            className={`w-11 h-11 md:w-14 md:h-14 rounded-full ${bgClass} flex items-center justify-center transition-all duration-300 hover:scale-110`}
            style={{ boxShadow: iconGlow }}
            aria-label="E-Mail"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`w-10 h-28 md:w-12 md:h-32 rounded-l-2xl ${bgClass} flex items-center justify-center transition-all duration-300 hover:opacity-90`}
        style={{ boxShadow: glowColor }}
        aria-label="Kontakt öffnen"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <span
            className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase"
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
