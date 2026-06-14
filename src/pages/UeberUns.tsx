import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import lobbySunset from "@/assets/cp/hero-lobby-sunset.jpg";
import lobbyModern from "@/assets/cp/hero-lobby-modern.jpg";
import boden from "@/assets/cp/team-bodenreinigung.jpg";
import firmenwagen from "@/assets/cp/firmenwagen-fensterputz.jpg";
import skyline from "@/assets/cp/team-hamburg-skyline.jpg";

const team = [
  { name: "Safak Cakirgöz", role: "Kaufmännischer Geschäftsführer", tel: "040 35 96 61 71", mail: "info@cleanandpure.de", quote: "Müde macht uns die Arbeit, die wir liegen lassen, nicht die, die wir tun.", img: "/team/safak-cakirgoez.jpg" },
  { name: "Tolgahan Cakirgöz", role: "Gesellschaftender Geschäftsführer", tel: "040 35 96 61 71", mail: "tca@cleanandpure.de", quote: "Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen.", img: "/team/tolgahan-cakirgoez.jpg" },
  { name: "Maik Stolzenberg", role: "Betriebsleiter", tel: "0159 / 0165 777 6", mail: "mst@cleanandpure.de", quote: "Zusammenkommen ist ein Beginn, Zusammenbleiben ein Fortschritt, Zusammenarbeiten ein Erfolg.", img: "/team/maik-stolzenberg.jpg" },
  { name: "Selvi Ayvaz", role: "Finanzbuchhaltung", tel: "040 35 96 61 71", mail: "buchhaltung@cleanandpure.de", quote: "Zusammen geht's nur dann, wenn alle Beteiligten mit einer Portion für Gemeinsinn und Einsatz was dafür tuen.", img: "/team/selvi-ayvaz.jpg" },
];

const why = [
  { n: "01", title: "Zuverlässigkeit", desc: "Pünktlich, verlässlich und transparent – Sie können sich auf uns verlassen. Immer." },
  { n: "02", title: "Nachhaltigkeit", desc: "Wir setzen auf umweltfreundliche Reinigungsprodukte und ressourcenschonendes Arbeiten." },
  { n: "03", title: "Fachkompetenz", desc: "Unser geschultes Personal arbeitet nach höchsten Qualitätsstandards und modernen Methoden." },
  { n: "04", title: "Persönlicher Service", desc: "Direkte Ansprechpartner, kurze Wege und ein offenes Ohr für Ihre Wünsche." },
];

const values = [
  { n: "01", title: "Qualität", desc: "Jeder Auftrag wird mit größter Sorgfalt ausgeführt. Qualität ist kein Zufall, sondern unser Standard." },
  { n: "02", title: "Integrität", desc: "Ehrlichkeit und Transparenz sind die Basis unserer Arbeit. Wir halten, was wir versprechen." },
  { n: "03", title: "Nachhaltigkeit", desc: "Wir denken an morgen. Ökologische Verantwortung ist fester Bestandteil unseres Handelns." },
];

