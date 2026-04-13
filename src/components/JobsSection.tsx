import { useState } from "react";
import { Briefcase, Clock, MapPin, Send, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const jobListings = [
  {
    title: "Reinigungskraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Hamburg",
    description:
      "Unterstützen Sie unser Team bei der Unterhaltsreinigung in Büros, Praxen und Gewerbeobjekten.",
    tasks: [
      "Unterhaltsreinigung diverser Objekte",
      "Einhaltung von Hygiene- und Qualitätsstandards",
      "Selbstständiges und zuverlässiges Arbeiten",
    ],
  },
  {
    title: "Objektleiter/in (m/w/d)",
    type: "Vollzeit",
    location: "Hamburg",
    description:
      "Übernehmen Sie Verantwortung für unsere Reinigungsobjekte und führen Sie ein motiviertes Team.",
    tasks: [
      "Leitung und Koordination von Reinigungsteams",
      "Qualitätskontrolle und Kundenkommunikation",
      "Einarbeitung neuer Mitarbeiter/innen",
    ],
  },
  {
    title: "Glasreiniger/in (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Hamburg",
    description:
      "Professionelle Glas- und Rahmenreinigung an verschiedenen Standorten in Hamburg.",
    tasks: [
      "Glas- und Rahmenreinigung (innen & außen)",
      "Fassadenreinigung im Osmoseverfahren",
      "Pflege und Wartung der Arbeitsmittel",
    ],
  },
];

const benefits = [
  "Faire Bezahlung & pünktliche Lohnzahlung",
  "Familiäres Arbeitsumfeld",
  "Flexible Arbeitszeiten",
  "Einarbeitung & Weiterbildung",
  "Langfristige Beschäftigung",
  "Moderne Arbeitsmittel",
];

const JobsSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(
      `Bewerbung von ${name}${form.position ? ` – ${form.position}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nTelefon: ${form.phone.trim() || "–"}\nGewünschte Stelle: ${form.position.trim() || "–"}\n\nNachricht:\n${message}`
    );
    window.location.href = `mailto:info@cleanandpure.de?subject=${subject}&body=${body}`;

    toast({ title: "Ihr E-Mail-Programm wird geöffnet." });
    setForm({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <section id="jobs" className="py-20">
      {/* Header with primary background */}
      <div className="bg-primary py-14 mb-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="text-sm font-medium text-primary-foreground/80 tracking-[0.2em] uppercase text-center mb-4">
            Karriere
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-4 text-primary-foreground">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto">
            Wir suchen engagierte Mitarbeiter/innen, die unser familiäres Team verstärken möchten.
            Bewerben Sie sich jetzt – wir freuen uns auf Sie!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6">
        {/* Benefits Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 p-3 text-sm"
            >
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground leading-tight">{b}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Job Listings – left */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-lg font-bold tracking-wide flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </span>
              Offene Stellen
            </h3>
            {jobListings.map((job) => (
              <Card key={job.title} className="border-l-4 border-l-primary border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h4 className="text-base font-bold tracking-wide">{job.title}</h4>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                  <ul className="space-y-1.5">
                    {job.tasks.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm">
                        <Star className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form – right */}
          <Card className="lg:col-span-2 border-0 shadow-2xl sticky top-36 overflow-hidden">
            <div className="bg-primary px-8 py-5">
              <h3 className="text-xl font-bold tracking-wide mb-1 flex items-center gap-2 text-primary-foreground">
                <Users className="w-5 h-5" />
                Jetzt bewerben
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Senden Sie uns Ihre Bewerbung – wir melden uns zeitnah bei Ihnen.
              </p>
            </div>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <Input
                  type="tel"
                  placeholder="Telefonnummer (optional)"
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Input
                  placeholder="Gewünschte Stelle (optional)"
                  maxLength={100}
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                />
                <Textarea
                  placeholder="Ihre Nachricht / Kurzvorstellung *"
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base font-semibold tracking-wide"
                >
                  Bewerbung absenden
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

export default JobsSection;
