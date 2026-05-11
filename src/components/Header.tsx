import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
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
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-background text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="tel:04035966171"
            aria-label="Anrufen"
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            className="lg:hidden p-2 relative z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Slide-in Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-background shadow-xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col gap-6 px-8 pt-28 pb-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium tracking-wider uppercase ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:04035966171"
            className="flex items-center gap-2 text-sm font-medium text-primary pt-4"
          >
            <Phone className="w-4 h-4" />
            040/35 96 61 71
          </a>
          <a
            href="https://www.instagram.com/cleanandpure_gebaeudereinigung/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-sm font-medium text-primary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
