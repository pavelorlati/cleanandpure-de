import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import heroImg from "@/assets/ueber-hero.jpg";
import philosophieImg from "@/assets/ueber-philosophie.jpg";
import bodenImg from "@/assets/team-bodenreinigung.jpg";
import firmenwagenImg from "@/assets/firmenwagen.jpg";
import skylineImg from "@/assets/team-skyline.jpg";
import safakImg from "@/assets/team-safak-cakirgoez.jpg";
import tolgahanImg from "@/assets/team-tolgahan-cakirgoez.jpg";
import maikImg from "@/assets/team-maik-stolzenberg.jpg";
import selviImg from "@/assets/team-selvi-ayvaz.jpg";

const team = [
  {
    name: "Safak Cakirgöz",
    role: "Kaufmännischer Geschäftsführer",
    tel: "040 / 35 96 61 71",
    telHref: "tel:+494035966171",
    mail: "info@cleanandpure.de",
    quote: "„Müde macht uns die Arbeit, die wir liegen lassen, nicht die, die wir tun."",
    img: safakImg,
  },
  {
    name: "Tolgahan Cakirgöz",
    role: "Gesellschaftender Geschäftsführer",
    tel: "040 / 35 96 61 71",
    telHref: "tel:+494035966171",
    mail: "info@cleanandpure.de",
    quote: "„Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen."",
    img: tolgahanImg,
  },
  {
    name: "Maik Stolzenberg",
    role: "Betriebsleiter",
    tel: "040 / 35 96 61 71",
    telHref: "tel:+494035966171",
    mail: "info@cleanandpure.de",
    quote: "„Zusammenkommen ist ein Beginn, Zusammenbleiben ein Fortschritt, Zusammenarbeiten ein Erfolg."",
    img: maikImg,
  },
  {
    name: "Selvi Ayvaz",
    role: "Finanzbuchhaltung",
    tel: "040 / 35 96 61 71",
    telHref: "tel:+494035966171",
    mail: "info@cleanandpure.de",
    quote: "„Zusammen geht's nur, wenn alle mit Gemeinsinn und Einsatz dabei sind."",
    img: selviImg,
  },
];

const merkmale = [
  { num: "01", title: "Zuverlässigkeit", text: "Pünktlich, verlässlich und transparent – Sie können sich auf uns verlassen. Immer." },
  { num: "02", title: "Nachhaltigkeit", text: "Wir setzen auf umweltfreundliche Reinigungsprodukte und ressourcenschonendes Arbeiten." },
  { num: "03", title: "Fachkompetenz", text: "Unser geschultes Personal arbeitet nach höchsten Qualitätsstandards und mit modernen Methoden." },
  { num: "04", title: "Persönlicher Service", text: "Direkte Ansprechpartner, kurze Wege und ein offenes Ohr für Ihre Wünsche." },
];

const werte = [
  { num: "01", title: "Qualität", text: "Jeder Auftrag wird mit größter Sorgfalt ausgeführt. Qualität ist kein Zufall, sondern unser Standard." },
  { num: "02", title: "Integrität", text: "Ehrlichkeit und Transparenz sind die Basis unserer Arbeit. Wir halten, was wir versprechen." },
  { num: "03", title: "Nachhaltigkeit", text: "Wir denken an morgen. Ökologische Verantwortung ist fester Bestandteil unseres Handelns." },
];

