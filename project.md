i# Interactive Pynxtools & NOMAD Exhibition Application

## Technical Specification for AI-Assisted Development

# 1. Project Goal

Build a self-contained interactive web application for a scientific software exhibition.

The application is not a presentation and not a dashboard.

The application should function as an interactive architecture explorer that allows visitors to understand:

* What Pynxtools is
* What NeXus is
* How Pynxtools plugins work
* How data flows through the ecosystem
* How NOMAD integrates with Pynxtools
* How developers can create plugins
* How scientists can use the software stack

The application will be used on a laptop during a guided demonstration.

No backend is required.

All content can be stored as static configuration objects.

---

# 2. Target Audience

The application should support two major visitor groups:

## Scientists

Interested in:

* Data conversion
* Data management
* Search
* Analysis
* DOI publication

## Developers

Interested in:

* Plugin architecture
* Testing
* Validation
* Extensibility
* Integration into NOMAD

---

# 3. User Experience Requirements

The application should support approximately 10 minutes of guided exploration.

The visitor should be able to understand the ecosystem through three exploration levels.

---

# 4. Navigation Model

## Level 1: Ecosystem View

Initial landing page.

Display:

Raw Data
↓
Pynxtools
↓
NeXus
↓
NOMAD

Each component must be clickable.

This view should immediately communicate the overall workflow.

---

## Level 2: Component View

Clicking a major component opens its architecture page.

Examples:

* Pynxtools
* NOMAD

These pages display:

* Features
* Relationships
* Connections
* Description panels

---

## Level 3: Detailed Feature View

Clicking a feature opens:

* Modal
  or
* Side panel

containing:

* Description
* Benefits
* Architecture explanation
* Visual diagram

---

# 5. Main Application Sections

The application shall contain:

## Ecosystem View

Overview of the complete software stack.

## Pynxtools View

Detailed explanation of:

* Validator
* Writer
* Common Reader
* Testing Framework
* NeXus Datamodel

## Plugin View

Detailed explanation of:

* pynxtools-spm
* pynxtools-xps
* pynxtools-apm
* future plugins

## NOMAD View

Detailed explanation of:

* Metainfo
* Search
* Analytics
* DOI
* Database
* JupyterHub

## Scientist Journey

Workflow-oriented explanation.

## Developer Journey

Developer-oriented explanation.

## Live Dataset Demo

Animated demonstration of:

Raw Data
→ Reader
→ Validator
→ Writer
→ NeXus
→ NOMAD

---

# 6. Technology Stack

Use the following stack.

## Framework

React 18+

## Build Tool

Vite

## Language

JavaScript

Do NOT use TypeScript for the initial version.

## Styling

Tailwind CSS

## Animation

Framer Motion

## Icons

Lucide React

## Graph Rendering

Native SVG

Do NOT use D3.js.

Do NOT use Cytoscape.

The graph complexity is low enough to render manually using SVG.

---

# 7. Recommended NPM Packages

npm install:

react
react-dom

framer-motion

lucide-react

clsx

tailwindcss

postcss

autoprefixer

Optional:

react-markdown

for rich feature descriptions.

---

# 8. Architecture Principles

The application must be fully data-driven.

No architecture content should be hardcoded into React components.

All architecture information must live in configuration files.

Components should only render data.

---

# 9. Folder Structure

src/

App.jsx

main.jsx

components/

ArchitectureGraph.jsx

NodeCard.jsx

ConnectionLine.jsx

FeatureCard.jsx

FeatureModal.jsx

NavigationBar.jsx

JourneyView.jsx

DatasetDemo.jsx

PluginCard.jsx

InfoPanel.jsx

pages/

HomePage.jsx

PynxtoolsPage.jsx

NomadPage.jsx

PluginPage.jsx

ScientistJourneyPage.jsx

DeveloperJourneyPage.jsx

data/

ecosystem.js

pynxtools.js

nomad.js

plugins.js

journeys.js

assets/

logos/

images/

animations/

hooks/

useNavigation.js

useModal.js

styles/

globals.css

---

# 10. Data Structure Design

All information should be represented as JavaScript configuration objects.

Example:

export const pynxtoolsFeatures = [
{
id: "validator",
title: "Validator",
category: "core",
description:
"Validates NeXus groups, fields, and attributes.",
details:
"Checks datatype compliance, required attributes, and NeXus structure."
}
]

Components must render these objects dynamically.

---

# 11. Graph Visualization Requirements

The application should visually represent software relationships.

Example:

NOMAD
▲
│ Plugin
│
▼
Pynxtools
│
├── SPM
├── XPS
└── APM

Use:

SVG lines

SVG arrows

Motion animations

Hover effects

Clickable nodes

Nodes should animate when selected.

---

# 12. Visual Design

Style should resemble:

* Architecture explorer
* Ecosystem map
* Knowledge graph

Avoid:

* Business dashboard appearance
* Analytics dashboard appearance
* Traditional slide presentation appearance

Design goals:

* Scientific
* Modern
* Interactive
* Discoverable

---

# 13. Color Strategy

Primary:

Blue

Secondary:

Indigo

Accent:

Cyan

Success:

Green

Plugin category:

Purple

NOMAD category:

Orange

Pynxtools category:

Blue

---

# 14. Animations

Use Framer Motion.

Animate:

* Page transitions
* Node expansion
* Modal appearance
* Connection highlighting

When a node is selected:

* Scale up
* Glow effect
* Highlight connected nodes

---

# 15. Modal Requirements

Every feature node should open a modal.

Modal contains:

Title

Description

Benefits

Architecture Diagram

Optional Example

Close Button

---

# 16. Live Dataset Demonstration

Create a dedicated section.

The animation should show:

STM File

↓

Reader

↓

Validator

↓

Writer

↓

experiment.nxs

↓

NOMAD Entry

Each stage should animate sequentially.

The demonstration should be replayable.

---

# 17. Scientist Journey Page

Display:

Raw Files

↓

Convert

↓

Store

↓

Search

↓

Analyze

↓

Publish DOI

Explain value from a scientist perspective.

---

# 18. Developer Journey Page

Display:

Create Reader

↓

Use Common Framework

↓

Run Shared Tests

↓

Generate NeXus

↓

Deploy To NOMAD

Explain value from a developer perspective.

---

# 19. Accessibility

All interactive elements must support:

Keyboard navigation

Focus states

ARIA labels

Responsive layouts

High contrast text

---

# 20. Performance

Requirements:

Initial load under 2 seconds

No backend calls

No database

No authentication

No server-side rendering required

Everything should be static assets

---

# 21. Future Extensibility

The architecture should allow adding:

New Pynxtools plugins

New NOMAD plugins

New journeys

Additional datasets

Additional architecture views

without modifying core rendering components.

New functionality should only require editing configuration files.

---

# 22. Development Strategy

Phase 1

Build a single-page prototype:

App.jsx

Verify navigation and storytelling.

Phase 2

Split into reusable components.

Phase 3

Add animations.

Phase 4

Add dataset demonstration.

Phase 5

Add exhibition polish:

* Logos
* Icons
* Colors
* Responsive behavior

Phase 6

Final exhibition deployment.

---

# 23. Primary Storytelling Message

The application should continuously reinforce the following concept:

Raw Scientific Data

↓

Pynxtools

↓

NeXus Standard

↓

NOMAD

↓

Search • Analytics • DOI • Reuse

This is the central narrative of the entire application.


## Testing Strategy for Converter Logic
After finishing the code base as described in the README, we have a comprehensive test suite for react app with proper explanantion and documentation.
