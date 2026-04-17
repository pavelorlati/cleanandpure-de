import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeJobsTeaser = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <p className="text-sm uppercase tracking-widest text-primary mb-4">Karriere</p>
      <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
        Werden Sie Teil unseres Teams
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Wir suchen zuverlässige Mitarbeiterinnen und Mitarbeiter, die mit
        uns gemeinsam für höchste Qualität sorgen.
      </p>
      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <Link to="/jobs">Offene Stellen ansehen</Link>
      </Button>
    </div>
  </section>
);

export default HomeJobsTeaser;
