import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";

const UeberUns = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <AboutSection />
      <WhyUsSection />
    </main>
    <Footer />
  </div>
);

export default UeberUns;
