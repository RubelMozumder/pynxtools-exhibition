# working.md — Session Continuity File

> **Purpose**: This file captures everything needed to resume work if the session is interrupted (context limit, logout, etc.).
> Always update the "Current status" section before stopping work.

---

## Project overview

**What it is**: A static single-page HTML/CSS/JavaScript exhibition kiosk.
No framework, no build step. Open `index.html` in any browser.

**Three views** (navigated via top breadcrumb):
1. **NOMAD** — central box with 22 feature chips + 5 plugin satellite cards
2. **pynxtools** — central box with 5 feature chips + 10 reader plugin satellite cards
3. **Explore pynxtools ecosystem** — decision stepper (use/build plugin) + two-track usage section

**Key files**:
- `index.html` — HTML skeleton (views, side panel)
- `script.js` — ALL content (DATA object) + ALL JavaScript logic
- `styles.css` — ALL styles (CSS variables control every color and dimension)

---

## Software domain

### NOMAD
- Platform: Research data management for materials science
- Operator: FAIRmat / Max Planck Society / HU Berlin
- Online: https://nomad-lab.eu/
- Docs: https://nomad-lab.eu/prod/v1/docs/  ← user-provided, base URL not yet subpage-verified
- Local docs: `/home/rubel/NOMAD-FAIRmat/nomad-docs/docs/`
- Key features shown: Metainfo schema, upload/share, automatic parsing, normalization, search, analytics dashboards, publishing/DOI, central database, datasets, ELNs, workflows, NOMAD Actions, NORTH/Jupyter, REST API, graph API, download, processed data access, authentication, Oasis/federation, plugin system, domain-specific apps, domain support

### pynxtools
- Framework: NeXus data converter and validator; standalone tool and NOMAD plugin
- GitHub: https://github.com/FAIRmat-NFDI/pynxtools
- Docs: https://fairmat-nfdi.github.io/pynxtools/  ← verified (referenced in local pynxtools-spm docs)
- Local docs: `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools/docs/`
- Key features shown: NeXus datamodel, Validator, Writer, Test framework, Reader entrypoint

### pynxtools reader plugins (satellite cards)

| Plugin | Technique | NeXus App Def | GitHub | Docs |
|--------|-----------|---------------|--------|------|
| pynxtools-spm  | STM / STS / AFM | NXspm, NXstm, NXsts, NXafm | github.com/FAIRmat-NFDI/pynxtools-spm | fairmat-nfdi.github.io/pynxtools-spm/ |
| pynxtools-xps  | X-ray Photoelectron Spectroscopy | NXxps, NXmpes | github.com/FAIRmat-NFDI/pynxtools-xps | fairmat-nfdi.github.io/pynxtools-xps/ |
| pynxtools-em   | Electron Microscopy (TEM/SEM) | NXem | github.com/FAIRmat-NFDI/pynxtools-em | fairmat-nfdi.github.io/pynxtools-em/ |
| pynxtools-apm  | Atom Probe Microscopy | NXapm | github.com/FAIRmat-NFDI/pynxtools-apm | fairmat-nfdi.github.io/pynxtools-apm/ |
| pynxtools-mpes | Multidimensional Photoemission | NXmpes | github.com/FAIRmat-NFDI/pynxtools-mpes | fairmat-nfdi.github.io/pynxtools-mpes/ |
| pynxtools-ellips | Ellipsometry | NXellipsometry | github.com/FAIRmat-NFDI/pynxtools-ellips | fairmat-nfdi.github.io/pynxtools-ellips/ |
| pynxtools-xrd  | X-ray Diffraction | NXxrd_pan | github.com/FAIRmat-NFDI/pynxtools-xrd | fairmat-nfdi.github.io/pynxtools-xrd/ |
| pynxtools-raman | Raman Spectroscopy | NXraman | github.com/FAIRmat-NFDI/pynxtools-raman | fairmat-nfdi.github.io/pynxtools-raman/ |
| pynxtools-igor | Igor Pro files | — | github.com/FAIRmat-NFDI/pynxtools-igor | fairmat-nfdi.github.io/pynxtools-igor/ |
| pynxtools-mpes-nxs | NeXus MPES tools | NXmpes | (companion to pynxtools-mpes) | — |

### pynxtools-plugin-template
- GitHub: https://github.com/FAIRmat-NFDI/pynxtools-plugin-template  ← verified in local README
- Local README: `/home/rubel/NOMAD-FAIRmat/pynxtools-plugin-template/README.md`
- Used via cookiecutter/cruft scaffold

---

## Todos and requirements

### Pre-work (session setup)
- [x] Write CLAUDE.md
- [x] Write working.md (this file)

### TODO 1 — Enrich features and fix links
**Status**: NOT STARTED

**Problem**: All `detail` strings in `DATA.nomad.nomadFeatures` use relative file paths like
`../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/data.md`
that only work if the file is opened from the right directory, and not as proper web URLs.

**What to do**:
1. Replace every relative file path link with a real online URL.
2. Verify each URL: if confirmed from local docs references, use it. If guessed, use `[PLACEHOLDER: description]`.
3. Add richer `detail` text for `pynxFeatures` (currently sparse).
4. Improve `pynxPlugins` detail text using local docs content for spm, xps, em.
5. Add links to plugin cards (GitHub + docs pages where verified).
6. Update the `explore` section detail text to reference real documentation URLs.

