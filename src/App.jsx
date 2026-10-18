// ============================================================
// App.jsx — Root component, assembles all sections & manages
// dual-mode views (Developer Portfolio & Dedicated Video Editing Studio)
// ============================================================
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Layout & decorative
import AnimatedBackground from "./components/ui/AnimatedBackground";

// Main Portfolio Sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Video Editing Portfolio Components
import VideoSection from "./components/editing/VideoSection";
import VideoPortfolioPage from "./components/editing/VideoPortfolioPage";

export default function App() {
  const [view, setView] = useState("main"); // 'main' | 'editing'

  // Hash & URL query listener for direct sharing & bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (
        hash === "#editing-portfolio" ||
        hash === "#video-editing-studio" ||
        params.get("view") === "editing"
      ) {
        setView("editing");
      } else if (hash === "#main" || (!hash.includes("editing-portfolio") && !hash.includes("video-editing-studio") && view === "editing" && hash === "")) {
        setView("main");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [view]);

  const handleOpenEditingStudio = () => {
    setView("editing");
    window.history.pushState(null, "", "#editing-portfolio");
  };

  const handleBackToDev = () => {
    setView("main");
    window.history.pushState(null, "", "#video-editing");
    setTimeout(() => {
      document.getElementById("video-editing")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen"
    >
      {/* Ambient animated background (fixed, z-0) */}
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {view === "main" ? (
          <motion.div
            key="main-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sticky navbar */}
            <Navbar onOpenEditingStudio={handleOpenEditingStudio} />

            {/* Main page content */}
            <main id="main-content">
              <Hero onOpenEditingStudio={handleOpenEditingStudio} />
              <About />
              <Skills />
              <Projects />
              {/* Dedicated Video Editing Portfolio Section right in main portfolio */}
              <VideoSection onOpenFullStudio={handleOpenEditingStudio} />
              <Certifications />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="editing-studio-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Dedicated full Video Editing Portfolio & Creative Studio */}
            <VideoPortfolioPage onBackToDev={handleBackToDev} />

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
