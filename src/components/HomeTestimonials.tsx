import { Star } from "lucide-react";

const reviews = [
  { text: "Sehr zuverlässig und gründlich! Immer pünktlich, alles makellos sauber. Absolute Empfehlung!", name: "Thomas M.", role: "Bürogebäude Hamburg" },
  { text: "Seit über zwei Jahren für unsere Praxisreinigung. Konstant hohe Qualität, sehr freundliches Personal.", name: "Dr. Andrea K.", role: "Zahnarztpraxis" },
  { text: "Schnelle Reaktion, top Arbeit, faire Preise. Besonders die Glasreinigung ist beeindruckend.", name: "Stefan B.", role: "Hausverwaltung" },
];

const Stars = () => (
  <div className="flex gap-0.5 text-primary">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary" />
    ))}
  </div>
);

const HomeTestimonials = () => (
  <section className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="text-center mb-14 space-y-4">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Google Bewertungen</p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
          Was unsere <span className="font-normal">Kunden sagen</span>
        </h2>
        <div className="flex flex-col items-center gap-2 pt-2">
          <span className="text-4xl font-light text-primary">5,0</span>
          <Stars />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">100+ Bewertungen</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <article key={r.name} className="border border-border p-8 space-y-5 bg-background">
            <Stars />
            <p className="text-sm text-foreground/90 leading-relaxed italic">„{r.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold tracking-wide">{r.name}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{r.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTestimonials;
