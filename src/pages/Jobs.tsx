import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import JobsSection from "@/components/JobsSection";

const Jobs = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <JobsSection />
    </main>
    <Footer />
  </div>
);

export default Jobs;
