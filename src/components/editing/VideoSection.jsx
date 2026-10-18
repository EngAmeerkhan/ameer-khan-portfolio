// ============================================================
// VideoSection.jsx
// Embedded Video Editing Portfolio Section for the main website.
// Displays featured shorts & long-form videos with YouTube,
// Instagram, and Google Drive links, plus a direct button to
// launch the dedicated Video Editing Website / Studio view.
// ============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import ShortCard from "./ShortCard";
import LongVideoCard from "./LongVideoCard";
import VideoPlayerModal from "./VideoPlayerModal";
import {
  videoEditorProfile,
  shortsVideos,
  longFormVideos,
} from "../../data/videoPortfolio";
import {
  HiFilm,
  HiLightningBolt,
  HiArrowRight,
  HiSparkles,
} from "react-icons/hi";
import { FaYoutube, FaInstagram, FaGoogleDrive } from "react-icons/fa";

export default function VideoSection({ onOpenFullStudio }) {
  const [activeTab, setActiveTab] = useState("shorts"); // 'shorts' | 'long'
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <SectionWrapper id="video-editing" className="py-28 px-6 relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f43f5e 0%, #8b5cf6 50%, #00d4ff 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-500/10 via-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-300">
            <HiFilm className="w-4 h-4 text-red-400" />
            Video Editing & Motion Design Showcase
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            High-Retention <span className="gradient-text">Video Portfolio</span>
          </h2>

          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            From viral 9:16 vertical reels to cinematic 16:9 documentaries.
            Equipped with Premiere Pro, DaVinci Resolve Studio, and custom sound design.
          </p>

          {/* Quick Platform Badges */}
          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-text-muted">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <FaYoutube className="w-3.5 h-3.5 text-red-500" /> YouTube & Shorts
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <FaInstagram className="w-3.5 h-3.5 text-pink-500" /> Instagram Reels
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <FaGoogleDrive className="w-3.5 h-3.5 text-green-500" /> Google Drive Renders
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {videoEditorProfile.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 sm:p-5 text-center flex flex-col items-center justify-center"
            >
              <span className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">
                {stat.value}
              </span>
              <span className="text-text-muted text-xs sm:text-sm mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Format Selector Tabs (Shorts vs Long Videos) */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("shorts")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
              activeTab === "shorts"
                ? "bg-accent-gradient text-bg shadow-glow-emerald"
                : "bg-white/[0.05] text-text-muted hover:text-white border border-white/[0.08]"
            }`}
          >
            <HiLightningBolt className="w-4 h-4" />
            Viral Shorts & Reels (9:16)
          </button>

          <button
            onClick={() => setActiveTab("long")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
              activeTab === "long"
                ? "bg-accent-gradient text-bg shadow-glow-cyan"
                : "bg-white/[0.05] text-text-muted hover:text-white border border-white/[0.08]"
            }`}
          >
            <HiFilm className="w-4 h-4" />
            Cinematic & Long-Form (16:9)
          </button>
        </div>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          {activeTab === "shorts" ? (
            <motion.div
              key="shorts-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
            >
              {shortsVideos.map((short) => (
                <ShortCard
                  key={short.id}
                  short={short}
                  onSelect={setSelectedVideo}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="long-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
            >
              {longFormVideos.map((video) => (
                <LongVideoCard
                  key={video.id}
                  video={video}
                  onSelect={setSelectedVideo}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dedicated Editing Studio Launcher Banner / Button */}
        <motion.div
          className="relative rounded-3xl p-8 sm:p-10 overflow-hidden glass-card border border-purple-500/30 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(16, 217, 160, 0.08) 50%, rgba(0, 212, 255, 0.12) 100%)",
          }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-accent-cyan bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <HiSparkles className="w-3.5 h-3.5" /> Full Studio Website Experience
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Looking for Ameer's Complete Video Editing Website?
            </h3>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Explore the dedicated video editing studio view with interactive client reels, breakdown workflows, color grading LUTs, and instant editing booking.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenFullStudio}
              className="btn-primary px-8 py-4 text-base font-bold shadow-2xl flex items-center gap-3 group"
            >
              <span>Explore Dedicated Editing Portfolio</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </SectionWrapper>
  );
}
