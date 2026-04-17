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

const ServiceList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-baseline gap-3 text-foreground">
        <span className="w-4 h-px bg-primary shrink-0 translate-y-[-4px]" />
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
        Professionelle Reinigung aus einer Hand
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Von der regelmäßigen Unterhaltsreinigung bis zur spezialisierten Sonderreinigung – wir haben die passende Lösung für Sie.
      </p>

      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold tracking-wide mb-6 pb-3 border-b border-border">
            Unterhaltsreinigung
          </h3>
          <ServiceList items={unterhaltsreinigung} />
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-wide mb-6 pb-3 border-b border-border">
            Sonderreinigung
          </h3>
          <ServiceList items={sonderreinigung} />
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
