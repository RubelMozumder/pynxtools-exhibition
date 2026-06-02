/* ============================================================
   DATA — edit names and descriptions here
   ============================================================ */
const DATA = {
  nomad: {
    className: "nomad",
    title: "NOMAD",
    subtitle: "Research Data Management Platform",
    nomadFeatures: [
      { name: "Metainfo schema",      detail: "Define scientific schemas using sections, subsections, and quantities. Schemas are reusable and composable across plugins for experiments, simulations, and crystal growth data.", tags: ["section", "subsection", "quantity"] },
      { name: "Search & filter",      detail: "Every metainfo quantity is indexed and searchable via the NOMAD web UI, REST API, or Python client. Combine filters across all published entries.", tags: ["full-text", "range", "API"] },
      { name: "Analytics dashboard",  detail: "Build drag-and-drop dashboards with charts, tables, and scatter plots pulling live data from the NOMAD search engine — no data export needed.", tags: ["charts", "scatter", "live data"] },
      { name: "DOI publishing",       detail: "Uploads and individual entries can be assigned persistent DOIs upon publication for citation in papers and reproducibility workflows.", tags: ["DOI", "FAIR", "open data"] },
      { name: "Central database",     detail: "Stores original raw input files and processed entries in a central versioned database. Entries are structured JSON/HDF5 objects built from input files.", tags: ["HDF5", "versioned", "raw files"] },
      { name: "JupyterHub",           detail: "Every NOMAD installation includes JupyterHub. Launch notebooks that connect directly to the NOMAD API without extra credentials needed.", tags: ["notebook", "Python", "analytics"] },
      { name: "NOMAD Action",         detail: "Define executable workflows attached to entries — trigger parsing, validation, transformation, or external computation steps from within the NOMAD UI.", tags: ["workflow", "automation"] },
      { name: "NORTHtool",            detail: "Docker-based Jupyter containers tailored to a specific research domain, shipping with domain-specific packages, notebooks, and pre-loaded NOMAD API clients.", tags: ["Docker", "Jupyter", "custom env"] },
     { name: "NOMAD Parser",          detail: "A Python library for writing custom file parsers as NOMAD plugins. Provides a common entry point and utilities for parsing, validation, and error reporting.", tags: ["parser", "Python", "plugin"] },
    ],  
    nomadPlugins: [
      { name: "pynxtools",             desc: "NeXus converter & validator",       isPynx: true },
      { name: "nomad-simulations",     desc: "Computational simulation schemas",  detail: "Metainfo schemas for DFT, MD, and ab initio workflows. Defines quantities for basis sets, k-points, and geometry optimisation.", tags: ["DFT", "MD", "ab initio"] },
      { name: "nomad-measurements",    desc: "Experimental measurement schemas",  detail: "Covers XRD, SEM, TEM, and optical spectroscopy. Provides reusable base sections for sample, instrument, and environment.", tags: ["XRD", "SEM", "spectroscopy"] },
      { name: "nomad-lab-base",        desc: "Shared base schemas & utilities",   detail: "Foundational Metainfo sections (Sample, Instrument, Researcher) reused by other plugins to reduce duplication.", tags: ["base", "reusable"] },
      { name: "nomad-parser-plugin",   desc: "Custom file format parser",         detail: "Entry point for adding parsers for new file formats. Any lab can ship a parser plugin that NOMAD auto-discovers and applies during upload.", tags: ["parser", "entrypoint", "format"] },
    ],
    },
  pynxtools: {
    className: "pynxtools",
    title: "pynxtools",
    subtitle: "NeXus data converter & validation framework",
    pynxFeatures: [
      { name: "NeXus datamodel",   detail: "Embeds the official NeXus definitions repository as a Git submodule — every NXDL application definition and base class is versioned and available at import time.", tags: ["NeXus", "NXDL", "submodule"] },
      { name: "Validator",         detail: "Checks a parsed HDF5/NeXus file against its application definition. Verifies required groups/fields exist, data types match NXDL specs, and physical units are compatible.", tags: ["NXDL", "dtype", "units", "HDF5"] },
      { name: "Writer",            detail: "Takes a Python dict or ELN YAML template and serialises it into a conformant NeXus HDF5 file (.nxs). Handles group hierarchy, attribute attachment, and link resolution.", tags: [".nxs", "HDF5", "ELN", "YAML"] },
      { name: "Test framework",    detail: "A pytest-based harness that every reader plugin can import. Provides fixtures for loading reference files, assertions for NeXus tree structure, and round-trip validation helpers.", tags: ["pytest", "fixtures", "CI"] },
      { name: "Reader entrypoint", detail: "All reader plugins register a common Python entrypoint. NOMAD and user code can discover and invoke any installed reader with a single unified API call.", tags: ["entrypoint", "API", "discovery"] },
    ],
    pynxPlugins: [
      { name: "pynxtools-spm",      desc: "Scanning probe microscopy",         isPynxSpm: true, detail: "Reads Nanonis .sxm/.dat and Bruker .spm formats, converts to NXsts/NXafm application definitions. Supports STM and AFM modalities.", tags: ["STM", "AFM", "Nanonis"] },
      { name: "pynxtools-xps",      desc: "X-ray photoelectron spectroscopy",  detail: "Parses SPECS, Kratos, and ULVAC-PHI vendor formats into NXxps. Handles binding energy calibration and survey/region scan structures.", tags: ["XPS", "SPECS", "NXxps"] },
      { name: "pynxtools-apm",      desc: "Atom probe microscopy",             detail: "Converts APT/LEAP reconstruction files (.pos, .epos, .apt) into NXapm. Preserves detector hit data, ranging tables, and reconstructed ion positions.", tags: ["APT", "LEAP", "NXapm"] },
      { name: "pynxtools-em",       desc: "Electron microscopy",               detail: "Handles TEM and SEM data from FEI/Thermo, JEOL, and Zeiss. Reads .dm3/.dm4, .bcf, .emd and maps metadata to NXem.", tags: ["TEM", "SEM", "dm4", "NXem"] },
      { name: "pynxtools-ellips",   desc: "Ellipsometry converter",            detail: "Reads J.A. Woollam CompleteEASE exports into NXellipsometry. Supports psi/delta spectra and Mueller matrix data.", tags: ["ellipsometry", "Woollam"] },
      { name: "pynxtools-mpes",     desc: "Multidimensional photoemission",    detail: "Converts MPES/ARPES datasets from Flash and BESSY beamlines into NXmpes. Handles momentum-resolved energy band maps.", tags: ["ARPES", "MPES", "beamline"] },
      { name: "pynxtools-xrd",      desc: "X-ray diffraction",                 detail: "Parses powder and single-crystal XRD data (Bruker .raw, PANalytical .xrdml) into NXxrd_pan. Supports 2D detector images.", tags: ["XRD", "Bruker", "Rietveld"] },
      { name: "pynxtools-raman",    desc: "Raman spectroscopy",                detail: "Reads HORIBA LabSpec, Renishaw WiRE, and Bruker OPUS formats. Maps wavenumber, intensity, and metadata to NXraman.", tags: ["Raman", "HORIBA", "NXraman"] },
      { name: "pynxtools-igor",     desc: "Igor Pro experiment reader",        detail: "Reads Igor Pro binary wave (.ibw) and packed experiment (.pxp) files. Converts wave metadata and arrays into NeXus structures.", tags: ["Igor Pro", ".ibw", ".pxp"] },
      { name: "pynxtools-mpes-nxs", desc: "NeXus MPES file tools",             detail: "Companion to pynxtools-mpes providing NeXus-native read/write utilities for pipelines that already produce .nxs files and need validation.", tags: ["MPES", ".nxs", "pipeline"] },
    ],
  },
};

