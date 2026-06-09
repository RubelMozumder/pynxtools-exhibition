import { useState } from "react";
import { ecosystemNodes, ecosystemConnections } from "../data/ecosystem";
import NodeCard from "../components/NodeCard";

export default function HomePage({ onNavigate }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (node) => {
    setSelected(node.id);
    onNavigate(node.id);
  };

  return (
    <div className="w-full h-screen p-10 bg-slate-50">
      <h1 className="text-3xl font-bold mb-6">
        Scientific Data Ecosystem
      </h1>

      <p className="text-slate-600 mb-10">
        Interactive map: Raw Data → Pynxtools → NeXus → NOMAD
      </p>

      {/* Nodes */}
      <div className="flex gap-6 flex-wrap">
        {ecosystemNodes.map((node) => (
          <NodeCard
            key={node.id}
            title={node.title}
            description={node.description}
            selected={selected === node.id}
            onClick={() => handleClick(node)}
          />
        ))}
      </div>

      {/* Connections (simple textual for now) */}
      <div className="mt-10 text-sm text-slate-500">
        {ecosystemConnections.map((c) => (
          <div key={c.from + c.to}>
            {c.from} → {c.to} ({c.label})
          </div>
        ))}
      </div>
    </div>
  );
}