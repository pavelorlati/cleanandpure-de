import { Link } from "react-router-dom";
import { Building2, Hotel, Stethoscope, Home, ShoppingBag, Factory, Shield } from "lucide-react";
import refTreppen from "@/assets/ref-treppen.jpg";
import vorherNachherParkett from "@/assets/vorher-nachher-parkett.jpg";
import vorherNachherFassade from "@/assets/vorher-nachher-fassade.jpg";

const branchen = [
  { Icon: Building2, title: "Bürogebäude & Verwaltung", text: "Täglich gepflegte Büros und Verwaltungsgebäude in Hamburg." },
  { Icon: Hotel, title: "Hotels & Hospitality", text: "Reinigungsservice für Hotels, Pensionen und Ferienanlagen." },
  { Icon: Stethoscope, title: "Arztpraxen & Kliniken", text: "Hygienereinigung für medizinische Einrichtungen und Kliniken." },
  { Icon: Home, title: "Hausverwaltungen", text: "Treppenhäuser, Außenanlagen und Gemeinschaftsflächen." },
  { Icon: ShoppingBag, title: "Einzelhandel", text: "Verkaufsflächen, Schaufenster und Lagerbereiche." },
  { Icon: Factory, title: "Industrie & Gewerbe", text: "Produktionsstätten, Gewerbehallen und Industriegebäude." },
];

const projekte = [
  { img: vorherNachherParkett, ort: "Hamburg-Altona", title: "Parkett-Grundreinigung Bürogebäude", text: "Vorher / Nachher: Professionelle Tiefenreinigung und Versiegelung eines stark beanspruchten Parkettbodens." },
  { img: refTreppen, ort: "Hamburg-Wandsbek", title: "Flur-Sanierung Wohnanlage", text: "Vorher / Nachher: Grundreinigung und Versiegelung aller Gemeinschaftsflächen einer Wohnanlage." },
  { img: vorherNachherFassade, ort: "Hamburg", title: "Fassadenreinigung Wohngebäude", text: "Vorher / Nachher: Reinigung einer verschmutzten Außenfassade – sichtbar frischer und gepflegter." },
];

const anonRefs = [
  { Icon: Building2, title: "Bürokomplex Hamburg-Altona", obj: "5.000 m² Bürofläche", leistung: "Tägliche Unterhaltsreinigung", lauf: "seit 2019" },
  { Icon: Hotel, title: "Fünf-Sterne-Hotel Hamburg", obj: "180 Zimmer + Tagungsbereiche", leistung: "Wöchentliche Fenster- + Grundreinigung", lauf: "seit 2021" },
  { Icon: Stethoscope, title: "Zahnarztpraxis Hamburg-Wandsbek", obj: "6 Behandlungszimmer", leistung: "Tägliche Hygienereinigung nach DIN EN 13549", lauf: "seit 2020" },
];

const stimmen = [
  { text: "Sehr zuverlässig und gründlich! Immer pünktlich, alles makellos sauber. Absolute Empfehlung!", name: "Thomas M.", role: "Bürogebäude Hamburg" },
  { text: "Seit über zwei Jahren für unsere Praxisreinigung. Konstant hohe Qualität, sehr freundliches Personal.", name: "Dr. Andrea K.", role: "Zahnarztpraxis" },
  { text: "Schnelle Reaktion, top Arbeit, faire Preise. Besonders die Glasreinigung ist beeindruckend.", name: "Stefan B.", role: "Hausverwaltung" },
];

const ReferencesSection = () => (
  <section id="references" className="bg-background">
    {/* Bewertung + Diskretion */}
    <div className="py-20 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-6xl md:text-7xl font-light text-foreground mb-2">5,0</p>
          <p className="text-primary tracking-widest mb-3">★★★★★</p>
          <p className="text-sm text-muted-foreground">Google Bewertung · aus 100+ Bewertungen</p>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mt-3">
            Top-bewerteter Reinigungsservice Hamburg
          </p>
        </div>
        <div className="border-l-2 border-primary pl-8">
          <Shield className="w-6 h-6 text-primary mb-4" />
          <h3 className="text-xl font-normal tracking-wide mb-3">
            Diskretion hat bei uns Priorität
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Aus Datenschutzgründen nennen wir keine Namen unserer Kunden.
            Wir arbeiten diskret und vertrauensvoll – zum Schutz unserer Auftraggeber.
            Auf Wunsch stellen wir gerne anonymisierte Referenzschreiben zur Verfügung.
          </p>
        </div>
      </div>
    </div>

    {/* Branchen */}
    <div className="py-24 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Unsere Branchen
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Für wen wir <span className="text-primary font-normal">arbeiten</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {branchen.map((b) => (
            <div key={b.title} className="space-y-3">
              <b.Icon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-normal tracking-wide">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Projektgalerie */}
    <div className="py-24 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Vorher / Nachher
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight mb-4">
            Echte Aufträge, <span className="text-primary font-normal">sichtbare Ergebnisse</span>
          </h2>
          <p className="text-muted-foreground">
            Ein direkter Vergleich vor und nach unserer Arbeit – so sieht
            professionelle Reinigung in Hamburg aus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projekte.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden mb-5">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="w-full h-60 object-cover transition-opacity group-hover:opacity-85" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2">{p.ort}</p>
              <h3 className="text-lg font-normal tracking-wide mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>

    {/* Anonymisierte Referenzen */}
    <div className="py-24 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Laufende Aufträge
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Anonymisierte <span className="text-primary font-normal">Referenzen</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {anonRefs.map((r) => (
            <div key={r.title} className="border-t border-border pt-6 space-y-4">
              <r.Icon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-normal tracking-wide">{r.title}</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Objekt</dt>
                  <dd className="text-right">{r.obj}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Leistung</dt>
                  <dd className="text-right">{r.leistung}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Laufzeit</dt>
                  <dd className="text-right">{r.lauf}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Kundenstimmen */}
    <div className="py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Was unsere <span className="text-primary font-normal">Kunden sagen</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {stimmen.map((s) => (
            <div key={s.name} className="space-y-5">
              <p className="text-primary tracking-widest text-sm">★★★★★</p>
              <p className="text-foreground leading-relaxed font-light">„{s.text}"</p>
              <div className="pt-2 border-t border-border">
                <p className="font-normal tracking-wide text-sm">{s.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-12 text-center max-w-2xl mx-auto">
          <p className="text-primary tracking-widest mb-4">★★★★★</p>
          <h3 className="text-2xl md:text-3xl font-light leading-tight mb-4">
            5,0 aus 100+ <span className="text-primary font-normal">Google Bewertungen</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Unsere Kunden vertrauen uns – und das spiegelt sich in unseren Bewertungen wider.
          </p>
          <Link to="/kontakt" className="inline-block text-primary hover:underline underline-offset-4 font-medium">
            Jetzt Angebot anfordern →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ReferencesSection;
