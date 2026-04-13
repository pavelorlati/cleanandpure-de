import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactCards = [
  {
    icon: Phone,
    title: "Telefon",
    value: "040/35 96 61 71",
    href: "tel:04035966171",
    action: "Jetzt anrufen",
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "info@cleanandpure.de",
    href: "mailto:info@cleanandpure.de",
    action: "E-Mail senden",
  },
  {
    icon: MapPin,
    title: "Standort",
    value: "Hamburg",
    href: "#",
    action: "Auf Karte ansehen",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-20 bg-primary">
    <div className="mx-auto max-w-[1400px] px-6">
      <p className="text-sm font-medium text-primary-foreground/80 tracking-[0.2em] uppercase text-center mb-4">
        Kontakt
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-4 text-primary-foreground">
        Nehmen Sie Kontakt auf
      </h2>
      <p className="text-center text-primary-foreground/80 mb-14 max-w-xl mx-auto">
        Wir freuen uns auf Ihre Anfrage und beraten Sie gerne unverbindlich.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {contactCards.map((c) => (
          <a key={c.title} href={c.href} className="group">
            <Card className="border-0 shadow-lg h-full transition-transform hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center">
                  <c.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold tracking-wide">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.value}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                  {c.action} <ArrowRight className="w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="secondary" className="text-base font-semibold tracking-wide" asChild>
          <a href="mailto:info@cleanandpure.de">
            Jetzt Angebot anfragen
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
