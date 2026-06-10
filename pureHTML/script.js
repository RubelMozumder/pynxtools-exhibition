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
        name: "nomad-material-processing",
        desc: "Material processing schemas",
        detail: [
          "Metainfo base schemas for thin-film and bulk material processing techniques.",
          "<br><br>",
          "<strong>Techniques covered</strong><br>",
          "&#8226; <strong>Vapor deposition</strong> — CVD, PVD, MBE, PLD, sputtering, thermal evaporation<br>",
          "&#8226; <strong>Solution processing</strong> — wet-chemical and coating workflows<br>",
          "&#8226; <strong>Generic processing</strong> — reusable base sections for any synthesis step",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install nomad-material-processing</code><br>",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/nomad-material-processing' target='_blank' rel='noopener noreferrer'>nomad-material-processing</a>"
        ].join(""),
        tags: ["CVD", "PVD", "MBE", "PLD", "sputtering", "thin film", "synthesis"]
      },
      {
        name: "nomad-ml-workflows",
        desc: "ML workflow management",
        detail: [
          "NOMAD plugin for managing machine-learning workflows on top of NOMAD data.",
          "<br><br>",
          "<strong>Key features</strong><br>",
          "&#8226; <strong>Export entries</strong> — bulk-export NOMAD entries as <code>CSV</code>, <code>Parquet</code>, or <code>JSON</code> via a NOMAD Action<br>",
          "&#8226; <strong>Filter &amp; select</strong> — user-defined search criteria, include/exclude specific data fields<br>",
          "&#8226; <strong>Scale</strong> — configurable batch timeout and export limit (up to 100 000 entries)<br>",
          "&#8226; <strong>Download</strong> — output files land in a NOMAD upload, ready to download for local ML training",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install nomad-ml-workflows</code><br>",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/nomad-ml-workflows' target='_blank' rel='noopener noreferrer'>nomad-ml-workflows</a>"
        ].join(""),
        tags: ["ML", "machine learning", "CSV", "Parquet", "export", "workflow"]
      },
      {
        name: "nomad-parser-plugins-simulation",
        desc: "Simulation code parsers",
        detail: [
          "Collection of 15 parser plugins covering major DFT, MD, and phonon simulation codes — auto-discovered by NOMAD on upload.",
          "<br><br>",
          "<strong>Supported codes</strong><br>",
          "&#8226; <strong>DFT / electronic structure</strong> — VASP, FHI-aims, Quantum ESPRESSO, ABINIT, GPAW, Exciting, CRYSTAL, Octopus, AMS, Yambo<br>",
          "&#8226; <strong>Wannier / post-processing</strong> — Wannier90<br>",
          "&#8226; <strong>Molecular dynamics</strong> — GROMACS, LAMMPS, H5MD<br>",
          "&#8226; <strong>Phonons</strong> — Phonopy",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install nomad-parser-plugins-simulation</code><br>",
          "GitHub: <a href='https://github.com/FAIRmat-NFDI/nomad-parser-plugins-simulation' target='_blank' rel='noopener noreferrer'>nomad-parser-plugins-simulation</a>"
        ].join(""),
        tags: ["VASP", "FHI-aims", "Quantum ESPRESSO", "GROMACS", "LAMMPS", "DFT", "MD", "simulation"]
      },
    ],
  },
  pynxtools: {
    className: "pynxtools",
    title: "pynxtools",
    subtitle: "NeXus data converter & validation framework",
    overview: [
      "<em>Convert experimental raw data into standardized, FAIR-ready NeXus/HDF5 files.</em>",
      "<br><br>",
      "<strong>Convert</strong> &mdash; raw vendor &amp; proprietary instrument files &rarr; NeXus/HDF5 with a single <code>pynx&nbsp;convert</code> command<br>",
      "<strong>Validate</strong> &mdash; verify field completeness, data types, and physical units against NXDL application definitions<br>",
      "<strong>Plug&nbsp;in</strong> &mdash; 9 technique-specific readers: XPS, SPM, EM, APM, MPES, ellipsometry, XRD, Raman, Igor&nbsp;Pro<br>",
      "<strong>Publish</strong> &mdash; upload <code>.nxs</code> directly to <a href='https://nomad-lab.eu' target='_blank' rel='noopener noreferrer'>NOMAD</a> for semantic search, DOI, and API access<br>",
      "<strong>Extend</strong> &mdash; build a new technique reader from the <strong>pynxtools-plugin-template</strong> scaffold"
    ].join(""),
    pynxFeatures: [
      {
        name: "NeXus datamodel",
        detail: [
          "NeXus is an HDF5-based scientific data standard: a semantic layer that defines <em>how</em> experimental data must be named, structured, and documented inside a file.",
          "<br><br>",
          "<strong>Two definition types</strong><br>",
          "&#8226; <strong>Base classes</strong> — reusable building blocks (e.g. NXdetector, NXsample) that define the <em>complete</em> vocabulary for a component.<br>",
          "&#8226; <strong>Application definitions</strong> — technique-specific schemas that define the <em>minimum required</em> set of fields for a given experiment.",
          "<br><br>",
          "<strong>NXDL</strong> — NeXus Definition Language: the XML grammar used to write both base classes and application definitions. It encodes field names, data types, physical units, and optionality (required / recommended / optional).",
          "<br><br>",
          "<strong>FAIRmat contributions</strong> — actively extended to cover materials-science techniques:<br>",
          "SPM &bull; XPS &bull; MPES/ARPES &bull; Electron Microscopy &bull; Atom Probe &bull; Ellipsometry &bull; XRD &bull; Raman",
          "<br><br>",
          "The definitions are pinned as a <strong>versioned Git submodule</strong> inside pynxtools, so every conversion is tied to an exact schema version and is fully reproducible.",
          "<br><br>",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/nexus-definitions.html' target='_blank' rel='noopener noreferrer'>NeXus definitions in pynxtools</a> &nbsp;|&nbsp; <a href='https://fairmat-nfdi.github.io/nexus_definitions/' target='_blank' rel='noopener noreferrer'>NeXus-FAIRmat definitions</a>."
        ].join(""),
        tags: ["NeXus", "NXDL", "base class", "application definition", "FAIRmat"]
      },
      {
        name: "Dataconverter CLI",
        detail: [
          "<strong>pynx convert</strong> — the single entry point for converting raw experimental data into NeXus/HDF5 files.",
          "<br><br>",
          "<strong>Typical command</strong><br>",
          "<code>pynx convert --reader &lt;reader&gt; --nxdl &lt;NXdef&gt; data.raw eln.yaml --output out.nxs</code>",
          "<br><br>",
          "<strong>Key options</strong><br>",
          "&#8226; <code>--reader</code> — name of the technique reader (auto-discovered from installed plugins)<br>",
          "&#8226; <code>--nxdl</code> — NeXus application definition to target (e.g. <code>NXxps</code>, <code>NXsts</code>)<br>",
          "&#8226; <code>--params-file</code> — pass all arguments via a YAML config file<br>",
          "&#8226; <code>generate-template</code> — print all fillable NeXus paths for a given definition<br>",
          "&#8226; <code>get-readers</code> — list all readers available in the current environment",
          "<br><br>",
          "Validation runs automatically before writing. Legacy <code>dataconverter</code> alias still works but is deprecated.",
          "<br><br>",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/dataconverter-and-readers.html' target='_blank' rel='noopener noreferrer'>Data conversion in pynxtools</a> &nbsp;|&nbsp; <a href='https://fairmat-nfdi.github.io/pynxtools/reference/cli-api.html' target='_blank' rel='noopener noreferrer'>CLI reference</a>."
        ].join(""),
        tags: ["CLI", "pynx convert", "HDF5", "reader", "template"]
      },
      {
        name: "Validator",
        detail: [
          "Checks a NeXus/HDF5 file against its declared application definition. Runs automatically during conversion and is also available as a standalone tool.",
          "<br><br>",
          "<strong>What is checked</strong><br>",
          "&#8226; <strong>Required concepts</strong> — warns if mandatory groups, fields, or attributes are missing<br>",
          "&#8226; <strong>Data types</strong> — values are checked against NXDL-specified NeXus types<br>",
          "&#8226; <strong>Physical units</strong> — unit dimensionality validated against NeXus unit categories via <code>pint</code><br>",
          "&#8226; <strong>Enumerations</strong> — warns for closed enums, info for open enums<br>",
          "&#8226; <strong>NXdata</strong> — signal and axes dimensionality checked across v1/v2/v3 plotting conventions<br>",
          "&#8226; <strong>HDF5 links</strong> — resolved and validated; broken links reported<br>",
          "&#8226; <strong>Symbol consistency</strong> — shared dimension symbols verified across fields",
          "<br><br>",
          "<strong>Standalone commands</strong><br>",
          "<code>pynx validate myfile.nxs</code> — validate an existing NeXus file<br>",
          "<code>pynx read myfile.nxs</code> — annotate every node with its NXDL documentation",
          "<br><br>",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/nexus-validation.html' target='_blank' rel='noopener noreferrer'>Validation in pynxtools</a> &nbsp;|&nbsp; <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/validate-nexus-files.html' target='_blank' rel='noopener noreferrer'>How-to guide</a>."
        ].join(""),
        tags: ["validation", "required fields", "units", "NXdata", "pynx validate"]
      },
      {
        name: "MultiFormatReader",
        detail: [
          "The recommended superclass for building pynxtools reader plugins. It manages multi-source merging so plugin authors only implement the format-specific parsing logic.",
          "<br><br>",
          "<strong>Three input sources merged automatically</strong><br>",
          "&#8226; <strong>Raw vendor file</strong> — instrument output in any proprietary format<br>",
          "&#8226; <strong>ELN YAML</strong> — sample &amp; experiment metadata from the lab notebook<br>",
          "&#8226; <strong>Config JSON</strong> — maps data keys to NeXus paths using <code>@attrs</code>, <code>@data</code>, <code>@eln</code> prefixes",
          "<br><br>",
          "<strong>What the framework handles for you</strong><br>",
          "&#8226; File ordering and overwrite priority<br>",
          "&#8226; Template population and config-to-path resolution<br>",
          "&#8226; Wildcard notation for repeated fields (e.g. multiple detectors)<br>",
          "&#8226; Post-processing hook for derived or dynamic entries<br>",
          "&#8226; Serialization into a validated NeXus/HDF5 file",
          "<br><br>",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/learn/pynxtools/multi-format-reader.html' target='_blank' rel='noopener noreferrer'>MultiFormatReader explanation</a> &nbsp;|&nbsp; <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/use-multi-format-reader.html' target='_blank' rel='noopener noreferrer'>How-to guide</a>."
        ].join(""),
        tags: ["ELN", "YAML", "config JSON", "template", "merge", "plugin"]
      },
      {
        name: "Test framework",
        detail: [
          "A shared pytest-based harness from <code>pynxtools.testing</code> that any plugin imports to test its reader integration — no knowledge of pynxtools internals required.",
          "<br><br>",
          "<strong>Two core test steps</strong><br>",
          "&#8226; <code>test.convert_to_nexus()</code> — runs the full conversion pipeline and checks for errors<br>",
          "&#8226; <code>test.check_reproducibility_of_nexus()</code> — compares output against a stored reference file",
          "<br><br>",
          "<strong>What it covers</strong><br>",
          "&#8226; Plugin integration with pynxtools core<br>",
          "&#8226; Round-trip conversion correctness<br>",
          "&#8226; Regression detection when vendor formats or definitions change<br>",
          "&#8226; CI/CD-ready: runs in both the plugin repo and pynxtools core CI",
          "<br><br>",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/using-pynxtools-test-framework.html' target='_blank' rel='noopener noreferrer'>Using the pynxtools test framework</a>."
        ].join(""),
        tags: ["pytest", "ReaderTest", "CI/CD", "regression", "reproducibility"]
      },
      {
        name: "Plugin entrypoint",
        detail: [
          "Plugins register via a standard Python entrypoint in <code>pyproject.toml</code> — once installed, pynxtools and NOMAD discover and invoke them automatically.",
          "<br><br>",
          "<strong>Register a reader</strong><br>",
          "<code>[project.entry-points.&quot;pynxtools.reader&quot;]</code><br>",
          "<code>myreader = &quot;pynxtools_myplugin.reader:MyReader&quot;</code>",
          "<br><br>",
          "<strong>What this gives you</strong><br>",
          "&#8226; Auto-discovery by <code>pynx convert</code> and <code>pynx convert get-readers</code><br>",
          "&#8226; Zero-config NOMAD integration — NOMAD picks up the reader on upload<br>",
          "&#8226; Multiple readers per package are supported (one entrypoint each)<br>",
          "&#8226; Install with <code>pip install pynxtools-myplugin</code> — no code changes needed",
          "<br><br>",
          "Learn more: <a href='https://fairmat-nfdi.github.io/pynxtools/how-tos/pynxtools/build-a-plugin.html' target='_blank' rel='noopener noreferrer'>Build a pynxtools plugin</a>."
        ].join(""),
        tags: ["entrypoint", "pyproject.toml", "auto-discovery", "pip", "NOMAD"]
      },
    ],
    pynxPlugins: [
      {
        name: "pynxtools-spm",
        desc: "Scanning probe microscopy",
        isPynxSpm: true,
        detail: [
          "Converts STM, STS, and AFM raw data into NeXus files compliant with FAIRmat-developed application definitions.",
          "<br><br>",
          "<strong>Sub-techniques &amp; NeXus definitions</strong><br>",
          "&#8226; <strong>STM</strong> — Scanning Tunneling Microscopy &rarr; <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXstm.html' target='_blank' rel='noopener noreferrer'>NXstm</a><br>",
          "&#8226; <strong>STS</strong> — Scanning Tunneling Spectroscopy &rarr; <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXsts.html' target='_blank' rel='noopener noreferrer'>NXsts</a><br>",
          "&#8226; <strong>AFM</strong> — Atomic Force Microscopy &rarr; <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXafm.html' target='_blank' rel='noopener noreferrer'>NXafm</a>",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>Nanonis (SPECS)</strong> — <code>.sxm</code> (STM/AFM images), <code>.dat</code> (STS spectra)<br>",
          "&#8226; <strong>ScientaOmicron</strong> — <code>.sm4</code> (STM images)",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[spm]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-spm/' target='_blank' rel='noopener noreferrer'>pynxtools-spm</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-spm' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["STM", "STS", "AFM", "Nanonis", "ScientaOmicron", "NXstm", "NXsts", "NXafm"]
      },
      {
        name: "pynxtools-xps",
        desc: "X-ray photoelectron spectroscopy",
        detail: [
          "Reads heterogeneous XPS vendor formats and produces standardized NeXus files compliant with <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXxps.html' target='_blank' rel='noopener noreferrer'>NXxps</a> and <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXmpes.html' target='_blank' rel='noopener noreferrer'>NXmpes</a>.",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>SPECS GmbH</strong> — SpecsLabProdigy <code>.sle</code>, SpecsLab 2 <code>.xml</code> (≥ v4.63), <code>.xy</code><br>",
          "&#8226; <strong>Kratos Analytical</strong> — AXIS Ultra/Nova/Supra via VAMAS <code>.vms</code><br>",
          "&#8226; <strong>PHI Electronics</strong> — VersaProbe 4 via MultiPak <code>.spe</code> (spectra), <code>.pro</code> (depth profiles)<br>",
          "&#8226; <strong>Scienta Omicron</strong> — SES export <code>.txt</code>, Igor Binary <code>.ibw</code>, HDF5 <code>.h5</code><br>",
          "&#8226; <strong>VAMAS ISO 14976</strong> — generic <code>.vms</code> / <code>.npl</code> from any vendor",
          "<br><br>",
          "<strong>Also handles:</strong> binding energy calibration, survey/region scan structures, charge referencing.",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[xps]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-xps/' target='_blank' rel='noopener noreferrer'>pynxtools-xps</a> &nbsp;|&nbsp; <a href='https://fairmat-nfdi.github.io/pynxtools-xps/tutorial/nomad_usage.html' target='_blank' rel='noopener noreferrer'>NOMAD tutorial</a>"
        ].join(""),
        tags: ["XPS", "SPECS", "Kratos", "PHI", "Scienta Omicron", "VAMAS", "NXxps", "NXmpes"]
      },
      {
        name: "pynxtools-em",
        desc: "Electron microscopy",
        detail: [
          "Reads TEM and SEM data from technology-partner formats and standardizes them against the <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXem.html' target='_blank' rel='noopener noreferrer'>NXem</a> application definition.",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>Thermo Fisher / FEI</strong> — Velox <code>.emd</code>, legacy <code>.tiff</code><br>",
          "&#8226; <strong>Gatan</strong> — DigitalMicrograph <code>.dm3</code> / <code>.dm4</code><br>",
          "&#8226; <strong>Zeiss</strong> — SEM <code>.tiff</code> with embedded metadata<br>",
          "&#8226; <strong>JEOL</strong> — TEM/SEM <code>.tiff</code> with metadata<br>",
          "&#8226; <strong>Hitachi</strong> — SEM <code>.tiff</code> with metadata<br>",
          "&#8226; <strong>TESCAN</strong> — SEM <code>.tiff</code> with metadata<br>",
          "&#8226; <strong>Nion Co.</strong> — <code>.ndata</code> and HDF5 project files<br>",
          "&#8226; <strong>EDAX APEX</strong> — HDF5 EDS/EBSD files<br>",
          "&#8226; <strong>SerialEM</strong> — <code>.mrc</code> / <code>.mdoc</code> cryo-EM files<br>",
          "&#8226; <strong>Protochips AXON</strong> — zipped <code>.png</code> in-situ image sequences<br>",
          "&#8226; <strong>Point Electronic DISS</strong> — <code>.tiff</code> with metadata<br>",
          "&#8226; <strong>EBSD</strong> — Kikuchi diffraction routes via <strong>MTex</strong> and <strong>pyxem</strong>",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[em]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-em/' target='_blank' rel='noopener noreferrer'>pynxtools-em</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-em' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["TEM", "SEM", "EBSD", "FEI", "Gatan", "Zeiss", "JEOL", "Nion", "NXem"]
      },
      {
        name: "pynxtools-apm",
        desc: "Atom probe microscopy",
        detail: [
          "Converts atom probe tomography (APT) and field-ion microscopy (FIM) raw data into NeXus files compliant with the <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXapm.html' target='_blank' rel='noopener noreferrer'>NXapm</a> application definition.",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>AMETEK / Cameca LEAP</strong> — <code>.apt</code>, <code>.epos</code>, <code>.pos</code>, <code>.rrng</code>, <code>.rng</code>, Cameca HDF5, IVAS XML, AP Suite XML<br>",
          "&#8226; <strong>Inspico / (M)-TAP / APyT</strong> — Stuttgart open-source instrument formats<br>",
          "&#8226; <strong>OXCART / pyccapt</strong> — Erlangen open-source atom probe instrument<br>",
          "&#8226; <strong>Imago / PoSAP</strong> — legacy <code>.ato</code>, OPS, <code>.env</code> formats<br>",
          "&#8226; <strong>Generic</strong> — <code>.csv</code> reconstructed point clouds",
          "<br><br>",
          "<strong>Preserved data:</strong> reconstructed ion positions (x, y, z, m/q), ranging tables, detector hit data.",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[apm]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-apm/' target='_blank' rel='noopener noreferrer'>pynxtools-apm</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-apm' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["APT", "LEAP", "CAMECA", "NXapm", ".apt", ".epos", ".pos", ".rrng"]
      },
      {
        name: "pynxtools-mpes",
        desc: "Multidimensional photoemission spectroscopy",
        detail: [
          "Converts MPES and ARPES datasets from FHI Berlin instruments and free-electron laser beamlines into NeXus files compliant with <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXmpes.html' target='_blank' rel='noopener noreferrer'>NXmpes</a> and <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXmpes_arpes.html' target='_blank' rel='noopener noreferrer'>NXmpes_arpes</a>.",
          "<br><br>",
          "<strong>Instruments &amp; file formats</strong><br>",
          "&#8226; <strong>FHI Berlin MPES instruments</strong> — HDF5 (<code>.h5</code>), JSON, YAML metadata<br>",
          "&#8226; <strong>Flash FEL (DESY)</strong> — beamline HDF5 files with timing and pump–probe metadata<br>",
          "&#8226; <strong>BESSY II (HZB)</strong> — synchrotron beamline HDF5 datasets",
          "<br><br>",
          "<strong>Data types handled</strong><br>",
          "&#8226; Momentum-resolved energy band maps (k∥, k⊥, E)<br>",
          "&#8226; Time-resolved tr-ARPES pump–probe sequences<br>",
          "&#8226; Associated beamline and instrument metadata",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[mpes]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-mpes/' target='_blank' rel='noopener noreferrer'>pynxtools-mpes</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-mpes' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["ARPES", "MPES", "tr-ARPES", "FHI Berlin", "Flash", "BESSY II", "NXmpes", "NXmpes_arpes"]
      },
      {
        name: "pynxtools-ellips",
        desc: "Ellipsometry",
        detail: [
          "Converts ellipsometry raw data into NeXus/HDF5 files compliant with <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXellipsometry.html' target='_blank' rel='noopener noreferrer'>NXellipsometry</a> (extends NXoptical_spectroscopy).",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>J.A. Woollam (VASE / M-2000)</strong> — CompleteEASE export <code>.dat</code> (psi/delta spectra)<br>",
          "&#8226; <strong>Sentech</strong> — <code>.spe</code> ASCII export files",
          "<br><br>",
          "<strong>Data types handled</strong><br>",
          "&#8226; Psi (Ψ) and delta (Δ) angle-of-incidence spectra<br>",
          "&#8226; Mueller matrix polarimetry data<br>",
          "&#8226; Wavelength / photon energy axes + instrument optical path metadata",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[ellips]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-ellips/' target='_blank' rel='noopener noreferrer'>pynxtools-ellips</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-ellips' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["ellipsometry", "Woollam", "VASE", "Sentech", "NXellipsometry", "thin films", "Mueller matrix"]
      },
      {
        name: "pynxtools-xrd",
        desc: "X-ray diffraction",
        detail: [
          "Converts X-ray Diffraction (XRD) raw data into NeXus/HDF5 files compliant with the <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/applications/NXxrd_pan.html' target='_blank' rel='noopener noreferrer'>NXxrd_pan</a> application definition.",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>Malvern PANalytical</strong> — X'Pert PRO <code>.xrdml</code> (format v1.5), 1D and 2D scans<br>",
          "&#8226; <strong>Future / community</strong> — architecture supports adding Bruker <code>.raw</code> and other formats via new sub-readers",
          "<br><br>",
          "<strong>Scan types handled</strong><br>",
          "&#8226; Powder diffraction (2θ / ω scans), rocking curves<br>",
          "&#8226; Reciprocal space maps (RSM)<br>",
          "&#8226; 2D area detector frames",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[xrd]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-xrd/' target='_blank' rel='noopener noreferrer'>pynxtools-xrd</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-xrd' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["XRD", "PANalytical", "X'Pert PRO", ".xrdml", "NXxrd_pan", "powder diffraction", "RSM"]
      },
      {
        name: "pynxtools-raman",
        desc: "Raman spectroscopy",
        detail: [
          "Converts Raman spectroscopy data into NeXus/HDF5 files compliant with <a href='https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXraman.html' target='_blank' rel='noopener noreferrer'>NXraman</a> (extends NXoptical_spectroscopy).",
          "<br><br>",
          "<strong>Vendors &amp; file formats</strong><br>",
          "&#8226; <strong>WITec</strong> — WITec Alpha300 export <code>.txt</code> (ASCII wavenumber + intensity)<br>",
          "&#8226; <strong>Raman Open Database (ROD)</strong> — community standard plain-text format",
          "<br><br>",
          "<strong>Data types handled</strong><br>",
          "&#8226; Single-point spectra and spectral maps<br>",
          "&#8226; Wavenumber axis (cm⁻¹), laser wavelength, integration time<br>",
          "&#8226; Sample and instrument metadata from ELN YAML",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[raman]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-raman/' target='_blank' rel='noopener noreferrer'>pynxtools-raman</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-raman' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["Raman", "WITec", "ROD", "Raman Open Database", "NXraman", "NXoptical_spectroscopy"]
      },
      {
        name: "pynxtools-igor",
        desc: "Igor Pro experiment files",
        detail: [
          "Reads WaveMetrics Igor Pro binary files and converts them into NeXus/HDF5, mapping wave data and experiment notes to any applicable NeXus application definition.",
          "<br><br>",
          "<strong>File formats supported</strong><br>",
          "&#8226; <strong>Igor Binary Wave</strong> — <code>.ibw</code> (single wave: 1-D to 4-D numeric or text arrays)<br>",
          "&#8226; <strong>Igor Packed Experiment</strong> — <code>.pxp</code> (full experiment: all waves, notes, display layouts)",
          "<br><br>",
          "<strong>Usage pattern</strong><br>",
          "&#8226; Commonly used as a <em>pre-reader</em> inside other plugins (e.g., pynxtools-xps reads Scienta <code>.ibw</code> via igor-reader)<br>",
          "&#8226; Stand-alone: map waves to any NeXus definition via config JSON",
          "<br><br>",
          "<strong>NeXus output:</strong> configurable — NXmpes, NXxps, NXxrd, NXroot, or custom definitions via <code>--nxdl</code>",
          "<br><br>",
          "<strong>Install:</strong> <code>pip install pynxtools[igor]</code><br>",
          "Docs: <a href='https://fairmat-nfdi.github.io/pynxtools-igor/' target='_blank' rel='noopener noreferrer'>pynxtools-igor</a> &nbsp;|&nbsp; <a href='https://github.com/FAIRmat-NFDI/pynxtools-igor' target='_blank' rel='noopener noreferrer'>GitHub</a>"
        ].join(""),
        tags: ["Igor Pro", "WaveMetrics", ".ibw", ".pxp", "NXmpes", "NXxrd", "NXxps"]
      },
    ],
  },

  /* ── EXPLORE PYNXTOOLS ECOSYSTEM ── */
  explore: {
    page: {
      name: "Explore pynxtools framework",
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
          detail: [
            "&#8226; <strong>Install</strong> — <code>pip install pynxtools[&lt;plugin&gt;]</code> in any Python environment<br>",
            "&#8226; <strong>Convert</strong> — <code>pynx convert --reader &lt;reader&gt; --nxdl &lt;NXdef&gt; data.raw eln.yaml</code><br>",
            "&#8226; <strong>Inputs</strong> — raw vendor file &nbsp;+&nbsp; ELN YAML (sample &amp; instrument metadata) &nbsp;+&nbsp; config JSON (field mapping)<br>",
            "&#8226; <strong>Output</strong> — a single <code>.nxs</code> NeXus/HDF5 file per experiment<br>",
            "&#8226; <strong>Validate</strong> — auto-runs during conversion; re-run anytime with <code>pynx validate out.nxs</code>"
          ].join(""),
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
          detail: [
            "&#8226; <strong>Deploy</strong> — include pynxtools and the plugin in a NOMAD Oasis or use the public <a href='https://nomad-lab.eu' target='_blank' rel='noopener noreferrer'>nomad-lab.eu</a><br>",
            "&#8226; <strong>Upload</strong> — drop raw vendor files and an ELN YAML through the NOMAD web interface<br>",
            "&#8226; <strong>Auto-parse</strong> — NOMAD detects the format, runs the plugin reader, and creates structured NeXus entries automatically<br>",
            "&#8226; <strong>Search &amp; share</strong> — all metadata is indexed and immediately searchable across datasets<br>",
            "&#8226; <strong>Publish</strong> — assign a DOI and make data publicly citable with one click"
          ].join(""),
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
    exploreBtn.textContent = 'explore framework →';
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
  document.querySelector('#view-pynxtools .view-note p').innerHTML = DATA.pynxtools.overview;
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
