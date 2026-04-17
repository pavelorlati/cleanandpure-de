import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    window.location.href = `mailto:Personal@cleanandpure.de?subject=${subject}&body=${body}`;

    toast({ title: "Ihr E-Mail-Programm wird geöffnet." });
    setForm({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <section id="jobs" className="py-24 bg-background">
      <div className="mx-auto max-w-[1400px] px-6">
        <p className="text-sm font-medium text-primary tracking-[0.25em] uppercase text-center mb-4">
          Karriere
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-4">
          Werden Sie Teil unseres Teams
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Wir suchen engagierte Mitarbeiter/innen, die unser familiäres Team verstärken möchten.
        </p>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Job Listings – left */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold tracking-wide mb-8 pb-3 border-b border-border">
              Offene Stellen
            </h3>
            <div className="divide-y divide-border">
              {jobListings.map((job) => (
                <article key={job.title} className="py-8 first:pt-0">
                  <h4 className="text-base font-semibold tracking-wide mb-2">{job.title}</h4>
                  <p className="text-xs text-muted-foreground tracking-wide mb-4 uppercase">
                    {job.type} · {job.location}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                  <ul className="space-y-2">
                    {job.tasks.map((t) => (
                      <li key={t} className="flex items-baseline gap-3 text-sm">
                        <span className="w-3 h-px bg-primary shrink-0 translate-y-[-4px]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <h3 className="text-xl font-semibold tracking-wide mt-12 mb-6 pb-3 border-b border-border">
              Was wir bieten
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-baseline gap-3 text-sm">
                  <span className="w-3 h-px bg-primary shrink-0 translate-y-[-4px]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form – right */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <h3 className="text-xl font-semibold tracking-wide mb-2">Jetzt bewerben</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Senden Sie uns Ihre Bewerbung – wir melden uns zeitnah bei Ihnen.
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
