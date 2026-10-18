// ============================================================
// VideoPortfolioPage.jsx
// Dedicated Video Editing Portfolio Website & Creative Studio View.
// Full-featured standalone experience inside the website with
// shorts reels, long-form videos, workflow breakdown, software stack,
// and seamless return navigation to the Developer Portfolio.
// ============================================================
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShortCard from "./ShortCard";
import LongVideoCard from "./LongVideoCard";
import VideoPlayerModal from "./VideoPlayerModal";
import {
  videoEditorProfile,
  shortsVideos,
  longFormVideos,
} from "../../data/videoPortfolio";
import {
  HiArrowLeft,
  HiFilm,
  HiPlay,
  HiCheckCircle,
  HiSparkles,
  HiMail,
} from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export default function VideoPortfolioPage({ onBackToDev }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [shortsFilter, setShortsFilter] = useState("All");
  const [longFilter, setLongFilter] = useState("All");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const shortsCategories = ["All", "Talking Head", "Tech Breakdown", "Cinematic", "Gaming"];
  const filteredShorts =
    shortsFilter === "All"
      ? shortsVideos
      : shortsVideos.filter((s) => s.category === shortsFilter);

  const longCategories = ["All", "Documentary", "Podcast", "Commercial"];
  const filteredLong =
    longFilter === "All"
      ? longFormVideos
      : longFormVideos.filter((v) => v.category === longFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-bg text-text-primary relative selection:bg-accent-cyan/30"
    >
      {/* ============================================================
          TOP STICKY NAVBAR
          ============================================================ */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-white/[0.08] shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToDev}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-text-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
              aria-label="Back to Developer Portfolio"
            >
              <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Developer Portfolio</span>
            </button>

            <div className="hidden sm:block h-5 w-px bg-white/10" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="font-display font-bold text-lg text-white">
                Ameer Khan
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                Video Studio
              </span>
            </div>
          </div>

          {/* Quick Page Jump Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
            <a
              href="#shorts-section"
              className="hover:text-accent-cyan transition-colors"
            >
              Reels & Shorts
            </a>
            <a
              href="#long-section"
              className="hover:text-accent-cyan transition-colors"
            >
              Long-Form
            </a>
            <a
              href="#workflow-section"
              className="hover:text-accent-cyan transition-colors"
            >
              Editing Secret
            </a>
            <a
              href="#gear-section"
              className="hover:text-accent-cyan transition-colors"
            >
              Software Stack
            </a>
          </div>

          {/* Hire / Inquire CTA */}
          <a
            href="mailto:itsameerkhan03477@gmail.com?subject=Video%20Editing%20Inquiry%20-%20Ameer%20Khan"
            className="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-2 flex items-center gap-2"
          >
            <HiMail className="w-4 h-4" />
            <span>Hire for Editing</span>
          </a>
        </div>
      </header>

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        {/* Glow Spheres */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[140px] opacity-25 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, #00d4ff 100%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-500/15 via-purple-500/15 to-cyan-500/15 border border-purple-500/30 text-purple-300"
          >
            <HiSparkles className="w-4 h-4 text-accent-cyan" />
            Senior Video Editor & Retention Specialist
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Turning Raw Footage Into{" "}
            <span className="gradient-text">High-Retention Viral Content</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            {videoEditorProfile.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#shorts-section" className="btn-primary px-7 py-3.5 text-sm sm:text-base">
              <HiPlay className="w-5 h-5 mr-1" />
              <span>Watch Shorts & Reels</span>
            </a>

            <a href="#long-section" className="btn-secondary px-7 py-3.5 text-sm sm:text-base">
              <HiFilm className="w-5 h-5 mr-1" />
              <span>Explore Long-Form</span>
            </a>

            <button
              onClick={onBackToDev}
              className="px-6 py-3 rounded-xl font-medium text-sm text-text-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            >
              ← Back to Developer Site
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {videoEditorProfile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-6 flex flex-col items-center justify-center border border-white/[0.08]"
              >
                <span className="font-display text-4xl sm:text-5xl font-extrabold gradient-text">
                  {stat.value}
                </span>
                <span className="text-text-muted text-sm mt-1.5 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SHORTS & REELS SHOWCASE (9:16)
          ============================================================ */}
      <section id="shorts-section" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-2 block">Mobile & Social Pacing</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Viral <span className="gradient-text">Shorts & Reels</span> Showcase
            </h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Optimized for TikTok, Instagram Reels, and YouTube Shorts.
              Preview any video below or click direct platform links.
            </p>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {shortsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setShortsFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    shortsFilter === cat
                      ? "bg-accent-gradient text-bg shadow-glow-emerald"
                      : "bg-white/[0.05] text-text-muted hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Shorts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredShorts.map((short) => (
              <ShortCard
                key={short.id}
                short={short}
                onSelect={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          LONG-FORM VIDEOS & DOCUMENTARIES (16:9)
          ============================================================ */}
      <section id="long-section" className="py-24 px-6 border-t border-white/[0.06] bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-2 block">Cinematic Storytelling</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Long-Form <span className="gradient-text">YouTube & Documentaries</span>
            </h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
              High-production YouTube explainers, multi-camera studio podcasts,
              and cinematic commercial films.
            </p>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {longCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setLongFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    longFilter === cat
                      ? "bg-accent-gradient text-bg shadow-glow-cyan"
                      : "bg-white/[0.05] text-text-muted hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Long Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLong.map((video) => (
              <LongVideoCard
                key={video.id}
                video={video}
                onSelect={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE EDITING WORKFLOW / SECRET SAUCE
          ============================================================ */}
      <section id="workflow-section" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label mb-2 block">Algorithmic Edge</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why My Edits <span className="gradient-text">Retain Viewers</span>
            </h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Every cut, sound effect, and subtitle is engineered for psychological engagement and retention curves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoEditorProfile.specialties.map((spec, idx) => (
              <div
                key={spec.title}
                className="glass-card p-8 rounded-3xl border border-white/[0.08] relative group hover:border-accent-emerald/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent-cyan tracking-wider uppercase">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SOFTWARE & TECH STACK
          ============================================================ */}
      <section id="gear-section" className="py-24 px-6 border-t border-white/[0.06] bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label mb-2 block">Tooling & Arsenal</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Production <span className="gradient-text">Software Stack</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mb-12 text-sm sm:text-base">
            Mastery across professional NLEs, color grading suites, and automated video processing tools.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {videoEditorProfile.skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-5 rounded-2xl border border-white/[0.08] text-left hover:border-accent-cyan/30 transition-all"
              >
                <span className="text-[11px] font-semibold text-accent-emerald uppercase tracking-wider block mb-1">
                  {skill.category}
                </span>
                <p className="font-display font-bold text-white text-base">
                  {skill.name}
                </p>
                <div className="w-full bg-white/[0.08] h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-accent-gradient h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HIRE / CALL TO ACTION & CONTACT
          ============================================================ */}
      <section className="py-24 px-6 border-t border-white/[0.06] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-10 sm:p-14 rounded-3xl border border-purple-500/30">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-wider uppercase bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald">
            <HiCheckCircle className="w-4 h-4" /> Available For Freelance & Long-Term Channels
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Have Raw Footage? Let's Turn It Into Gold.
          </h2>

          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need daily viral YouTube Shorts, podcast re-purposing, or cinematic long-form documentary edits, I deliver studio-grade turnaround.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:itsameerkhan03477@gmail.com?subject=Video%20Editing%20Project%20Inquiry"
              className="btn-primary px-8 py-4 text-base font-bold shadow-glow-emerald flex items-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              <span>Email Your Project Brief</span>
            </a>

            <button
              onClick={onBackToDev}
              className="btn-secondary px-8 py-4 text-base font-semibold"
            >
              ← Back to Developer Portfolio
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-white/[0.08] text-sm text-text-muted">
            <a
              href="https://www.linkedin.com/in/ameer-khan-93739a2a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin className="w-4 h-4 text-blue-400" /> LinkedIn
            </a>
            <a
              href="mailto:itsameerkhan03477@gmail.com"
              className="hover:text-accent-emerald transition-colors flex items-center gap-1.5"
            >
              <HiMail className="w-4 h-4 text-accent-emerald" /> itsameerkhan03477@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </motion.div>
  );
}
