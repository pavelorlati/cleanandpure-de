import { Link } from "react-router-dom";
import refTreppen from "@/assets/ref-treppen.jpg";
import refBuero from "@/assets/ref-buero.jpg";
import refGlas from "@/assets/ref-glas.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refPolster from "@/assets/ref-polster.jpg";
import refFassade from "@/assets/ref-fassade.jpg";
import equipment from "@/assets/equipment.jpg";
import vorherNachher from "@/assets/vorher-nachher-parkett.jpg";

const services = [
  { num: "01", kicker: "Regelmäßig & verlässlich", title: "Unterhaltsreinigung", text: "Täglich, wöchentlich oder nach individuellem Turnus – zuverlässig und termingerecht.", img: refTreppen },
  { num: "02", kicker: "Hygienisch & professionell", title: "Büroreinigung", text: "Professionelle Reinigung für Büros und Arbeitsräume – für ein produktives Arbeitsumfeld.", img: refBuero },
  { num: "03", kicker: "Gäste begeistern", title: "Hotelreinigung", text: "Diskrete, zuverlässige Reinigung für Hotels nach höchsten Hygienestandards.", img: refFassade },
  { num: "04", kicker: "Medizinische Standards", title: "Praxis- & Hygienereinigung", text: "Spezialisierte Hygienereinigung für Arztpraxen und medizinische Einrichtungen.", img: refBoden },
  { num: "05", kicker: "Kristallklar", title: "Glas- & Fassadenreinigung", text: "Streifenfreie Glas- und Fassadenreinigung für ein gepflegtes Erscheinungsbild.", img: refGlas },
  { num: "06", kicker: "Intensive Tiefenpflege", title: "Grund- & Sonderreinigung", text: "Intensive Tiefenreinigung für Räume, die eine gründliche Auffrischung brauchen.", img: vorherNachher },
  { num: "07", kicker: "Textilpflege", title: "Polster- & Teppichreinigung", text: "Professionelle Reinigung von Teppichböden, Polstermöbeln und textilen Belägen.", img: refPolster },
  { num: "08", kicker: "Schutz & Glanz", title: "Bodensanierung & Versiegelung", text: "Bodenpflege, Sanierung und Versiegelung für alle Bodenbeläge und Oberflächen.", img: refBoden },
  { num: "09", kicker: "Rundum-Betreuung", title: "Hausmeisterservice", text: "Zuverlässiger Hausmeisterservice für Wartung, Pflege und technischen Betrieb.", img: equipment },
  { num: "10", kicker: "Übergabebereit", title: "Bauendreinigung", text: "Professionelle Endreinigung nach Bau- und Renovierungsarbeiten.", img: refBoden },
  { num: "11", kicker: "Gepflegte Gemeinschaftsflächen", title: "Außen- & Treppenhausreinigung", text: "Reinigung von Treppenhäusern, Außenanlagen und Gemeinschaftsflächen.", img: refTreppen },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Was wir für Sie leisten
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Alles aus <span className="text-primary font-normal">einer Hand</span>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">{services.length} Leistungen</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {services.map((s) => (
          <article key={s.num} className="group">
            <div className="overflow-hidden mb-5">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-56 object-cover transition-opacity group-hover:opacity-85"
              />
            </div>
            <p className="text-xs tracking-[0.25em] text-primary font-medium mb-2">{s.num}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{s.kicker}</p>
            <h3 className="text-lg font-normal tracking-wide mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-16 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-light leading-tight mb-4">
          Die passende Leistung <span className="text-primary font-normal">nicht gefunden?</span>
        </h3>
        <p className="text-muted-foreground mb-8">
          Sprechen Sie uns an – wir finden gemeinsam die optimale Lösung für Ihre Anforderungen.
        </p>
        <Link
          to="/kontakt"
          className="inline-block text-primary hover:underline underline-offset-4 font-medium"
        >
          Jetzt Angebot anfordern →
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
