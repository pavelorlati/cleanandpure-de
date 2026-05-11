import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import equipmentImg from "@/assets/equipment.jpg";

const merkmale = [
  { num: "01", title: "Zuverlässigkeit", text: "Pünktlich & verlässlich" },
  { num: "02", title: "Nachhaltigkeit", text: "Umweltfreundliche Mittel" },
  { num: "03", title: "Fachkompetenz", text: "Geschultes Personal" },
  { num: "04", title: "Persönl. Service", text: "Direkter Ansprechpartner" },
];

const HomeAboutTeaser = () => (
  <section className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">
          Familiengeführt · Hamburg
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
          Familiengeführt, <span className="font-normal">zuverlässig &amp; nachhaltig.</span>
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Clean &amp; Pure GmbH steht für professionellen Gebäudeservice mit Herz. Als familiengeführtes Unternehmen verbinden wir höchste Qualitätsstandards mit persönlichem Service – für Büros, Hotels, Praxen und Auftraggeber in Hamburg.
          </p>
          <p>
            Seit über 15 Jahren sorgen unsere geschulten Reinigungsprofis dafür, dass Hamburgs anspruchsvollste Gebäude täglich in bestem Zustand sind.
          </p>
        </div>
        <Link
          to="/ueber-uns"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-[0.2em] uppercase hover:underline"
        >
          Mehr über uns <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-8">
        <img
          src={equipmentImg}
          alt="Professionelle Reinigungsausstattung Clean & Pure"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {merkmale.map((m) => (
            <div key={m.num} className="border-t border-border pt-4">
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60">{m.num}</span>
              <h3 className="text-base font-semibold tracking-wide mt-2">{m.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeAboutTeaser;
