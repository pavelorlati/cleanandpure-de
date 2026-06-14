import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Shield, Building2, Hotel, Stethoscope, Home, ShoppingBag, Factory, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import lobbyModern from "@/assets/cp/hero-lobby-modern.jpg";
import parkett from "@/assets/cp/vorher-nachher-parkett.jpg";
import flur from "@/assets/cp/vorher-nachher-flur.jpg";
import glasFassade from "@/assets/cp/glasfassade-buerste.jpg";
import skyline from "@/assets/cp/team-hamburg-skyline.jpg";
import boden from "@/assets/cp/team-bodenreinigung.jpg";
import kueche from "@/assets/cp/team-kueche-wischen.jpg";

const branches = [
  { icon: Building2, title: "Bürogebäude & Verwaltung", desc: "Täglich gepflegte Büros und Verwaltungsgebäude in Hamburg." },
  { icon: Hotel, title: "Hotels & Hospitality", desc: "Reinigungsservice für Hotels, Pensionen und Ferienanlagen." },
  { icon: Stethoscope, title: "Arztpraxen & Kliniken", desc: "Hygienereinigung für medizinische Einrichtungen und Kliniken." },
  { icon: Home, title: "Hausverwaltungen", desc: "Treppenhäuser, Außenanlagen und Gemeinschaftsflächen." },
  { icon: ShoppingBag, title: "Einzelhandel", desc: "Verkaufsflächen, Schaufenster und Lagerbereiche." },
  { icon: Factory, title: "Industrie & Gewerbe", desc: "Produktionsstätten, Gewerbehallen und Industriegebäude." },
];

const projects = [
  { img: parkett, location: "Hamburg-Altona", title: "Grundreinigung & Versiegelung Bürogebäude", desc: "Professionelle Tiefenreinigung und Versiegelung eines stark beanspruchten Parkettbodens." },
  { img: flur, location: "Hamburg-Wandsbek", title: "Grundreinigung & Beschichtung Flurbereiche Wohnanlage", desc: "Grundreinigung und Versiegelung aller Gemeinschaftsflächen einer Wohnanlage." },
  { img: glasFassade, location: "Hamburg City", title: "Glasfassaden-Reinigung Hochhaus", desc: "Reinigung einer mehrstöckigen Glasfassade mit Teleskopsystem – streifenfrei." },
  { img: skyline, location: "Hamburg-Altona", title: "Premium-Büroreinigung Hamburg", desc: "Wöchentliche Fenster- und Büroreinigung in einem Hochhaus mit Blick auf den Fernsehturm." },
  { img: boden, location: "Hamburg-Harburg", title: "Industriereinigung mit Exzentermaschine", desc: "Maschinelle Bodenreinigung und Beschichtungsentfernung in einer Gewerbeeinheit." },
  { img: kueche, location: "Hamburg-Eimsbüttel", title: "Küchenreinigung Gastronomie", desc: "Hygienische Tiefenreinigung einer gewerblichen Küche nach HACCP-Standard." },
];

const anonymized = [
  { icon: Building2, title: "Bürokomplex Hamburg-Altona", obj: "5.000 m² Bürofläche", leistung: "Tägliche Unterhaltsreinigung", laufzeit: "seit 2019" },
  { icon: Hotel, title: "Fünf-Sterne-Hotel Hamburg", obj: "180 Zimmer + Tagungsbereiche", leistung: "Wöchentliche Fensterreinigung + Grundreinigung", laufzeit: "seit 2021" },
  { icon: Stethoscope, title: "Zahnarztpraxis Hamburg-Wandsbek", obj: "6 Behandlungszimmer", leistung: "Tägliche Hygienereinigung nach DIN EN 13549", laufzeit: "seit 2020" },
];

const testimonials = [
  { quote: "Sehr zuverlässig und gründlich! Immer pünktlich, alles makellos sauber. Absolute Empfehlung!", name: "Thomas M.", role: "Bürogebäude Hamburg" },
  { quote: "Seit über zwei Jahren für unsere Praxisreinigung. Konstant hohe Qualität, sehr freundliches Personal.", name: "Dr. Andrea K.", role: "Zahnarztpraxis" },
  { quote: "Schnelle Reaktion, top Arbeit, faire Preise. Besonders die Glasreinigung ist beeindruckend.", name: "Stefan B.", role: "Hausverwaltung" },
];