const UeberUns = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Clean & Pure GmbH – Hamburger Gebäudereinigung"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-36 md:py-52">
          <div className="max-w-2xl space-y-8">
            <p className="text-primary text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
              Über uns
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.05] tracking-tight">
              Hamburger Qualität.<br />
              <span className="font-normal text-primary">Mit Herz</span> gemacht.
            </h1>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Unsere Philosophie</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Mehr als Reinigung – <span className="font-normal">ein echtes Versprechen.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Clean &amp; Pure GmbH wurde mit einer klaren Mission gegründet: professionellen Gebäudeservice zu erbringen, der wirklich den Unterschied macht. Als Unternehmen mit Hamburger Wurzeln wissen wir, dass Vertrauen die Grundlage jeder guten Zusammenarbeit ist.
              </p>
              <p>
                Deshalb stehen wir für Verlässlichkeit, Transparenz und höchste Qualitätsstandards – bei jedem Auftrag, für jeden Kunden.
              </p>
            </div>
            <blockquote className="border-l-2 border-primary pl-5 text-foreground/90 italic font-light leading-relaxed">
              „Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen."
              <footer className="not-italic text-xs tracking-[0.25em] uppercase text-muted-foreground mt-3">
                — Geschäftsführung Clean &amp; Pure GmbH
              </footer>
            </blockquote>
          </div>
          <div>
            <img
              src={philosophieImg}
              alt="Professionelle Reinigung – Clean & Pure GmbH"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { v: "15+", l: "Jahre Erfahrung" },
            { v: "100+", l: "Zufriedene Kunden" },
            { v: "5,0 ★", l: "Google Bewertung" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-5xl md:text-6xl font-light text-primary mb-2">{s.v}</div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM IM EINSATZ */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 lg:order-2">
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Unser Team</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Die Unternehmensgruppe <span className="font-normal">Clean &amp; Pure.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hinter jedem sauberen Gebäude steht ein eingespieltes Team. Unsere geschulten Reinigungsprofis arbeiten täglich in Hamburg – mit Leidenschaft, Präzision und modernsten Maschinen.
              </p>
              <p>
                Die Unternehmensgruppe Clean &amp; Pure steht für über 15 Jahre Erfahrung in der professionellen Gebäudereinigung – vom Bürogebäude bis zur Glasfassade, von der Praxis bis zum Industriestandort.
              </p>
            </div>
            <Link to="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-[0.2em] uppercase hover:underline">
              Werde Teil des Teams <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:order-1">
            <img src={bodenImg} alt="Clean & Pure Mitarbeiter bei der Bodenreinigung in Hamburg" className="w-full h-64 object-cover col-span-2" loading="lazy" />
            <img src={firmenwagenImg} alt="Clean & Pure Firmenwagen-Flotte in Hamburg" className="w-full h-48 object-cover" loading="lazy" />
            <img src={skylineImg} alt="Glasreinigung mit Blick auf den Hamburger Fernsehturm" className="w-full h-48 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ANSPRECHPARTNER */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Ihr Team</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Ihre <span className="font-normal">Ansprechpartner</span>
            </h2>
            <p className="text-muted-foreground">Persönlicher Service. Direkter Draht.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <article key={m.name} className="bg-background border border-border p-6 space-y-4">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={m.img} alt={`${m.name} – ${m.role}, Clean & Pure Hamburg`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold tracking-wide">{m.name}</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{m.role}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <a href={m.telHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-3.5 h-3.5 text-primary" /> {m.tel}
                  </a>
                  <a href={`mailto:${m.mail}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors break-all">
                    <Mail className="w-3.5 h-3.5 text-primary" /> {m.mail}
                  </a>
                </div>
                <p className="text-xs italic text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {m.quote}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-dashed border-primary/40 p-8 text-center max-w-3xl mx-auto bg-background">
            <h3 className="text-lg font-semibold tracking-wide mb-2">Wir brauchen dich in unserem Team — jetzt bewerben!</h3>
            <p className="text-sm text-muted-foreground mb-5">Assistent:in der Geschäftsführung &amp; weitere offene Stellen.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="tel:+494035966171" className="text-primary font-medium hover:underline">040 / 35 96 61 71</a>
              <a href="mailto:Personal@cleanandpure.de" className="text-primary font-medium hover:underline">Personal@cleanandpure.de</a>
              <Link to="/jobs" className="text-primary font-medium hover:underline">Offene Stellen ansehen →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DAS ZEICHNET UNS AUS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Warum Clean &amp; Pure?</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Das <span className="font-normal">zeichnet uns aus</span>
            </h2>
            <p className="text-muted-foreground">
              Wir setzen auf Qualität, Verlässlichkeit und persönliche Betreuung, die man spürt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {merkmale.map((m) => (
              <div key={m.num} className="border border-border p-8 space-y-4 hover:border-primary/40 transition-colors">
                <span className="text-3xl font-light text-primary/30">{m.num}</span>
                <h3 className="text-lg font-semibold tracking-wide">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERTE */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Unsere Werte</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Was uns <span className="font-normal">antreibt</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {werte.map((w) => (
              <div key={w.num} className="space-y-4">
                <span className="text-4xl font-light text-primary/40 block">{w.num}</span>
                <h3 className="text-xl font-semibold tracking-wide">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
          <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Bereit loszulegen?</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Lernen Sie uns <span className="font-normal">persönlich</span> kennen.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Button size="lg" className="text-base font-semibold tracking-wide" asChild>
              <Link to="/kontakt">Jetzt kontaktieren <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+494035966171">040 / 35 96 61 71</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default UeberUns;
