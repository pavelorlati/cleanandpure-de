import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "https://clean-pure.vercel.app/images/hero-mopping.png",
    kicker: "Regelmäßig & verlässlich",
    title: "Unterhaltsreinigung",
    description:
      "Täglich, wöchentlich oder nach individuellem Turnus – zuverlässig und termingerecht.",
  },
  {
    image: "https://clean-pure.vercel.app/images/hero-buero.png",
    kicker: "Hygienisch & professionell",
    title: "Büroreinigung",
    description:
      "Professionelle Reinigung für Büros und Arbeitsräume – für ein hygienisches, produktives Arbeitsumfeld.",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    kicker: "Gäste begeistern",
    title: "Hotelreinigung",
    description:
      "Diskrete, zuverlässige Reinigung für Hotels und Beherbergungsbetriebe nach höchsten Hygienestandards.",
  },
  {
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    kicker: "Medizinische Standards",
    title: "Praxis- & Hygienereinigung",
    description:
      "Spezialisierte Hygienereinigung für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen.",
  },
  {
    image: "https://clean-pure.vercel.app/images/hero-glasreinigung.webp",
    kicker: "Kristallklar",
    title: "Glas- & Fassadenreinigung",
    description:
      "Streifenfreie Glas- und Fassadenreinigung für ein gepflegtes Erscheinungsbild Ihres Gebäudes.",
  },
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    kicker: "Intensive Tiefenpflege",
    title: "Grund- & Sonderreinigung",
    description:
      "Intensive Tiefenreinigung für Räume, die eine gründliche Auffrischung und Intensivpflege benötigen.",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    kicker: "Textilpflege",
    title: "Polster- & Teppichreinigung",
    description:
      "Professionelle Reinigung von Teppichböden, Polstermöbeln und textilen Belägen aller Art.",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    kicker: "Schutz & Glanz",
    title: "Bodensanierung & Versiegelung",
    description:
      "Professionelle Bodenpflege, Sanierung und Versiegelung für alle Bodenbeläge und Oberflächen.",
  },
  {
    image: "https://clean-pure.vercel.app/images/hero-sunset.png",
    kicker: "Rundum-Betreuung",
    title: "Hausmeisterservice",
    description:
      "Zuverlässiger Hausmeisterservice für Wartung, Pflege und technischen Betrieb Ihrer Immobilie.",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    kicker: "Übergabebereit",
    title: "Bauendreinigung",
    description:
      "Professionelle Endreinigung nach Bau- und Renovierungsarbeiten für eine sofort nutzbare Immobilie.",
  },
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    kicker: "Gepflegte Gemeinschaftsflächen",
    title: "Außen- & Treppenhausreinigung",
    description:
      "Reinigung von Treppenhäusern, Außenanlagen und Gemeinschaftsflächen für gepflegte Immobilien.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-background">
    {/* Intro */}
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
        Was wir für Sie leisten
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground">
        Alles aus einer Hand
      </h1>
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end border-t border-border pt-8">
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          Vom täglichen Reinigungsservice bis zur Spezialreinigung – das komplette Spektrum
          professioneller Gebäudedienstleistungen in Hamburg.
        </p>
        <div className="md:text-right">
          <span className="text-3xl font-semibold text-primary align-middle">{services.length}</span>
          <span className="ml-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Leistungen
          </span>
        </div>
      </div>
    </div>

    {/* List */}
    <div className="mx-auto max-w-6xl px-6 pb-20 border-t border-border">
      {services.map((s, i) => (
        <article
          key={s.title}
          className="group grid grid-cols-12 gap-5 md:gap-8 items-center py-7 border-b border-border transition-colors hover:bg-secondary/30"
        >
          <div className="col-span-12 md:col-span-1 text-xs tracking-[0.25em] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-secondary">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[11px] font-medium text-primary tracking-[0.25em] uppercase mb-2">
              {s.kicker}
            </p>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight mb-2 text-foreground">
              {s.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{s.description}</p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary tracking-[0.15em] uppercase">
              Mehr erfahren
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </article>
      ))}
    </div>

    {/* CTA */}
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <div className="border-t border-border pt-14 text-center">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-foreground">
          Die passende Leistung nicht gefunden?
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-7 leading-relaxed">
          Sprechen Sie uns an – wir finden gemeinsam die optimale Lösung für Ihre Anforderungen.
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-xs font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
        >
          Jetzt Angebot anfordern
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
