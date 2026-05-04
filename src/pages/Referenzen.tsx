import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import ReferencesSection from "@/components/ReferencesSection";
import refBuero from "@/assets/ref-buero.jpg";

const Referenzen = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero
        image={refBuero}
        kicker="Vertrauen durch Erfahrung"
        title={<>Unsere <span className="text-primary font-normal">Referenzen</span></>}
        subtitle="Wir arbeiten für Kunden aus unterschiedlichsten Branchen – diskret, vertrauensvoll und mit klarem Fokus auf Qualität."
      />
      <ReferencesSection />
    </main>
    <Footer />
  </div>
);

export default Referenzen;
