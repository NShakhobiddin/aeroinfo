# “Toshkent-AERO” IBK — Bojxona qoidalari

Customs information portal for international air passengers arriving at / departing
from Tashkent airport (Toshkent-AERO Specialized Customs Complex). It explains
customs rules in a fast, mobile-first guide across four languages
(Oʻzbek · Русский · English · 中文).

## Sections

- **International airport** — arrival (Uchib kelish) and departure (Uchib ketish):
  duty-free limits, currency, jewellery, quantity norms, lane choice, with the
  official legal text per rule.
- **Post & courier shipments** — clearance procedure, criteria and definitions.
- **Prohibited / restricted goods** — searchable, status-filtered list.
- **Customs calculator** — estimated duty; USD rate auto-fetched from the Central
  Bank of Uzbekistan (cbu.uz) with manual override.
- **Mobile devices** — registration steps with app-store links.
- **Contacts** — phone / email / map directory.

## Structure

```
index.html              App shell (intro, header, footer) + Google Fonts
css/styles.css          Full design system and component styles
js/
  i18n.js               UI strings in 4 languages
  icons.js              Inline SVG + masked-PNG icon set
  illustrations.js      Line-art hero illustrations
  calculator.js         Duty-calculation logic + CBU rate
  content-airport.js    Airport (arrival/departure) rule data
  content-post.js       Post & courier rule data
  content-prohibited.js Prohibited/restricted goods list
  content-misc.js       Mobile-device steps + contacts
  app.js                Router, rendering, language switching
  customize.js          Per-screen custom backgrounds
assets/                 Icons, emblem and background images
```

## Running

It is a static site — no build step. Open `index.html` directly, or serve the
folder over HTTP (recommended, so the CBU rate fetch works):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```
