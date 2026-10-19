import { nomadFeatures } from "../data/nomad";
import NodeCard from "../components/NodeCard";
import { useState } from "react";
import FeatureModal from "../components/FeatureModal";

export default function NomadPage({ onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-slate-200 rounded"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">
        NOMAD Platform
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nomadFeatures.map((f) => (
          <NodeCard
            key={f.id}
            title={f.title}
            description={f.description}
            onClick={() => setSelected(f)}
          />
        ))}
      </div>

      <FeatureModal
        feature={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}