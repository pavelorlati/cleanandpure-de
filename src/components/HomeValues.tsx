const values = [
  { num: "01", title: "Zuverlässigkeit", text: "Pünktlich & verlässlich" },
  { num: "02", title: "Nachhaltigkeit", text: "Umweltfreundliche Mittel" },
  { num: "03", title: "Fachkompetenz", text: "Geschultes Personal" },
  { num: "04", title: "Persönl. Service", text: "Direkter Ansprechpartner" },
];

const HomeValues = () => (
  <section className="py-24 border-t border-border bg-background">
    <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {values.map((v) => (
        <div key={v.num} className="space-y-3">
          <p className="text-sm font-medium tracking-[0.25em] text-primary">{v.num}</p>
          <h3 className="text-xl font-normal tracking-wide">{v.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HomeValues;
