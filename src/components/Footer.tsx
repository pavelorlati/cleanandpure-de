import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container-x py-16 grid md:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Clean & Pure" className="h-10 w-auto" />
          <span className="font-medium text-foreground">Clean &amp; Pure</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Familiengeführter Gebäudeservice mit Hamburger Wurzeln. Seit über 15 Jahren.
        </p>
      </div>
      <div>
        <p className="kicker mb-4">Navigation</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ueber-uns" className="text-foreground/80 hover:text-primary">Über uns</Link></li>
          <li><Link to="/leistungen" className="text-foreground/80 hover:text-primary">Leistungen</Link></li>
          <li><Link to="/referenzen" className="text-foreground/80 hover:text-primary">Referenzen</Link></li>
          <li><Link to="/jobs" className="text-foreground/80 hover:text-primary">Karriere</Link></li>
          <li><Link to="/kontakt" className="text-foreground/80 hover:text-primary">Kontakt</Link></li>
        </ul>
      </div>
      <div>
        <p className="kicker mb-4">Kontakt</p>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-primary mt-0.5" /><a href="tel:+494035966171" className="text-foreground/80 hover:text-primary">040 35 96 61 71</a></li>
          <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-primary mt-0.5" /><a href="mailto:info@cleanandpure.de" className="text-foreground/80 hover:text-primary">info@cleanandpure.de</a></li>
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /><span className="text-foreground/80">Lauenburger Straße 13<br/>22049 Hamburg</span></li>
        </ul>
      </div>
      <div>
        <p className="kicker mb-4">Rechtliches</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/impressum" className="text-foreground/80 hover:text-primary">Impressum</Link></li>
          <li><Link to="/datenschutz" className="text-foreground/80 hover:text-primary">Datenschutz</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-x py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Clean &amp; Pure GmbH</span>
        <span>Gebäudereinigung Hamburg</span>
      </div>
    </div>
  </footer>
);

export default Footer;
