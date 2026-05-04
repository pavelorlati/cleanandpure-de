import equipment from "@/assets/equipment.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refFassade from "@/assets/ref-fassade.jpg";

const stats = [
  { value: "15+", label: "Jahre" },
  { value: "100+", label: "Kunden" },
  { value: "5,0 ★", label: "Google" },
];

const values = [
  { num: "01", title: "Zuverlässigkeit", text: "Pünktlich, verlässlich und transparent – auf uns ist Verlass." },
  { num: "02", title: "Nachhaltigkeit", text: "Umweltfreundliche Produkte und ressourcenschonendes Arbeiten." },
  { num: "03", title: "Fachkompetenz", text: "Geschultes Personal nach höchsten Qualitätsstandards." },
  { num: "04", title: "Persönlicher Service", text: "Direkter Ansprechpartner, kurze Wege, offenes Ohr." },
];

const AboutSection = () => (
  <section id="about" className="bg-background">
    {/* Philosophie */}
    <div className="py-24 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
            Unsere Philosophie
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Mehr als Reinigung –{" "}
            <span className="text-primary font-normal">ein echtes Versprechen.</span>
          </h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Clean &amp; Pure GmbH wurde mit einer klaren Mission gegründet:
            Professionellen Gebäudeservice zu erbringen, der wirklich den Unterschied macht.
            Als familiengeführtes Hamburger Unternehmen wissen wir, dass Vertrauen
            die Grundlage jeder guten Zusammenarbeit ist.
          </p>
          <p>
            Deshalb stehen wir für Verlässlichkeit, Transparenz und höchste
            Qualitätsstandards – bei jedem Auftrag, für jeden Kunden.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 italic text-foreground font-light text-lg">
            „Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen."
            <footer className="mt-3 text-sm text-muted-foreground not-italic">
              — Geschäftsführung Clean &amp; Pure GmbH
            </footer>
          </blockquote>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-12 grid grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl md:text-4xl font-light text-foreground">{s.value}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Team-Text + Bild */}
    <div className="py-24 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
            Unser Team
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
            Die Unternehmensgruppe{" "}
            <span className="text-primary font-normal">Clean &amp; Pure.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hinter jedem sauberen Gebäude steht ein eingespieltes Team. Unsere
            geschulten Reinigungsprofis arbeiten täglich in Hamburg – mit
            Leidenschaft, Präzision und modernsten Maschinen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Über 15 Jahre Erfahrung in der professionellen Gebäudereinigung –
            vom Bürogebäude bis zur Glasfassade.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={equipment} alt="Clean & Pure Ausrüstung" className="w-full h-64 object-cover" loading="lazy" />
          <img src={refBoden} alt="Team bei der Bodenreinigung" className="w-full h-64 object-cover" loading="lazy" />
          <img src={refFassade} alt="Firmenwagen-Flotte" className="col-span-2 w-full h-64 object-cover" loading="lazy" />
        </div>
      </div>
    </div>

    {/* Werte 01–04 */}
    <div className="py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Warum Clean &amp; Pure?
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Das zeichnet uns <span className="text-primary font-normal">aus</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v) => (
            <div key={v.num} className="space-y-3">
              <p className="text-sm font-medium tracking-[0.25em] text-primary">{v.num}</p>
              <h3 className="text-xl font-normal tracking-wide">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
