import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeJobsTeaser = () => (
  <section className="py-24 bg-primary/5">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-medium">Karriere</p>
      <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
        Werden Sie Teil unseres <span className="text-primary font-normal">Teams</span>
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Wir suchen zuverlässige Mitarbeiterinnen und Mitarbeiter, die mit
        uns gemeinsam für höchste Qualität sorgen.
      </p>
      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Link to="/jobs">Offene Stellen ansehen</Link>
      </Button>
    </div>
  </section>
);

export default HomeJobsTeaser;
