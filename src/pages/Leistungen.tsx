import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import CustomerSegments from "@/components/CustomerSegments";
import refGlas from "@/assets/ref-glas.jpg";

const Leistungen = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero
        image={refGlas}
        kicker="Was wir für Sie leisten"
        title={<>Alles aus <span className="text-primary font-normal">einer Hand</span></>}
        subtitle="Vom täglichen Reinigungsservice bis zur Spezialreinigung – das komplette Spektrum professioneller Gebäudedienstleistungen in Hamburg."
      />
      <ServicesSection />
      <CustomerSegments />
    </main>
    <Footer />
  </div>
);

export default Leistungen;
