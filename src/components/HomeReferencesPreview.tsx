import { Link } from "react-router-dom";
import refBuero from "@/assets/ref-buero.jpg";
import refGlas from "@/assets/ref-glas.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refFassade from "@/assets/ref-fassade.jpg";

const previews = [
  { img: refBuero, alt: "Büroreinigung" },
  { img: refGlas, alt: "Glasreinigung" },
  { img: refBoden, alt: "Bodenreinigung" },
  { img: refFassade, alt: "Fassadenreinigung" },
];

const HomeReferencesPreview = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Referenzen</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
            Einblicke in unsere Arbeit
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ein kleiner Auszug aus den Objekten, die wir regelmäßig betreuen –
            von Büroflächen bis zu Glasfassaden.
          </p>
          <Link
            to="/referenzen"
            className="text-primary hover:underline underline-offset-4"
          >
            Alle Referenzen ansehen →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {previews.map((p) => (
            <Link
              key={p.alt}
              to="/referenzen"
              className="block overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="w-full h-40 md:h-44 object-cover transition-opacity hover:opacity-80"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeReferencesPreview;
