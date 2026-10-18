// ============================================================
// Footer.jsx
// Minimal dark footer with nav links, social icons, copyright
// ============================================================
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Video Editing", href: "#video-editing" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { Icon: FaGithub, href: "https://github.com/EngAmeerkhan", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ameer-khan-93739a2a1/", label: "LinkedIn" },
  { Icon: FaEnvelope, href: "mailto:itsameerkhan03477@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative z-10 pt-12 pb-8 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      role="contentinfo"
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(16,217,160,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-display font-bold text-2xl"
            >
              <span className="gradient-text">AK</span>
              <span className="text-text-primary">.</span>
            </a>
            <p className="text-text-muted text-sm mt-1 max-w-xs">
              Computer Engineer · Web Developer · Video Editor
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-text-muted hover:text-accent-emerald transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-subtle">
          <p>© {currentYear} Ameer Khan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <span className="text-accent-emerald mx-0.5">♥</span>
            using React, Tailwind & Framer Motion
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-muted hover:text-accent-emerald transition-colors duration-200"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            Back to top <HiArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
