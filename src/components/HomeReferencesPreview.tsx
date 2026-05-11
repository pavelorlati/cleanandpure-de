import { Link } from "react-router-dom";
import img1 from "@/assets/work-glasdach.jpg";
import img2 from "@/assets/work-kueche.jpg";
import img3 from "@/assets/work-fenster-van.jpg";
import img4 from "@/assets/work-hochhaus.jpg";

const previews = [
  { img: img1, alt: "Glasdachreinigung mit Teleskopbürste" },
  { img: img2, alt: "Küchenreinigung im Einsatz" },
  { img: img3, alt: "Fensterreinigung mit Firmenwagen" },
  { img: img4, alt: "Glasreinigung mit Blick über Hamburg" },
];

const HomeReferencesPreview = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 font-medium">Referenzen</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
            Einblicke in <span className="text-primary font-normal">unsere Arbeit</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ein kleiner Auszug aus den Objekten, die wir regelmäßig betreuen –
            von Büroflächen bis zu Glasfassaden.
          </p>
          <Link
            to="/referenzen"
            className="inline-block text-primary hover:underline underline-offset-4 font-medium"
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
