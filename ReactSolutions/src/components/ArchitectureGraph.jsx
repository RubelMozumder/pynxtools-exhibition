import NodeCard from "./NodeCard";
import { ecosystemNodes } from "../data/ecosystem";

export default function ArchitectureGraph({ onSelect }) {
  return (
    <div className="relative w-full h-[500px] bg-white border rounded-xl p-6">
      <div className="absolute inset-0 flex items-center justify-between px-10">
        {ecosystemNodes.map((node) => (
          <div key={node.id} className="w-56">
            <NodeCard
              title={node.title}
              description={node.description}
              onClick={() => onSelect(node)}
            />
          </div>
        ))}
      </div>

      {/* Simple connection lines (placeholder) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="150" y1="250" x2="400" y2="250" stroke="#94a3b8" />
        <line x1="400" y1="250" x2="650" y2="250" stroke="#94a3b8" />
        <line x1="650" y1="250" x2="900" y2="250" stroke="#94a3b8" />
      </svg>
    </div>
  );
}