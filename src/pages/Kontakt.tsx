import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import refBuero from "@/assets/ref-buero.jpg";

const Kontakt = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero
        image={refBuero}
        kicker="Kontakt"
        title={<>Wir sind <span className="text-primary font-normal">für Sie da</span></>}
      />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Kontakt;
