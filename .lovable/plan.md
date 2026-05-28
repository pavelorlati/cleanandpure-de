# Reveal-Logik global & robust machen

## Probleme heute
- `useReveal` läuft **nur einmal pro Mount** und nur in **`<main>`** → neu eingeblendete Komponenten (Tabs, Slider, Akkordeons, später geladene Sektionen) bekommen kein `data-reveal`.
- Nur `<img>` und `<h2>` werden auto-getaggt → Absätze, `h1/h3`, Cards, Listenelemente, Buttons-Reihen bleiben statisch.
- **`Kontakt`, `Impressum`, `Datenschutz`** rufen den Hook gar nicht auf → keine Reveals.
- Alternation per globalem Index kann optisch chaotisch wirken, weil sie die Section-Struktur ignoriert.
- Komponenten außerhalb von `<main>` (z. B. Footer-Banner, Floating-Elemente) werden bewusst übersprungen – soll laut Wunsch aber auch berücksichtigt werden, wo sinnvoll.

## Ziel
Auf **jeder Seite** und in **jeder Komponente** (auch außerhalb `<main>`, ausgenommen Header/Footer/Floating-Button) gleiten Bilder **und** Texte beim Scrollen sanft alternierend von **links/rechts** ein – auch bei dynamisch nachgeladenen oder umgeschalteten Inhalten.

## Umsetzung

### 1. `useReveal` in einen globalen Provider verwandeln
- Neuer Komponenten-Mount in `src/App.tsx` (innerhalb `BrowserRouter`, oberhalb `Routes`): `<RevealController />`.
- `RevealController` rendert nichts, startet aber den Observer **einmalig pro App-Lifetime**.
- Per-Page `useReveal()`-Aufrufe (Index, UeberUns, Leistungen, Referenzen, Jobs) entfallen → ein zentraler Hook reicht; Kontakt/Impressum/Datenschutz sind automatisch abgedeckt.

### 2. Scope: gesamtes Dokument außer Negativliste
- Scannt im gesamten `<body>`.
- Skip-Liste über CSS-Selektor:
  `header, footer, [data-no-reveal], .animate-hero-zoom, .animate-hero-kenburns, [data-reveal]` plus deren Kinder.
- So sind Header (Logo/Nav), Footer, Floating-Kontakt-Button und Hero-Bilder weiterhin ausgenommen.

### 3. Auto-Tagging-Strategie (sectionweise, deterministisch)
Pro `<section>` (oder gleichwertigem Block) wird eine Reihen-Logik angewandt, damit Alternation visuell ordentlich wirkt:
- Selektor je Section: `img, h1, h2, h3, p, li, blockquote, [data-reveal-target]`.
- Tagging-Regeln:
  - Wenn Element/Vorfahre schon `data-reveal` hat → skip.
  - Sonst: `data-reveal = rowIndex % 2 === 0 ? "left" : "right"`.
  - `transitionDelay = (colIndex % 3) * 90ms` für leichten Stagger innerhalb einer Reihe.
- `rowIndex` ist die Position in der Section, `colIndex` die Position innerhalb einer Grid-/Flex-Reihe (über `getBoundingClientRect().top`-Bucketing erkannt).

### 4. MutationObserver für dynamische Inhalte
- `MutationObserver` auf `document.body` (`childList: true, subtree: true`).
- Bei jeder Mutation: neue Knoten durch die Tagging-Funktion laufen lassen, dann am gemeinsamen `IntersectionObserver` registrieren.
- Debounce per `requestAnimationFrame`, damit React-Rerenders nicht zu Performance-Problemen führen.

### 5. Re-Scan bei Routenwechsel
- `RevealController` hört auf `location.pathname` (React Router). Bei Wechsel:
  - Reset interner Reihenzähler.
  - Neuer Scan nach dem Paint (`requestAnimationFrame`), damit auch Pages mit verspätet gemounteten Listen sauber alternieren.

### 6. CSS bleibt gleich
- Bestehende Regeln in `index.css` (`[data-reveal="left|right"]`, `.is-visible`, 1600 ms cubic-bezier) werden weiter genutzt.
- `prefers-reduced-motion` bleibt respektiert.

### 7. Aufräumen
- `src/hooks/useReveal.ts` wird zu einem dünnen Re-Export, der intern den globalen Controller anstößt – Aufrufe in Pages können entweder entfernt oder no-op bleiben.
- Hero-Bilder, Floating-Button und Footer-Logos bleiben explizit ausgespart (Negativliste).

## Technische Details
```text
RevealController
 ├─ useEffect (once)
 │   ├─ IntersectionObserver(threshold 0.1, rootMargin "0px 0px -8% 0px")
 │   └─ MutationObserver(body, childList+subtree) → tagNewNodes() → observe
 └─ useEffect ([pathname])
     └─ requestAnimationFrame → fullRescan()
```
- Tagging-Helper liefert: `{ direction: "left"|"right", delayMs }` basierend auf Section + Reihen-Bucket.
- Skip-Selektor zentral als Konstante.

## Akzeptanzkriterien
- Auf `/`, `/ueber-uns`, `/leistungen`, `/referenzen`, `/jobs`, `/kontakt`, `/impressum`, `/datenschutz` gleiten Bilder und Texte sichtbar alternierend von links/rechts ein.
- Auch Inhalte, die per State (Tabs, Akkordeons, Slider) erst später erscheinen, bekommen den Effekt.
- Header, Footer, Floating-Kontakt-Button und Hero-Bilder behalten ihr Verhalten.
- Kein horizontales Wackeln auf Mobile (Overflow-x bleibt versteckt).
- Bei `prefers-reduced-motion` keine Animationen.