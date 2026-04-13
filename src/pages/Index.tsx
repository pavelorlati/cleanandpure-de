import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickAccessCards from "@/components/QuickAccessCards";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReferencesSection from "@/components/ReferencesSection";
import CustomerSegments from "@/components/CustomerSegments";
import WhyUsSection from "@/components/WhyUsSection";
import JobsSection from "@/components/JobsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => (
  <div className="min-h-screen">
    <FloatingContactButton />
    <Header />
    <HeroSection />
    <QuickAccessCards />
    <AboutSection />
    <ServicesSection />
    <ReferencesSection />
    <CustomerSegments />
    <WhyUsSection />
    <JobsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
