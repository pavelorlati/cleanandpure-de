import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Start", to: "/" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Karriere", to: "/jobs" },
  { label: "Kontakt", to: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      setLight(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-x flex h-20 md:h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Clean & Pure GmbH" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:block text-sm md:text-base font-medium tracking-wide text-foreground">
            Clean &amp; Pure Gebäudereinigung
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={light ? "Dunklen Modus" : "Hellen Modus"}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 text-foreground/80 hover:text-primary hover:border-primary transition-colors"
          >
            {light ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <Link
            to="/kontakt"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary-glow transition-colors rounded-sm"
          >
            Angebot anfragen
          </Link>
          <button
            className="lg:hidden p-2 relative z-[60] text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[82%] max-w-sm bg-card shadow-2xl transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-5 px-8 pt-24 pb-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium tracking-[0.2em] uppercase ${
                  isActive ? "text-primary" : "text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Angebot anfragen
          </Link>
          <a href="tel:+494035966171" className="text-sm text-primary mt-2">040 - 35 96 61 71</a>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
