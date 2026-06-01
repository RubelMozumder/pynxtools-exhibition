export const pynxtoolsFeatures = [
  {
    id: "nexus-datamodel",
    title: "NeXus Data Model",
    category: "core",
    shortDescription:
      "Built around NeXus definitions and application definitions.",
    details:
      "Provides access to NeXus concepts and definitions that guide the structure of scientific data.",
  },

  {
    id: "validator",
    title: "Validator",
    category: "core",
    shortDescription:
      "Validate groups, fields and attributes.",
    details:
      "Checks datatypes, required fields, required attributes and NeXus compliance.",
  },

  {
    id: "writer",
    title: "Writer",
    category: "core",
    shortDescription:
      "Write .nxs files.",
    details:
      "Creates NeXus-compliant HDF5 files ready for storage and distribution.",
  },

  {
    id: "testing-framework",
    title: "Testing Framework",
    category: "core",
    shortDescription:
      "Reusable testing infrastructure.",
    details:
      "Provides shared tests that can be reused across all Pynxtools plugins.",
  },

  {
    id: "common-reader",
    title: "Common Reader Structure",
    category: "core",
    shortDescription:
      "Standardized plugin entrypoint.",
    details:
      "Provides a common interface and architecture for all plugin readers.",
  },
];

export const pynxtoolsPlugins = [
  {
    id: "spm",
    title: "pynxtools-spm",
    description:
      "Scanning Probe Microscopy data converter.",
  },

  {
    id: "xps",
    title: "pynxtools-xps",
    description:
      "X-ray Photoelectron Spectroscopy data converter.",
  },

  {
    id: "apm",
    title: "pynxtools-apm",
    description:
      "Atom Probe Microscopy data converter.",
  },
];