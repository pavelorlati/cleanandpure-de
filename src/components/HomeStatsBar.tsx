const stats = [
  { value: "5,0 ★", label: "Google Bewertung" },
  { value: "100+", label: "Zufriedene Kunden" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "Hamburg", label: "& Umgebung" },
];

const HomeStatsBar = () => (
  <section className="border-b border-border bg-background">
    <div className="mx-auto max-w-[1400px] px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center md:text-left">
          <p className="text-2xl md:text-3xl font-light text-foreground">{s.value}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HomeStatsBar;
