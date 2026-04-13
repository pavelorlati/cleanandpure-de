import { Home, Building2, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const privatServices = [
  "Haushaltsreinigung",
  "Fenster- & Glasreinigung",
  "Polsterreinigung",
  "Teppichgrundreinigung",
  "Grundreinigung",
  "Treppenhausreinigung",
];

const gewerbeServices = [
  "Büroreinigung",
  "Shopreinigung",
  "Hotelreinigung",
  "Praxisreinigung",
  "Bauendreinigung",
  "Fassadenreinigung",
  "Hausmeisterservice",
  "Bodensanierung",
];

const CustomerSegments = () => (
  <section className="py-20 bg-muted">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase text-center mb-4">
        Für jeden das Richtige
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-14">
        Privat- & Gewerbekunden
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-2">
              <Home className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-xl tracking-wide">Für Privatkunden</CardTitle>
            <p className="text-sm text-muted-foreground">Sauberkeit und Wohlbefinden für Ihr Zuhause</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {privatServices.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-2">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-xl tracking-wide">Für Gewerbekunden</CardTitle>
            <p className="text-sm text-muted-foreground">Professionelle Reinigung für Ihr Unternehmen</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {gewerbeServices.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default CustomerSegments;
