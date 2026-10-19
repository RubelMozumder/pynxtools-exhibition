import { useState } from "react";

const steps = [
  "Raw STM File",
  "Reader",
  "Validator",
  "Writer",
  "NeXus File",
  "NOMAD Entry",
];

export default function DatasetDemo() {
  const [step, setStep] = useState(0);

  const next = () => {
    setStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="p-6 bg-white border rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Live Data Conversion Demo
      </h2>

      <div className="text-lg mb-4">
        Current Step:
        <span className="font-semibold ml-2">
          {steps[step]}
        </span>
      </div>

      <button
        onClick={next}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Next Step
      </button>
    </div>
  );
}