import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import unterhaltImg from "@/assets/team-kueche.jpg";
import bueroImg from "@/assets/hero-buero.jpg";
import glasImg from "@/assets/firmenwagen.jpg";
import grundImg from "@/assets/team-bodenreinigung.jpg";
import hotelImg from "@/assets/ref-buero.jpg";
import hausImg from "@/assets/team-skyline.jpg";

const services = [
  { num: "01", title: "Unterhaltsreinigung", text: "Täglich, wöchentlich oder nach Bedarf – zuverlässig und pünktlich.", img: unterhaltImg, alt: "Unterhaltsreinigung in Hamburg" },
  { num: "02", title: "Büroreinigung", text: "Hygienisches, einladendes Arbeitsumfeld für Ihr Team.", img: bueroImg, alt: "Büroreinigung in Hamburg" },
  { num: "03", title: "Glas- & Fassadenreinigung", text: "Streifenfreie Glasreinigung innen und außen.", img: glasImg, alt: "Glas- und Fassadenreinigung in Hamburg" },
  { num: "04", title: "Grundreinigung", text: "Intensive Tiefenreinigung für nachhaltigen Glanz.", img: grundImg, alt: "Grundreinigung in Hamburg" },
  { num: "05", title: "Hotelreinigung", text: "Höchste Hotelstandards – diskret und zuverlässig.", img: hotelImg, alt: "Hotelreinigung in Hamburg" },
  { num: "06", title: "Hausmeisterservice", text: "Wartung, Pflege und technischer Betrieb aus einer Hand.", img: hausImg, alt: "Hausmeisterservice in Hamburg" },
];

const HomeServicesGrid = () => (
  <section className="py-24 bg-secondary/30 border-y border-border">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div className="space-y-4 max-w-2xl">
          <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Was wir für Sie tun</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Unsere <span className="font-normal">Leistungen</span>
          </h2>
        </div>
        <Link
          to="/leistungen"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-[0.2em] uppercase hover:underline"
        >
          Alle Leistungen <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            to="/leistungen"
            key={s.num}
            className="group block bg-background border border-border hover:border-primary/40 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60">{s.num}</span>
              <h3 className="text-lg font-semibold tracking-wide">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary tracking-[0.2em] uppercase pt-2">
                Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomeServicesGrid;
