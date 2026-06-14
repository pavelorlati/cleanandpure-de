import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import buero from "@/assets/cp/hero-buero.jpg";

const leistungen = [
  "Unterhaltsreinigung","Büroreinigung","Glas- & Fassadenreinigung","Grund- & Sonderreinigung",
  "Praxis- & Hygienereinigung","Hotelreinigung","Hausmeisterservice","Polster- & Teppichreinigung",
  "Bodensanierung & Versiegelung","Bauendreinigung","Außen- & Treppenhausreinigung","Sonstiges",
];

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", tel: "", leistung: "", nachricht: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage: ${form.leistung || "Allgemein"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.tel}\nLeistung: ${form.leistung}\n\n${form.nachricht}`);
    window.location.href = `mailto:info@cleanandpure.de?subject=${subject}&body=${body}`;
    toast.success("Anfrage wird vorbereitet …");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <FloatingContactButton />
      <Header />
      <main className="flex-1">
        <PageHero kicker="Sprechen Sie uns an" title="Wir sind für Sie da" image={buero} />

        <section className="py-8 border-t border-border bg-card/40">
          <div className="container-x flex flex-wrap gap-8 justify-around text-sm">
            {["Kostenlos & unverbindlich", "Antwort in 48 Stunden", "Individuelles Angebot"].map((t) => (
              <div key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />{t}</div>
            ))}
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-x grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Wir freuen uns auf Ihre Anfrage.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Ob regelmäßige Unterhaltsreinigung oder einmaliger Sondereinsatz – schildern Sie uns Ihren Bedarf. Wir melden uns innerhalb von 48 Stunden mit einem individuellen &amp; unverbindliches Angebot.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="kicker mb-2">Telefon</p>
                  <a href="tel:+494035966171" className="flex items-center gap-2 text-primary hover:underline"><Phone className="w-4 h-4"/>040 35 96 61 71</a>
                </div>
                <div>
                  <p className="kicker mb-2">E-Mail</p>
                  <a href="mailto:info@cleanandpure.de" className="flex items-center gap-2 text-primary hover:underline break-all"><Mail className="w-4 h-4"/>info@cleanandpure.de</a>
                </div>
                <div>
                  <p className="kicker mb-2">Adresse</p>
                  <p className="flex items-start gap-2 text-foreground/90"><MapPin className="w-4 h-4 text-primary mt-1"/>Lauenburger Straße 13<br/>22049 Hamburg</p>
                </div>
                <div>
                  <p className="kicker mb-2">Öffnungszeiten</p>
                  <p className="flex items-start gap-2 text-foreground/90"><Clock className="w-4 h-4 text-primary mt-1"/>Mo–Do: 08:30–17:00 Uhr<br/>Fr: 08:30–15:00 Uhr</p>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="bg-[hsl(0_0%_22%)] border border-white/10 p-8 rounded-sm space-y-4 shadow-2xl">
              <p className="kicker mb-2 text-white/70">Angebot anfordern</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} placeholder="Ihr Name *" className="w-full px-4 py-3 bg-[hsl(0_0%_32%)] border border-white/10 rounded-sm text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-primary" />
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} placeholder="E-Mail-Adresse *" className="w-full px-4 py-3 bg-[hsl(0_0%_32%)] border border-white/10 rounded-sm text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-primary" />
              </div>
              <input value={form.tel} onChange={(e)=>setForm({...form, tel: e.target.value})} placeholder="Telefon" className="w-full px-4 py-3 bg-[hsl(0_0%_32%)] border border-white/10 rounded-sm text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-primary" />
              <select value={form.leistung} onChange={(e)=>setForm({...form, leistung: e.target.value})} className="w-full px-4 py-3 bg-[hsl(0_0%_32%)] border border-white/10 rounded-sm text-sm text-white focus:outline-none focus:border-primary">
                <option value="">Leistung wählen</option>
                {leistungen.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
              <textarea required value={form.nachricht} onChange={(e)=>setForm({...form, nachricht: e.target.value})} placeholder="Ihre Nachricht *" rows={6} className="w-full px-4 py-3 bg-[hsl(0_0%_32%)] border border-white/10 rounded-sm text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-primary" />
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">
                Anfrage senden →
              </button>
            </form>
          </div>
        </section>

        <section className="py-24 border-t border-border bg-card/40">
          <div className="container-x text-center">
            <p className="kicker mb-5">Lieber telefonisch?</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Rufen Sie uns einfach an.</h3>
            <a href="tel:+494035966171" className="text-3xl md:text-4xl text-primary font-bold hover:underline">040. 35 96 61 71</a>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <a href="tel:+494035966171" className="inline-flex items-center px-6 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow rounded-sm">Anrufen</a>
              <a href="mailto:info@cleanandpure.de" className="inline-flex items-center px-6 py-3.5 border border-foreground/30 text-xs font-semibold tracking-[0.2em] uppercase hover:border-primary hover:text-primary rounded-sm">E-Mail senden</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
