import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const unterhaltsreinigung = [
  "Shopreinigung",
  "Büroreinigung",
  "Hotelreinigung",
  "Praxisreinigung",
  "Außenreinigung",
  "Hygienereinigung",
  "Haushaltsreinigung",
  "Treppenhausreinigung",
];

const sonderreinigung = [
  "Glasreinigung",
  "Grundreinigung",
  "Polsterreinigung",
  "Bauendreinigung",
  "Fassadenreinigung",
  "Hausmeisterservice",
  "Teppichgrundreinigung",
  "Bodensanierung / -Versiegelung",
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-muted">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase text-center mb-4">
        Unsere Leistungen
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-4">
        Professionelle Reinigung aus einer Hand
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        Von der regelmäßigen Unterhaltsreinigung bis zur spezialisierten Sonderreinigung – wir haben die passende Lösung für Sie.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <span className="text-2xl">🧹</span>
            </div>
            <CardTitle className="text-xl tracking-wide">Unterhaltsreinigung</CardTitle>
            <p className="text-sm text-muted-foreground">Regelmäßige Reinigung für dauerhaft saubere Räumlichkeiten</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {unterhaltsreinigung.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <span className="text-2xl">✨</span>
            </div>
            <CardTitle className="text-xl tracking-wide">Sonderreinigung</CardTitle>
            <p className="text-sm text-muted-foreground">Spezialreinigungen für besondere Anforderungen</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {sonderreinigung.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ServicesSection;
