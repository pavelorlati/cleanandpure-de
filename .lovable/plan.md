

## Plan: Multi-Page-Umbau & Minimalismus-Redesign

Ich strukturiere die Website von einer One-Page in eine **mehrseitige Anwendung** um und entschlacke das Design radikal, damit es professioneller und seriöser wirkt.

### 1. Multi-Page-Struktur (React Router)

Neue Routen in `src/App.tsx`:
```text
/              → Startseite (Hero + minimaler Quick Access)
/ueber-uns     → Über uns
/leistungen    → Leistungen + Kundensegmente
/referenzen    → Referenzen
/jobs          → Jobs + Bewerbungsformular
/kontakt       → Kontakt + Formular
```

Header-Navigation: Hash-Links (`#about`) → Router-Links (`/ueber-uns`). Aktiver Link wird hervorgehoben.

### 2. Startseite radikal vereinfachen

- **HeroSection**: Untertitel-Absatz ("Wir sind ein familiengeführtes…") **entfernen**. Nur Kicker, H1 und die zwei Buttons bleiben. Hintergrundbild dezenter.
- **QuickAccessCards, AboutSection, ServicesSection, ReferencesSection, CustomerSegments, WhyUsSection, JobsSection, ContactSection** werden von der Startseite entfernt und in die jeweiligen Unterseiten verschoben.
- Startseite zeigt nur: Header → Hero → Footer.

### 3. Header aufräumen

- "Angebot anfragen"-Button oben rechts **entfernen**.
- Nur Logo + Navigation + Telefonnummer bleiben.
- Mobile-Menü bleibt, aber ohne CTA-Button.

### 4. Floating Contact Button beruhigen

- Pulsier-/Blink-/Glow-Animation entfernen (kein `box-shadow`-Pulsing mehr, kein dynamischer Hintergrundwechsel).
- Schlichter, statischer petrolfarbener Button mit vertikalem Text.

### 5. ServicesSection: Card-Boxen entfernen

- Die zwei großen Card-Container (Unterhaltsreinigung / Sonderreinigung) **entfernen**.
- Stattdessen: zwei schlichte Überschriften + Listen direkt auf weißem Hintergrund, ohne Rahmen, ohne Schatten, ohne Hintergrundfarbe.
- Check-Icons durch dezente Striche/Bullets ersetzen (kein farbiges CheckCircle-Icon mehr).

### 6. "Baukasten-Look" entfernen – generelle Entschlackung

Diese Elemente wirken nach Website-Baukasten und werden überarbeitet:
- **Großflächige farbige Banner-Header** in JobsSection (`bg-primary py-14`) → ersetzt durch schlichte Überschrift auf weißem Grund.
- **Bunte Badges** (`bg-primary/10` Pills für Job-Typ/Ort) → ersetzt durch schlichten Grautext mit Trennzeichen.
- **`border-l-4 border-l-primary`** Akzentränder an Job-Cards → entfernt, schlichte Trennlinien zwischen Einträgen stattdessen.
- **Benefits-Bar mit Icon-Boxen** → schlichte Textliste.
- **Floating Glow-Effekte** und übermäßige `shadow-2xl` → reduziert auf dezente `shadow-sm` oder ganz entfernt.
- **QuickAccessCards** mit Hover-Skalierung → falls beibehalten, deutlich reduziert; ansonsten ganz weg.
- **Großzügigere Whitespaces**, weniger Hintergrundfarben-Sektionen.

### 7. Alle Emojis entfernen

Codebase-Scan zeigt: Emojis kommen aktuell vor allem in Texten/Labels eventuell vor. Ich prüfe und entferne sie systematisch in:
- `Footer.tsx`, `ContactSection.tsx`, `JobsSection.tsx`, `WhyUsSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `CustomerSegments.tsx`, `ReferencesSection.tsx`, `QuickAccessCards.tsx`.

Lucide-Icons (SVG) sind **keine Emojis** und bleiben dort, wo sie funktional sinnvoll sind (z. B. Telefon-Icon neben Nummer). An dekorativen Stellen werden sie ebenfalls reduziert.

### 8. Betroffene Dateien

- `src/App.tsx` – neue Routen
- `src/pages/Index.tsx` – nur noch Hero
- `src/pages/UeberUns.tsx` *(neu)*
- `src/pages/Leistungen.tsx` *(neu)*
- `src/pages/Referenzen.tsx` *(neu)*
- `src/pages/Jobs.tsx` *(neu)*
- `src/pages/Kontakt.tsx` *(neu)*
- `src/components/Header.tsx` – Router-Links, CTA weg
- `src/components/HeroSection.tsx` – Text raus
- `src/components/ServicesSection.tsx` – Cards raus, Listen pur
- `src/components/JobsSection.tsx` – Banner-Header & Badges raus, schlichter
- `src/components/FloatingContactButton.tsx` – Animationen weg
- `src/components/Footer.tsx` – Links auf Routen umstellen
- evtl. `src/components/QuickAccessCards.tsx`, `WhyUsSection.tsx`, `CustomerSegments.tsx` – Stilanpassungen

### 9. Design-Prinzipien danach

- Viel Weißraum, minimal Hintergrundfarben.
- Petrol nur noch als gezielter Akzent (Links, Hauptbutton, Logo).
- Keine pulsierenden/glowenden Effekte.
- Keine bunten Pills/Badges/Banner.
- Typografie trägt das Design, nicht Farben oder Boxen.

