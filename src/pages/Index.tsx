import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeStatsBar from "@/components/HomeStatsBar";
import HomeAboutTeaser from "@/components/HomeAboutTeaser";
import HomeValues from "@/components/HomeValues";
import HomeServicesGrid from "@/components/HomeServicesGrid";
import HomeReferencesPreview from "@/components/HomeReferencesPreview";
import HomeQuote from "@/components/HomeQuote";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeJobsTeaser from "@/components/HomeJobsTeaser";
import HomeProcessCTA from "@/components/HomeProcessCTA";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <HeroSection />
      <HomeStatsBar />
      <HomeAboutTeaser />
      <HomeValues />
      <HomeServicesGrid />
      <HomeReferencesPreview />
      <HomeQuote />
      <HomeTestimonials />
      <HomeJobsTeaser />
      <HomeProcessCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
