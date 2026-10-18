// ============================================================
// Hero.jsx
// Full-viewport hero: typewriter roles, CTAs, profile photo,
// scroll indicator, and animated entrance
// ============================================================
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiDownload, HiArrowRight, HiChevronDown, HiFilm } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero({ onOpenEditingStudio }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Content grid */}
      <div className="max-w-7xl w-full mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* ---- Left column: text ---- */}
        <div>
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wider uppercase"
            style={{
              background: "rgba(16,217,160,0.08)",
              border: "1px solid rgba(16,217,160,0.25)",
              color: "#10d9a0",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
            </span>
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text block">Ameer Khan</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="font-display text-2xl md:text-3xl font-semibold text-text-muted mb-6 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                "Computer Engineer", 2200,
                "Web Developer", 2200,
                "Video Editor", 2200,
                "AI / ML Engineer", 2200
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              style={{ color: "#00d4ff" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-text-muted text-lg leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building intelligent, AI-powered systems and IoT solutions that
            bridge the gap between cutting-edge research and real-world impact.
            Passionate about clean code, beautiful UIs, and meaningful technology.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-3.5 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              aria-label="View my projects"
            >
              <span className="flex items-center gap-2">
                View Projects <HiArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Direct Video Editing Portfolio Button */}
            <button
              onClick={onOpenEditingStudio}
              className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:scale-105 group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(139,92,246,0.22) 50%, rgba(0,212,255,0.18) 100%)",
                border: "1px solid rgba(168,85,247,0.5)",
                color: "#f8fafc",
                boxShadow: "0 0 20px rgba(168,85,247,0.2)",
              }}
              aria-label="Open Video Editing Portfolio"
            >
              <HiFilm className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>Editing Portfolio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            </button>

            {/* Resume / CV */}
            <a
              href="#"
              download
              className="btn-secondary"
              aria-label="Download Resume / CV"
            >
              <HiDownload className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {[
              { Icon: FaGithub, href: "https://github.com/EngAmeerkhan", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ameer-khan-93739a2a1/", label: "LinkedIn" },
              { Icon: FaEnvelope, href: "mailto:itsameerkhan03477@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl text-text-muted hover:text-accent-emerald transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <span className="text-text-subtle text-sm">Find me online</span>
          </motion.div>
        </div>

        {/* ---- Right column: profile photo ---- */}
        <motion.div
          className="flex justify-center items-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 80 }}
        >
          <div className="relative">

            {/* Ambient glow beneath the figure */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 blur-3xl opacity-25 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, #10d9a0 0%, #00d4ff 50%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            {/* Subtle side accent lines */}
            <div
              className="absolute left-0 top-1/4 w-px h-1/2 opacity-40"
              style={{ background: "linear-gradient(to bottom, transparent, #10d9a0, transparent)" }}
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-1/4 w-px h-1/2 opacity-40"
              style={{ background: "linear-gradient(to bottom, transparent, #00d4ff, transparent)" }}
              aria-hidden="true"
            />

            {/* Photo — background already matches site dark color, blends seamlessly */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ width: "340px", height: "480px" }}
            >
              <img
                src="/profile.png"
                alt="Ameer Khan — Computer Engineer & Video Editor"
                className="w-full h-full object-contain object-top"
                style={{
                  mixBlendMode: "screen",
                  filter: "drop-shadow(0 20px 60px rgba(16,217,160,0.12))",
                }}
                draggable={false}
              />
            </motion.div>

            {/* Floating stat chips */}
            <motion.div
              className="absolute -right-8 top-16 glass-card px-3 py-2 text-xs font-semibold"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="gradient-text">5+</span>
              <span className="text-text-muted ml-1">AI Projects</span>
            </motion.div>

            <motion.div
              className="absolute -left-8 top-1/2 glass-card px-3 py-2 text-xs font-semibold"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="gradient-text">5</span>
              <span className="text-text-muted ml-1">Certifications</span>
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-28 glass-card px-3 py-2 text-xs font-semibold"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="gradient-text">20+</span>
              <span className="text-text-muted ml-1">Technologies</span>
            </motion.div>

            {/* 4th Floating Chip: Video Editing */}
            <motion.div
              className="absolute -left-6 bottom-16 glass-card px-3 py-2 text-xs font-semibold cursor-pointer border border-purple-500/30"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              onClick={onOpenEditingStudio}
              title="Click to view Video Editing Portfolio"
            >
              <span className="text-pink-400 font-bold">🎬 5M+</span>
              <span className="text-text-muted ml-1">Video Views</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-subtle text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiChevronDown className="w-5 h-5 text-accent-emerald" />
        </motion.div>
      </motion.div>
    </section>
  );
}
