import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ReferencesSection from "@/components/ReferencesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";

const Referenzen = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <ReferencesSection />
      <BeforeAfterSection />
    </main>
    <Footer />
  </div>
);

export default Referenzen;
