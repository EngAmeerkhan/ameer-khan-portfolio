// ============================================================
// Projects.jsx
// Animated card grid with modal-based project detail overlay
// ============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import ProjectModal, { Tag } from "./ProjectModal";
import { projects } from "../data/projects";
import { HiArrowRight } from "react-icons/hi";

// Category filter buttons
const ALL_FILTERS = [
  "All",
  "AI/ML",
  "Computer Vision",
  "IoT",
  "Robotics",
  "FFmpeg",
];

function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      className="glass-card group overflow-hidden flex flex-col cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      aria-label={`Open details for ${project.title}`}
    >
      {/* Project image area */}
      <div
        className="w-full h-44 relative overflow-hidden flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, rgba(16,217,160,0.05) 0%, rgba(0,212,255,0.05) 100%)",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            {/* Decorative icon based on project type */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(16,217,160,0.1)", border: "1px solid rgba(16,217,160,0.25)" }}
            >
              <span className="text-2xl">
                {project.id === 1 ? "🔬" :
                 project.id === 2 ? "🤟" :
                 project.id === 3 ? "🤖" :
                 project.id === 4 ? "🎬" : "📡"}
              </span>
            </div>
            <span className="text-xs text-text-subtle">📸 Screenshot placeholder</span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(16,217,160,0.08)", backdropFilter: "blur(2px)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "rgba(16,217,160,0.2)", border: "1px solid rgba(16,217,160,0.4)", color: "#10d9a0" }}
          >
            View Details <HiArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
          {project.tags.length > 3 && (
            <span className="text-xs text-text-subtle self-center">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-text-primary text-base leading-snug mb-2 group-hover:text-accent-emerald transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-text-muted text-sm leading-relaxed flex-1">
          {project.shortDesc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex gap-1.5 flex-wrap">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs text-text-subtle">{t}</span>
            ))}
            {project.tech.length > 3 && <span className="text-xs text-text-subtle">...</span>}
          </div>
          <span
            className="text-xs font-medium group-hover:text-accent-emerald text-text-muted transition-colors flex items-center gap-1"
          >
            Details <HiArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <SectionWrapper id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">What I've Built</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Real-world AI, IoT, and full-stack projects. Click any card for full details.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "text-bg bg-accent-gradient"
                  : "text-text-muted hover:text-text-primary"
              }`}
              style={
                activeFilter !== f
                  ? { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }
                  : {}
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <ProjectCard project={project} onClick={setSelectedProject} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key="project-modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
