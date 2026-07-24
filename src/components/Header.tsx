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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      setLight(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          mobileOpen ? "z-[70] bg-transparent" : "z-50"
        } ${
          scrolled && !mobileOpen
          ? "bg-white/35 backdrop-blur-2xl border-b border-white/20 shadow-sm"
          : "bg-transparent"
        }`}
      >

      <div className="container-x flex h-20 md:h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Clean & Pure GmbH" className="h-16 md:h-14 w-auto" />
          <span className="hidden sm:block text-sm md:text-base font-semibold tracking-tight text-foreground whitespace-nowrap flex-shrink-0">
            Clean &amp; Pure GmbH
          </span>
        </Link>


        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[0.8rem] font-extrabold tracking-[0.15em] uppercase whitespace-nowrap transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/cleanandpure_gebaeudereinigung/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 text-foreground/80 hover:text-primary hover:border-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
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
            className="hidden md:inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary-glow transition-colors rounded-full whitespace-nowrap"
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

      </header>

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed inset-0 z-[80] h-dvh w-full bg-background transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
            <img src={logo} alt="Clean & Pure GmbH" className="h-16 w-auto" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-foreground"
            onClick={() => setMobileOpen(false)}
            aria-label="Menü schließen"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-8 pt-12 pb-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold tracking-[0.2em] uppercase ${
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
          <a href="tel:+494035966171" className="text-sm text-primary mt-2">040 35 96 61 71</a>
        </nav>
      </aside>
    </>
  );
};

export default Header;
