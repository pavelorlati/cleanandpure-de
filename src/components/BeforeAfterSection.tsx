import BeforeAfterSlider from "./BeforeAfterSlider";
import vorherParkett from "@/assets/vorher-parkett.jpg";
import nachherParkett from "@/assets/nachher-parkett.jpg";
import vorherFlur from "@/assets/vorher-flur.jpg";
import nachherFlur from "@/assets/nachher-flur.jpg";
import vorherGlas from "@/assets/vorher-glas.jpg";
import nachherGlas from "@/assets/nachher-glas.jpg";
import vorherFassade from "@/assets/vorher-fassade.jpg";
import nachherFassade from "@/assets/nachher-fassade.jpg";

const pairs = [
  {
    title: "Parkett-Grundreinigung – Bürogebäude",
    location: "Hamburg-Altona",
    description:
      "Professionelle Tiefenreinigung und anschließende Versiegelung eines stark beanspruchten Parkettbodens in einem Bürogebäude. Schmutzeinlagerungen wurden schonend gelöst, der Boden anschließend neu versiegelt – für langanhaltenden Schutz und edlen Glanz.",
    before: vorherParkett,
    after: nachherParkett,
  },
  {
    title: "Flur-Tiefenreinigung – Wohnanlage",
    location: "Hamburg-Wandsbek",
    description:
      "Grundreinigung und Versiegelung aller Gemeinschaftsflächen einer Hamburger Wohnanlage. Jahrelange Trittspuren, Streusalzrückstände und matte Stellen wurden vollständig entfernt – das Treppenhaus erstrahlt wieder im ursprünglichen Glanz.",
    before: vorherFlur,
    after: nachherFlur,
  },
  {
    title: "Glasreinigung – Bürofläche",
    location: "Hamburg City",
    description:
      "Streifenfreie Reinigung großflächiger Bürofenster mit professioneller Ausrüstung. Wasserflecken, Pollen und Stadtstaub wurden vollständig entfernt – für klare Sicht und ein gepflegtes Erscheinungsbild der Räume.",
    before: vorherGlas,
    after: nachherGlas,
  },
  {
    title: "Fassadenreinigung – Wohnhaus",
    location: "Hamburg",
    description:
      "Algen-, Moos- und Witterungsablagerungen an einer Putzfassade wurden schonend entfernt. Das Mauerwerk erscheint wieder hell, gleichmäßig und gepflegt – ohne Beschädigung der Oberfläche.",
    before: vorherFassade,
    after: nachherFassade,
  },
];

const BeforeAfterSection = () => (
  <section id="vorher-nachher" className="py-24 bg-background border-t border-border">
    <div className="mx-auto max-w-6xl px-6">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
        Vorher / Nachher
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-foreground max-w-3xl">
        Das Ergebnis spricht für sich
      </h2>
      <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-16">
        Bewegen Sie den Schieberegler und sehen Sie selbst, was professionelle Gebäudereinigung
        leisten kann. Drei echte Aufträge aus Hamburg – unverändert, ohne Filter, ohne Retusche.
      </p>

      <div className="grid gap-12 md:gap-14">
        {pairs.map((p) => (
          <article key={p.title} className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
            <BeforeAfterSlider before={p.before} after={p.after} alt={p.title} />
            <div>
              <p className="text-[11px] font-medium text-primary tracking-[0.25em] uppercase mb-3">
                {p.location}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-foreground">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-14 text-xs text-muted-foreground italic max-w-2xl">
        Hinweis: Aus Datenschutzgründen werden Auftraggeber nicht namentlich genannt. Auf Wunsch
        stellen wir Ihnen gerne anonymisierte Referenzschreiben oder weitere Projektbeispiele
        persönlich zur Verfügung.
      </p>
    </div>
  </section>
);

export default BeforeAfterSection;
