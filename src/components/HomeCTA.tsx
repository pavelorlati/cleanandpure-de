import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaImg from "@/assets/ueber-hero.jpg";

const steps = [
  { num: "01", title: "Anfrage senden", text: "Formular ausfüllen oder anrufen – dauert nur 2 Minuten." },
  { num: "02", title: "Angebot erhalten", text: "Wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot." },
  { num: "03", title: "Starten & entspannen", text: "Unser Team übernimmt – pünktlich, diskret und zuverlässig." },
];

const benefits = ["Kostenlos & unverbindlich", "Antwort in 24 h", "Kein Risiko"];

const HomeCTA = () => (
  <section className="relative overflow-hidden bg-foreground">
    <img
      src={ctaImg}
      alt="Clean & Pure Hamburg"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
    <div className="relative mx-auto max-w-[1400px] px-6 py-24 text-background">
      <div className="max-w-3xl space-y-8">
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">Bereit für ein sauberes Ergebnis?</p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
          Ihr Angebot in <span className="font-normal text-primary">24 Stunden.</span>
        </h2>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="text-base font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/kontakt">Jetzt Angebot anfordern <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold tracking-wide border-primary text-primary bg-transparent hover:bg-primary/10" asChild>
            <a href="tel:+494035966171">Direkt anrufen</a>
          </Button>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-sm text-background/80">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-background/15">
        {steps.map((s) => (
          <div key={s.num} className="space-y-3">
            <span className="text-3xl font-light text-primary/70">{s.num}</span>
            <h3 className="text-lg font-semibold tracking-wide text-background">{s.title}</h3>
            <p className="text-sm text-background/70 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeCTA;
