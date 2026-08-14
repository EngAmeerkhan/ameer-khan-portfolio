// ============================================================
// SectionWrapper.jsx
// Scroll-reveal wrapper using Framer Motion whileInView
// ============================================================
import { motion } from "framer-motion";

/**
 * Wraps a section with:
 * - fade + slide-up entrance animation triggered on scroll
 * - optional stagger children delay
 */
export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      className={`relative z-10 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.section>
  );
}

/**
 * Staggered container — wraps a list of children
 * Children receive their own delay via staggerChildren
 */
export function StaggerContainer({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger item — use inside StaggerContainer
 */
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
