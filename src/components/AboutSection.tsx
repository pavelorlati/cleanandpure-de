import { Heart, Users, Shield, Clock } from "lucide-react";

const features = [
  { icon: Heart, label: "Mit Sorgfalt & Engagement" },
  { icon: Users, label: "Erfahrenes Team" },
  { icon: Shield, label: "Zuverlässig & Diskret" },
  { icon: Clock, label: "Flexibel & Pünktlich" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium text-primary tracking-[0.25em] uppercase">Über uns</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide leading-tight">
            Ihr Gebäudedienstleister aus Hamburg
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Clean & Pure ist ein familiengeführtes Reinigungsunternehmen aus Hamburg. Seit unserer Gründung stehen wir für Qualität, Zuverlässigkeit und maßgeschneiderte Reinigungskonzepte. Unser engagiertes Team sorgt dafür, dass Ihre Räumlichkeiten stets in bestem Zustand sind.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Wir bieten individuelle Lösungen für Privat- und Gewerbekunden und legen dabei großen Wert auf persönliche Betreuung und höchste Hygienestandards. Vertrauen Sie auf unsere Erfahrung und unser Engagement für Sauberkeit.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.label} className="border border-border rounded-lg p-8 text-center space-y-4">
              <f.icon className="w-7 h-7 text-primary mx-auto" />
              <p className="font-semibold tracking-wide text-sm">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
