import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div className="absolute inset-0 bg-black/75" />
    <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:py-44 lg:py-52">
      <div className="max-w-2xl space-y-8">
        <p className="text-primary-foreground/70 text-sm font-medium tracking-[0.25em] uppercase">
          Ihr Partner für Sauberkeit in Hamburg
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-wide">
          Herzlich Willkommen bei{" "}
          <span className="text-primary">Clean&nbsp;&amp;&nbsp;Pure</span>
        </h1>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" className="text-base font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/kontakt">
              Jetzt Angebot anfragen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold tracking-wide border-primary text-primary bg-transparent hover:bg-primary/10" asChild>
            <Link to="/leistungen">Unsere Leistungen</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
