import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import glas from "@/assets/cp/hero-glasreinigung.webp";
import mopping from "@/assets/cp/hero-mopping.jpg";
import buero from "@/assets/cp/bueroreinigung.jpg.asset.json";
import kueche from "@/assets/cp/team-kueche-wischen.jpg";
import praxis from "@/assets/cp/praxis-reinigung.jpg";
import sunset from "@/assets/cp/hero-sunset.jpg";
import lobbyModern from "@/assets/cp/hotelzimmer-bett.jpg";
import boden from "@/assets/cp/team-bodenreinigung.jpg";
import hausmeister from "@/assets/cp/hausmeisterservice.jpg.asset.json";

const services = [
  { n: "01", kicker: "Regelmäßig & verlässlich", title: "Unterhaltsreinigung", desc: "Täglich, wöchentlich oder nach individuellem Turnus – zuverlässig und termingerecht.", img: buero.url },
  { n: "02", kicker: "Hygienisch & professionell", title: "Büroreinigung", desc: "Professionelle Reinigung für Büros und Arbeitsräume – für ein hygienisches, produktives Arbeitsumfeld.", img: kueche },
  { n: "03", kicker: "Gäste begeistern", title: "Hotelreinigung", desc: "Diskrete, zuverlässige Reinigung für Hotels und Beherbergungsbetriebe nach höchsten Hygienestandards.", img: lobbyModern },
  { n: "04", kicker: "Medizinische Standards", title: "Praxis- & Hygienereinigung", desc: "Spezialisierte Hygienereinigung für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen.", img: praxis },
  { n: "05", kicker: "Kristallklar", title: "Glas- & Fassadenreinigung", desc: "Streifenfreie Glas- und Fassadenreinigung für ein gepflegtes Erscheinungsbild Ihres Gebäudes.", img: glas },
  { n: "06", kicker: "Intensive Tiefenpflege", title: "Grund- & Intensivreinigung", desc: "Intensive Tiefenreinigung für Räume, die eine gründliche Auffrischung und Intensivpflege benötigen.", img: boden },
  { n: "07", kicker: "Textilpflege", title: "Polster- & Teppichreinigung", desc: "Professionelle Reinigung von Teppichböden, Polstermöbeln und textilen Belägen aller Art.", img: "/leistungen/polster-teppichreinigung.jpg" },
  { n: "08", kicker: "Schutz & Glanz", title: "Bodensanierung & Versiegelung", desc: "Professionelle Bodenpflege, Sanierung und Versiegelung für alle Bodenbeläge und Oberflächen.", img: boden },
  { n: "09", kicker: "Rundum-Betreuung", title: "Hausmeisterservice", desc: "Zuverlässiger Hausmeisterservice für Wartung, Pflege und technischen Betrieb Ihrer Immobilie.", img: hausmeister.url },
  { n: "10", kicker: "Übergabebereit", title: "Bauendreinigung", desc: "Professionelle Endreinigung nach Bau- und Renovierungsarbeiten für eine sofort nutzbare Immobilie.", img: mopping },
  { n: "11", kicker: "Gepflegte Gemeinschaftsflächen", title: "Außen- & Treppenhausreinigung", desc: "Reinigung von Treppenhäusern, Außenanlagen und Gemeinschaftsflächen für gepflegte Immobilien.", img: sunset },
];

const Leistungen = () => {
  useReveal();
  return (
  <div className="min-h-screen flex flex-col bg-background">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero kicker="Was wir für Sie leisten" title="Alles aus einer Hand" image={glas} />

      <section className="py-16 border-t border-border">
        <div className="container-x flex flex-wrap justify-between items-end gap-6">
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Von der täglichen Unterhaltsreinigung bis zur Sonderreinigung – das komplette Spektrum professioneller Gebäudedienstleistungen für Sie aus einer Hand.
          </p>
          <div><span className="text-3xl font-bold text-primary">11</span> <span className="kicker">Leistungen</span></div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          {services.map((s, i) => (
            <Link
              to="/kontakt"
              key={s.n}
              data-reveal={i % 2 === 0 ? "left" : "right"}
              className="group grid md:grid-cols-[80px_1fr_1fr_auto] gap-6 md:gap-10 items-center p-6 md:p-10 rounded-sm transition-colors duration-500 ease-out hover:bg-secondary/50"
            >
              <span className="text-sm font-mono text-muted-foreground transition-colors duration-500 group-hover:text-primary">{s.n}</span>
              <div className="overflow-hidden rounded-sm bg-secondary/50 h-40">
                <img src={s.img} alt={s.title} className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${s.n === "07" ? "object-bottom" : s.n === "02" ? "object-[50%_20%]" : ""}`} loading="lazy" />
              </div>
              <div>
                <p className="kicker mb-2">{s.kicker}</p>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 transition-colors duration-500 group-hover:text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary whitespace-nowrap inline-flex items-center gap-2">
                Mehr erfahren
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="container-x text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Die passende Leistung nicht gefunden?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Sprechen Sie uns an – wir finden gemeinsam die optimale Lösung für Ihre Anforderungen.</p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">
            Jetzt Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default Leistungen;
