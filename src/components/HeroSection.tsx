import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-skyline.jpg";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-foreground">
    <img
      src={heroImg}
      alt="Clean & Pure – Gebäudereinigung in Hamburg"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
    <div className="relative mx-auto max-w-[1400px] px-6 py-36 md:py-52 lg:py-56">
      <div className="max-w-2xl space-y-10">
        <p className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
          Clean &amp; Pure in Hamburg
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.05] tracking-tight">
          Ihr Gebäude.<br />
          <span className="font-normal text-primary">Makellos.</span> Täglich.
        </h1>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="text-base font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/kontakt">
              Jetzt Angebot anfordern
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold tracking-wide border-primary text-primary bg-transparent hover:bg-primary/10" asChild>
            <Link to="/leistungen">Unsere Leistungen →</Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Stats-Leiste */}
    <div className="relative bg-foreground text-background border-t border-background/10">
      <div className="mx-auto max-w-[1400px] px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <span className="text-xl font-light text-primary">5,0</span>
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-xs tracking-[0.2em] uppercase text-background/70">Google Bewertung</span>
        </div>
        <div className="flex items-baseline gap-3 justify-center md:justify-start">
          <span className="text-xl font-light text-primary">100+</span>
          <span className="text-xs tracking-[0.2em] uppercase text-background/70">Zufriedene Kunden</span>
        </div>
        <div className="flex items-baseline gap-3 justify-center md:justify-start">
          <span className="text-xl font-light text-primary">15+</span>
          <span className="text-xs tracking-[0.2em] uppercase text-background/70">Jahre Erfahrung</span>
        </div>
        <div className="flex items-center gap-3 justify-center md:justify-end">
          <span className="text-xs tracking-[0.2em] uppercase text-background/70">Hamburg &amp; Umgebung</span>
          <a href="tel:+494035966171" className="text-sm font-medium text-primary hover:underline">
            040 / 35 96 61 71
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
