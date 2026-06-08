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
          "NOMAD uses the Metainfo schema system to describe research data in a structured, machine-readable way. Instead of storing only files, NOMAD represents experiments, simulations, instruments, samples, workflows, and results as sections and quantities with units, descriptions, and references.",
          "This makes data easier to search, compare, reuse, and connect across different scientific domains and research communities.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/explanation/data.html' target='_blank' rel='noopener noreferrer'>Data structure</a>, <a href='https://nomad-lab.eu/prod/v1/docs/reference/glossary.html#metainfo' target='_blank' rel='noopener noreferrer'>Metainfo glossary</a>."
        ].join(" "),
        tags: ["schema", "metainfo", "interoperability"]
      },
      {
        name: "Upload, share & access",
        detail: [
          "Users can upload raw research files, organize them into folders, inspect generated entries, edit metadata, reprocess data, and download files again. Uploads can stay private during active research, be shared with selected collaborators, made visible for review, or published permanently.",
          "This supports both everyday project work and formal publication workflows for individual researchers, groups, and shared projects.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/tutorial/upload_publish.html' target='_blank' rel='noopener noreferrer'>Upload and publish</a>."
        ].join(" "),
        tags: ["uploads", "sharing", "access control"]
      },
      {
        name: "Automatic parsing",
        detail: [
          "When files are uploaded, NOMAD checks whether their format is supported by an available parser. If a parser matches, NOMAD automatically creates structured entries from the raw files and extracts scientific metadata and results.",
          "This turns heterogeneous file formats into comparable data objects that can be searched, inspected, reused, and connected.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/reference/parsers.html' target='_blank' rel='noopener noreferrer'>Supported parsers</a>, <a href='https://nomad-lab.eu/prod/v1/docs/explanation/processing.html' target='_blank' rel='noopener noreferrer'>Processing</a>."
        ].join(" "),
        tags: ["parsers", "file formats", "structured entries"]
      },
      {
        name: "Processing & normalizing",
        detail: [
          "After parsing, NOMAD further processes the data through normalization. Normalizers can clean, complete, or enrich entries by adding derived quantities, standardized values, and searchable summaries.",
          "This processing chain makes uploaded data more consistent and useful for large-scale exploration across many entries and uploads.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/explanation/processing.html' target='_blank' rel='noopener noreferrer'>Processing</a>."
        ].join(" "),
        tags: ["normalization", "derived data", "indexing"]
      },
      {
        name: "Search & filter",
        detail: [
          "NOMAD provides search across published data and data accessible to the logged-in user. Search can be based on materials, elements, methods, properties, datasets, upload metadata, or any indexed schema quantity.",
          "Users can combine filters and range queries to narrow down complex scientific datasets during interactive exploration sessions.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/tutorial/explore.html' target='_blank' rel='noopener noreferrer'>Explore data</a>."
        ].join(" "),
        tags: ["search", "filters", "metadata"]
      },
      {
        name: "Analytics dashboards",
        detail: [
          "The Explore interface includes interactive dashboards for scientific data analysis. Users can create terms plots, histograms, scatter plots, and periodic-table filters directly from indexed NOMAD data.",
          "This allows quick visual exploration without first downloading or manually preparing the data in separate analysis tools.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/tutorial/explore.html' target='_blank' rel='noopener noreferrer'>Explore data</a>."
        ].join(" "),
        tags: ["dashboards", "plots", "visual analytics"]
      },
      {
        name: "Publishing & DOI",
        detail: [
          "NOMAD supports publication of uploads and curated datasets. Published data becomes findable and accessible, while datasets can receive persistent DOIs for citation in papers and reuse by other researchers.",
          "Embargo options allow data to be prepared for publication while delaying public access when needed by projects or publishers.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/tutorial/upload_publish.html' target='_blank' rel='noopener noreferrer'>Upload and publish</a>."
        ].join(" "),
        tags: ["DOI", "publication", "FAIR"]
      },
      {
        name: "Central database",
        detail: [
          "The central NOMAD installation acts as a public research data platform for materials science. It stores raw files, processed entries, metadata, and searchable scientific results from many different domains.",
          "This makes NOMAD both a repository and an analysis-ready database for FAIR research data management across materials-science domains.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/' target='_blank' rel='noopener noreferrer'>NOMAD documentation</a>."
        ].join(" "),
        tags: ["repository", "open data", "materials science"]
      },
      {
        name: "Datasets",
        detail: [
          "Datasets allow users to group related entries from one or more uploads into curated collections. This is useful for organizing results belonging to a publication, project, benchmark, or shared scientific question.",
          "Datasets are also the main object for DOI assignment and make curated result collections easier to cite, share, and revisit.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/reference/glossary.html#dataset' target='_blank' rel='noopener noreferrer'>Datasets</a>."
        ].join(" "),
        tags: ["datasets", "curation", "collections"]
      },
      {
        name: "ELNs & integration",
        detail: [
          "NOMAD includes Electronic Lab Notebook (ELN) entries that can be edited through structured forms and widgets. These ELNs are schema-based, so entered data is immediately structured and searchable.",
          "The documentation also describes integration paths for external ELN systems such as elabFTW, Labfolder, Chemotion, and openBIS.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/gui/eln.html' target='_blank' rel='noopener noreferrer'>ELNs</a>."
        ].join(" "),
        tags: ["ELN", "lab data", "integration"]
      },
      {
        name: "Workflows",
        detail: [
          "NOMAD can represent scientific workflows as connected tasks and results. Workflows may be simple, nested, or custom, and can reference data across entries and uploads.",
          "Workflow graphs help users understand provenance and the relationship between processing steps, intermediate results, and final outputs.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/gui/workflows.html' target='_blank' rel='noopener noreferrer'>Workflows</a>, <a href='https://nomad-lab.eu/prod/v1/docs/explanation/workflows.html' target='_blank' rel='noopener noreferrer'>Workflow explanation</a>."
        ].join(" "),
        tags: ["workflows", "provenance", "task graph"]
      },
      {
        name: "NOMAD Actions",
        detail: [
          "Actions provide a way to define executable workflows inside NOMAD. They are useful for long-running tasks, external API calls, advanced processing, or computations that need dedicated resources such as CPU or GPU queues.",
          "This extends NOMAD from data management toward controlled automation for processing tasks that should be launched, tracked, and documented inside the platform.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/plugins/types/actions.html' target='_blank' rel='noopener noreferrer'>Actions</a>."
        ].join(" "),
        tags: ["actions", "automation", "CPU/GPU"]
      },
      {
        name: "NORTH & Jupyter",
        detail: [
          "NORTH — the NOMAD Remote Tools Hub — lets users run analysis tools in isolated browser-accessible containers. These tools can access NOMAD data directly, avoiding manual downloads of large datasets.",
          "NORTH is especially useful for Jupyter notebooks, domain-specific analysis tools, and reproducible remote environments.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/explanation/north.html' target='_blank' rel='noopener noreferrer'>NORTH</a>, <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/gui/north.html' target='_blank' rel='noopener noreferrer'>Analyze data in NORTH</a>."
        ].join(" "),
        tags: ["NORTH", "JupyterHub", "containers"]
      },
      {
        name: "Programmatic API",
        detail: [
          "NOMAD can be accessed programmatically through REST APIs, Python requests, curl, wget, and the NOMAD Python package. Users can search data, download files, inspect processed entries, update metadata, and publish data through scripts.",
          "This supports automation and integration into research workflows where repeated search, metadata updates, publication, or download steps should be scripted.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/program/api.html' target='_blank' rel='noopener noreferrer'>API overview</a>."
        ].join(" "),
        tags: ["REST API", "Python", "automation"]
      },
      {
        name: "Graph-style API",
        detail: [
          "The graph-style API provides flexible access to nested NOMAD data structures. Users can fetch selected parts of entries, follow references, access archive data, query schema definitions, and control the depth of returned data.",
          "This is useful when working with complex structured datasets where only selected nested fields, references, or archive sections are needed.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/program/graph_api.html' target='_blank' rel='noopener noreferrer'>Graph-style API</a>."
        ].join(" "),
        tags: ["graph API", "nested data", "references"]
      },
      {
        name: "Download data",
        detail: [
          "NOMAD supports downloading raw files, whole uploads, datasets, and selected processed data. This enables researchers to reuse published data, run external analyses, or archive project data locally.",
          "Both GUI and programmatic download workflows are documented, supporting lightweight manual access as well as scripted data retrieval for analysis pipelines.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/program/download.html' target='_blank' rel='noopener noreferrer'>Download data</a>."
        ].join(" "),
        tags: ["download", "raw files", "reuse"]
      },
      {
        name: "Processed data access",
        detail: [
          "Each parsed NOMAD entry has processed data that follows a defined schema. This structured data can be accessed through the GUI, APIs, or downloaded as JSON.",
          "It allows users to work with normalized scientific information instead of manually interpreting raw files for every analysis task.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/program/archive_query.html' target='_blank' rel='noopener noreferrer'>Access processed data</a>."
        ].join(" "),
        tags: ["processed data", "archives", "JSON"]
      },
      {
        name: "Authentication",
        detail: [
          "NOMAD supports authenticated access through Keycloak, personal access tokens, app tokens, scopes, and user groups. This enables secure private work, controlled sharing, and programmatic access to protected data.",
          "Authentication is important for both central NOMAD and local Oasis deployments, especially when private data or automation tokens are involved.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/explanation/auth.html' target='_blank' rel='noopener noreferrer'>Authentication</a>, <a href='https://nomad-lab.eu/prod/v1/docs/howto/manage/program/auth.html' target='_blank' rel='noopener noreferrer'>Programmatic auth</a>."
        ].join(" "),
        tags: ["authentication", "tokens", "authorization"]
      },
      {
        name: "Oasis & federation",
        detail: [
          "NOMAD Oasis allows institutions, labs, and companies to run their own NOMAD installation. This supports private data management, local infrastructure, custom plugins, and domain-specific workflows.",
          "Oasis installations can also participate in federated data transfer using upload bundles between trusted NOMAD environments.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/explanation/oasis.html' target='_blank' rel='noopener noreferrer'>Federation and Oasis</a>, <a href='https://nomad-lab.eu/prod/v1/docs/howto/oasis/install.html' target='_blank' rel='noopener noreferrer'>Install Oasis</a>."
        ].join(" "),
        tags: ["Oasis", "self-hosting", "federation"]
      },
      {
        name: "Plugin system",
        detail: [
          "NOMAD is extensible through plugins. Plugins can add parsers, schemas, apps, APIs, normalizers, actions, example data, and NORTH tools for NOMAD installations.",
          "This makes NOMAD adaptable to new instruments, communities, file formats, and scientific workflows without changing the core platform.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/explanation/plugin_system.html' target='_blank' rel='noopener noreferrer'>Plugin system</a>, <a href='https://nomad-lab.eu/prod/v1/docs/howto/plugins/plugins.html' target='_blank' rel='noopener noreferrer'>Plugin guide</a>."
        ].join(" "),
        tags: ["plugins", "extensions", "customization"]
      },
      {
        name: "Domain-specific apps",
        detail: [
          "NOMAD apps provide tailored interfaces for specific research domains or use cases. They can define specialized filters, dashboards, units, highlighted properties, and views that make domain data easier to understand.",
          "This helps communities build focused portals on top of the same NOMAD infrastructure while keeping data management consistent.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/howto/plugins/types/apps.html' target='_blank' rel='noopener noreferrer'>Apps</a>."
        ].join(" "),
        tags: ["apps", "domain views", "dashboards"]
      },
      {
        name: "Domain support",
        detail: [
          "NOMAD supports a broad range of computational and experimental materials-science data. The documentation includes examples for DFT, many-body calculations, molecular dynamics, electron microscopy, photoemission, XPS, optical spectroscopy, atom probe tomography, scanning probe microscopy, NeXus/pynxtools workflows, catalysis, and NEB workflows.",
          "Details: <a href='https://nomad-lab.eu/prod/v1/docs/examples/overview.html' target='_blank' rel='noopener noreferrer'>Domain examples</a>."
        ].join(" "),
        tags: ["simulations", "experiments", "materials science"]
      }
    ],
    nomadPlugins: [
      { name: "pynxtools",             desc: "NeXus converter & validator",       isPynx: true },
      {
        name: "nomad-simulations",
        desc: "Computational simulation schemas",
        detail: "Metainfo schemas for DFT, molecular dynamics, and ab initio workflows. Defines quantities for basis sets, k-points, geometry optimization, and band structures. See <a href='https://github.com/nomad-coe/nomad-simulations' target='_blank' rel='noopener noreferrer'>nomad-simulations on GitHub</a>.",
        tags: ["DFT", "MD", "ab initio"]
      },
      {
        name: "nomad-measurements",
        desc: "Experimental measurement schemas",
        detail: "Covers XRD, SEM, TEM, and optical spectroscopy. Provides reusable base sections for sample, instrument, and environment metadata. See <a href='https://github.com/FAIRmat-NFDI/nomad-measurements' target='_blank' rel='noopener noreferrer'>nomad-measurements on GitHub</a>.",
        tags: ["XRD", "SEM", "spectroscopy"]
      },
      {
        name: "nomad-lab-base",
        desc: "Shared base schemas & utilities",
        detail: "Foundational Metainfo sections (Sample, Instrument, Researcher) reused by other plugins to reduce duplication across the NOMAD plugin ecosystem.",
        tags: ["base", "reusable"]
      },
      {
        name: "nomad-parser-plugin",
        desc: "Custom file-format parser entry point",
        detail: "Entry point for adding parsers for new file formats. Any lab can ship a parser plugin that NOMAD auto-discovers and applies during upload. See the <a href='https://nomad-lab.eu/prod/v1/docs/howto/plugins/plugins.html' target='_blank' rel='noopener noreferrer'>plugin guide</a> for details.",
        tags: ["parser", "entrypoint", "format"]
      },
    ],
  },
  pynxtools: {
    className: "pynxtools",
    title: "pynxtools",
    subtitle: "NeXus data converter & validation framework",
    pynxFeatures: [
      {
        name: "NeXus datamodel",
        detail: [
          "pynxtools embeds the official NeXus definitions repository as a Git submodule — every NXDL application definition and base class is versioned and available at import time.",
          "Within FAIRmat, new application definitions are actively developed for experimental techniques in materials science, extending the NeXus standard to cover SPM, XPS, electron microscopy, atom probe, Raman, ellipsometry, and more.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/nexus-definitions.html' target='_blank' rel='noopener noreferrer'>NeXus definitions in pynxtools</a>, <a href='https://fairmat-nfdi.github.io/nexus_definitions/' target='_blank' rel='noopener noreferrer'>NeXus-FAIRmat definitions</a>."
        ].join(" "),
        tags: ["NeXus", "NXDL", "submodule", "FAIRmat"]
      },
      {
        name: "Dataconverter CLI",
        detail: [
          "The <code>dataconverter</code> command-line tool is the main entry point for converting raw experimental data to NeXus/HDF5 files.",
          "It accepts a reader name, an NXDL application definition, one or more input files (raw data, ELN YAML, config JSON), and an output path. All installed reader plugins are auto-discovered through Python entrypoints.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/dataconverter-and-readers.html' target='_blank' rel='noopener noreferrer'>Data conversion in pynxtools</a>, <a href='https://fairmat-nfdi.github.io/pynxtools/reference/cli-api.html' target='_blank' rel='noopener noreferrer'>CLI & API reference</a>."
        ].join(" "),
        tags: ["CLI", "dataconverter", "HDF5", "entrypoints"]
      },
      {
        name: "Validator",
        detail: [
          "The built-in validator checks a parsed HDF5/NeXus file against its application definition. It verifies that required groups and fields exist, data types match NXDL specifications, and physical units are compatible.",
          "Validation can be run standalone or as part of a conversion pipeline to ensure output files are fully conformant.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/validate-nexus-files.html' target='_blank' rel='noopener noreferrer'>Validation how-to guide</a>, <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/nexus-validation.html' target='_blank' rel='noopener noreferrer'>Validation explanation</a>."
        ].join(" "),
        tags: ["NXDL", "dtype", "units", "HDF5"]
      },
      {
        name: "MultiFormatReader",
        detail: [
          "The <code>MultiFormatReader</code> is a superclass provided by pynxtools that plugin developers subclass to build their readers. It handles merging data from multiple input sources — raw vendor file, ELN YAML, and config JSON — into the pynxtools template dictionary.",
          "The framework then serializes the merged dictionary into a conformant NeXus HDF5 file, so plugin authors only need to implement the format-specific parsing logic.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/multi-format-reader.html' target='_blank' rel='noopener noreferrer'>MultiFormatReader explanation</a>, <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/use-multi-format-reader.html' target='_blank' rel='noopener noreferrer'>How to use MultiFormatReader</a>."
        ].join(" "),
        tags: [".nxs", "HDF5", "ELN", "YAML", "merge"]
      },
      {
        name: "Test framework",
        detail: [
          "A pytest-based test harness that every reader plugin can import. It provides fixtures for loading reference files, assertions for NeXus tree structure, and round-trip validation helpers.",
          "This standardizes testing across all FAIRmat-supported plugins and makes it easy to add regression tests when new vendor formats are supported.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/using-pynxtools-test-framework.html' target='_blank' rel='noopener noreferrer'>Using the pynxtools test framework</a>."
        ].join(" "),
        tags: ["pytest", "fixtures", "CI", "regression"]
      },
      {
        name: "Plugin entrypoint",
        detail: [
          "All reader plugins register a common Python entrypoint. NOMAD and user code can discover and invoke any installed reader with a single unified API call — no manual import or configuration needed.",
          "This makes pynxtools a true plugin framework: adding a new technique is as simple as installing a new Python package.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/build-a-plugin.html' target='_blank' rel='noopener noreferrer'>Build a pynxtools plugin</a>."
        ].join(" "),
        tags: ["entrypoint", "API", "discovery", "pip"]
      },
    ],
    pynxPlugins: [
      {
        name: "pynxtools-spm",
        desc: "Scanning probe microscopy",
        isPynxSpm: true,
        detail: [
          "Converts raw data from Scanning Probe Microscopy (SPM) experiments — including Scanning Tunneling Microscopy (STM), Scanning Tunneling Spectroscopy (STS), and Atomic Force Microscopy (AFM) — into standardized NeXus files.",
          "Supports Nanonis .sxm/.dat files (the dominant SPM control software) and Bruker .spm format. Outputs comply with FAIRmat-developed application definitions: <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXspm.html' target='_blank' rel='noopener noreferrer'>NXspm</a> (root), <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXstm.html' target='_blank' rel='noopener noreferrer'>NXstm</a>, <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXsts.html' target='_blank' rel='noopener noreferrer'>NXsts</a>, and <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXafm.html' target='_blank' rel='noopener noreferrer'>NXafm</a>.",
          "Full documentation: <a href='https://fairmat-nfdi.github.io/pynxtools-spm/' target='_blank' rel='noopener noreferrer'>pynxtools-spm docs</a> | <a href='https://github.com/FAIRmat-NFDI/pynxtools-spm' target='_blank' rel='noopener noreferrer'>GitHub</a>."
        ].join(" "),
        tags: ["STM", "AFM", "STS", "Nanonis", "NXspm", "NXstm", "NXsts", "NXafm"]
      },
      {
        name: "pynxtools-xps",
        desc: "X-ray photoelectron spectroscopy",
        detail: [
          "Free and open-source data converter for X-ray Photoelectron Spectroscopy (XPS). Reads heterogeneous vendor formats — including SPECS, Kratos, ULVAC-PHI, and others — and produces standardized NeXus files compliant with <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXxps.html' target='_blank' rel='noopener noreferrer'>NXxps</a> and <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXmpes.html' target='_blank' rel='noopener noreferrer'>NXmpes</a>.",
          "Handles binding energy calibration, survey/region scan structures, and charge referencing. Works both as a standalone converter and as a NOMAD plugin.",
          "Full documentation: <a href='https://fairmat-nfdi.github.io/pynxtools-xps/' target='_blank' rel='noopener noreferrer'>pynxtools-xps docs</a> | Tutorial: <a href='https://fairmat-nfdi.github.io/pynxtools-xps/tutorial/nomad_usage.html' target='_blank' rel='noopener noreferrer'>Usage in NOMAD</a>."
        ].join(" "),
        tags: ["XPS", "SPECS", "Kratos", "NXxps", "NXmpes"]
      },
      {
        name: "pynxtools-em",
        desc: "Electron microscopy",
        detail: [
          "Reads data and metadata from various proprietary and open file formats from TEM and SEM instruments across technology partners — including FEI/Thermo Fisher (Velox .emd, TIFF), JEOL, Zeiss, Hitachi, TESCAN, Nion, Gatan (DigitalMicrograph .dm3/.dm4), and EDAX APEX.",
          "Standardizes data against the <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXem.html' target='_blank' rel='noopener noreferrer'>NXem</a> application definition. Also supports Kikuchi diffraction (EBSD) parsing routes via MTex and pyxem.",
          "Full documentation: <a href='https://fairmat-nfdi.github.io/pynxtools-em/' target='_blank' rel='noopener noreferrer'>pynxtools-em docs</a> | <a href='https://github.com/FAIRmat-NFDI/pynxtools-em' target='_blank' rel='noopener noreferrer'>GitHub</a>."
        ].join(" "),
        tags: ["TEM", "SEM", "EBSD", "dm4", "NXem", "FEI", "Zeiss"]
      },
      {
        name: "pynxtools-apm",
        desc: "Atom probe microscopy",
        detail: [
          "Converts Atom Probe Tomography (APT) and LEAP reconstruction files (.pos, .epos, .apt, .rng, .rrng) into NeXus files compliant with the NXapm application definition. Preserves detector hit data, ranging tables, and reconstructed ion positions.",
          "Useful for researchers working with atom probe data from CAMECA LEAP instruments who want to store results in a FAIR, interoperable format.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-apm' target='_blank' rel='noopener noreferrer'>pynxtools-apm</a> | Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-apm/' target='_blank' rel='noopener noreferrer'>pynxtools-apm docs</a>."
        ].join(" "),
        tags: ["APT", "LEAP", "NXapm", "atom probe"]
      },
      {
        name: "pynxtools-mpes",
        desc: "Multidimensional photoemission spectroscopy",
        detail: [
          "Converts Multidimensional Photoemission Spectroscopy (MPES) and ARPES datasets from Flash and BESSY II beamlines into NeXus files compliant with the <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXmpes.html' target='_blank' rel='noopener noreferrer'>NXmpes</a> application definition.",
          "Handles momentum-resolved energy band maps, time-resolved (tr-ARPES) data, and associated beamline metadata.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-mpes' target='_blank' rel='noopener noreferrer'>pynxtools-mpes</a> | Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-mpes/' target='_blank' rel='noopener noreferrer'>pynxtools-mpes docs</a>."
        ].join(" "),
        tags: ["ARPES", "MPES", "beamline", "NXmpes", "Flash", "BESSY"]
      },
      {
        name: "pynxtools-ellips",
        desc: "Ellipsometry",
        detail: [
          "Converts ellipsometry data into NeXus/HDF5 files compliant with the NXellipsometry application definition. Reads J.A. Woollam CompleteEASE exports and supports psi/delta spectra and Mueller matrix data.",
          "Ellipsometry is a non-destructive optical technique widely used to characterize thin films, surfaces, and optical constants of materials.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-ellips' target='_blank' rel='noopener noreferrer'>pynxtools-ellips</a> | Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-ellips/' target='_blank' rel='noopener noreferrer'>pynxtools-ellips docs</a>."
        ].join(" "),
        tags: ["ellipsometry", "Woollam", "NXellipsometry", "thin films"]
      },
      {
        name: "pynxtools-xrd",
        desc: "X-ray diffraction",
        detail: [
          "Parses powder and single-crystal X-ray Diffraction (XRD) data — including Bruker .raw and PANalytical .xrdml formats — into NeXus files compliant with the NXxrd_pan application definition.",
          "Supports 2D detector images and standard powder patterns. Useful for structural characterization workflows in materials science and chemistry.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-xrd' target='_blank' rel='noopener noreferrer'>pynxtools-xrd</a> | Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-xrd/' target='_blank' rel='noopener noreferrer'>pynxtools-xrd docs</a>."
        ].join(" "),
        tags: ["XRD", "Bruker", "PANalytical", "NXxrd_pan", "powder diffraction"]
      },
      {
        name: "pynxtools-raman",
        desc: "Raman spectroscopy",
        detail: [
          "Reads Raman spectroscopy data from multiple vendor formats including HORIBA LabSpec, Renishaw WiRE, and Bruker OPUS. Maps wavenumber axes, intensity data, and instrument metadata to a NeXus file compliant with the NXraman application definition.",
          "Useful for researchers in condensed matter physics, chemistry, and materials science who want to archive Raman data in a FAIR format.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-raman' target='_blank' rel='noopener noreferrer'>pynxtools-raman</a> | Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-raman/' target='_blank' rel='noopener noreferrer'>pynxtools-raman docs</a>."
        ].join(" "),
        tags: ["Raman", "HORIBA", "Renishaw", "NXraman"]
      },
      {
        name: "pynxtools-igor",
        desc: "Igor Pro experiment files",
        detail: [
          "Reads Igor Pro binary wave (.ibw) and packed experiment (.pxp) files. Converts wave metadata and data arrays into NeXus structures.",
          "Igor Pro is widely used in condensed matter physics and SPM laboratories for data acquisition and analysis. This plugin bridges legacy Igor Pro datasets into the FAIR NeXus ecosystem.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-igor' target='_blank' rel='noopener noreferrer'>pynxtools-igor</a> | Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-igor/' target='_blank' rel='noopener noreferrer'>pynxtools-igor docs</a>."
        ].join(" "),
        tags: ["Igor Pro", ".ibw", ".pxp", "SPM", "condensed matter"]
      },
      {
        name: "pynxtools-camels",
        desc: "CAMELS measurement software",
        detail: [
          "Plugin for reading data produced by CAMELS (Configurable Application for Measurements, Experiments and Laboratory Systems), an open-source measurement software for laboratory automation.",
          "Converts CAMELS output into NeXus format, enabling FAIR data management for experiments controlled by CAMELS.",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/pynxtools-camels' target='_blank' rel='noopener noreferrer'>pynxtools-camels</a>."
        ].join(" "),
        tags: ["CAMELS", "lab automation", "measurement software"]
      },
    ],
  },

  /* ── EXPLORE PYNXTOOLS ECOSYSTEM ── */
  explore: {
    page: {
      name: "Explore pynxtools ecosystem",
      detail: [
        "pynxtools is a framework for converting experimental raw data files into standardized NeXus/HDF5 files, making scientific data FAIR (Findable, Accessible, Interoperable, Reusable).",
        "This page walks you through finding or building a plugin for your experimental technique, and how to run plugins either as a standalone CLI tool or integrated with the NOMAD research data management system.",
        "Full documentation: <a href='https://fairmat-nfdi.github.io/pynxtools/' target='_blank' rel='noopener noreferrer'>pynxtools documentation</a> | GitHub org: <a href='https://github.com/FAIRmat-NFDI' target='_blank' rel='noopener noreferrer'>FAIRmat-NFDI</a>."
      ].join(" "),
      tags: ["pynxtools", "NeXus", "HDF5", "FAIR", "FAIRmat"]
    },
    utilize: {
      name: "Utilize or build a plugin",
      detail: [
        "The starting point is always the same: does a NeXus datamodel and a pynxtools plugin already exist for your experimental technique?",
        "Browse the <a href='https://github.com/FAIRmat-NFDI' target='_blank' rel='noopener noreferrer'>FAIRmat-NFDI organisation on GitHub</a> and search for <code>pynxtools-&lt;your-technique&gt;</code> to find out. The answer determines your path.",
        "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/reference/plugins.html' target='_blank' rel='noopener noreferrer'>FAIRmat-supported pynxtools plugins</a>."
      ].join(" "),
      tags: ["plugins", "NeXus", "FAIRmat-NFDI", "GitHub"],
      yesPath: {
        name: "Use an existing plugin",
        detail: [
          "A plugin already exists for your technique. Each FAIRmat plugin ships with full documentation covering its code design, CLI usage, ELN schema, config file format, and connection to NOMAD.",
          "For example, <a href='https://fairmat-nfdi.github.io/pynxtools-spm/' target='_blank' rel='noopener noreferrer'>pynxtools-spm</a> covers scanning probe microscopy data from Nanonis and Bruker instruments, and <a href='https://fairmat-nfdi.github.io/pynxtools-xps/' target='_blank' rel='noopener noreferrer'>pynxtools-xps</a> covers X-ray photoelectron spectroscopy.",
          "Full list of plugins: <a href='https://fairmat-nfdi.github.io/pynxtools/reference/plugins.html' target='_blank' rel='noopener noreferrer'>FAIRmat-supported pynxtools plugins</a>."
        ].join(" "),
        tags: ["documentation", "CLI", "pynxtools-spm", "pynxtools-xps"],
        link: "https://github.com/FAIRmat-NFDI"
      },
      noPath: {
        name: "Build your own plugin",
        detail: [
          "No plugin exists for your technique yet. You will need to design a NeXus datamodel and build a reader plugin using the <a href='https://github.com/FAIRmat-NFDI/pynxtools-plugin-template' target='_blank' rel='noopener noreferrer'>pynxtools-plugin-template</a> repository as your scaffold.",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/build-a-plugin.html' target='_blank' rel='noopener noreferrer'>Build a pynxtools plugin how-to guide</a>."
        ].join(" "),
        tags: ["custom plugin", "NeXus datamodel", "plugin-template"],
        steps: [
          {
            name: "Write a NeXus datamodel",
            detail: [
              "Design application definitions and base classes for your experiment using NXDL (NeXus Definition Language). Application definitions specify the mandatory and optional groups, fields, and attributes a conformant NeXus file must contain for your technique.",
              "FAIRmat actively contributes new definitions to the NeXus standard. Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/tutorial/writing-an-application-definition.html' target='_blank' rel='noopener noreferrer'>Writing your first application definition</a>, <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/nexus/write-an-application-definition.html' target='_blank' rel='noopener noreferrer'>How-to: write an application definition</a>."
            ].join(" "),
            tags: ["NXDL", "application definition", "base class", "NeXus"]
          },
          {
            name: "Build from pynxtools-plugin-template",
            detail: [
              "Clone the <a href='https://github.com/FAIRmat-NFDI/pynxtools-plugin-template' target='_blank' rel='noopener noreferrer'>pynxtools-plugin-template</a> as your starting point using cookiecutter/cruft. It provides the plugin scaffold, Python entrypoint registration, mkdocs documentation template, and a standardized test harness.",
              "You fill in four components: a file parser, an ELN schema, a config mapping file, and a call to the MultiFormatReader. Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/build-a-plugin.html' target='_blank' rel='noopener noreferrer'>Build a pynxtools plugin</a>."
            ].join(" "),
            tags: ["pynxtools-plugin-template", "scaffold", "cookiecutter", "entrypoint", "pytest"],
            link: "https://github.com/FAIRmat-NFDI/pynxtools-plugin-template",
            steps: [
              {
                name: "Write a file parser",
                detail: "Implement a parser for your raw data format, or find an existing open-source parser. The parser should extract all metadata and data arrays from the vendor file into a Python dictionary that downstream code can address by key.",
                tags: ["parser", "raw data", "Python", "vendor format"]
              },
              {
                name: "Structure your ELN",
                detail: "Design an Electronic Lab Notebook YAML schema that captures sample, instrument, and experiment metadata according to the NeXus datamodel you wrote in step ①. The ELN fills in fields that are not present in the raw vendor file.",
                tags: ["ELN", "YAML", "metadata", "schema"]
              },
              {
                name: "Write the config mapping file",
                detail: "Create a JSON config file that maps raw data keys to pynxtools template paths. Each key is a slash-separated NeXus path such as <code>/entry/instrument/detector/data</code> and its value points to the corresponding field in your parsed data dictionary.",
                tags: ["config", "JSON", "path mapping", "template keys"]
              },
              {
                name: "Use the MultiFormatReader",
                detail: [
                  "Invoke the <code>MultiFormatReader</code> provided by pynxtools to read and merge your raw data file, ELN YAML, and config JSON into the pynxtools template dictionary. The framework then serializes the merged dictionary into a conformant NeXus HDF5 file.",
                  "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/multi-format-reader.html' target='_blank' rel='noopener noreferrer'>MultiFormatReader explanation</a>."
                ].join(" "),
                tags: ["MultiFormatReader", "template", "HDF5", "merge"]
              }
            ]
          }
        ]
      }
    },
    usages: {
      name: "Usages of pynxtools plugins",
      detail: [
        "Once a plugin is available, you can use it in two ways: as a standalone command-line tool running in any Python environment, or fully integrated into the NOMAD research data management system for storage, sharing, search, and publication.",
        "Both approaches use the same underlying pynxtools dataconverter framework."
      ].join(" "),
      tags: ["CLI", "NOMAD", "workflow", "standalone"],
      tracks: [
        {
          name: "Standalone CLI",
          detail: "Install pynxtools and the plugin in a Python environment. Use the <code>dataconverter</code> CLI command to convert raw files to NeXus locally. You manage your raw files, ELN YAML, config JSON, and output NeXus file per experiment.",
          tags: ["pip", "CLI", "Python environment", "local"],
          demos: [
            {
              name: "pynxtools-spm (CLI)",
              detail: [
                "Convert Nanonis .sxm scanning probe microscopy data to NXsts via command line.\n\n",
                "<strong>Install:</strong> <code>pip install pynxtools-spm</code>\n\n",
                "<strong>Run:</strong> <code>dataconverter --reader spm --nxdl NXsts --input scan.sxm eln.yaml config.json --output scan.nxs</code>\n\n",
                "Full tutorial: <a href='https://fairmat-nfdi.github.io/pynxtools-spm/reference/standalone-usages.html' target='_blank' rel='noopener noreferrer'>pynxtools-spm standalone usage reference</a>."
              ].join(""),
              tags: ["pynxtools-spm", "STM", "STS", "Nanonis", "CLI"],
              link: "https://github.com/FAIRmat-NFDI/pynxtools-spm"
            },
            {
              name: "pynxtools-xps (CLI)",
              detail: [
                "Convert SPECS or Kratos XPS spectra to NXxps via command line.\n\n",
                "<strong>Install:</strong> <code>pip install pynxtools-xps</code>\n\n",
                "<strong>Run:</strong> <code>dataconverter --reader xps --nxdl NXxps --input spectrum.xy eln.yaml --output spectrum.nxs</code>\n\n",
                "Full tutorial: <a href='https://fairmat-nfdi.github.io/pynxtools-xps/tutorial/standalone.html' target='_blank' rel='noopener noreferrer'>pynxtools-xps standalone conversion tutorial</a>."
              ].join(""),
              tags: ["pynxtools-xps", "XPS", "SPECS", "Kratos", "CLI"],
              link: "https://github.com/FAIRmat-NFDI/pynxtools-xps"
            }
          ]
        },
        {
          name: "With NOMAD RDM",
          detail: "Include pynxtools and the relevant plugin in a NOMAD Oasis deployment. Upload raw files and an ELN through the NOMAD interface. NOMAD automatically detects the format, runs the plugin reader, creates structured NeXus entries, and makes them searchable, shareable, and citable with a DOI.",
          tags: ["NOMAD Oasis", "upload", "automated parsing", "DOI", "FAIR"],
          demos: [
            {
              name: "pynxtools-spm in NOMAD",
              detail: [
                "Upload Nanonis .sxm files to a NOMAD instance with pynxtools-spm installed. NOMAD automatically detects the SPM format, runs the reader, creates a structured NXsts entry, indexes it, and makes it searchable and shareable.\n\n",
                "Full tutorial: <a href='https://fairmat-nfdi.github.io/pynxtools-spm/tutorials/use-reader-in-nomad.html' target='_blank' rel='noopener noreferrer'>Use pynxtools-spm reader in NOMAD</a>."
              ].join(""),
              tags: ["pynxtools-spm", "NOMAD", "NXsts", "automated upload"],
              link: "https://github.com/FAIRmat-NFDI/pynxtools-spm"
            },
            {
              name: "pynxtools-xps in NOMAD",
              detail: [
                "Upload XPS raw files to a NOMAD instance with pynxtools-xps installed. The plugin parses binding energy spectra into NXxps entries automatically.\n\n",
                "Full tutorial: <a href='https://fairmat-nfdi.github.io/pynxtools-xps/tutorial/nomad_usage.html' target='_blank' rel='noopener noreferrer'>pynxtools-xps usage in NOMAD</a>."
              ].join(""),
              tags: ["pynxtools-xps", "NOMAD", "NXxps", "tutorial"],
              link: "https://fairmat-nfdi.github.io/pynxtools-xps/tutorial/nomad_usage.html"
            }
          ]
        }
      ]
    }
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
  const detail = item.detail || item.desc || '';

  let html = '<p class="psec">description</p><p class="ptxt">' + detail + '</p>';

  if (item.steps && item.steps.length) {
    html += '<p class="psec">steps</p><ol class="psteps">';
    item.steps.forEach(s => {
      html += '<li class="pstep"><span class="pstep-name">' + s.name + '</span>';
      if (s.detail) html += '<span class="pstep-detail">' + s.detail + '</span>';
      if (s.steps && s.steps.length) {
        html += '<ul class="psubsteps">';
        s.steps.forEach(ss => { html += '<li>' + ss.name + '</li>'; });
        html += '</ul>';
      }
      html += '</li>';
    });
    html += '</ol>';
  }

  if (item.link) {
    html += '<p class="psec">link</p><p class="ptxt"><a href="' + item.link + '" target="_blank" rel="noopener noreferrer">' + item.link + '</a></p>';
  }

  if (tags.length) {
    html += '<p class="psec">tags</p>' + tags.map(t => '<span class="ptag">' + t + '</span>').join('');
  }

  document.getElementById('p-body').innerHTML = html;
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
  card.className = 'plugin-card' + (p.isPynx ? ' pynx-card' : '') + (p.isPynxSpm ? ' pynx-spm-card' : '');

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
  } else {
    const btn = document.createElement('button');
    btn.className = 'btn-info';
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

function makeCentralBox(cls, title, subtitle, features, featureList, standalone, onExplore) {
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

  if (onExplore) {
    const exploreBtn = document.createElement('button');
    exploreBtn.className = 'btn-explore-eco';
    exploreBtn.textContent = 'explore ecosystem →';
    exploreBtn.onclick = onExplore;
    box.appendChild(exploreBtn);
  }

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
  const central = makeCentralBox(DATA.pynxtools.className, DATA.pynxtools.title, DATA.pynxtools.subtitle, DATA.pynxtools.pynxFeatures, DATA.pynxtools.pynxFeatures, true, () => showView('explore'));
  buildHub('hub-pynx', central, plugins.slice(0, mid), plugins.slice(mid), plugins, DATA.pynxtools.title + ' plugin interface');
}

/* ── helper: small ⓘ button that opens panel with a single item ── */
function infoBtn(item, type) {
  const btn = document.createElement('button');
  btn.className = 'btn-info';
  btn.textContent = 'ⓘ info';
  btn.onclick = () => openPanel(type, [item], 0);
  return btn;
}

/* ── EXPLORE ECOSYSTEM VIEW ── */
function buildExplore() {
  const content = document.getElementById('explore-content');
  content.innerHTML = '';

  const layout = document.createElement('div');
  layout.className = 'explore-layout';

  /* ── SECTION A: Utilize / Build stepper ── */
  const sectionA = document.createElement('div');
  sectionA.className = 'explore-section';

  const secAHead = document.createElement('div');
  secAHead.className = 'esec-header';
  const secATitle = document.createElement('span');
  secATitle.className = 'esec-title';
  secATitle.textContent = DATA.explore.utilize.name;
  secAHead.appendChild(secATitle);
  secAHead.appendChild(infoBtn(DATA.explore.utilize, 'section'));
  sectionA.appendChild(secAHead);

  const stepper = document.createElement('div');
  stepper.className = 'stepper';

  /* decision node */
  const decideRow = document.createElement('div');
  decideRow.className = 'step-row';
  const decideCircle = document.createElement('span');
  decideCircle.className = 'step-circle step-circle-decision';
  decideCircle.textContent = '?';
  const decideLabel = document.createElement('span');
  decideLabel.className = 'step-label';
  decideLabel.textContent = 'Plugin already available for your technique?';
  decideRow.appendChild(decideCircle);
  decideRow.appendChild(decideLabel);
  stepper.appendChild(decideRow);

  /* branch wrapper */
  const branches = document.createElement('div');
  branches.className = 'step-branches';

  /* YES branch */
  const yesBranch = document.createElement('div');
  yesBranch.className = 'branch branch-yes';
  const yesTag = document.createElement('span');
  yesTag.className = 'branch-label branch-label-yes';
  yesTag.textContent = '✓ YES';
  yesBranch.appendChild(yesTag);
  const yesCard = document.createElement('div');
  yesCard.className = 'step-card';
  const yesCardName = document.createElement('span');
  yesCardName.className = 'step-card-name';
  yesCardName.textContent = DATA.explore.utilize.yesPath.name;
  yesCard.appendChild(yesCardName);
  yesCard.appendChild(infoBtn(DATA.explore.utilize.yesPath, 'step'));
  yesBranch.appendChild(yesCard);
  branches.appendChild(yesBranch);

  /* NO branch */
  const noBranch = document.createElement('div');
  noBranch.className = 'branch branch-no';
  const noTag = document.createElement('span');
  noTag.className = 'branch-label branch-label-no';
  noTag.textContent = '✗ NO';
  noBranch.appendChild(noTag);

  DATA.explore.utilize.noPath.steps.forEach((step, si) => {
    const stepNum = ['A', 'B'][si];
    const stepRow = document.createElement('div');
    stepRow.className = 'step-row';
    const circle = document.createElement('span');
    circle.className = 'step-circle step-circle-decision';
    circle.textContent = stepNum;
    const labelWrap = document.createElement('span');
    labelWrap.className = 'step-label-wrap';
    const lbl = document.createElement('span');
    lbl.className = 'step-label';
    lbl.textContent = step.name;
    labelWrap.appendChild(lbl);
    labelWrap.appendChild(infoBtn(step, 'step'));
    stepRow.appendChild(circle);
    stepRow.appendChild(labelWrap);
    noBranch.appendChild(stepRow);

    if (step.steps && step.steps.length) {
      const subWrap = document.createElement('div');
      subWrap.className = 'sub-steps';
      step.steps.forEach(sub => {
        const subRow = document.createElement('div');
        subRow.className = 'sub-step';
        const bullet = document.createElement('span');
        bullet.className = 'sub-bullet';
        bullet.textContent = '·';
        const subLabel = document.createElement('span');
        subLabel.className = 'step-label';
        subLabel.textContent = sub.name;
        subRow.appendChild(bullet);
        subRow.appendChild(subLabel);
        subRow.appendChild(infoBtn(sub, 'step'));
        subWrap.appendChild(subRow);
      });
      noBranch.appendChild(subWrap);
    }
  });

  branches.appendChild(noBranch);
  stepper.appendChild(branches);
  sectionA.appendChild(stepper);
  layout.appendChild(sectionA);

  /* ── SECTION B: Usages two-track ── */
  const sectionB = document.createElement('div');
  sectionB.className = 'explore-section';

  const secBHead = document.createElement('div');
  secBHead.className = 'esec-header';
  const secBTitle = document.createElement('span');
  secBTitle.className = 'esec-title';
  secBTitle.textContent = DATA.explore.usages.name;
  secBHead.appendChild(secBTitle);
  secBHead.appendChild(infoBtn(DATA.explore.usages, 'section'));
  sectionB.appendChild(secBHead);

  const tracks = document.createElement('div');
  tracks.className = 'usages-tracks';

  DATA.explore.usages.tracks.forEach(track => {
    const trackEl = document.createElement('div');
    trackEl.className = 'usage-track';

    const trackHead = document.createElement('div');
    trackHead.className = 'track-header';
    const trackTitle = document.createElement('span');
    trackTitle.className = 'track-title';
    trackTitle.textContent = track.name;
    trackHead.appendChild(trackTitle);
    trackHead.appendChild(infoBtn(track, 'usage'));
    trackEl.appendChild(trackHead);

    const trackDesc = document.createElement('p');
    trackDesc.className = 'track-desc';
    trackDesc.innerHTML = track.detail;
    trackEl.appendChild(trackDesc);

    track.demos.forEach(demo => {
      const demoCard = document.createElement('div');
      demoCard.className = 'demo-card';
      const demoName = document.createElement('span');
      demoName.className = 'demo-name';
      demoName.textContent = demo.name;
      demoCard.appendChild(demoName);
      demoCard.appendChild(infoBtn(demo, 'demo'));
      trackEl.appendChild(demoCard);
    });

    tracks.appendChild(trackEl);
  });

  sectionB.appendChild(tracks);
  layout.appendChild(sectionB);

  content.appendChild(layout);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function showView(name) {
  closePanel();
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const viewMap = { nomad: 'view-nomad', pynxtools: 'view-pynxtools', explore: 'view-explore' };
  document.getElementById(viewMap[name]).classList.add('active');

  const isNomad   = name === 'nomad';
  const isPynx    = name === 'pynxtools';
  const isExplore = name === 'explore';

  document.getElementById('crumb-sep').style.display     = (isPynx || isExplore) ? 'inline' : 'none';
  document.getElementById('crumb-pyn').style.display     = (isPynx || isExplore) ? 'inline' : 'none';
  document.getElementById('crumb-sep2').style.display    = isExplore ? 'inline' : 'none';
  document.getElementById('crumb-explore').style.display = isExplore ? 'inline' : 'none';

  document.getElementById('crumb-nomad').classList.toggle('active', isNomad);
  document.getElementById('crumb-pyn').classList.toggle('active', isPynx);
  document.getElementById('crumb-explore').classList.toggle('active', isExplore);

  const backBtn = document.getElementById('back-btn');
  backBtn.classList.toggle('visible', isPynx || isExplore);
  backBtn.onclick = isExplore ? () => showView('pynxtools') : () => showView('nomad');

  if (!isExplore) requestAnimationFrame(equalizeVisibleSatelliteColumns);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── INIT ── */
buildNomad();
buildPynx();
buildExplore();
requestAnimationFrame(equalizeVisibleSatelliteColumns);
window.addEventListener('resize', equalizeVisibleSatelliteColumns);
