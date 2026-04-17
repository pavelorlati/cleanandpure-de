import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Startseite", to: "/" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Jobs", to: "/jobs" },
  { label: "Kontakt", to: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-28 max-w-[1400px] items-center justify-between px-6">
        <Link to="/" className="flex items-center py-1">
          <img
            src={logo}
            alt="Clean & Pure GmbH"
            className="h-24 w-auto object-contain sm:h-28"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wider uppercase transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Phone + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:04035966171" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" />
            040/35 96 61 71
          </a>
          <a
            href="https://www.instagram.com/cleanandpure_gebaeudereinigung/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-background text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
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
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium tracking-wider uppercase ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
