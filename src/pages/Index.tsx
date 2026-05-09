import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeReferencesPreview from "@/components/HomeReferencesPreview";
import HomeServicesTeaser from "@/components/HomeServicesTeaser";
import HomeJobsTeaser from "@/components/HomeJobsTeaser";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <HeroSection />
      <HomeReferencesPreview />
      <HomeServicesTeaser />
      <HomeJobsTeaser />
    </main>
    <Footer />
  </div>
);

export default Index;
