# CLAUDE.md — NOMAD & pynxtools Exhibition Kiosk

## Project purpose

A static, zero-dependency HTML/CSS/JavaScript exhibition kiosk for presenting the **NOMAD** research data management platform and the **pynxtools** plugin ecosystem at scientific conferences and lab exhibitions.
No framework, no build step, no server required — open `index.html` in any modern browser.

---

## File structure

```
pureHTML/
├── index.html          ← HTML skeleton (three views, shared side panel)
├── script.js           ← ALL application logic AND content data (DATA object)
├── styles.css          ← ALL styles (CSS variables, layout, components)
├── assets/
│   ├── nomad/          ← NOMAD logo assets
│   └── nomad_plugin/   ← pynxtools/FAIRmat logo assets
├── contextFiles/
│   └── pynxtoolsExploration.md  ← original design notes for the explore view
├── CLAUDE.md           ← this file
├── working.md          ← session-continuity file (todos, decisions, status)
└── README.md           ← end-user setup instructions
```

---

## Architecture

### Three views (single-page navigation)

| View ID         | Breadcrumb label        | What it shows |
|-----------------|-------------------------|---------------|
| `view-nomad`    | NOMAD                   | NOMAD central box + plugin satellites |
| `view-pynxtools` | pynxtools              | pynxtools central box + reader plugin satellites |
| `view-explore`  | explore ecosystem       | Decision stepper (use/build plugin) + usage tracks |

Navigation is handled by `showView(name)` in `script.js`.

### DATA object (content source of truth)

All displayed text lives in the `DATA` constant at the top of `script.js`:

```
DATA.nomad
  .title / .subtitle
  .nomadFeatures[]   — chips in the NOMAD central box
  .nomadPlugins[]    — satellite cards around NOMAD

DATA.pynxtools
  .title / .subtitle
  .pynxFeatures[]    — chips in the pynxtools central box
  .pynxPlugins[]     — satellite cards around pynxtools (reader plugins)

DATA.explore
  .page              — intro panel for the explore view
  .utilize           — "use or build" stepper section
  .usages            — two-track usage section (CLI vs NOMAD RDM)
```

Each feature/plugin/step object has:
- `name` — displayed on chip/card
- `detail` — HTML string shown in the side panel (may contain `<a>` tags)
- `tags[]` — tag chips shown in the side panel
- `desc` — short subtitle (plugin cards only)
- `link` — optional URL shown in the side panel
- `steps[]` — optional sub-steps (explore view only)

### CSS variables (all colors and dimensions)

All theme values are in `styles.css` `:root {}`:

```css
--nomad-accent / --nomad-bg-light / --nomad-border   /* NOMAD blue family */
--pynx-accent  / --pynx-bg-light  / --pynx-border    /* pynxtools green family */
--nomad-central-box-width    /* NOMAD central box (wider than pynxtools) */
--central-box-width          /* pynxtools central box */
--plugin-card-width / --connector-width / --rail-width
```

Dark mode overrides are in `@media (prefers-color-scheme: dark) { :root { ... } }`.

---

## Content domain knowledge

### NOMAD
Research data management platform for materials science by the FAIRmat consortium.
- Central installation: https://nomad-lab.eu/
- Docs base URL: https://nomad-lab.eu/prod/v1/docs/
- Source docs: `/home/rubel/NOMAD-FAIRmat/nomad-docs/docs/`
- Key concepts: Metainfo schema, plugin system, Oasis (self-hosted), NORTH (remote tools hub), ELNs, DOI publication, REST API

### pynxtools
NeXus data converter and validation framework; also a NOMAD plugin.
- GitHub: https://github.com/FAIRmat-NFDI/pynxtools
- Docs: https://fairmat-nfdi.github.io/pynxtools/
- Source docs: `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools/docs/`
- Key concepts: NeXus/HDF5, NXDL application definitions, MultiFormatReader, dataconverter CLI, ELN YAML, config JSON mapping

