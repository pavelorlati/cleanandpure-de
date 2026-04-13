import { MessageCircle, Sparkles, Star, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    icon: MessageCircle,
    title: "Kostenlose Beratung",
    text: "Wir beraten Sie unverbindlich und erstellen Ihnen ein individuelles Angebot.",
    href: "#contact",
  },
  {
    icon: Sparkles,
    title: "Unterhaltsreinigung",
    text: "Regelmäßige professionelle Reinigung für Büros, Praxen, Hotels und mehr.",
    href: "#services",
  },
  {
    icon: Star,
    title: "Sonderreinigung",
    text: "Grundreinigung, Glasreinigung, Bauendreinigung und weitere Spezialleistungen.",
    href: "#services",
  },
  {
    icon: Phone,
    title: "Kontakt aufnehmen",
    text: "Rufen Sie uns an oder schreiben Sie uns – wir sind für Sie da.",
    href: "#contact",
  },
];

const QuickAccessCards = () => (
  <section className="bg-muted py-20">
    <div className="mx-auto max-w-[1400px] px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center tracking-wide mb-4">
        Was können wir für Sie tun?
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Entdecken Sie unsere Dienstleistungen und nehmen Sie noch heute Kontakt auf.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <a key={card.title} href={card.href} className="group">
            <Card className="h-full transition-shadow hover:shadow-lg border-0 shadow-sm">
              <CardContent className="p-8 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-wide">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.text}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all gap-1">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default QuickAccessCards;
