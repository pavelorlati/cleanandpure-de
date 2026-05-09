import { Link } from "react-router-dom";
import {
  Building2,
  Hotel,
  Stethoscope,
  Home,
  ShoppingBag,
  Factory,
  Star,
  Shield,
  ArrowRight,
} from "lucide-react";
import refPolster from "@/assets/ref-polster.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refFassade from "@/assets/ref-fassade.jpg";
import refGlas from "@/assets/ref-glas.jpg";
import refBuero from "@/assets/ref-buero.jpg";
import refTreppen from "@/assets/ref-treppen.jpg";
import BeforeAfterSection from "./BeforeAfterSection";

const references = [
  { title: "Polsterreinigung", desc: "Tiefenreinigung von Polstermöbeln", img: refPolster },
  { title: "Bodengrundreinigung", desc: "Professionelle Bodenaufbereitung", img: refBoden },
  { title: "Fassadenreinigung", desc: "Außenflächen wie neu", img: refFassade },
  { title: "Glasreinigung", desc: "Streifenfreie Sauberkeit", img: refGlas },
  { title: "Büroreinigung", desc: "Saubere Arbeitsumgebung", img: refBuero },
  { title: "Treppenhausreinigung", desc: "Gepflegte Gemeinschaftsflächen", img: refTreppen },
];

const branches = [
  { icon: Building2, title: "Bürogebäude & Verwaltung", desc: "Täglich gepflegte Büros und Verwaltungsgebäude in Hamburg – diskret, pünktlich, gründlich." },
  { icon: Hotel, title: "Hotels & Hospitality", desc: "Reinigungsservice für Hotels, Pensionen und Ferienanlagen – nach höchsten Hygienestandards." },
  { icon: Stethoscope, title: "Arztpraxen & Kliniken", desc: "Hygienereinigung für medizinische Einrichtungen, Praxen und Kliniken nach DIN EN 13549." },
  { icon: Home, title: "Hausverwaltungen", desc: "Treppenhäuser, Außenanlagen und Gemeinschaftsflächen – zuverlässig im Turnus." },
  { icon: ShoppingBag, title: "Einzelhandel", desc: "Verkaufsflächen, Schaufenster und Lagerbereiche – einladend für Ihre Kundinnen und Kunden." },
  { icon: Factory, title: "Industrie & Gewerbe", desc: "Produktionsstätten, Gewerbehallen und Industriegebäude – auch in Spät- und Nachtschicht." },
];

const anonymized = [
  {
    icon: Building2,
    title: "Bürokomplex Hamburg-Altona",
    object: "5.000 m² Bürofläche",
    service: "Tägliche Unterhaltsreinigung",
    duration: "seit 2019",
  },
  {
    icon: Hotel,
    title: "Fünf-Sterne-Hotel Hamburg",
    object: "180 Zimmer + Tagungsbereiche",
    service: "Wöchentliche Fensterreinigung + Grundreinigung",
    duration: "seit 2021",
  },
  {
    icon: Stethoscope,
    title: "Zahnarztpraxis Hamburg-Wandsbek",
    object: "6 Behandlungszimmer",
    service: "Tägliche Hygienereinigung nach DIN EN 13549",
    duration: "seit 2020",
  },
];

const testimonials = [
  {
    quote: "Sehr zuverlässig und gründlich! Immer pünktlich, alles makellos sauber. Absolute Empfehlung!",
    name: "Thomas M.",
    role: "Bürogebäude Hamburg",
  },
  {
    quote: "Seit über zwei Jahren für unsere Praxisreinigung. Konstant hohe Qualität, sehr freundliches Personal.",
    name: "Dr. Andrea K.",
    role: "Zahnarztpraxis",
  },
  {
    quote: "Schnelle Reaktion, top Arbeit, faire Preise. Besonders die Glasreinigung ist beeindruckend.",
    name: "Stefan B.",
    role: "Hausverwaltung",
  },
];

