import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import slide1 from "@/assets/ref-boden.jpg";
import slide2 from "@/assets/ref-fassade.jpg";
import slide3 from "@/assets/ref-polster.jpg";
import slide4 from "@/assets/ref-glas.jpg";

const slides = [
  { src: slide1, alt: "Praxis- und Hygienereinigung" },
  { src: slide2, alt: "Hotelreinigung" },
  { src: slide3, alt: "Polster- und Teppichreinigung" },
  { src: slide4, alt: "Glas- und Fassadenreinigung" },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
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
};

export default HeroSection;
