import { Link } from "react-router-dom";
import equipment from "@/assets/equipment.jpg";

const HomeAboutTeaser = () => (
  <section className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
          Familiengeführt · Hamburg
        </p>
        <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
          Familiengeführt, zuverlässig &{" "}
          <span className="text-primary font-normal">nachhaltig</span>.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Clean &amp; Pure GmbH steht für professionellen Gebäudeservice mit Herz.
          Als familiengeführtes Unternehmen verbinden wir höchste Qualitätsstandards
          mit persönlichem Service – für Büros, Hotels, Praxen und Auftraggeber in Hamburg.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Seit Jahren sorgen unsere geschulten Reinigungsprofis dafür, dass Hamburgs
          anspruchsvollste Gebäude täglich in bestem Zustand sind.
        </p>
        <Link
          to="/ueber-uns"
          className="inline-block text-primary hover:underline underline-offset-4 font-medium"
        >
          Mehr über uns →
        </Link>
      </div>
      <div>
        <img
          src={equipment}
          alt="Professionelle Reinigungsausstattung Clean & Pure"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default HomeAboutTeaser;