/* ============================================================
   PANEL
   ============================================================ */
function openPanel(type, list, idx) {
  const item = list[idx];
  document.getElementById('p-badge').textContent = type;
  document.getElementById('p-title').textContent = item.name;
  const tags = item.tags || [];
  document.getElementById('p-body').innerHTML =
    '<p class="psec">description</p>' +
    '<p class="ptxt">' + (item.detail || item.desc) + '</p>' +
    (tags.length
      ? '<p class="psec">tags</p>' + tags.map(t => '<span class="ptag">' + t + '</span>').join('')
      : '');
  document.getElementById('side-panel').classList.add('open');
  document.getElementById('panel-overlay').classList.add('open');
}

function closePanel() {
  document.getElementById('side-panel').classList.remove('open');
  document.getElementById('panel-overlay').classList.remove('open');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

/* ============================================================
   BUILD UI
   ============================================================ */
function makeConnector(side) {
  const d = document.createElement('div');
  d.className = 'connector ' + side;
  // stub from the card to the rail, ending in a plug that sits on the rail
  d.innerHTML = '<div class="conn-line"></div><div class="conn-plug">⚡</div>';
  return d;
}

function makeRail(label) {
  const rail = document.createElement('div');
  rail.className = 'rail';
  const text = document.createElement('span');
  text.className = 'rail-label';
  text.textContent = label;
  rail.appendChild(text);
  return rail;
}

function makePluginCard(p, list, idx) {
  const card = document.createElement('div');
  card.className = 'plugin-card' + (p.isPynx ? ' pynx-card' : '') + (p.isPynxSpm ? ' pynx-spm-card' : ''); // add 'plugin-card' class to both for consistent styling, and 'pynx-card' for any pynxtools-specific overrides within the
  
  // card.

  const nameEl = document.createElement('div');
  nameEl.className = 'pcard-name';
  nameEl.textContent = p.name;

  const descEl = document.createElement('div');
  descEl.className = 'pcard-desc';
  descEl.textContent = p.desc;

  const actions = document.createElement('div');
  actions.className = 'pcard-actions';

  if (p.isPynx) {
    const btn = document.createElement('button');
    btn.className = 'btn-explore';
    btn.textContent = 'explore →';
    btn.onclick = () => showView('pynxtools');
    actions.appendChild(btn);
  }  else {
    const btn = document.createElement('button');
    btn.className = 'btn-info'; // different styling for info button if it's a pynxtools plugin
    btn.textContent = 'ⓘ info';
    btn.onclick = () => openPanel('plugin', list, idx);
    actions.appendChild(btn);
  }

  const plug = document.createElement('span');
  plug.className = 'plug-badge';
  plug.textContent = '⚡ (plugin)';
  actions.appendChild(plug);

  card.appendChild(nameEl);
  card.appendChild(descEl);
  card.appendChild(actions);
  return card;
}

function makeCentralBox(cls, title, subtitle, features, featureList, standalone) {
  const box = document.createElement('div');
  box.className = 'central-box ' + cls;

  const titleEl = document.createElement('div');
  titleEl.className = 'box-title';
  titleEl.textContent = title;

  const subEl = document.createElement('div');
  subEl.className = 'box-sub';
  subEl.textContent = subtitle;

  box.appendChild(titleEl);
  box.appendChild(subEl);

  if (standalone) {
    const tag = document.createElement('div');
    tag.className = 'standalone-tag';
    tag.textContent = '✦ standalone & NOMAD plugin';
    box.appendChild(tag);
  }

  const label = document.createElement('div');
  label.className = 'features-label';
  label.textContent = 'core features';
  box.appendChild(label);

  const chips = document.createElement('div');
  chips.className = 'chips';
  features.forEach((f, i) => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = f.name;
    chip.onclick = () => openPanel('feature', featureList, i);
    chips.appendChild(chip);
  });
  box.appendChild(chips);

  // plugs where each side's rail taps into the box (always at the box's vertical
  // center, which lines up with the rail midpoint)
  // ['left', 'right'].forEach(side => {
  //   const plug = document.createElement('div');
  //   plug.className = 'box-plug ' + side;
  //   // plug.textContent = '⚡';
  //   box.appendChild(plug);
  // });

  return box;
}

