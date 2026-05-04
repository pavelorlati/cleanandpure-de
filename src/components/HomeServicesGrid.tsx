import { Link } from "react-router-dom";
import refBuero from "@/assets/ref-buero.jpg";
import refGlas from "@/assets/ref-glas.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refFassade from "@/assets/ref-fassade.jpg";
import refTreppen from "@/assets/ref-treppen.jpg";
import refPolster from "@/assets/ref-polster.jpg";

const services = [
  { num: "01", title: "Unterhaltsreinigung", text: "Täglich, wöchentlich oder nach Bedarf – zuverlässig und pünktlich.", img: refTreppen },
  { num: "02", title: "Büroreinigung", text: "Hygienisches, einladendes Arbeitsumfeld für Ihr Team.", img: refBuero },
  { num: "03", title: "Glas- & Fassadenreinigung", text: "Streifenfreie Glasreinigung innen und außen.", img: refGlas },
  { num: "04", title: "Grundreinigung", text: "Intensive Tiefenreinigung für nachhaltigen Glanz.", img: refBoden },
  { num: "05", title: "Polsterreinigung", text: "Werterhaltende Pflege für Polster und Textilien.", img: refPolster },
  { num: "06", title: "Hausmeisterservice", text: "Wartung, Pflege und technischer Betrieb aus einer Hand.", img: refFassade },
];

const HomeServicesGrid = () => (
  <section className="py-24 bg-background border-t border-border">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Was wir für Sie tun
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Unsere <span className="text-primary font-normal">Leistungen</span>
          </h2>
        </div>
        <Link to="/leistungen" className="text-primary hover:underline underline-offset-4 font-medium">
          Alle Leistungen →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map((s) => (
          <Link key={s.num} to="/leistungen" className="group block">
            <div className="overflow-hidden mb-5">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-56 object-cover transition-opacity group-hover:opacity-85"
              />
            </div>
            <p className="text-xs tracking-[0.25em] text-primary font-medium mb-2">{s.num}</p>
            <h3 className="text-lg font-normal tracking-wide mb-2 group-hover:text-primary transition-colors">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomeServicesGrid;
