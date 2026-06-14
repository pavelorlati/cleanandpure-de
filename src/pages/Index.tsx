import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

import equipment from "@/assets/cp/equipment-cleanproof.jpg.asset.json";
import lobbySunset from "@/assets/cp/hero-lobby-sunset.jpg";
import kueche from "@/assets/cp/team-kueche-wischen.jpg";
import buero from "@/assets/cp/bueroreinigung.jpg.asset.json";
import firmenwagen from "@/assets/cp/firmenwagen-fensterputz.jpg";
import boden from "@/assets/cp/team-bodenreinigung.jpg";
import hotelImg from "@/assets/cp/hotelzimmer-bett.jpg";
import skyline from "@/assets/cp/team-hamburg-skyline.jpg";
import parkett from "@/assets/cp/vorher-nachher-parkett.jpg";
import flur from "@/assets/cp/vorher-nachher-flur.jpg";
import hausmeister from "@/assets/cp/hausmeisterservice.jpg.asset.json";

const services = [
  { n: "01", title: "Unterhaltsreinigung", desc: "Täglich, wöchentlich oder nach Bedarf – zuverlässig und pünktlich.", img: buero.url },
  { n: "02", title: "Büroreinigung", desc: "Hygienisches, einladendes Arbeitsumfeld für Ihr Team.", img: kueche },
  { n: "03", title: "Glas- & Fassadenreinigung", desc: "Streifenfreie Glasreinigung innen und außen.", img: firmenwagen },
  { n: "04", title: "Grundreinigung", desc: "Intensive Grundreinigung für nachhaltigen Glanz.", img: boden },
  { n: "05", title: "Hotelreinigung", desc: "Höchste Hotelstandards – diskret und zuverlässig.", img: hotelImg },
  { n: "06", title: "Hausmeisterservice", desc: "Wartung, Pflege und technischer Betrieb aus einer Hand.", img: hausmeister.url },
];

const values = [
  { n: "01", title: "Zuverlässigkeit", desc: "Pünktlich & verlässlich" },
  { n: "02", title: "Nachhaltigkeit", desc: "Umweltfreundliche Mittel" },
  { n: "03", title: "Fachkompetenz", desc: "qualifiziertes Fachpersonal" },
  { n: "04", title: "Persönlicher Service", desc: "Direkte Ansprechpartner*in" },
];

const testimonials = [
  { quote: "Sehr zuverlässig und gründlich! Immer pünktlich, alles makellos sauber. Absolute Empfehlung!", name: "Thomas M.", role: "Bürogebäude Hamburg" },
  { quote: "Seit über zwei Jahren für unsere Praxisreinigung. Konstant hohe Qualität, sehr freundliches Personal.", name: "Dr. Andrea K.", role: "Zahnarztpraxis" },
  { quote: "Schnelle Reaktion, top Arbeit, faire Preise. Besonders die Glasreinigung ist beeindruckend.", name: "Stefan B.", role: "Hausverwaltung" },
];