function buildHub(hubId, centralEl, leftPlugins, rightPlugins, pluginList, interfaceLabel) {
  const hub = document.getElementById(hubId);
  hub.innerHTML = '';

  const leftCol = document.createElement('div');
  leftCol.className = 'satellites-col left';
  leftPlugins.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'sat-row';
    row.appendChild(makePluginCard(p, pluginList, i));
    row.appendChild(makeConnector('left'));
    leftCol.appendChild(row);
  });
  leftCol.appendChild(makeRail(interfaceLabel));

  const centerCol = document.createElement('div');
  centerCol.className = 'central-col';
  centerCol.appendChild(centralEl);

  const rightCol = document.createElement('div');
  rightCol.className = 'satellites-col right';
  rightPlugins.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'sat-row';
    row.appendChild(makeConnector('right'));
    row.appendChild(makePluginCard(p, pluginList, leftPlugins.length + i));
    rightCol.appendChild(row);
  });
  rightCol.appendChild(makeRail(interfaceLabel));

  hub.appendChild(leftCol);
  hub.appendChild(centerCol);
  hub.appendChild(rightCol);
}

function equalizeSatelliteColumns(hub) {
  const columns = hub.querySelectorAll('.satellites-col');
  if (columns.length !== 2 || hub.offsetParent === null) return;

  columns.forEach(col => {
    col.style.minHeight = '';
  });

  const tallest = Math.max(...Array.from(columns, col => col.offsetHeight));
  columns.forEach(col => {
    col.style.minHeight = tallest + 'px';
  });
}