const Referenzen = () => {
  useReveal();
  return (
  <div className="min-h-screen flex flex-col bg-background">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero kicker="Vertrauen durch Erfahrung" title="Unsere Referenzen" image={lobbyModern} />

      <section className="py-16 border-t border-border">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <p className="text-muted-foreground leading-relaxed">
            Wir arbeiten für Kunden aus unterschiedlichsten Branchen – diskret, vertrauensvoll und mit einem klaren Fokus auf Qualität.
          </p>
          <div className="bg-card border border-border p-6 rounded-sm flex items-center gap-5">
            <span className="text-5xl font-bold text-primary">5,0</span>
            <div>
              <div className="font-semibold">Google Bewertung</div>
              <div className="text-sm text-muted-foreground">aus 100+ Bewertungen</div>
              <div className="flex text-primary mt-1">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-current"/>)}</div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Top-bewerteter Reinigungsservice Hamburg</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container-x">
          <div className="bg-card border border-border p-8 rounded-sm flex gap-6 items-start max-w-3xl">
            <Shield className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Diskretion hat bei uns Priorität</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aus Datenschutzgründen nennen wir keine Namen unserer Kunden. Wir arbeiten diskret und vertrauensvoll – zum Schutz unserer Auftraggeber. Auf Wunsch stellen wir gerne anonymisierte Referenzschreiben zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <p className="kicker mb-5">Unsere Branchen</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14">Für wen wir arbeiten</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {branches.map((b) => {
              const I = b.icon;
              return (
                <div key={b.title} className="border-t border-border pt-5">
                  <I className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="kicker mb-5">Projekt-Galerie</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">Manufaktur für einzigartige Ergebnisse&nbsp;</h2>
          <p className="text-muted-foreground mb-14 max-w-2xl">Ein Auszug aus unserer täglichen Arbeit – von der Glasfassaden-Reinigung bis zur Bodensanierung &amp; Veredelung.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={p.title} data-reveal={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"} style={{ transitionDelay: `${(i % 3) * 80}ms` }} className="group bg-card border border-border rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="kicker mb-2">{p.location}</p>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <p className="kicker mb-5">Laufende Aufträge</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14">Anonymisierte Referenzen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {anonymized.map((a) => {
              const I = a.icon;
              return (
                <div key={a.title} className="bg-card border border-border p-6 rounded-sm">
                  <I className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-4">{a.title}</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex gap-3"><dt className="text-muted-foreground min-w-[80px]">Objekt</dt><dd>{a.obj}</dd></div>
                    <div className="flex gap-3"><dt className="text-muted-foreground min-w-[80px]">Leistung</dt><dd>{a.leistung}</dd></div>
                    <div className="flex gap-3"><dt className="text-muted-foreground min-w-[80px]">Laufzeit</dt><dd>{a.laufzeit}</dd></div>
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="kicker mb-5">Kundenstimmen</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14">Was unsere Kunden sagen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card border border-border p-8 rounded-sm">
                <div className="flex text-primary mb-4">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-4 h-4 fill-current"/>)}</div>
                <blockquote className="mb-6 leading-relaxed">„{t.quote}"</blockquote>
                <figcaption><div className="font-semibold">{t.name}</div><div className="text-sm text-muted-foreground">{t.role}</div></figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 bg-card border border-border p-8 rounded-sm flex items-center gap-6 flex-wrap">
            <div className="flex text-primary text-xl">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-5 h-5 fill-current"/>)}</div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-semibold">5,0 aus 100+ Google Bewertungen</h3>
              <p className="text-sm text-muted-foreground">Unsere Kunden vertrauen uns – und das spiegelt sich in unseren Bewertungen wider.</p>
            </div>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">Jetzt Angebot anfordern →</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default Referenzen;
