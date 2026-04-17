const privatServices = [
  "Haushaltsreinigung",
  "Fenster- & Glasreinigung",
  "Polsterreinigung",
  "Teppichgrundreinigung",
  "Grundreinigung",
  "Treppenhausreinigung",
];

const gewerbeServices = [
  "Büroreinigung",
  "Shopreinigung",
  "Hotelreinigung",
  "Praxisreinigung",
  "Bauendreinigung",
  "Fassadenreinigung",
  "Hausmeisterservice",
  "Bodensanierung",
];

const SegmentList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((s) => (
      <li key={s} className="flex items-baseline gap-3">
        <span className="w-4 h-px bg-primary shrink-0 translate-y-[-4px]" />
        <span className="text-sm tracking-wide">{s}</span>
      </li>
    ))}
  </ul>
);

const CustomerSegments = () => (
  <section className="py-24 bg-background border-t border-border">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.25em] uppercase text-center mb-4">
        Für jeden das Richtige
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-16">
        Privat- & Gewerbekunden
      </h2>
      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold tracking-wide mb-2">Für Privatkunden</h3>
          <p className="text-sm text-muted-foreground mb-6">Sauberkeit und Wohlbefinden für Ihr Zuhause</p>
          <SegmentList items={privatServices} />
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-wide mb-2">Für Gewerbekunden</h3>
          <p className="text-sm text-muted-foreground mb-6">Professionelle Reinigung für Ihr Unternehmen</p>
          <SegmentList items={gewerbeServices} />
        </div>
      </div>
    </div>
  </section>
);

export default CustomerSegments;
