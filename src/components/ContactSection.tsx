import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  {
    icon: Phone,
    title: "Telefon",
    value: "040 35 96 61 71",
    href: "tel:+494035966171",
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
  {
    icon: InstagramIcon,
    title: "Instagram",
    value: "@cleanandpure_gebaeudereinigung",
    href: "https://www.instagram.com/cleanandpure_gebaeudereinigung",
    action: "Auf Instagram folgen",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({ title: "Bitte füllen Sie alle Pflichtfelder aus.", variant: "destructive" });
      return;
    }

    const subject = encodeURIComponent(`Anfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nTelefon: ${form.phone.trim() || "–"}\n\nNachricht:\n${message}`
    );
    window.location.href = `mailto:info@cleanandpure.de?subject=${subject}&body=${body}`;

    toast({ title: "Ihr E-Mail-Programm wird geöffnet." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
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

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Cards – left side */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {contactCards.map((c) => (
              <a key={c.title} href={c.href} className="group">
                <Card className="border-0 shadow-lg transition-transform hover:-translate-y-1">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-accent flex items-center justify-center">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wide text-sm">{c.title}</h3>
                      <p className="text-muted-foreground text-sm">{c.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form – right side */}
          <Card className="lg:col-span-3 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold tracking-wide mb-1">Schnellanfrage</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Füllen Sie das Formular aus – wir melden uns schnellstmöglich.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Ihr Name *"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail *"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="Telefonnummer (optional)"
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Textarea
                  placeholder="Ihre Nachricht *"
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none"
                />
                <Button type="submit" size="lg" className="w-full text-base font-semibold tracking-wide">
                  Nachricht senden
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
