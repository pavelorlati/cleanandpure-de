import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import skyline from "@/assets/cp/team-hamburg-skyline.jpg";
import firmenwagen from "@/assets/cp/firmenwagen-fensterputz.jpg";
import boden from "@/assets/cp/team-bodenreinigung.jpg";
import glasfassade from "@/assets/cp/glasfassade-buerste.jpg";

// 1:1 wie alte Seite (clean-pure.vercel.app)
const slides = [
  { src: skyline,     headline: "Ihr Gebäude.",       sub: "Makellos. Täglich.",          label: "Clean & Pure in Hamburg" },
  { src: firmenwagen, headline: "Glasreinigung.",     sub: "Streifenfrei. Professionell.", label: "Unser Team täglich im Einsatz" },
  { src: boden,       headline: "Tiefenreinigung.",   sub: "Für sichtbare Ergebnisse.",   label: "Grundreinigung mit Profi-Maschinen" },
  { src: glasfassade, headline: "Fassadenreinigung.", sub: "In jeder Höhe.",              label: "Glas- & Fassadenreinigung" },
];

const SLIDE_MS = 8000;

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(performance.now());

  useEffect(() => {
    startRef.current = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, ((t - startRef.current) / SLIDE_MS) * 100);
      setProgress(p);
      if (p >= 100) {
        setIndex((i) => (i + 1) % slides.length);
        startRef.current = performance.now();
        setProgress(0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const go = (i: number) => {
    setIndex(i);
    startRef.current = performance.now();
    setProgress(0);
  };

  const current = slides[index];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Bilder-Stack mit Crossfade */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[2200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.src}
              alt={s.label}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={i === 0 ? "high" : "low"}
              className="w-full h-full object-cover animate-hero-kenburns will-change-transform"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 h-full flex flex-col justify-between max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-20" />

        <div className="pb-32 md:pb-24">
          <div key={`text-${index}`} className="animate-fade-in">
            <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.22em] text-white/50 mb-4">
              {current.label}
            </p>
            <h1 className="text-[1.75rem] xs:text-[2rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white sm:leading-[0.95] mb-4 max-w-3xl tracking-tight">
              <span className="block">{current.headline}</span>
              <span className="block">{current.sub}</span>
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-primary-glow transition-colors"
            >
              Jetzt Angebot anfordern
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 px-2 py-4 text-[0.7rem] tracking-[0.2em] uppercase font-medium text-white/80 hover:text-white transition-colors"
            >
              Unsere Leistungen →
            </Link>
          </div>

          {/* Slide-Progress (4 Balken) */}
          <div className="mt-10 flex gap-3 max-w-sm items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
                className={`relative h-[2px] bg-white/15 overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === index ? "flex-[3]" : "flex-1"
                }`}
              >
                <span
                  className="absolute inset-y-0 left-0 bg-white"
                  style={{
                    width:
                      i < index ? "100%" : i === index ? `${progress}%` : "0%",
                    transition: i === index ? "none" : "width 200ms linear",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats-Leiste unten */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-5 gap-4 py-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-base">5,0 ★</span>
            <span className="text-white uppercase tracking-wider text-[0.65rem] font-semibold">Google Bewertung</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-base">100+</span>
            <span className="text-white uppercase tracking-wider text-[0.65rem] font-semibold">Zufriedene Kunden</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-base">15+</span>
            <span className="text-white uppercase tracking-wider text-[0.65rem] font-semibold">Jahre Erfahrung</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Hamburg</span>
            <span className="text-white uppercase tracking-wider text-[0.65rem] font-semibold">&amp; Umgebung</span>
          </div>
          <a
            href="tel:+494035966171"
            className="hidden md:flex items-center justify-end gap-2 text-white font-medium border border-white/20 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> 040 - 35 96 61 71
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
