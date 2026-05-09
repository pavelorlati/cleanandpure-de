import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ContactSection from "@/components/ContactSection";

const Kontakt = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Kontakt;
