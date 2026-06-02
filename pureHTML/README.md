# NOMAD & pynxtools Explorer

Interactive exhibition kiosk for presenting the NOMAD research data platform
and the pynxtools plugin ecosystem.

---

## What this is

A **single HTML file** (`index.html`) — no framework, no build step, no server required.
Open it in any modern browser and it works. It uses only:

- Plain HTML / CSS / JavaScript (no libraries)
- System fonts (no internet needed at the exhibition)
- CSS variables for light/dark mode (automatic, follows OS setting)

---

## Option A — Open directly in a browser (simplest)

No installation needed.

1. Download or copy the `index.html` file to your laptop.
2. Double-click it — it opens in your default browser.
3. Done.

> **Tip for the exhibition:** Press `F11` (Windows/Linux) or `Ctrl+Shift+F`
> (Mac: use View → Enter Full Screen) to go fullscreen for a clean kiosk look.

---

## Option B — Serve locally with Python (recommended)

Serving over localhost avoids any browser file:// restrictions
and gives a cleaner URL in the address bar.

### Requirements
- Python 3 (check with `python3 --version`)

### Steps

```bash
# 1. Navigate to the folder containing index.html
cd path/to/nomad-explorer

# 2. Start a local server
python3 -m http.server 8080

# 3. Open in browser
# Go to: http://localhost:8080
```

To stop the server press `Ctrl+C` in the terminal.

---

## Option C — Serve locally with Node.js

### Requirements
- Node.js (check with `node --version`)

```bash
# 1. Install a simple static server (one-time)
npm install -g serve

# 2. Navigate to the folder
cd path/to/nomad-explorer

# 3. Start the server
serve .

# 4. Open the URL shown in the terminal (usually http://localhost:3000)
```

---

## File structure

```
nomad-explorer/
└── index.html      ← the entire application (HTML + CSS + JS in one file)
```

---

## Customising content

All text content (plugin names, descriptions, feature details, tags) lives in
the `DATA` object at the top of the `<script>` section in `index.html`.

Open `index.html` in any text editor (VS Code, Notepad++, etc.) and search for:

```js
const DATA = {
```

You will find four arrays to edit:

| Array | What it controls |
|---|---|
| `nomadFeatures` | Feature chips inside the NOMAD central box |
| `nomadPlugins`  | Plugin satellites around NOMAD |
| `pynxFeatures`  | Feature chips inside the pynxtools central box |
| `pynxPlugins`   | Reader plugin satellites around pynxtools |

Each entry has:
- `name` — shown on the chip or card
- `desc` — short subtitle on the card (plugins only)
- `detail` — full text shown in the side panel when clicked
- `tags` — array of tag strings shown in the side panel

---

## Colours

All colours are defined as CSS variables at the top of the `<style>` block:

```css
:root {
  --nomad-accent: #185FA5;   /* NOMAD blue */
  --pynx-accent:  #3B6D11;   /* pynxtools green */
  ...
}
```

Dark mode values are in the `@media (prefers-color-scheme: dark)` block directly below.

---

## Browser support

Works in any modern browser:
- Chrome / Edge 90+
- Firefox 90+
- Safari 14+
