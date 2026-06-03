/* ============================================================
   DATA — edit names and descriptions here
   ============================================================ */
const DATA = {
  nomad: {
    className: "nomad",
    title: "NOMAD",
    subtitle: "Research Data Management Platform",
    nomadFeatures: [
      {
        name: "Metainfo schema",
        detail: [
          "NOMAD uses the Metainfo schema system to describe research data in a structured and machine-readable way. Instead of storing only files, NOMAD represents experiments, simulations, instruments, samples, workflows, and results as sections and quantities with units, descriptions, and references.",
          "This makes data easier to search, compare, reuse, and connect across different scientific domains and research communities. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/data.md'>Data structure</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/reference/glossary.md#metainfo'>Metainfo</a>."
        ].join(" "),
        tags: ["schema", "metainfo", "interoperability"]
      },
      {
        name: "Upload, share & access",
        detail: [
          "Users can upload raw research files, organize them into folders, inspect generated entries, edit metadata, reprocess data, and download files again. Uploads can stay private during active research, be shared with selected collaborators, made visible for review, or published permanently.",
          "This supports both everyday project work and formal publication workflows for individual researchers, groups, and shared projects. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/tutorial/upload_publish.md'>Upload and publish</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/gui/upload.md'>Upload guide</a>."
        ].join(" "),
        tags: ["uploads", "sharing", "access control"]
      },
      {
        name: "Automatic parsing",
        detail: [
          "When files are uploaded, NOMAD checks whether their format is supported by an available parser. If a parser matches, NOMAD automatically creates structured entries from the raw files and extracts scientific metadata and results.",
          "This turns heterogeneous file formats into comparable data objects that can be searched, inspected, reused, and connected. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/reference/parsers.md'>Supported parsers</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/processing.md'>Processing</a>."
        ].join(" "),
        tags: ["parsers", "file formats", "structured entries"]
      },
      {
        name: "Processing & normalizing",
        detail: [
          "After parsing, NOMAD further processes the data through normalization. Normalizers can clean, complete, or enrich entries by adding derived quantities, standardized values, and searchable summaries.",
          "This processing chain makes uploaded data more consistent and useful for large-scale exploration across many entries and uploads. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/processing.md'>Processing</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/reference/glossary.md#normalizer'>Normalizer</a>."
        ].join(" "),
        tags: ["normalization", "derived data", "indexing"]
      },
      {
        name: "Search & filter",
        detail: [
          "NOMAD provides search across published data and data accessible to the logged-in user. Search can be based on materials, elements, methods, properties, datasets, upload metadata, or any indexed schema quantity.",
          "Users can combine filters and range queries to narrow down complex scientific datasets during interactive exploration sessions. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/tutorial/explore.md'>Explore data</a>."
        ].join(" "),
        tags: ["search", "filters", "metadata"]
      },
      {
        name: "Analytics dashboards",
        detail: [
          "The Explore interface includes interactive dashboards for scientific data analysis. Users can create terms plots, histograms, scatter plots, and periodic-table filters directly from indexed NOMAD data.",
          "This allows quick visual exploration without first downloading or manually preparing the data in separate analysis tools. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/tutorial/explore.md#custom-widgets-for-advanced-searches'>Custom widgets</a>."
        ].join(" "),
        tags: ["dashboards", "plots", "visual analytics"]
      },
      {
        name: "Publishing & DOI",
        detail: [
          "NOMAD supports publication of uploads and curated datasets. Published data becomes findable and accessible, while datasets can receive persistent DOIs for citation in papers and reuse by other researchers.",
          "Embargo options allow data to be prepared for publication while delaying public access when needed by projects or publishers. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/tutorial/upload_publish.md#create-datasets-and-get-a-doi'>Datasets and DOI</a>."
        ].join(" "),
        tags: ["DOI", "publication", "FAIR"]
      },
      {
        name: "Central database",
        detail: [
          "The central NOMAD installation acts as a public research data platform for materials science. It stores raw files, processed entries, metadata, and searchable scientific results from many different domains.",
          "This makes NOMAD both a repository and an analysis-ready database for FAIR research data management across materials-science domains. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/index.md'>NOMAD documentation</a>."
        ].join(" "),
        tags: ["repository", "open data", "materials science"]
      },
      {
        name: "Datasets",
        detail: [
          "Datasets allow users to group related entries from one or more uploads into curated collections. This is useful for organizing results belonging to a publication, project, benchmark, or shared scientific question.",
          "Datasets are also the main object for DOI assignment and make curated result collections easier to cite, share, and revisit. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/reference/glossary.md#dataset'>Dataset</a>."
        ].join(" "),
        tags: ["datasets", "curation", "collections"]
      },
      {
        name: "ELNs & integration",
        detail: [
          "NOMAD includes Electronic Lab Notebook entries that can be edited through structured forms and widgets. These ELNs are schema-based, so entered data is immediately structured and searchable.",
          "The documentation also describes integration paths for external ELN systems such as elabFTW, Labfolder, Chemotion, and Openbis. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/gui/eln.md'>ELNs</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/tutorial/eln/built_in_templates.md'>Built-in ELN templates</a>."
        ].join(" "),
        tags: ["ELN", "lab data", "integration"]
      },
      {
        name: "Workflows",
        detail: [
          "NOMAD can represent scientific workflows as connected tasks and results. Workflows may be simple, nested, or custom, and can reference data across entries and uploads.",
          "Workflow graphs help users understand provenance and the relationship between processing steps, intermediate results, and final outputs. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/gui/workflows.md'>Custom workflows</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/workflows.md'>Workflow explanation</a>."
        ].join(" "),
        tags: ["workflows", "provenance", "task graph"]
      },
      {
        name: "NOMAD Actions",
        detail: [
          "Actions provide a way to define executable workflows inside NOMAD. They are useful for long-running tasks, external API calls, advanced processing, or computations that need dedicated resources such as CPU or GPU queues.",
          "This extends NOMAD from data management toward controlled automation for processing tasks that should be launched, tracked, and documented inside the platform. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/plugins/types/actions.md'>Actions</a>."
        ].join(" "),
        tags: ["actions", "automation", "CPU/GPU"]
      },
      {
        name: "NORTH & Jupyter",
        detail: [
          "NORTH, the NOMAD Remote Tools Hub, lets users run analysis tools in isolated browser-accessible containers. These tools can access NOMAD data directly, avoiding manual downloads of large datasets.",
          "NORTH is especially useful for Jupyter notebooks, domain-specific analysis tools, and reproducible remote environments. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/north.md'>NORTH</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/gui/north.md'>Analyze data in NORTH</a>."
        ].join(" "),
        tags: ["NORTH", "JupyterHub", "containers"]
      },
      {
        name: "Programmatic API",
        detail: [
          "NOMAD can be accessed programmatically through REST APIs, Python requests, curl, wget, and the NOMAD Python package. Users can search data, download files, inspect processed entries, update metadata, and publish data through scripts.",
          "This supports automation and integration into research workflows where repeated search, metadata updates, publication, or download steps should be scripted. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/program/api.md'>API overview</a>."
        ].join(" "),
        tags: ["REST API", "Python", "automation"]
      },
      {
        name: "Graph-style API",
        detail: [
          "The graph-style API provides flexible access to nested NOMAD data structures. Users can fetch selected parts of entries, follow references, access archive data, query schema definitions, and control the depth of returned data.",
          "This is useful when working with complex structured datasets where only selected nested fields, references, or archive sections are needed. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/program/graph_api.md'>Graph-style API</a>."
        ].join(" "),
        tags: ["graph API", "nested data", "references"]
      },
      {
        name: "Download data",
        detail: [
          "NOMAD supports downloading raw files, whole uploads, datasets, and selected processed data. This enables researchers to reuse published data, run external analyses, or archive project data locally.",
          "Both GUI and programmatic download workflows are documented, supporting lightweight manual access as well as scripted data retrieval for analysis pipelines. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/program/download.md'>Download data</a>."
        ].join(" "),
        tags: ["download", "raw files", "reuse"]
      },
      {
        name: "Processed data access",
        detail: [
          "Each parsed NOMAD entry has processed data that follows a defined schema. This structured data can be accessed through the GUI, APIs, or downloaded as JSON.",
          "It allows users to work with normalized scientific information instead of manually interpreting raw files for every analysis task. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/program/archive_query.md'>Access processed data</a>."
        ].join(" "),
        tags: ["processed data", "archives", "JSON"]
      },
      {
        name: "Authentication",
        detail: [
          "NOMAD supports authenticated access through Keycloak, personal access tokens, app tokens, scopes, and user groups. This enables secure private work, controlled sharing, and programmatic access to protected data.",
          "Authentication is important for both central NOMAD and local Oasis deployments, especially when private data or automation tokens are involved. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/auth.md'>Authentication</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/manage/program/auth.md'>Programmatic auth</a>."
        ].join(" "),
        tags: ["authentication", "tokens", "authorization"]
      },
      {
        name: "Oasis & federation",
        detail: [
          "NOMAD Oasis allows institutions, labs, and companies to run their own NOMAD installation. This supports private data management, local infrastructure, custom plugins, and domain-specific workflows.",
          "Oasis installations can also participate in federated data transfer using upload bundles between trusted NOMAD environments. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/oasis.md'>Federation and Oasis</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/oasis/install.md'>Install Oasis</a>."
        ].join(" "),
        tags: ["Oasis", "self-hosting", "federation"]
      },
      {
        name: "Plugin system",
        detail: [
          "NOMAD is extensible through plugins. Plugins can add parsers, schemas, apps, APIs, normalizers, actions, example data, and NORTH tools for NOMAD installations.",
          "This makes NOMAD adaptable to new instruments, communities, file formats, and scientific workflows without changing the core platform. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/explanation/plugin_system.md'>Plugin system</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/plugins/plugins.md'>Plugin guide</a>."
        ].join(" "),
        tags: ["plugins", "extensions", "customization"]
      },
      {
        name: "Domain-specific apps",
        detail: [
          "NOMAD apps provide tailored interfaces for specific research domains or use cases. They can define specialized filters, dashboards, units, highlighted properties, and views that make domain data easier to understand.",
          "This helps communities build focused portals on top of the same NOMAD infrastructure while keeping data management consistent. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/howto/plugins/types/apps.md'>Apps</a>, <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/reference/glossary.md#app'>App glossary</a>."
        ].join(" "),
        tags: ["apps", "domain views", "dashboards"]
      },
      {
        name: "Domain support",
        detail: [
          "NOMAD supports a broad range of computational and experimental materials-science data. The documentation includes examples for DFT, many-body calculations, molecular dynamics, electron microscopy, photoemission, XPS, optical spectroscopy, atom probe tomography, scanning probe microscopy, NeXus/pynxtools workflows, catalysis, and NEB workflows. Details: <a href='../../nomad-distro-dev-RM/packages/nomad-docs/docs/examples/overview.md'>Domain-specific examples</a>."
        ].join(" "),
        tags: ["simulations", "experiments", "materials science"]
      }
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
  const detail = item.detail || item.desc;
  document.getElementById('p-body').innerHTML =
    '<p class="psec">description</p>' +
    '<p class="ptxt">' + detail + '</p>' +
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
