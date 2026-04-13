const reasons = [
  {
    num: "01",
    title: "Familiengeführt & persönlich",
    text: "Als familiengeführtes Unternehmen sind wir persönlich für Sie da und stehen mit unserem Namen für Qualität.",
  },
  {
    num: "02",
    title: "Erfahrene Reinigungsprofis",
    text: "Unser geschultes Team bringt langjährige Erfahrung und Fachwissen in jede Reinigung ein.",
  },
  {
    num: "03",
    title: "Maßgeschneiderte Konzepte",
    text: "Wir entwickeln individuelle Reinigungspläne, die exakt auf Ihre Anforderungen zugeschnitten sind.",
  },
  {
    num: "04",
    title: "Zuverlässig & flexibel",
    text: "Pünktlich, gründlich und flexibel – auf Clean & Pure können Sie sich verlassen.",
  },
];

const WhyUsSection = () => (
  <section className="py-20 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase text-center mb-4">
        Ihre Vorteile
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-14">
        Warum Clean & Pure?
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((r) => (
          <div key={r.num} className="flex gap-6">
            <span className="text-4xl font-bold text-primary/20 shrink-0 leading-none">{r.num}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-wide mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
