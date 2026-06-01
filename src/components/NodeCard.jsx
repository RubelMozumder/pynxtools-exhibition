import { motion } from "framer-motion";

export default function NodeCard({
  title,
  description,
  onClick,
  selected = false,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-xl
        border
        p-4
        shadow-lg
        transition-all
        bg-white

        ${
          selected
            ? "border-blue-600 ring-2 ring-blue-400"
            : "border-slate-300"
        }
      `}
    >
      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}