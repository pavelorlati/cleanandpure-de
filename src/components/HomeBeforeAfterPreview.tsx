import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import vorherParkett from "@/assets/vorher-parkett.jpg";
import nachherParkett from "@/assets/nachher-parkett.jpg";
import vorherFlur from "@/assets/vorher-flur.jpg";
import nachherFlur from "@/assets/nachher-flur.jpg";

const items = [
  { before: vorherParkett, after: nachherParkett, title: "Parkett-Grundreinigung", alt: "Parkett-Grundreinigung – Clean & Pure Hamburg" },
  { before: vorherFlur, after: nachherFlur, title: "Flur-Tiefenreinigung", alt: "Flur-Tiefenreinigung – Clean & Pure Hamburg" },
];

const HomeBeforeAfterPreview = () => (
  <section className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="text-center mb-14 space-y-4 max-w-2xl mx-auto">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Referenzen</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
          Das Ergebnis <span className="font-normal">spricht für sich</span>
        </h2>
        <p className="text-muted-foreground">Echte Aufträge, echte Transformationen.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((i) => (
          <div key={i.title} className="space-y-4">
            <BeforeAfterSlider before={i.before} after={i.after} alt={i.alt} />
            <p className="text-sm font-medium tracking-wide text-center">{i.title}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/referenzen"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary tracking-[0.2em] uppercase hover:underline"
        >
          Alle Referenzen ansehen <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default HomeBeforeAfterPreview;
