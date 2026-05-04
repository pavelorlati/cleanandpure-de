import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Kostenlos & unverbindlich",
  "Antwort in 24 Stunden",
  "Individuelle Angebote",
];

const leistungOptions = [
  "Unterhaltsreinigung",
  "Büroreinigung",
  "Glas- & Fassadenreinigung",
  "Grund- & Sonderreinigung",
  "Praxis- & Hygienereinigung",
  "Hotelreinigung",
  "Hausmeisterservice",
  "Polster- & Teppichreinigung",
  "Bodensanierung & Versiegelung",
  "Bauendreinigung",
  "Außen- & Treppenhausreinigung",
  "Sonstiges",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", leistung: "", message: "" });

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
      `Name: ${name}\nE-Mail: ${email}\nTelefon: ${form.phone.trim() || "–"}\nLeistung: ${form.leistung || "–"}\n\nNachricht:\n${message}`,
    );
    window.location.href = `mailto:info@cleanandpure.de?subject=${subject}&body=${body}`;
    toast({ title: "Ihr E-Mail-Programm wird geöffnet." });
    setForm({ name: "", email: "", phone: "", leistung: "", message: "" });
  };

  return (
    <section id="contact" className="bg-background">
      {/* Intro */}
      <div className="py-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              Sprechen Sie uns an
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
              Wir freuen uns auf <span className="text-primary font-normal">Ihre Anfrage.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ob regelmäßige Unterhaltsreinigung oder einmaliger Spezialeinsatz –
              schildern Sie uns Ihren Bedarf. Wir melden uns innerhalb von 24 Stunden
              mit einem individuellen Angebot.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={3} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            <div>
              <Phone className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Telefon</p>
              <a href="tel:04035966171" className="text-foreground hover:text-primary transition-colors">
                040 - 35 96 61 71
              </a>
            </div>
            <div>
              <Mail className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">E-Mail</p>
              <a href="mailto:info@cleanandpure.de" className="text-foreground hover:text-primary transition-colors break-all">
                info@cleanandpure.de
              </a>
            </div>
            <div>
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Adresse</p>
              <p className="text-foreground leading-relaxed">
                Lauenburger Straße 13<br />22049 Hamburg
              </p>
            </div>
            <div>
              <Clock className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Öffnungszeiten</p>
              <p className="text-foreground leading-relaxed">
                Mo–Do: 08:30–17:00 Uhr<br />Fr: 08:30–15:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formular */}
      <div className="py-24 border-b border-border">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4 text-center">
            Angebot anfordern
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-center mb-12">
            Schildern Sie uns Ihren <span className="text-primary font-normal">Bedarf</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input placeholder="Ihr Name *" maxLength={100}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input type="email" placeholder="Ihre E-Mail *" maxLength={255}
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Input type="tel" placeholder="Telefonnummer (optional)" maxLength={30}
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select
                value={form.leistung}
                onChange={(e) => setForm({ ...form, leistung: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Leistung wählen</option>
                {leistungOptions.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <Textarea placeholder="Ihre Nachricht *" maxLength={1000} rows={5}
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="resize-none" />
            <Button type="submit" size="lg" className="w-full text-base font-semibold tracking-wide">
              Anfrage senden
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>

      {/* Telefon-CTA */}
      <div className="py-20 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
          Lieber telefonisch?
        </p>
        <h3 className="text-2xl md:text-3xl font-light leading-tight mb-6">
          Rufen Sie uns einfach <span className="text-primary font-normal">an.</span>
        </h3>
        <a href="tel:04035966171" className="text-2xl md:text-3xl text-primary font-light tracking-wide hover:underline underline-offset-8">
          040 - 35 96 61 71
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