const ReferencesSection = () => (
  <section id="references" className="bg-background">
    {/* Intro */}
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
        Vertrauen durch Erfahrung
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground">
        Unsere Referenzen
      </h1>
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end border-t border-border pt-8">
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          Seit über 15 Jahren reinigen wir Gebäude in Hamburg und Umgebung – täglich, zuverlässig
          und mit Blick fürs Detail. Wir arbeiten für Kunden aus unterschiedlichsten Branchen:
          Bürogebäude, Hotels, Arztpraxen, Hausverwaltungen, Einzelhandel und Industrie. So
          unterschiedlich die Anforderungen sind – unser Anspruch bleibt derselbe: ein einwandfreies
          Ergebnis, das man sieht und das Bestand hat.
        </p>
        <div className="md:text-right shrink-0">
          <div className="flex md:justify-end items-center gap-1 text-primary mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-3xl font-semibold text-primary align-middle">5,0</span>
          <span className="ml-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Google · 100+ Bewertungen
          </span>
        </div>
      </div>
    </div>

    {/* Diskretion */}
    <div className="mx-auto max-w-6xl px-6 pb-20 border-t border-border pt-12">
      <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start max-w-3xl">
        <Shield className="w-8 h-8 text-primary mt-1" />
        <div>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight mb-2 text-foreground">
            Diskretion hat bei uns Priorität
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Aus Datenschutzgründen nennen wir keine Namen unserer Auftraggeber. Wir arbeiten
            diskret und vertrauensvoll – zum Schutz unserer Kunden und ihrer Geschäftsabläufe.
            Auf Wunsch stellen wir Ihnen gerne anonymisierte Referenzschreiben sowie weitere
            Projektbeispiele aus vergleichbaren Objekten zur Verfügung.
          </p>
        </div>
      </div>
    </div>

    {/* Branchen */}
    <div className="bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
          Unsere Branchen
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">
          Für wen wir arbeiten
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Vom inhabergeführten Büro bis zur Hotelkette, von der Einzelpraxis bis zur
          Industriehalle – wir kennen die spezifischen Anforderungen unterschiedlicher Branchen
          und passen unsere Reinigungskonzepte exakt an.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {branches.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="border-t border-border pt-5">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-base font-semibold tracking-tight mb-2 text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Projekt-Galerie */}
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
        Einblicke in unsere Arbeit
      </p>
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">
        Echte Aufträge, echte Ergebnisse
      </h2>
      <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-12">
        Ein Auszug aus unserer täglichen Arbeit in Hamburg – von der Polster- und
        Bodenreinigung bis hin zur Glas- und Fassadenpflege.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref) => (
          <div key={ref.title} className="group relative rounded-md overflow-hidden aspect-[4/3]">
            <img
              src={ref.img}
              alt={ref.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-5">
              <h3 className="text-base font-semibold text-background tracking-wide">{ref.title}</h3>
              <p className="text-xs text-background/80">{ref.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Vorher / Nachher */}
    <BeforeAfterSection />

    {/* Anonymisierte Referenzen */}
    <div className="bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
          Laufende Aufträge
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-12 text-foreground">
          Anonymisierte Referenzen
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {anonymized.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="bg-background border border-border p-6 rounded-md">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-base font-semibold tracking-tight mb-4 text-foreground">
                  {a.title}
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground min-w-[80px]">Objekt</dt>
                    <dd className="text-foreground">{a.object}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground min-w-[80px]">Leistung</dt>
                    <dd className="text-foreground">{a.service}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground min-w-[80px]">Laufzeit</dt>
                    <dd className="text-foreground">{a.duration}</dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Kundenstimmen */}
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
        Kundenstimmen
      </p>
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-12 text-foreground">
        Was unsere Kunden sagen
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <figure key={t.name} className="border-t border-border pt-6">
            <div className="flex items-center gap-1 text-primary mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-base text-foreground leading-relaxed mb-5">
              „{t.quote}"
            </blockquote>
            <figcaption className="text-sm">
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>

    {/* SEO Long Copy */}
    <div className="bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-5">
          Gebäudereinigung in Hamburg
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-foreground">
          Warum Auftraggeber in Hamburg uns vertrauen
        </h2>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Clean &amp; Pure GmbH ist ein familiengeführtes Reinigungsunternehmen mit Sitz in
            Hamburg. Seit über 15 Jahren betreuen wir gewerbliche Auftraggeber in Hamburg und
            Umgebung – von Altona über Eimsbüttel und Wandsbek bis nach Harburg und in die City.
            Unsere Stärke liegt in der Verbindung aus persönlichem Service, fachlicher
            Kompetenz und einem zuverlässigen Team aus geschulten Reinigungsprofis.
          </p>
          <p>
            Ob tägliche Unterhaltsreinigung, periodische Grundreinigung, Fenster- und
            Glasreinigung in luftiger Höhe oder die hygienische Tiefenreinigung medizinischer
            Räume – wir entwickeln für jedes Objekt ein passgenaues Reinigungskonzept.
            Festgelegte Qualitätsstandards, dokumentierte Abläufe und feste Ansprechpartner
            sorgen dafür, dass Sie sich um die Sauberkeit Ihrer Räume keine Gedanken machen
            müssen.
          </p>
          <p>
            Wir setzen auf ressourcenschonende Reinigungsmittel, moderne Maschinen und eine
            ehrliche Kommunikation. Unsere Aufträge laufen häufig über viele Jahre – nicht weil
            wir günstig sind, sondern weil unsere Auftraggeber wissen, dass sie sich auf uns
            verlassen können.
          </p>
        </div>

        {/* FAQ */}
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-14 mb-8 text-foreground">
          Häufige Fragen zu unseren Referenzen
        </h3>
        <div className="space-y-8">
          {[
            {
              q: "Warum nennen Sie keine Kundennamen?",
              a: "Aus Respekt gegenüber unseren Auftraggebern und aus Datenschutzgründen veröffentlichen wir keine Klarnamen. Auf Anfrage stellen wir Ihnen gerne anonymisierte Referenzen sowie auf Wunsch ein persönliches Gespräch mit einem unserer Stammkunden zur Verfügung.",
            },
            {
              q: "In welchen Hamburger Stadtteilen sind Sie aktiv?",
              a: "Wir reinigen in ganz Hamburg und im näheren Umland – darunter Altona, Eimsbüttel, Wandsbek, Harburg, Bergedorf, City, HafenCity, Winterhude, Eppendorf und viele weitere Stadtteile.",
            },
            {
              q: "Erhalte ich einen festen Ansprechpartner?",
              a: "Ja. Jeder Auftrag wird von einem festen Objektleiter betreut. Sie haben einen direkten Draht – per Telefon, E-Mail oder vor Ort. Kurze Wege, schnelle Reaktion.",
            },
            {
              q: "Wie schnell können Sie mit einem neuen Auftrag starten?",
              a: "Nach der Besichtigung und Angebotsfreigabe können wir in der Regel innerhalb von 7–14 Tagen mit der regelmäßigen Reinigung starten. Bei Sonder- und Bauendreinigungen oft schon innerhalb weniger Tage.",
            },
            {
              q: "Arbeiten Sie auch außerhalb der Geschäftszeiten?",
              a: "Selbstverständlich. Ein Großteil unserer Reinigungen findet morgens vor Geschäftsbeginn, abends oder am Wochenende statt – damit Ihr Tagesgeschäft ungestört läuft.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-border pt-5">
              <h4 className="text-base font-semibold tracking-tight mb-2 text-foreground">
                {f.q}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-border pt-14 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-foreground">
          Werden Sie unsere nächste Referenz
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-7 leading-relaxed">
          Sprechen Sie uns unverbindlich an – wir erstellen Ihnen ein passgenaues Angebot
          innerhalb von 24 Stunden.
        </p>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-xs font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
        >
          Jetzt Angebot anfordern
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  </section>
);

export default ReferencesSection;
