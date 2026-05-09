import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import SeoLongCopy from "@/components/SeoLongCopy";

const UeberUns = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <AboutSection />
      <WhyUsSection />
      <SeoLongCopy
        kicker="Unsere Geschichte"
        heading="Hamburger Qualität – mit Herz gemacht."
        paragraphs={[
          "Clean & Pure GmbH wurde mit einer klaren Mission gegründet: professionellen Gebäudeservice zu erbringen, der wirklich den Unterschied macht. Als Unternehmen mit Hamburger Wurzeln wissen wir, dass Vertrauen die Grundlage jeder guten Zusammenarbeit ist. Deshalb stehen wir für Verlässlichkeit, Transparenz und höchste Qualitätsstandards – bei jedem Auftrag, für jeden Kunden.",
          "Hinter jedem sauberen Gebäude steht ein eingespieltes Team. Unsere geschulten Reinigungsprofis arbeiten täglich in Hamburg – mit Leidenschaft, Präzision und modernsten Maschinen. Die Unternehmensgruppe Clean & Pure steht für über 15 Jahre Erfahrung in der professionellen Gebäudereinigung – vom Bürogebäude bis zur Glasfassade, von der Praxis bis zum Industriestandort.",
          "Was uns ausmacht? Persönlicher Service, kurze Wege und feste Ansprechpartner. Sie sprechen direkt mit den Menschen, die Ihren Auftrag verantworten – nicht mit einer Hotline. Diese Nähe ist uns wichtig, weil sie Vertrauen schafft und Probleme gar nicht erst entstehen lässt.",
          "Unsere Werte: Qualität, Integrität und Nachhaltigkeit. Jeder Auftrag wird mit größter Sorgfalt ausgeführt. Wir halten, was wir versprechen. Und wir denken an morgen – ökologische Verantwortung ist fester Bestandteil unseres Handelns. Umweltfreundliche Reinigungsmittel, sparsamer Wasser- und Energieeinsatz und langlebige Maschinen sind für uns selbstverständlich.",
          '„Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen." – Dieses Leitmotiv prägt unser tägliches Handeln. Wir freuen uns darauf, Sie persönlich kennenzulernen.',
        ]}
        bg="muted"
      />
    </main>
    <Footer />
  </div>
);

export default UeberUns;
