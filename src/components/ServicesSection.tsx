import { Check } from "lucide-react";

const unterhaltsreinigung = [
  "Shopreinigung",
  "Büroreinigung",
  "Hotelreinigung",
  "Praxisreinigung",
  "Außenreinigung",
  "Hygienereinigung",
  "Haushaltsreinigung",
  "Treppenhausreinigung",
];

const sonderreinigung = [
  "Glasreinigung",
  "Grundreinigung",
  "Polsterreinigung",
  "Bauendreinigung",
  "Fassadenreinigung",
  "Hausmeisterservice",
  "Teppichgrundreinigung",
  "Bodensanierung / -Versiegelung",
];

const ServiceGrid = ({ items }: { items: string[] }) => (
  <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-center gap-3 text-foreground rounded-md px-3 py-2 bg-background hover:bg-primary/5 transition-colors"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0">
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
        </span>
        <span className="text-sm tracking-wide">{item}</span>
      </li>
    ))}
  </ul>
);

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.25em] uppercase text-center mb-4">
        Unsere Leistungen
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-4">
        Professionelle Reinigung <span className="text-primary">aus einer Hand</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Von der regelmäßigen Unterhaltsreinigung bis zur spezialisierten Sonderreinigung – wir haben die passende Lösung für Sie.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-border bg-secondary/30 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-primary/20">
            <span className="w-1.5 h-8 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold tracking-wide">
              Unterhaltsreinigung
            </h3>
          </div>
          <ServiceGrid items={unterhaltsreinigung} />
        </div>
        <div className="rounded-2xl border border-border bg-primary/5 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-primary/20">
            <span className="w-1.5 h-8 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold tracking-wide">
              Sonderreinigung
            </h3>
          </div>
          <ServiceGrid items={sonderreinigung} />
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
