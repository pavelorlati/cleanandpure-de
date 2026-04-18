import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Datenschutz = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingContactButton />
    <Header />
    <main className="flex-1">
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Datenschutzerklärung</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">2. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                Clean & Pure GmbH<br />
                Hamburg<br />
                Telefon: <a href="tel:04035966171" className="text-primary hover:underline">040/35 96 61 71</a><br />
                E-Mail: <a href="mailto:info@cleanandpure.de" className="text-primary hover:underline">info@cleanandpure.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">3. Erfassung allgemeiner Informationen</h2>
              <p>
                Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst
                (Browsertyp, Betriebssystem, Domainname, IP-Adresse, Datum/Uhrzeit des Zugriffs). Diese Informationen
                sind technisch notwendig und werden nicht zu Ihrer Identifikation verwendet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">4. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zur
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem haben Sie ein
                Recht auf Berichtigung, Sperrung oder Löschung dieser Daten sowie auf Datenübertragbarkeit und
                Beschwerde bei der zuständigen Aufsichtsbehörde.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">6. SSL-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">7. Hosting</h2>
              <p>
                Unsere Website wird bei einem externen Dienstleister gehostet. Personenbezogene Daten, die auf
                dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">8. Änderung dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
                rechtlichen Anforderungen entspricht.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