### pynxtools plugins (reader plugins)
All live under the FAIRmat-NFDI GitHub org: https://github.com/FAIRmat-NFDI

| Plugin | Technique | NeXus definition | Docs |
|--------|-----------|------------------|------|
| pynxtools-spm  | Scanning Probe Microscopy (STM/STS/AFM) | NXspm, NXstm, NXsts, NXafm | https://fairmat-nfdi.github.io/pynxtools-spm/ |
| pynxtools-xps  | X-ray Photoelectron Spectroscopy | NXxps, NXmpes | https://fairmat-nfdi.github.io/pynxtools-xps/ |
| pynxtools-em   | Electron Microscopy (TEM/SEM) | NXem | https://fairmat-nfdi.github.io/pynxtools-em/ |
| pynxtools-apm  | Atom Probe Microscopy | NXapm | https://fairmat-nfdi.github.io/pynxtools-apm/ |
| pynxtools-mpes | Multidimensional Photoemission Spectroscopy | NXmpes | https://fairmat-nfdi.github.io/pynxtools-mpes/ |
| pynxtools-ellips | Ellipsometry | NXellipsometry | https://fairmat-nfdi.github.io/pynxtools-ellips/ |
| pynxtools-xrd  | X-ray Diffraction | NXxrd_pan | https://fairmat-nfdi.github.io/pynxtools-xrd/ |
| pynxtools-raman | Raman Spectroscopy | NXraman | https://fairmat-nfdi.github.io/pynxtools-raman/ |
| pynxtools-igor | Igor Pro experiment files | — | https://fairmat-nfdi.github.io/pynxtools-igor/ |

### pynxtools-plugin-template
Cookiecutter scaffold for building new plugins.
- GitHub: https://github.com/FAIRmat-NFDI/pynxtools-plugin-template
- Source: `/home/rubel/NOMAD-FAIRmat/pynxtools-plugin-template/README.md`

---

## Conventions

- **No framework, no build.** Do not introduce npm, webpack, React, or any external library.
- **All content in DATA.** Never hard-code display text in HTML or JS outside the DATA object.
- **All colors in CSS variables.** Never use raw hex values in component CSS rules.
- **Links in detail strings.** Use `<a href="..." target="_blank" rel="noopener noreferrer">text</a>` syntax.
- **Unverified links.** Mark with `[PLACEHOLDER: description of target]` — do not silently use guessed URLs.
- **Scalable boxes.** The central box must never overflow its satellite rail columns. Use `overflow-y: auto` or scrollable chip containers for long feature lists.
- **NOMAD box is wider.** NOMAD has more features than pynxtools so it uses `--nomad-central-box-width` (20 % wider than `--central-box-width`).

---

## Color palette

| Token | Light mode | Dark mode | Used for |
|-------|-----------|-----------|----------|
| `--nomad-accent` | `#185FA5` | `#378ADD` | NOMAD titles, borders |
| `--pynx-accent`  | `#55af31` | `#78CC4A` | pynxtools titles, borders |
| `--nomad-bg-light` | `#E6F1FB` | `#042C53` | NOMAD chip/plug backgrounds |
| `--pynx-bg-light`  | `#EBF6E2` | `#173404` | pynxtools chip/plug backgrounds |

---

## Local documentation paths

| Resource | Local path |
|----------|-----------|
| NOMAD docs | `/home/rubel/NOMAD-FAIRmat/nomad-docs/docs/` |
| pynxtools docs | `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools/docs/` |
| pynxtools-spm docs | `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools-spm/docs/` |
| pynxtools-xps docs | `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools-xps/docs/` |
| pynxtools-em docs | `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools-em/docs/` |
| pynxtools-* docs | `/home/rubel/NOMAD-FAIRmat/nomad-distro-dev-RM/packages/pynxtools-*/docs/` |
| plugin template | `/home/rubel/NOMAD-FAIRmat/pynxtools-plugin-template/README.md` |
