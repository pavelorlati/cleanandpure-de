const testimonials = [
  { text: "Sehr zuverlässig und gründlich! Immer pünktlich, alles makellos sauber. Absolute Empfehlung!", name: "Thomas M.", role: "Bürogebäude Hamburg" },
  { text: "Seit über zwei Jahren für unsere Praxisreinigung. Konstant hohe Qualität, sehr freundliches Personal.", name: "Dr. Andrea K.", role: "Zahnarztpraxis" },
  { text: "Schnelle Reaktion, top Arbeit, faire Preise. Besonders die Glasreinigung ist beeindruckend.", name: "Stefan B.", role: "Hausverwaltung" },
];

const HomeTestimonials = () => (
  <section className="py-24 border-t border-border bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
          Google Bewertungen
        </p>
        <h2 className="text-3xl md:text-4xl font-light leading-tight">
          Was unsere <span className="text-primary font-normal">Kunden sagen</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-6 tracking-wide">
          ★★★★★ &nbsp; 5,0 &nbsp;·&nbsp; 100+ Bewertungen
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((t) => (
          <div key={t.name} className="space-y-5">
            <p className="text-primary tracking-widest text-sm">★★★★★</p>
            <p className="text-foreground leading-relaxed font-light">„{t.text}"</p>
            <div className="pt-2 border-t border-border">
              <p className="font-normal tracking-wide text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTestimonials;
