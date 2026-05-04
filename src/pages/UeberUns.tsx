import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import heroImg from "@/assets/hero-cleaning.jpg";

const UeberUns = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <PageHero
        image={heroImg}
        kicker="Über uns"
        title={<>Hamburger Qualität.<br/>Mit <span className="text-primary font-normal">Herz</span> gemacht.</>}
      />
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default UeberUns;