const Index = () => {
  useReveal();
  return (

  <div className="min-h-screen flex flex-col bg-background">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <HeroSection />

      {/* Philosophie */}
      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-16 items-center">
          <div data-reveal="left">
            <p className="kicker mb-6">Familiengeführt · Hamburg</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Familiengeführt,<br />zuverlässig &amp; nachhaltig.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Clean &amp; Pure GmbH steht für professionelle Gebäudereinigung mit Herz.&nbsp;<br />
              Als familiengeführtes Unternehmen verbinden wir höchste Qualitätsstandards mit persönlichem Service.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Seit über 15 Jahren sorgen unsere geschulten Reinigungsprofis für professionelle Sauberkeit.
            </p>
            <Link to="/ueber-uns" className="inline-flex items-center gap-2 text-primary font-semibold tracking-wide hover:gap-3 transition-all">
              Mehr über uns <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative overflow-hidden" data-reveal="right">
            <img src={equipment.url} alt="Clean & Pure Alkohol Duftreiniger" className="w-full h-auto aspect-[4/3] object-cover rounded-sm transition-transform duration-[1400ms] ease-out hover:scale-105" />
          </div>
        </div>

      </section>

      {/* Werte */}
      <section className="py-20 border-t border-border bg-card/40">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <div key={v.n} data-reveal style={{ transitionDelay: `${i * 30}ms` }}>
              <span className="text-primary text-sm font-mono mb-3 block">{v.n}</span>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Leistungen */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap justify-between items-end mb-14 gap-6" data-reveal>
            <div>
              <p className="kicker mb-5">Was wir für Sie tun</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Unsere Leistungen</h2>
            </div>
            <Link to="/leistungen" className="text-primary font-semibold text-sm tracking-wide hover:underline">
              Unsere Leistungen →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={s.n} to="/leistungen" data-reveal style={{ transitionDelay: `${i * 30}ms` }} className="group block bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-mono text-foreground/80">{s.n}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                  <span className="text-xs text-primary font-semibold tracking-wider uppercase">Mehr erfahren →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/leistungen" className="inline-flex items-center px-6 py-3 border border-foreground/20 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors">
              ALL UNSERE LEISTUNGEN ANSEHEN
            </Link>
          </div>
        </div>
      </section>

      {/* Vorher / Nachher */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <div data-reveal>
            <p className="kicker mb-5">Referenzen</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">Das Ergebnis spricht für sich</h2>
            <p className="text-muted-foreground mb-14">vor- & nach der Versiegelung - Beschichtung</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[{img: parkett, title: "Grundreinigung & Versiegelung"}, {img: flur, title: "Grundreinigung & Beschichtung"}].map((r, i) => (
              <div key={r.title} data-reveal={i === 0 ? "left" : "right"} style={{ transitionDelay: `${i * 80}ms` }} className="group bg-card border border-border rounded-sm overflow-hidden">
                <div className="overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-72 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <h3 className="font-semibold">{r.title}</h3>
                  <div className="flex gap-3 text-xs text-muted-foreground uppercase tracking-wider">
                    <span>Vorher</span><span>Nachher</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/referenzen" className="text-primary font-semibold text-sm tracking-wide hover:underline">
              Alle Referenzen ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophie Zitat */}
      <section className="py-24 md:py-32">
        <div className="container-x max-w-4xl" data-reveal>
          <p className="kicker mb-8">Philosophie</p>
          <blockquote className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-8">
            „Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen."
          </blockquote>
          <cite className="text-sm text-muted-foreground not-italic">— Geschäftsführung Clean &amp; Pure GmbH</cite>
        </div>

      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <p className="kicker mb-5">Google Bewertungen</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">Was unsere Kunden sagen</h2>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-6xl font-bold text-primary">5,0</span>
            <div className="flex items-center gap-1 text-primary">
              {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-sm text-muted-foreground">100+ Bewertungen</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure key={t.name} data-reveal style={{ transitionDelay: `${i * 40}ms` }} className="bg-card border border-border p-8 rounded-sm">
                <div className="flex items-center gap-1 text-primary mb-4">
                  {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-base leading-relaxed mb-6 text-foreground">„{t.quote}"</blockquote>
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <img src={lobbySunset} alt="Clean & Pure Hamburg" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="relative container-x">
          <p className="kicker mb-6">BEREIT FÜR SAUBERE ERGEBNISSE?</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10 max-w-3xl">
            Ihr Angebot&nbsp;<span className="text-primary">unverbindlich &amp; kostenlos.</span>
          </h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow transition-colors rounded-sm">
              Jetzt Angebot anfordern →
            </Link>
            <a href="tel:+494035966171" className="inline-flex items-center gap-2 px-6 py-3.5 border border-foreground/30 text-xs font-semibold tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors rounded-sm">
              Direkt anrufen
            </a>
          </div>
          <p className="text-sm text-muted-foreground mb-16">
            ✓ Kostenlos &amp; unverbindlich &nbsp; ✓ Antwort innerhalb 48h &nbsp; ✓ Kein Risiko
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {[
              {n:"01", title:"Anfrage senden", desc:"Formular ausfüllen oder anrufen – dauert nur 2 Minuten."},
              {n:"02", title:"Angebot erhalten", desc:"Wir melden uns innerhalb von 48 Stunden mit einem maßgeschneiderten Angebot."},
              {n:"03", title:"Starten & profitieren", desc:"Unser Team übernimmt – pünktlich, diskret und zuverlässig."},
            ].map((s) => (
              <div key={s.n} className="border-t border-border pt-5">
                <span className="text-primary text-sm font-mono">{s.n}</span>
                <h4 className="text-lg font-semibold mt-2 mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default Index;

