import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ServicesSection from "@/components/ServicesSection";
import CustomerSegments from "@/components/CustomerSegments";
import SeoLongCopy from "@/components/SeoLongCopy";

const Leistungen = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <ServicesSection />
      <CustomerSegments />
      <SeoLongCopy
        kicker="Professionelle Reinigung"
        heading="Das gesamte Spektrum der Gebäudereinigung in Hamburg"
        paragraphs={[
          "Vom täglichen Reinigungsservice bis zur Spezialreinigung: Clean & Pure deckt alle Gewerke der professionellen Gebäudereinigung ab. Unsere Reinigungskonzepte werden individuell auf Ihr Objekt abgestimmt – nach Quadratmetern, Frequenz, Nutzung und besonderen Anforderungen Ihrer Branche.",
          "Die Unterhaltsreinigung sorgt täglich, wöchentlich oder im individuellen Turnus für Ordnung und Hygiene in Büros, Praxen und Verkaufsflächen. Die Glas- und Fassadenreinigung entfernt Wasserflecken, Pollen und Stadtstaub streifenfrei – auch in luftiger Höhe und an schwer zugänglichen Stellen.",
          "Bei der Grund- und Sonderreinigung lösen wir hartnäckige Verschmutzungen, entfernen alte Beschichtungen und bringen Böden, Polster und Oberflächen zurück in den Originalzustand. Anschließend schützen Versiegelungen und Imprägnierungen vor erneuter Beanspruchung.",
          "Für Hotels, Praxen und Kliniken bieten wir spezialisierte Hygienereinigungen nach DIN-Standards an. Die Bauendreinigung übergibt Neubauten und Sanierungsobjekte sofort nutzbar an die Bauherren. Mit unserem Hausmeisterservice runden wir das Angebot ab – Wartung, Pflege und kleinere Reparaturen aus einer Hand.",
          "Alle Leistungen werden von festangestelltem, geschultem Personal ausgeführt. Wir arbeiten mit modernen Maschinen und ressourcenschonenden Reinigungsmitteln, dokumentieren unsere Einsätze und stellen Ihnen einen festen Ansprechpartner zur Seite.",
        ]}
        faq={[
          {
            q: "Wie wird der Preis kalkuliert?",
            a: "Auf Basis von Fläche, Reinigungsfrequenz, Schwierigkeitsgrad und benötigtem Material. Sie erhalten einen transparenten Festpreis – ohne versteckte Aufschläge.",
          },
          {
            q: "Kann ich verschiedene Leistungen kombinieren?",
            a: "Ja, das empfehlen wir sogar. Viele Kunden lassen Unterhaltsreinigung, Glasreinigung und periodische Grundreinigung in einem Paket bündeln – effizienter und günstiger.",
          },
          {
            q: "Welche Reinigungsmittel verwenden Sie?",
            a: "Wir setzen wo immer möglich auf umweltfreundliche, biologisch abbaubare Mittel. Für Praxen und sensible Bereiche kommen zertifizierte Desinfektionsmittel nach RKI-Liste zum Einsatz.",
          },
          {
            q: "Übernehmen Sie auch einmalige Aufträge?",
            a: "Ja. Grund-, Bauend- und Sonderreinigungen führen wir auch einmalig oder projektbezogen durch.",
          },
        ]}
        bg="muted"
      />
    </main>
    <Footer />
  </div>
);

export default Leistungen;
