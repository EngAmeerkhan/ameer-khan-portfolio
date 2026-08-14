// ============================================================
// Certifications.jsx
// Flip-card grid with real certificate previews & lightbox modal
// ============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { certifications } from "../data/certifications";
import { HiCalendar, HiOfficeBuilding, HiX, HiArrowsExpand } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { IoReloadOutline } from "react-icons/io5";

// Color configurations per certification
const colorMap = {
  emerald: {
    bg: "rgba(16,217,160,0.08)",
    border: "rgba(16,217,160,0.25)",
    text: "#10d9a0",
    glow: "rgba(16,217,160,0.15)",
  },
  cyan: {
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.25)",
    text: "#00d4ff",
    glow: "rgba(0,212,255,0.15)",
  },
  indigo: {
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.25)",
    text: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
  },
  rose: {
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.25)",
    text: "#f43f5e",
    glow: "rgba(244,63,94,0.15)",
  },
  amber: {
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
    text: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
  },
};

function CertCard({ cert, onOpenLightbox }) {
  const [flipped, setFlipped] = useState(false);
  const c = colorMap[cert.color] ?? colorMap.emerald;

  return (
    <div
      className="relative h-[370px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((p) => !p)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((p) => !p)}
      role="button"
      tabIndex={0}
      aria-label={`${flipped ? "Hide" : "Show"} details for ${cert.title}`}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* ---- FRONT ---- */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col glass-card"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: `1px solid rgba(255,255,255,0.08)`,
          }}
        >
          {/* Certificate image banner */}
          <div
            className="h-52 w-full relative overflow-hidden bg-bg-secondary flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300"
            style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}
          >
            {cert.imageUrl ? (
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">{cert.badge}</span>
                <span className="text-xs text-text-muted">Certificate Preview</span>
              </div>
            )}

            {/* Dark gradient shadow overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-transparent to-transparent pointer-events-none"
            />

            {/* View Full Certificate Button */}
            {cert.imageUrl && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(cert);
                }}
                className="absolute top-3 right-3 p-2 rounded-xl text-white bg-black/60 hover:bg-accent-emerald hover:text-black backdrop-blur-md border border-white/10 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                title="Expand Certificate Scan"
              >
                <HiArrowsExpand className="w-4 h-4" />
              </button>
            )}

            {/* Verified badge */}
            <div
              className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
              style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
            >
              <MdVerified className="w-3.5 h-3.5" />
              <span>Verified Certificate</span>
            </div>
          </div>

          {/* Card footer */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-text-primary text-sm leading-snug line-clamp-2 mb-1 group-hover:text-accent-emerald transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-text-muted line-clamp-1">{cert.issuer}</p>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.05]">
              <div className="flex items-center gap-1 text-xs" style={{ color: c.text }}>
                <HiCalendar className="w-3.5 h-3.5" />
                <span>{cert.date}</span>
              </div>
              <span className="text-xs text-text-subtle flex items-center gap-1 group-hover:text-accent-emerald transition-colors">
                <IoReloadOutline className="w-3.5 h-3.5" /> Flip info
              </span>
            </div>
          </div>
        </div>

        {/* ---- BACK ---- */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${c.bg}, rgba(15,15,26,0.98))`,
            border: `1px solid ${c.border}`,
            boxShadow: `0 0 35px ${c.glow}`,
          }}
        >
          {/* Badge + title */}
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl flex-shrink-0">{cert.badge}</span>
            <div>
              <h3 className="font-display font-bold text-text-primary text-sm leading-snug">
                {cert.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <MdVerified className="w-3.5 h-3.5" style={{ color: c.text }} />
                <span className="text-xs font-medium" style={{ color: c.text }}>
                  Official Award
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-muted text-xs leading-relaxed flex-1 overflow-y-auto no-scrollbar">
            {cert.description}
          </p>

          {/* Meta */}
          <div className="mt-4 space-y-2 pt-3" style={{ borderTop: `1px solid ${c.border}` }}>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <HiOfficeBuilding className="w-3.5 h-3.5 flex-shrink-0" style={{ color: c.text }} />
              <span className="line-clamp-1">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <HiCalendar className="w-3.5 h-3.5 flex-shrink-0" style={{ color: c.text }} />
              <span>{cert.date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-2">
            {cert.imageUrl && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(cert);
                }}
                className="btn-primary text-xs py-2 px-3 flex-1 justify-center"
              >
                <span>View Full Scan</span>
              </button>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              className="btn-secondary text-xs py-2 px-3 justify-center"
            >
              Flip Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Fullscreen Certificate Lightbox
function CertificateLightbox({ cert, onClose }) {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="relative max-w-4xl max-h-[90vh] bg-bg-secondary rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-bg-tertiary">
          <div>
            <h4 className="text-sm md:text-base font-bold text-white">{cert.title}</h4>
            <p className="text-xs text-text-muted">{cert.issuer} · {cert.date}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-muted hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Scan Image */}
        <div className="overflow-auto p-3 flex items-center justify-center bg-black/40 max-h-[75vh]">
          <img
            src={cert.imageUrl}
            alt={cert.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [lightboxCert, setLightboxCert] = useState(null);

  return (
    <SectionWrapper id="certifications" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">What I've Earned</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Certifications &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Click any card to flip and explore details, or click the expand icon to view high-resolution certificate scans.
          </p>
        </div>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <CertCard cert={cert} onOpenLightbox={setLightboxCert} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxCert && (
          <CertificateLightbox
            cert={lightboxCert}
            onClose={() => setLightboxCert(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