const UeberUns = () => {
  useReveal();
  return (
  <div className="min-h-screen flex flex-col bg-background">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero kicker="Über uns" title={<>Hamburger Qualität.<br/>Mit Herz gemacht.</>} image={lobbySunset} />

      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-16 items-center">
          <div data-reveal="left">
            <p className="kicker mb-6">Unsere Philosophie</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Mehr als Reinigung –<br/>ein echtes Versprechen.</h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Clean &amp; Pure GmbH wurde mit einer klaren Mission gegründet: Professionellen Gebäudeservice zu erbringen, der wirklich den Unterschied macht. Als Unternehmen mit Hamburger Wurzeln wissen wir, dass Vertrauen die Grundlage jeder guten Zusammenarbeit ist.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Deshalb stehen wir für Verlässlichkeit, Transparenz und höchste Qualitätsstandards – bei jedem Auftrag, für jeden Kunden.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 text-xl italic text-foreground">
              „Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen."
              <footer className="not-italic text-sm text-muted-foreground mt-2">— Geschäftsführung Clean &amp; Pure GmbH</footer>
            </blockquote>
          </div>
          <img src={lobbyModern} alt="Professionelle Reinigung" className="rounded-sm" data-reveal="right" />
        </div>
      </section>

      <section className="py-16 border-t border-border bg-card/40">
        <div className="container-x grid grid-cols-3 gap-8 text-center">
          <div><div className="text-4xl md:text-5xl font-bold text-primary">15+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Jahre</div></div>
          <div><div className="text-4xl md:text-5xl font-bold text-primary">100+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Kunden</div></div>
          <div><div className="text-4xl md:text-5xl font-bold text-primary">5,0 ★</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Google</div></div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="kicker mb-5">Unser Team</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Die Unternehmensgruppe Clean &amp; Pure.</h2>
          <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Hinter jedem sauberen Gebäude steht ein eingespieltes Team. Unsere geschulten Reinigungsprofis arbeiten täglich in Hamburg – mit Leidenschaft, Präzision und modernsten Maschinen.
          </p>
          <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Die Unternehmensgruppe Clean &amp; Pure steht für über 15 Jahre Erfahrung in der professionellen Gebäudereinigung – vom Bürogebäude bis zur Glasfassade.
          </p>
          <Link to="/jobs" className="text-primary font-semibold hover:underline">Werde Teil des Teams →</Link>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="md:col-span-2 relative h-80 overflow-hidden rounded-sm" data-reveal="left">
              <img src={boden} alt="Team im Einsatz" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs text-muted-foreground"><div className="text-sm font-semibold text-foreground">Team im Einsatz</div>Unternehmensgruppe Clean &amp; Pure</div>
            </div>
            <div className="grid grid-rows-2 gap-6">
              <img src={firmenwagen} alt="Firmenwagen-Flotte" className="w-full h-full object-cover rounded-sm" data-reveal="right" />
              <img src={skyline} alt="Glasreinigung Hamburg" className="w-full h-full object-cover rounded-sm" data-reveal="right" style={{ transitionDelay: "120ms" }} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-4">Unsere Firmenwagen-Flotte täglich in Hamburg im Einsatz</p>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <p className="kicker mb-5">Ihr Team</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">Ihre Ansprechpartner</h2>
          <p className="text-muted-foreground mb-14">Persönlicher Service. Direkter Draht.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-14">
            {team.map((t, i) => (
              <div
                key={t.name}
                data-reveal="up"
                style={{ transitionDelay: `${i * 120}ms` }}
                className="group relative overflow-hidden rounded-sm bg-card"
              >
                <div className="grid md:grid-cols-[1.1fr_1fr]">
                  <div className="relative overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="w-full h-full aspect-[3/4] md:aspect-auto object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="p-7 md:p-9 flex flex-col justify-center">
                    <p className="kicker mb-3 transition-colors duration-500 group-hover:text-primary-glow">{t.role}</p>
                    <h3 className="font-bold text-2xl md:text-3xl leading-tight mb-5 tracking-tight">{t.name}</h3>
                    <div className="text-sm space-y-1.5 mb-6">
                      <a href={`tel:${t.tel.replace(/\s|\//g, "")}`} className="block text-foreground/85 hover:text-primary transition-colors">{t.tel}</a>
                      <a href={`mailto:${t.mail}`} className="block text-foreground/85 hover:text-primary break-all transition-colors">{t.mail}</a>
                    </div>
                    <div className="relative pl-4">
                      <span className="absolute left-0 top-0 bottom-0 w-px bg-primary/40 transition-all duration-700 group-hover:bg-primary" />
                      <p className="text-sm italic text-muted-foreground leading-relaxed">„{t.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border border-border p-8 rounded-sm">
            <h3 className="text-xl font-semibold mb-2">Wir brauchen dich in unserem Team — jetzt bewerben!</h3>
            <p className="text-sm text-muted-foreground mb-4">Assistentin d. Geschäftsführung</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="tel:+494035966171" className="text-primary hover:underline">040 - 35 96 61 71</a>
              <a href="mailto:personal@cleanandpure.de" className="text-primary hover:underline">personal@cleanandpure.de</a>
            </div>
            <p className="text-xs italic text-muted-foreground mt-4">„Beginne, wo du bist. Nutze, was du hast. Tu, was du kannst."</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="kicker mb-5">Warum Clean &amp; Pure?</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">Das zeichnet uns aus</h2>
          <p className="text-muted-foreground mb-14 max-w-2xl">Wir setzen auf Qualität, Verlässlichkeit und persönliche Betreuung, die man spürt.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {why.map((w) => (
              <div key={w.n} className="border-t border-border pt-5">
                <span className="text-primary font-mono text-sm">{w.n}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card/40">
        <div className="container-x">
          <p className="kicker mb-5">Unsere Werte</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14">Was uns antreibt</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.n} className="border-t border-border pt-5">
                <span className="text-primary font-mono text-sm">{v.n}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border">
        <div className="container-x text-center">
          <p className="kicker mb-5">Bereit loszulegen?</p>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-10">Lernen Sie uns persönlich kennen.</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">Jetzt kontaktieren</Link>
            <a href="tel:+494035966171" className="inline-flex items-center px-6 py-3.5 border border-foreground/30 text-xs font-semibold tracking-[0.2em] uppercase hover:border-primary hover:text-primary rounded-sm">040 - 35 96 61 71</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default UeberUns;
