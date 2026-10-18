// ============================================================
// Navbar.jsx
// Sticky navbar: transparent → solid on scroll, mobile hamburger
// Active section highlight via IntersectionObserver
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Video Editing", href: "#video-editing" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenEditingStudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect scroll to toggle navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  // Close mobile menu on link click
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className={`relative mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-display font-bold text-xl tracking-tight"
            aria-label="Back to top"
          >
            <span className="gradient-text">AK</span>
            <span className="text-text-primary">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isVideoLink = sectionId === "video-editing";
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "text-accent-emerald"
                        : isVideoLink
                        ? "text-purple-300 hover:text-white"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isVideoLink && <span>🎬</span>}
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "rgba(16, 217, 160, 0.08)",
                          border: "1px solid rgba(16, 217, 160, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Direct Editing Studio Switcher Button */}
            <button
              onClick={onOpenEditingStudio}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white transition-all duration-300 flex items-center gap-1.5 shadow-md hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.25) 100%)",
                border: "1px solid rgba(168,85,247,0.4)",
              }}
              title="Open full dedicated Video Editing Portfolio"
            >
              <span>🎬 Editing Studio</span>
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            </button>

            {/* Desktop Hire Me CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex btn-primary text-sm px-5 py-2"
            >
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile slide-in menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-bg-secondary/95 backdrop-blur-md border-b border-white/[0.06]"
            >
              <ul className="px-6 py-4 flex flex-col gap-2" role="list">
                {/* Editing studio highlight in mobile */}
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenEditingStudio?.();
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-between"
                    style={{
                      background: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.25) 100%)",
                      border: "1px solid rgba(168,85,247,0.4)",
                    }}
                  >
                    <span>🎬 Open Video Editing Website</span>
                    <span className="text-xs bg-purple-500/30 px-2 py-0.5 rounded-full text-purple-200">
                      Explore →
                    </span>
                  </button>
                </li>

                {NAV_LINKS.map(({ label, href }) => {
                  const sectionId = href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={(e) => handleNavClick(e, href)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20"
                            : "text-text-muted hover:text-text-primary hover:bg-white/[0.04]"
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="btn-primary block text-center"
                  >
                    <span>Hire Me</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
