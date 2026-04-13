import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Startseite", href: "#home" },
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Referenzen", href: "#references" },
  { label: "Jobs", href: "#jobs" },
  { label: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <a href="#home" className="flex items-center -my-2">
          <img
            src={logo}
            alt="Clean & Pure GmbH"
            className="h-24 w-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:04035966171" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" />
            040/35 96 61 71
          </a>
          <Button className="hidden md:inline-flex" asChild>
            <a href="#contact">Angebot anfragen</a>
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background px-6 pb-6 pt-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary tracking-wider uppercase"
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full" asChild>
            <a href="#contact">Angebot anfragen</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
