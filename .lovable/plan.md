

## Plan: Drei dezente Bereiche unter dem Hero auf der Startseite

Ich ergänze die Startseite (`src/pages/Index.tsx`) um drei neue, schlichte Sektionen unter dem Hero-Bild. Stil bleibt minimalistisch (viel Weißraum, Petrol nur als Akzent, keine Cards/Badges/Schatten).

### 1. Sektion „Referenzen-Vorschau"

Layout: zwei Spalten auf Desktop, gestapelt auf Mobile.
- **Links (Text):** Kicker „Referenzen", H2 „Einblicke in unsere Arbeit", kurzer Absatz, dezenter Textlink „Alle Referenzen ansehen →" (führt zu `/referenzen`).
- **Rechts (Bilder):** kleines Grid mit 3–4 Vorschaubildern (aus `src/assets/ref-*.jpg`). Jedes Bild ist ein `<Link to="/referenzen">` und führt direkt zur Referenzen-Seite. Sanfter Hover (leichtes Aufhellen), keine Skalierung, keine Schatten.

### 2. Sektion „Leistungen"

Schlicht, einspaltig, zentriert oder linksbündig:
- Kicker „Leistungen", H2 (Slogan, z. B. „Sauberkeit, auf die Sie sich verlassen können"), kurzer Absatz (2 Zeilen).
- Ein dezenter Outline-Button „Unsere Leistungen" → `/leistungen` (gleicher Stil wie der transparente Hero-Button: `variant="outline"`, petrolfarbener Rand und Text).

### 3. Sektion „Jobs"

Analog zur Leistungen-Sektion, schlicht:
- Kicker „Karriere", H2 (z. B. „Werden Sie Teil unseres Teams"), 1–2 Sätze Fließtext.
- Dezenter Outline-Button „Offene Stellen ansehen" → `/jobs`.

### Trennung & Stil

- Sektionen durch großzügigen vertikalen Abstand (`py-20` / `py-24`) getrennt, optional sehr dezente `border-t border-border` zwischen den Blöcken.
- Alles auf weißem Hintergrund, keine farbigen Banner, keine Boxen.
- Petrol nur für Kicker, Links und Button-Akzente.

### Betroffene Dateien

- **Neu:** `src/components/HomeReferencesPreview.tsx`, `src/components/HomeServicesTeaser.tsx`, `src/components/HomeJobsTeaser.tsx` (drei kleine, fokussierte Komponenten).
- **Bearbeitet:** `src/pages/Index.tsx` – die drei Komponenten unter `<HeroSection />` einbinden.

Keine Änderungen an Header, Footer, Routing oder bestehenden Unterseiten nötig.