function equalizeVisibleSatelliteColumns() {
  document.querySelectorAll('.view.active .hub').forEach(equalizeSatelliteColumns);
}

function buildNomad() {
  const plugins = DATA.nomad.nomadPlugins;
  const mid = Math.ceil(plugins.length / 2);
  const central = makeCentralBox(DATA.nomad.className, DATA.nomad.title, DATA.nomad.subtitle, DATA.nomad.nomadFeatures, DATA.nomad.nomadFeatures, false);
  buildHub('hub-nomad', central, plugins.slice(0, mid), plugins.slice(mid), plugins, DATA.nomad.title + ' plugin interface');
}

function buildPynx() {
  const plugins = DATA.pynxtools.pynxPlugins;
  const mid = Math.ceil(plugins.length / 2);
  const central = makeCentralBox(DATA.pynxtools.className, DATA.pynxtools.title, DATA.pynxtools.subtitle, DATA.pynxtools.pynxFeatures, DATA.pynxtools.pynxFeatures, true);
  buildHub('hub-pynx', central, plugins.slice(0, mid), plugins.slice(mid), plugins, DATA.pynxtools.title + ' plugin interface');
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function showView(name) {
  closePanel();
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(name === 'nomad' ? 'view-nomad' : 'view-pynxtools').classList.add('active');

  const isPynx = name === 'pynxtools';
  document.getElementById('crumb-sep').style.display    = isPynx ? 'inline' : 'none';
  document.getElementById('crumb-pyn').style.display    = isPynx ? 'inline' : 'none';
  document.getElementById('crumb-pyn').classList.toggle('active', isPynx);
  document.getElementById('crumb-nomad').classList.toggle('active', !isPynx);
  document.getElementById('back-btn').classList.toggle('visible', isPynx);
  requestAnimationFrame(equalizeVisibleSatelliteColumns);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── INIT ── */
buildNomad();
buildPynx();
requestAnimationFrame(equalizeVisibleSatelliteColumns);
window.addEventListener('resize', equalizeVisibleSatelliteColumns);
