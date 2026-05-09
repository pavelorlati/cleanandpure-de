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
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
    <div className="relative mx-auto max-w-[1400px] px-6 py-36 md:py-52 lg:py-64">
      <div className="max-w-2xl space-y-10">
        <p className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
          Gebäudereinigung Hamburg
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.05] tracking-tight">
          Sauberkeit,<br />die man <span className="font-normal text-primary">sieht</span>.
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed font-light">
          Clean &amp; Pure steht für zuverlässige, gründliche Reinigung – seit Jahren der vertrauensvolle Partner für Unternehmen in Hamburg.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
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
