// ============================================================
// VideoPortfolioPage.jsx
// Dedicated Video Editing Website.
// Minimalist, streamlined view showing:
// 1. Small intro with heading
// 2. Shorts & Reels previews (Instagram Reels with instant hover playback)
// 3. YouTube Automation for AI Videos Channels (YouTube links)
// ============================================================
import { useEffect } from "react";
import { motion } from "framer-motion";
import ShortCard from "./ShortCard";
import AutomationChannelCard from "./AutomationChannelCard";
import {
  shortsVideos,
  youtubeAutomationChannels,
} from "../../data/videoPortfolio";
import { HiArrowLeft, HiMail } from "react-icons/hi";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function VideoPortfolioPage({ onBackToDev }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-bg text-text-primary relative selection:bg-accent-cyan/30"
    >
      {/* Sticky Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-white/[0.08] shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={onBackToDev}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-text-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
            aria-label="Back to Developer Portfolio"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Developer Portfolio</span>
          </button>

          <span className="font-display font-bold text-base sm:text-lg text-white">
            Ameer Khan <span className="gradient-text">· Video Editor</span>
          </span>

          {/* Quick Contact button */}
          <a
            href="mailto:itsameerkhan03477@gmail.com?subject=Video%20Editing%20Inquiry"
            className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5"
          >
            <HiMail className="w-4 h-4" />
            <span className="hidden sm:inline">Get In Touch</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Small Intro with Heading */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-3">
            Video Editing <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
            High-retention Instagram Reels and AI YouTube Automation channels.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-pink-500/20 text-pink-300">
              <FaInstagram className="w-3.5 h-3.5 text-pink-500" /> Instagram Reels (Hover to Preview)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <FaYoutube className="w-3.5 h-3.5 text-red-500" /> YouTube AI Channels
            </span>
          </div>
        </div>

        {/* 1. Shorts & Reels Section (Instagram Reels with Instant Hover Preview) */}
        <section id="shorts" className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="w-2 h-5 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
              }}
            />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Shorts & Reels
            </h2>
            <span className="text-xs text-text-muted ml-2">
              (Hover to preview instantly · Click to open on Instagram)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {shortsVideos.map((short) => (
              <ShortCard key={short.id} short={short} />
            ))}
          </div>
        </section>

        {/* 3. YouTube Automation for AI Videos (Channels) */}
        <section id="automation" className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-5 rounded-full bg-red-500" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              YouTube Automation (AI Video Channels)
            </h2>
            <span className="text-xs text-text-muted ml-2">
              (Hover to preview instantly · Click to watch on YouTube)
            </span>
          </div>

          <div>
            {youtubeAutomationChannels.map((channel) => (
              <AutomationChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="text-center pt-8 border-t border-white/[0.08]">
          <button
            onClick={onBackToDev}
            className="btn-secondary px-8 py-3.5 text-sm sm:text-base font-semibold"
          >
            ← Back to Developer Portfolio
          </button>
        </div>
      </main>
    </motion.div>
  );
}
