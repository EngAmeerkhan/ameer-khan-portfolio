// ============================================================
// App.jsx — Root component, assembles all sections
// ============================================================
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Layout & decorative
import AnimatedBackground from "./components/ui/AnimatedBackground";

// Sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Page entrance animation — fade in after mount
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Ambient animated background (fixed, z-0) */}
      <AnimatedBackground />

      {/* Sticky navbar */}
      <Navbar />

      {/* Main page content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
