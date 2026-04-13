import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden">
    <img
      src={heroImg}
      alt="Professionelle Gebäudereinigung"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-primary/80" />
    <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-36 lg:py-44">
      <div className="max-w-2xl space-y-6">
        <p className="text-primary-foreground/80 text-sm font-medium tracking-[0.2em] uppercase">
          Ihr Partner für Sauberkeit in Hamburg
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-wide">
          Herzlich Willkommen bei Clean&nbsp;&amp;&nbsp;Pure
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
          Wir sind ein familiengeführtes Dienstleistungsunternehmen aus Hamburg und bieten professionelle Reinigungslösungen für Privat- und Gewerbekunden.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" variant="secondary" className="text-base font-semibold tracking-wide" asChild>
            <a href="#contact">
              Jetzt Angebot anfragen
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
            <a href="#services">Unsere Leistungen</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
