import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Startseite", to: "/" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Jobs", to: "/jobs" },
  { label: "Kontakt", to: "/kontakt" },
];

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <span className="text-xl font-bold tracking-wider">Clean & Pure</span>
          <p className="text-sm text-background/60 leading-relaxed">
            Ihr familiengeführter Gebäudedienstleister aus Hamburg – professionell und zuverlässig.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold tracking-wider text-sm uppercase mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold tracking-wider text-sm uppercase mb-4">Leistungen</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {["Büroreinigung", "Glasreinigung", "Grundreinigung", "Polsterreinigung", "Hausmeisterservice"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold tracking-wider text-sm uppercase mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:04035966171" className="hover:text-primary transition-colors">040/35 96 61 71</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@cleanandpure.de" className="hover:text-primary transition-colors">info@cleanandpure.de</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Hamburg
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <a
                href="https://www.instagram.com/cleanandpure_gebaeudereinigung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @cleanandpure_gebaeudereinigung
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/40">
        <p>© {new Date().getFullYear()} Clean & Pure GmbH. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Impressum</a>
          <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
