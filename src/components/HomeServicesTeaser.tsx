import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeServicesTeaser = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-medium">Leistungen</p>
      <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
        Sauberkeit, auf die Sie sich <span className="text-primary font-normal">verlassen</span> können
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Von der laufenden Unterhaltsreinigung bis zur Sonderreinigung –
        wir bieten Ihnen ein abgestimmtes Konzept für jedes Objekt.
      </p>
      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <Link to="/leistungen">Unsere Leistungen</Link>
      </Button>
    </div>
  </section>
);

export default HomeServicesTeaser;
