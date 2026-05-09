import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ServicesSection from "@/components/ServicesSection";
import CustomerSegments from "@/components/CustomerSegments";

const Leistungen = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <ServicesSection />
      <CustomerSegments />
    </main>
    <Footer />
  </div>
);

export default Leistungen;
