import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import glas from "@/assets/cp/hero-glasreinigung.webp";
import mopping from "@/assets/cp/hero-mopping.png";
import buero from "@/assets/cp/hero-buero.png";
import sunset from "@/assets/cp/hero-sunset.png";
import lobbyModern from "@/assets/cp/hero-lobby-modern.png";
import boden from "@/assets/cp/team-bodenreinigung.jpg";

const services = [
  { n: "01", kicker: "Regelmäßig & verlässlich", title: "Unterhaltsreinigung", desc: "Täglich, wöchentlich oder nach individuellem Turnus – zuverlässig und termingerecht.", img: mopping },
  { n: "02", kicker: "Hygienisch & professionell", title: "Büroreinigung", desc: "Professionelle Reinigung für Büros und Arbeitsräume – für ein hygienisches, produktives Arbeitsumfeld.", img: buero },
  { n: "03", kicker: "Gäste begeistern", title: "Hotelreinigung", desc: "Diskrete, zuverlässige Reinigung für Hotels und Beherbergungsbetriebe nach höchsten Hygienestandards.", img: lobbyModern },
  { n: "04", kicker: "Medizinische Standards", title: "Praxis- & Hygienereinigung", desc: "Spezialisierte Hygienereinigung für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen.", img: buero },
  { n: "05", kicker: "Kristallklar", title: "Glas- & Fassadenreinigung", desc: "Streifenfreie Glas- und Fassadenreinigung für ein gepflegtes Erscheinungsbild Ihres Gebäudes.", img: glas },
  { n: "06", kicker: "Intensive Tiefenpflege", title: "Grund- & Sonderreinigung", desc: "Intensive Tiefenreinigung für Räume, die eine gründliche Auffrischung und Intensivpflege benötigen.", img: boden },
  { n: "07", kicker: "Textilpflege", title: "Polster- & Teppichreinigung", desc: "Professionelle Reinigung von Teppichböden, Polstermöbeln und textilen Belägen aller Art.", img: mopping },
  { n: "08", kicker: "Schutz & Glanz", title: "Bodensanierung & Versiegelung", desc: "Professionelle Bodenpflege, Sanierung und Versiegelung für alle Bodenbeläge und Oberflächen.", img: boden },
  { n: "09", kicker: "Rundum-Betreuung", title: "Hausmeisterservice", desc: "Zuverlässiger Hausmeisterservice für Wartung, Pflege und technischen Betrieb Ihrer Immobilie.", img: sunset },
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
            Vom täglichen Reinigungsservice bis zur Spezialreinigung – das komplette Spektrum professioneller Gebäudedienstleistungen in Hamburg.
          </p>
          <div><span className="text-3xl font-bold text-primary">11</span> <span className="kicker">Leistungen</span></div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x space-y-px bg-border">
          {services.map((s, i) => (
            <div key={s.n} className={`grid md:grid-cols-[80px_1fr_1fr_auto] gap-6 md:gap-10 items-center bg-background p-6 md:p-10 ${i === 0 ? "border-t border-border" : ""}`}>
              <span className="text-sm font-mono text-muted-foreground">{s.n}</span>
              <img src={s.img} alt={s.title} className="w-full h-40 object-cover rounded-sm" loading="lazy" />
              <div>
                <p className="kicker mb-2">{s.kicker}</p>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <Link to="/kontakt" className="text-xs font-semibold tracking-[0.2em] uppercase text-primary whitespace-nowrap hover:underline">Mehr erfahren →</Link>
            </div>
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

export default Leistungen;
