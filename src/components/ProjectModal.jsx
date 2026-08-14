// ============================================================
// ProjectModal.jsx
// Full-screen overlay modal for expanded project details
// ============================================================
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

// Tag color mapping
const TAG_COLORS = {
  "AI/ML": { bg: "rgba(16,217,160,0.1)", border: "rgba(16,217,160,0.3)", text: "#10d9a0" },
  "Computer Vision": { bg: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.3)", text: "#00d4ff" },
  "IoT": { bg: "rgba(20,184,166,0.1)", border: "rgba(20,184,166,0.3)", text: "#14b8a6" },
  "Robotics": { bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.3)", text: "#fb923c" },
  "FFmpeg": { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)", text: "#ef4444" },
  "NLP": { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)", text: "#8b5cf6" },
  "LSTM": { bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.3)", text: "#6366f1" },
  "MediaPipe": { bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.3)", text: "#0ea5e9" },
  "PatchCore": { bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.3)", text: "#6366f1" },
  "YOLOv8": { bg: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.3)", text: "#a855f7" },
  "Python": { bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.3)", text: "#eab308" },
  "ESP32": { bg: "rgba(16,217,160,0.1)", border: "rgba(16,217,160,0.3)", text: "#10d9a0" },
  "MQTT": { bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.3)", text: "#0ea5e9" },
  "Smart Sensors": { bg: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.3)", text: "#00d4ff" },
  "Real-time": { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)", text: "#8b5cf6" },
  "Arduino": { bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.3)", text: "#0ea5e9" },
  "Sign Language": { bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.3)", text: "#f43f5e" },
  "Video Processing": { bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.3)", text: "#fb923c" },
  "Automation": { bg: "rgba(16,217,160,0.1)", border: "rgba(16,217,160,0.3)", text: "#10d9a0" },
};

function Tag({ label }) {
  const c = TAG_COLORS[label] ?? {
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    text: "#94a3b8",
  };
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
    >
      {label}
    </span>
  );
}

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Modal box */}
        <motion.div
          key="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, type: "spring", stiffness: 200, damping: 25 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl no-scrollbar"
          style={{
            background: "linear-gradient(135deg, rgba(15,15,26,0.98) 0%, rgba(19,19,31,0.98) 100%)",
            border: "1px solid rgba(16,217,160,0.2)",
            boxShadow: "0 0 60px rgba(16,217,160,0.1), 0 25px 50px rgba(0,0,0,0.5)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-xl text-text-muted hover:text-text-primary transition-colors"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            aria-label="Close modal"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Project image / placeholder */}
          <div
            className="w-full h-56 rounded-t-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, rgba(16,217,160,0.06) 0%, rgba(0,212,255,0.06) 100%)" }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(16,217,160,0.1)", border: "1px solid rgba(16,217,160,0.3)" }}
                >
                  <span className="text-3xl">🖼️</span>
                </div>
                <p className="text-text-subtle text-xs text-center px-6">
                  {/* TODO: Replace project.image with your screenshot/GIF path */}
                  Add a project screenshot or demo GIF here<br />
                  <span className="opacity-60">Recommended: 1200×630px</span>
                </p>
              </div>
            )}
            {/* Top gradient overlay */}
            <div
              className="absolute inset-x-0 bottom-0 h-16"
              style={{ background: "linear-gradient(to top, rgba(15,15,26,0.98), transparent)" }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((t) => <Tag key={t} label={t} />)}
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
              {project.title}
            </h3>

            {/* Full description */}
            <p className="text-text-muted leading-relaxed mb-6">{project.fullDesc}</p>

            {/* Tech stack */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <HiCode className="w-4 h-4 text-accent-emerald" />
                <span className="text-sm font-semibold text-text-primary">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-medium text-text-muted"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center"
                aria-label="View on GitHub"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
                aria-label="Live demo"
              >
                <span className="flex items-center justify-center gap-2">
                  <HiExternalLink className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Export Tag for reuse in Projects cards
export { Tag };
