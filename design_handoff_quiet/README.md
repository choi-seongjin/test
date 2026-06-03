# Handoff: QUIET — Choi Lab academic website

## Overview
A redesign of the personal/lab website for **Seongjin Choi**, Assistant Professor in Civil, Environmental, and Geo-Engineering at the University of Minnesota, Twin Cities. The lab studies urban mobility data analytics, spatiotemporal AI, and connected automated vehicles.

**QUIET** is the chosen visual direction: a clean, Swiss-minimal, **image-forward** academic site. Generous whitespace, one calm indigo accent, a clean grotesk + an elegant serif for display. The aesthetic goal is *quiet and credible* — the deliberate opposite of a dense, "newspaper-style" layout. References that informed it: [HuMNet Lab (Berkeley)](https://humnetlab.berkeley.edu/) for grid clarity and headshot/figure cards, and [Mcity (Michigan)](https://mcity.umich.edu/) for institutional polish.

This handoff covers the **homepage**. The full site has 9 pages (Home, About, Team, Research, Publications, Teaching, News, Data & Code, Contact); their information architecture is documented under "Full site IA" below so the same system can be extended to every page.

## About the Design Files
The files in this bundle are **design references created in HTML/React-via-Babel** — a prototype showing the intended look and behavior. **They are not production code to copy directly.** They use in-browser Babel, a `window.SITE`/`window.SITE2` global content blob, and inline-style objects — all fine for a design mock, none of it appropriate for production.

Your task is to **recreate this design in the target environment** using its established patterns. The natural production stack for an academic site like this is **Jekyll with the [al-folio](https://github.com/alshedivat/al-folio) theme** (academic-native, great publications handling, GitHub Pages friendly) — that was the assumed target during design. If you prefer another stack (Next.js, Astro, plain 11ty), the design translates cleanly; just honor the tokens and layout specs below. Do not ship the Babel/CDN prototype as-is.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and layout are final and intended to be matched closely. Recreate the UI faithfully using the target stack's templating and CSS. The only placeholders are **images** — every photo/figure is a labeled grey placeholder block (see Assets); swap in real imagery.

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| `bg` | `#ffffff` | Page background |
| `panel` | `#f7f7f4` | Alternating section background (projects, team) |
| `ink` | `#16181d` | Primary text, headings |
| `sub` | `#6c6f78` | Secondary/body text, captions, inactive nav |
| `line` | `#e7e6e0` | Hairline borders, card borders, section dividers |
| `accent` | `#3b3fae` | Indigo — links, active nav, primary button, eyebrows, numerals |
| `accentSoft` | `#ececf8` | Tints behind area-number chips |
| (button text) | `#ffffff` | Text on accent button |

> Note: indigo `#3b3fae` is the working accent. **UMN maroon `#7A0019` + gold `#FFCC33` is a sanctioned alternative** if the lab wants institutional branding — it was used in the sibling "ATRIUM" direction. If you switch, replace `accent`/`accentSoft` and re-check contrast (maroon on white passes AA; gold is decorative only, never for text).

### Typography
Two families, loaded from Google Fonts:
- **Hanken Grotesk** (400, 500, 600, 700) — UI, body, nav, labels, buttons.
- **Spectral** (400, 500; + italic) — display headings (`h1`, section `h2`, publication titles) and the stat numerals. Weight 500, negative tracking.

| Role | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero `h1` | Spectral | 72px | 500 | 1.05 | -1.5px |
| Section `h2` | Spectral | 32px | 500 | — | -0.5px |
| Publication title `h3` | Spectral | 30px | 500 | 1.2 | -0.5px |
| Card title `h3` | Hanken | 19px | 600 | — | -0.3px |
| Area title `h3` | Hanken | 18.5px | 600 | — | -0.2px |
| Body / lede | Hanken | 21px (hero) / 14–16px | 400 | 1.55–1.6 | — |
| Eyebrow (name·role) | Hanken | 15px | 600 | — | 0.2px |
| Nav | Hanken | 14.5px | 400 (600 active) | — | — |
| Tag (project) | Hanken | 12px | 700 | — | 0.3px, UPPERCASE |
| Photo caption | Hanken | 11px | 400 | — | 0.3px |

Apply `text-wrap: pretty` to multi-line body paragraphs.

### Spacing & layout
- **Page gutter:** `56px` left/right on all full-width sections.
- **Hero block:** `padding: 84px 56px 64px`, content `max-width: 1100px` (the `h1` itself caps at `980px`, lede at `720px`).
- **Section vertical rhythm:** ~`48–64px` top/bottom padding per section.
- **Grid gaps:** research areas `28px`; project cards `24px`; team grid `20px`; publication split `44px`.
- **Card radius:** `14px` (project cards), `12px` (team headshots, publication figure), `8px` (buttons), `9px` (area-number chip).
- **Buttons:** padding `13px 22px`, radius `8px`, weight 600, 15px. Primary = `accent` bg / white text. Secondary = `1px solid line` / `ink` text.
- **Borders:** hairlines are always `1px solid line`. No shadows anywhere except optional card elevation (the prototype uses none — keep it flat).

### Motion
Deliberately minimal. **Only two interactions:**
1. Link hover → `opacity: 0.7`, `transition: opacity .15s`.
2. (Optional) a subtle entrance fade on first paint: `translateY(6px)` + opacity 0→1 over `.35s cubic-bezier(.2,.7,.3,1)`.

No scroll-driven animation, no carousels, no tickers, no parallax. This restraint is a core part of the brief — do not add motion.

---

## Homepage — section-by-section

Layout is a single vertical column of full-bleed sections; every section pads `56px` horizontally. Sections alternate white (`bg`) and `panel` for rhythm.

### 1. Top bar (`border-bottom: 1px line`, padding `20px 56px`)
- **Left:** a `26×26px` rounded (`6px`) `accent` square logo mark + `"Choi Lab"` (16px, 600) + `"· University of Minnesota"` (14px, `sub`).
- **Right:** horizontal nav, `gap: 26px`, 14.5px. Items: Research · Publications · Team · Data & Code · News · Contact. Active item (`Research` in mock, `Home` conceptually) is `ink` + 600; rest `sub`.
- Flex row, `space-between`, vertically centered.

### 2. Hero (`padding: 84px 56px 64px`, `max-width: 1100px`)
- Eyebrow: `"Seongjin Choi · Assistant Professor"` (15px, 600, `accent`), margin-bottom 22px.
- `h1` (Spectral 72/1.05/-1.5, max-width 980px): **"Turning messy city data into operational insight for sustainable mobility."**
- Lede (21px, 1.55, `sub`, max-width 720px): *"We work on urban mobility data analytics, spatiotemporal modeling, and deep generative AI in the Department of Civil, Environmental, and Geo-Engineering at the University of Minnesota, Twin Cities."*
- Two buttons (`gap: 14px`, margin-top 34px): primary **"Read the research →"** (accent bg, white), secondary **"Recruiting · Fall 2026"** (outline).

### 3. Research areas (`padding: 8px 56px 64px`)
- Header row: `h2` **"Research areas"** + right-aligned link **"All projects →"** (14.5px, 600, accent).
- 4-column grid (`gap: 28px`). Each cell:
  - Number chip: `38×38px`, radius 9, bg `accentSoft`, accent text, 700/15px — `"01"…"04"`.
  - `h3` area name (18.5/600/-0.2).
  - Blurb (14.5/1.55/`sub`).
- Content for the 4 areas is in `content-v2.js → SITE2.areas` (name + blurb).

### 4. Highlighted projects (`panel` bg, `border-top: 1px line`, padding `48px 56px 64px`)
- `h2` **"Highlighted projects"**.
- 3-column grid (`gap: 24px`), 6 cards. Each card = white bg, radius 14, `1px line` border, `overflow: hidden`:
  - Figure placeholder, `height: 150px`, each with a slightly different tint (cycle: `#dfe0ea, #e3e9e0, #ece1df, #e0e8ec, #e8e4dc, #e2e1ec`).
  - Body (`padding: 16px 18px 20px`): UPPERCASE tag (12/700/accent) → `h3` project name (19/600/-0.3) → blurb (14/1.5/`sub`).
- Content: `SITE2.projects` (name, tag, blurb).

### 5. Recent publication (`padding: 64px 56px`)
- `h2` **"Recent publication"**.
- 2-column split (`1.1fr / 1fr`, `gap: 44px`, vertically centered):
  - **Left:** figure placeholder, `height: 320px`, radius 14, caption *"figure · drop paper teaser"*.
  - **Right:** venue (13.5/600/accent) → Spectral `h3` title (30/500/1.2/-0.5) → blurb (16/1.6/`sub`) → link row (margin-top 22, 14.5/600): **PDF · BibTeX · Code ↗** (all accent).
- Content: `SITE2.highlights[0]`.

### 6. The team (`panel` bg, `border-top: 1px line`, padding `48px 56px 72px`)
- Header row: `h2` **"The team"** + **"Full team & alumni →"** link.
- 6-column grid (`gap: 20px`). Each member:
  - Square (`aspect-ratio: 1/1`) headshot placeholder, radius 12, tint `#dfe0ea`.
  - `h3` name (15/600/-0.2, margin 12px 0 2px) → role (12.5/600/accent) → affiliation (12.5/`sub`/1.4).
- Content: `SITE2.people` (name, role, sub).

### 7. Footer (`border-top: 1px line`, padding `40px 56px`)
- Flex `space-between`, `sub` color, 14px.
- Left: `"© 2026 Choi Lab · CEGE · University of Minnesota"`.
- Right: inline links `gap: 18px` — Scholar · GitHub · CV.

---

## Content & data
All copy is real (lightly edited from the live site) and lives in two files:
- **`content.js → window.SITE`** — name, role, dept, email, bio, topics, nav list, news array, publications array, recruiting copy, stats.
- **`content-v2.js → window.SITE2`** — the homepage-specific blobs: `areas` (4), `projects` (6), `people` (6), `highlights` (3 featured pubs), `affiliations`, `taglines`.

In production, model this as data files / front-matter collections (al-folio uses `_data/` YAML and `_bibliography/*.bib` — map `publications` → BibTeX, `people` → a `_data/team.yml`, etc.). **Caveat:** specific paper titles for 2024+ entries are plausible drafts for design purposes — confirm/replace against the real publication record before launch.

## State / behavior
The homepage is **static** — no client state. (The full Publications and Data & Code pages have filter chips that are stateful; out of scope for this homepage handoff but noted under IA.) Keep critical content server-rendered; any filtering should degrade to "show all" without JS.

## Assets
**No real images are included.** Every image is a labeled grey gradient placeholder (`linear-gradient(160deg, <tint> 0%, #cdcedd 100%)` with a soft radial highlight). Replace with:
- 1 headshot of Seongjin Choi (hero/about + team grid).
- 6 team headshots (square, ~1:1).
- 6 project figures (~3:2, 150px tall in cards).
- 1 featured-paper teaser figure (landscape, ~1.1:1).
Treatment: square/rounded corners (radius 12–14), no drop shadows. Keep a consistent neutral/desaturated feel so the indigo accent stays the only strong color.

Fonts: **Hanken Grotesk** + **Spectral** via Google Fonts (already linked in `quiet-reference.html`).

## Full site IA (for extending the system)
Same QUIET system applies to all 9 pages. Roles:
- **Home** — this doc.
- **About** — single-column bio, lineage list, CV link, recruiting block (anchor `#recruiting`).
- **Team** — full headshot grid + alumni ("where they went next").
- **Research** — project cards expanded; per-area pages if >3 papers; funder row.
- **Publications** — filterable list (year / topic / type), newest-first, per-row PDF · BibTeX · Code · DOI, stable anchors like `#choi2025dgm`. Highest-traffic page. **Citation counts intentionally hidden.**
- **Teaching** — course list (code, title, semester, level, syllabus link).
- **News** — reverse-chronological archive grouped by year; homepage shows latest 3.
- **Data & Code** — repo cards (stars/lang/updated, cached at build time) + dataset cards (license, citation) + reproducibility checklist.
- **Contact** — email-first, response policy, static map image (no embed), no contact form.

## Files in this bundle
- `quiet-reference.html` — open in a browser to see the live homepage design. Loads the three files below.
- `quiet.jsx` — the QUIET component (React-via-Babel). Read it for exact style values; **reference only, not for production**.
- `content.js` — `window.SITE` content blob.
- `content-v2.js` — `window.SITE2` homepage content blob.
- `README.md` — this spec. Self-sufficient; implement from this alone if needed.

### Running the reference locally
Because browsers block `file://` Babel/module loads, serve the folder over HTTP:
```bash
cd design_handoff_quiet
python3 -m http.server 8000
# open http://localhost:8000/quiet-reference.html
```
