import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const steps = [
  { num: "01", title: "Anfrage senden", text: "Formular ausfüllen oder anrufen – dauert nur 2 Minuten." },
  { num: "02", title: "Angebot erhalten", text: "Wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot." },
  { num: "03", title: "Starten & entspannen", text: "Unser Team übernimmt – pünktlich, diskret und zuverlässig." },
];

const HomeProcessCTA = () => (
  <section className="py-24 border-t border-border bg-background">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
          Bereit für ein sauberes Ergebnis?
        </p>
        <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
          Ihr Angebot in <span className="text-primary font-normal">24 Stunden</span>.
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/kontakt">
              Jetzt Angebot anfordern
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary bg-transparent hover:bg-primary/10">
            <a href="tel:04035966171">
              <Phone className="mr-2 w-4 h-4" />
              Direkt anrufen
            </a>
          </Button>
        </div>
        <p className="text-muted-foreground text-xs tracking-wide">
          ✓ Kostenlos &amp; unverbindlich &nbsp;·&nbsp; ✓ Antwort in 24h &nbsp;·&nbsp; ✓ Kein Risiko
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 pt-8 border-t border-border">
        {steps.map((s) => (
          <div key={s.num} className="space-y-3">
            <p className="text-sm font-medium tracking-[0.25em] text-primary">{s.num}</p>
            <h3 className="text-lg font-normal tracking-wide">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeProcessCTA;
