import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import hero1 from "@/assets/cp/team-hamburg-skyline.jpg";
import hero2 from "@/assets/cp/firmenwagen-fensterputz.jpg";
import hero3 from "@/assets/cp/team-bodenreinigung.jpg";
import hero4 from "@/assets/cp/glasfassade-buerste.jpg";

const slides = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Clean & Pure in Hamburg"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative container-x pt-40 pb-16 md:pb-24">
        <p className="kicker mb-6 animate-fade-in">Clean &amp; Pure in Hamburg</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-10 animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "backwards" }}>
          Ihr Gebäude.<br />Makellos. Täglich.
        </h1>
        <div className="flex flex-wrap gap-4 items-center animate-fade-in" style={{ animationDelay: "250ms", animationFillMode: "backwards" }}>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow transition-colors rounded-sm"
          >
            Jetzt Angebot anfordern
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
          >
            Unsere Leistungen →
          </Link>
        </div>
      </div>

      <div className="relative border-t border-border bg-background/80 backdrop-blur">
        <div className="container-x grid grid-cols-2 md:grid-cols-5 gap-6 py-6 text-sm">
          <div className="flex items-baseline gap-2">
            <span className="text-primary text-xl font-bold">5,0</span>
            <span className="text-muted-foreground text-xs tracking-wide">★ Google Bewertung</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-primary text-xl font-bold">100+</span>
            <span className="text-muted-foreground text-xs tracking-wide">Zufriedene Kunden</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-primary text-xl font-bold">15+</span>
            <span className="text-muted-foreground text-xs tracking-wide">Jahre Erfahrung</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-foreground font-semibold">Hamburg</span>
            <span className="text-muted-foreground text-xs tracking-wide">&amp; Umgebung</span>
          </div>
          <a href="tel:+494035966171" className="flex items-center gap-2 text-primary font-semibold md:justify-end">
            <Phone className="w-4 h-4" /> 040 - 35 96 61 71
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
