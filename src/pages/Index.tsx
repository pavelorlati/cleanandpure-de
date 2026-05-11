import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeAboutTeaser from "@/components/HomeAboutTeaser";
import HomeServicesGrid from "@/components/HomeServicesGrid";
import HomeBeforeAfterPreview from "@/components/HomeBeforeAfterPreview";
import HomeQuote from "@/components/HomeQuote";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeJobsTeaser from "@/components/HomeJobsTeaser";
import HomeCTA from "@/components/HomeCTA";
import SeoLongCopy from "@/components/SeoLongCopy";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <HeroSection />
      <HomeAboutTeaser />
      <HomeServicesGrid />
      <HomeBeforeAfterPreview />
      <HomeQuote />
      <HomeTestimonials />
      <HomeJobsTeaser />
      <HomeCTA />
      <SeoLongCopy
        kicker="Gebäudereinigung Hamburg"
        heading="Ihr Reinigungspartner in Hamburg – familiengeführt seit über 15 Jahren"
        paragraphs={[
          "Clean & Pure GmbH steht für professionelle Gebäudereinigung in Hamburg und Umgebung. Als familiengeführtes Unternehmen verbinden wir höchste Qualitätsstandards mit persönlichem Service – für Büros, Hotels, Arztpraxen, Hausverwaltungen, Einzelhandel und Industrie.",
          "Über 100 zufriedene Kunden, eine durchschnittliche Google-Bewertung von 5,0 Sternen und Aufträge, die seit vielen Jahren laufen, sprechen für sich. Unsere geschulten Reinigungsprofis sind jeden Tag in Hamburg im Einsatz – pünktlich, diskret und mit modernem Equipment.",
          "Wir bieten das komplette Spektrum: Unterhaltsreinigung, Büro- und Hotelreinigung, Glas- und Fassadenreinigung, Hygienereinigung für Praxen, Polster- und Teppichreinigung, Bodensanierung und Versiegelung, Bauendreinigung, Hausmeisterservice sowie die Pflege von Treppenhäusern und Außenanlagen. Alles aus einer Hand – mit festen Ansprechpartnern.",
          "Was uns auszeichnet: Verlässlichkeit, Nachhaltigkeit und Fachkompetenz. Wir setzen auf umweltfreundliche Reinigungsprodukte, ressourcenschonendes Arbeiten und transparente Abläufe. Sie erhalten ein maßgeschneidertes Angebot innerhalb von 24 Stunden – kostenlos und unverbindlich.",
        ]}
        faq={[
          { q: "Wie schnell erhalte ich ein Angebot?", a: "Innerhalb von 24 Stunden nach Ihrer Anfrage. Bei größeren Objekten vereinbaren wir vorab gerne einen kurzen Vor-Ort-Termin – ebenfalls kostenlos und unverbindlich." },
          { q: "In welchen Stadtteilen Hamburgs sind Sie tätig?", a: "Wir arbeiten in ganz Hamburg und im näheren Umland – von Altona, Eimsbüttel und Wandsbek über die City und HafenCity bis nach Harburg, Bergedorf, Winterhude und Eppendorf." },
          { q: "Arbeiten Sie auch außerhalb der Geschäftszeiten?", a: "Ja. Viele unserer Aufträge laufen morgens vor Geschäftsbeginn, abends oder am Wochenende – damit Ihr Tagesgeschäft nicht gestört wird." },
          { q: "Sind Sie versichert?", a: "Selbstverständlich. Wir verfügen über eine umfassende Betriebshaftpflichtversicherung und arbeiten ausschließlich mit fest angestelltem, geschultem Personal." },
        ]}
        bg="muted"
      />
    </main>
    <Footer />
  </div>
);

export default Index;
