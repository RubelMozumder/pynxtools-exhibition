import { motion } from "framer-motion";

export default function FeatureModal({
  feature,
  onClose,
}) {
  if (!feature) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="bg-white rounded-xl p-6 max-w-xl w-full shadow-xl"
      >
        <h2 className="text-2xl font-bold">
          {feature.title}
        </h2>

        <p className="mt-4 text-slate-700">
          {feature.details || feature.description}
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}