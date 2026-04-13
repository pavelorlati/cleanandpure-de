const references = [
  { title: "Polsterreinigung", desc: "Tiefenreinigung von Polstermöbeln" },
  { title: "Bodengrundreinigung", desc: "Professionelle Bodenaufbereitung" },
  { title: "Fassadenreinigung", desc: "Außenflächen wie neu" },
  { title: "Glasreinigung", desc: "Streifenfreie Sauberkeit" },
  { title: "Büroreinigung", desc: "Saubere Arbeitsumgebung" },
  { title: "Treppenhausreinigung", desc: "Gepflegte Gemeinschaftsflächen" },
];

const ReferencesSection = () => (
  <section id="references" className="py-20 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase text-center mb-4">
        Referenzen
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-14">
        Einblicke in unsere Arbeit
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref) => (
          <div key={ref.title} className="group relative rounded-xl overflow-hidden bg-muted aspect-[4/3] flex items-end">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60 flex items-center justify-center">
              <span className="text-5xl opacity-30">📷</span>
            </div>
            <div className="relative z-10 p-6 w-full">
              <h3 className="text-lg font-semibold text-primary-foreground tracking-wide">{ref.title}</h3>
              <p className="text-sm text-primary-foreground/80">{ref.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesSection;
