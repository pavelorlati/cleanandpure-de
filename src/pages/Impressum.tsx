import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Impressum = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Impressum</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                Clean & Pure GmbH<br />
                Hamburg<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Kontakt</h2>
              <p>
                Telefon: <a href="tel:04035966171" className="text-primary hover:underline">040/35 96 61 71</a><br />
                E-Mail: <a href="mailto:info@cleanandpure.de" className="text-primary hover:underline">info@cleanandpure.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Vertretungsberechtigte Geschäftsführung</h2>
              <p>Geschäftsführer der Clean & Pure GmbH</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Hamburg<br />
                Registernummer: HRB [bitte ergänzen]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE [bitte ergänzen]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Clean & Pure GmbH<br />
                Hamburg
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
                gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Impressum;