**Verified online links** (confirmed from local doc references):
- `https://fairmat-nfdi.github.io/pynxtools/` — referenced in pynxtools-spm docs
- `https://fairmat-nfdi.github.io/pynxtools-xps/tutorial/nomad_usage.html` — already in existing code
- `https://github.com/FAIRmat-NFDI/pynxtools-spm` — in existing code and in spm docs
- `https://github.com/FAIRmat-NFDI/pynxtools-plugin-template` — in template README
- `https://github.com/FAIRmat-NFDI` — in existing code
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXspm.html` — in spm docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXstm.html` — in spm docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXsts.html` — in spm docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXafm.html` — in spm docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXmpes.html` — in xps docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXxps.html` — in xps docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXem.html` — in em docs
- `https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/spm-structure.html` — in spm docs
- `https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/dataconverter-and-readers.html` — in spm docs
- `https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/build-a-plugin.html` — in template README
- `https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/using-pynxtools-test-framework.html` — in template README

**NOMAD doc subpages** (base from user, subpage structure from local docs — needs user verification):
Base: `https://nomad-lab.eu/prod/v1/docs/`
- `explanation/data.html` — PLACEHOLDER until user confirms
- `reference/glossary.html` — PLACEHOLDER
- `tutorial/upload_publish.html` — PLACEHOLDER
- `explanation/processing.html` — PLACEHOLDER
- etc.

**Placeholders to add** (report file:line to user):
All NOMAD doc subpage links will be listed with their line numbers after the edit.

---

### TODO 2 — Color theme
**Status**: NOT STARTED

**Requirements**:
- pynxtools heading/accent color: `#55af31` (user-specified)
- Suggest 3–4 full color combinations to the user before applying
- Apply the chosen scheme consistently across all three views
- NOMAD brand color `#185FA5` stays (unless user wants to change)

**Current colors**:
```css
--pynx-accent:    #3B6D11  →  NEW: #55af31
--pynx-bg-light:  #EAF3DE  →  NEW: derive from #55af31 (suggest ~#EBF6E2)
--pynx-border:    #3B6D11  →  NEW: #55af31
/* dark mode */
--pynx-accent (dark): #639922  →  NEW: suggest ~#78CC4A
```

**Color combination suggestions to present to user**:

Option A — "FAIRmat Standard"
  - NOMAD: `#185FA5` (current blue)
  - pynxtools: `#55af31` (user green)
  - Explore section accent: follows pynxtools green
  - Rationale: minimal change, consistent with FAIRmat brand

Option B — "Deep Science"
  - NOMAD: `#1A5E9A` (slightly deeper blue)
  - pynxtools: `#55af31`
  - Secondary accent for explore: `#2B8C6E` (teal, for decision/branch nodes)
  - Rationale: richer, more serious scientific look

Option C — "Vibrant Exhibition"
  - NOMAD: `#185FA5`
  - pynxtools: `#55af31`
  - Branch YES: `#2DA44E` (GitHub-like green)
  - Branch NO: `#0969DA` (GitHub-like blue)
  - Rationale: strong visual contrast for exhibition legibility

Option D — "Warm Neutral"
  - NOMAD: `#185FA5`
  - pynxtools: `#55af31`
  - Background: `#F8F5F0` (warm off-white instead of cool gray)
  - Rationale: warmer feel for printed/screen exhibition

---

### TODO 3 — NOMAD box overflow fix
**Status**: NOT STARTED

**Problem**: The NOMAD central box has 22 feature chips; this causes the box to overflow vertically beyond the top/bottom boundaries of the left and right satellite columns.

**Solution**: Make the NOMAD central box 20% wider so chips wrap less and the box stays compact.
`270px * 1.2 = 324px` → round to `325px`

**Implementation plan**:
1. In `styles.css` `:root {}`, add `--nomad-central-box-width: 325px;`.
2. In `.central-box.nomad`, set `width: var(--nomad-central-box-width);` instead of `var(--central-box-width)`.
3. Update `--diagram-width` to account for the nomad view's wider box: need a separate `--nomad-diagram-width`.
4. Apply `--nomad-diagram-width` to `#view-nomad .view-note` and `#view-nomad .hub`.
5. Keep pynxtools box at `270px`.

**Additional fix**: If the box is still overflowing after widening, add `max-height` + `overflow-y: auto` to the `.chips` container inside the NOMAD central box as a fallback.

---

## Decisions log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-06-08 | NOMAD box 20% wider via separate CSS variable | User requested; avoids breaking pynxtools layout |
| 2026-06-08 | Relative file paths replaced with online URLs | File paths only work locally; exhibition is served statically |
| 2026-06-08 | pynxtools accent → #55af31 | User-specified brand color for FAIRmat/pynxtools group |

---

## Current status

**Last updated**: 2026-06-08
**Completed**: CLAUDE.md written, working.md written
**In progress**: — (ready to start TODO 1)
**Next action**: Execute TODO 1 — enrich feature details and replace relative paths with verified online links in `script.js`

---

## Link verification report

After TODO 1 is complete, this section will list every placeholder link with its file and line number so the user can verify and substitute the real URLs.

| Placeholder description | File | Line |
|------------------------|------|------|
| (to be filled after TODO 1) | | |
