import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import { Wallet, Clock, Heart, GraduationCap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import mopping from "@/assets/cp/hero-mopping.jpg";

const benefits = [
  { icon: Wallet, title: "Überdurchschnittliche Bezahlung", desc: "Faire und leistungsgerechte Vergütung – deutlich über dem Branchendurchschnitt." },
  { icon: Clock, title: "Flexible Arbeitszeiten", desc: "Wir berücksichtigen Ihre persönlichen Bedürfnisse und bieten flexible Einsatzzeiten." },
  { icon: Heart, title: "Familienfreundlich", desc: "Als familiengeführtes Unternehmen wissen wir, wie wichtig Familie ist." },
  { icon: GraduationCap, title: "Professionelle Einarbeitung", desc: "Strukturierte Einarbeitung und regelmäßige Schulungen für Ihre Entwicklung." },
];

const jobs = [
  { title: "Reinigungskraft – Unterhaltsreinigung", type: "Vollzeit / Teilzeit", location: "Hamburg" },
  { title: "Fachkraft – Glas- & Sonderreinigung", type: "Vollzeit", location: "Hamburg" },
  { title: "Mitarbeiter/in Verwaltung & Organisation", type: "Vollzeit", location: "Hamburg Wandsbek" },
];

const Jobs = () => {
  useReveal();
  return (
  <div className="min-h-screen flex flex-col bg-background">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero kicker="Karriere" title={<>Werde Teil<br/>unseres Teams.</>} image={mopping} />

      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="kicker mb-6">Warum Clean &amp; Pure?</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ein Arbeitgeber, der für seine Mitarbeiter da ist.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Wir suchen engagierte Mitarbeiterinnen und Mitarbeiter, die mit uns wachsen möchten. Werde Teil der Clean &amp; Pure Familie in Hamburg.</p>
            <p>Bei uns arbeiten Menschen aus vielen Ländern zusammen. Wir schätzen jeden Einzelnen – unabhängig von Herkunft oder Vorerfahrung. Faire Bezahlung und ein Team, das zusammenhält, sind unsere Grundlage.</p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <p className="kicker mb-14">Das bieten wir Ihnen</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const I = b.icon;
              return (
                <div key={b.title} className="border-t border-border pt-5">
                  <I className="w-7 h-7 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="kicker mb-5">Offene Stellen</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14">Aktuelle Stellenangebote</h2>
          <div className="divide-y divide-border border-t border-b border-border">
            {jobs.map((j) => (
              <a key={j.title} href="mailto:personal@cleanandpure.de" className="flex flex-wrap justify-between items-center py-6 hover:bg-card/50 px-2 transition-colors group">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{j.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground"><span>{j.type}</span><span>{j.location}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x max-w-3xl">
          <p className="kicker mb-5">Bewerbung</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Initiativbewerbung</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Kein passendes Angebot? Schreiben Sie uns trotzdem – wir freuen uns über motivierte Bewerber.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Unterlagen direkt per E-Mail an <a href="mailto:personal@cleanandpure.de" className="text-primary hover:underline">personal@cleanandpure.de</a>
          </p>
          <a href="mailto:personal@cleanandpure.de" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">
            Bewerbung senden →
          </a>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container-x text-center">
          <p className="kicker mb-5">Fragen zur Bewerbung?</p>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">Unser Personalteam hilft weiter.</h3>
          <a href="mailto:personal@cleanandpure.de" className="text-primary text-lg hover:underline">personal@cleanandpure.de</a>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="tel:+494035966171" className="inline-flex items-center px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">Anrufen</a>
            <a href="mailto:info@cleanandpure.de" className="inline-flex items-center px-6 py-3.5 border border-foreground/30 text-xs font-semibold tracking-[0.2em] uppercase hover:border-primary hover:text-primary rounded-sm">E-Mail senden</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default Jobs;
