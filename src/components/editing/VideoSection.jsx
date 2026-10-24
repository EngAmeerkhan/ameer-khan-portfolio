// ============================================================
// VideoSection.jsx
// Minimalist, streamlined Video Editing Portfolio section for main page.
// Shows Instagram Reels previews with instant hover playback
// and AI YouTube Automation channels (YouTube links).
// ============================================================
import SectionWrapper from "../ui/SectionWrapper";
import ShortCard from "./ShortCard";
import AutomationChannelCard from "./AutomationChannelCard";
import {
  shortsVideos,
  youtubeAutomationChannels,
} from "../../data/videoPortfolio";
import { HiArrowRight, HiFilm, HiSparkles } from "react-icons/hi";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function VideoSection({ onOpenFullStudio }) {
  return (
    <SectionWrapper id="video-editing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Small, Clean Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-3 text-xs font-bold tracking-wider uppercase bg-white/[0.04] border border-white/10 text-accent-emerald">
            <HiFilm className="w-3.5 h-3.5" />
            Video Editing Portfolio
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Video <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-text-muted mt-2 text-sm sm:text-base max-w-lg mx-auto">
            Interactive video previews for Instagram Reels and YouTube Automation channels.
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
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="w-2 h-5 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
              }}
            />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Shorts & Reels
            </h3>
            <span className="text-xs text-text-muted ml-2">
              (Hover to preview instantly · Click to open on Instagram)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {shortsVideos.map((short) => (
              <ShortCard key={short.id} short={short} />
            ))}
          </div>
        </div>

        {/* 3. YouTube Automation for AI Videos Channels */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-5 rounded-full bg-red-500" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              YouTube Automation (AI Video Channels)
            </h3>
            <span className="text-xs text-text-muted ml-2">
              (Hover to preview instantly · Click to watch on YouTube)
            </span>
          </div>

          <div>
            {youtubeAutomationChannels.map((channel) => (
              <AutomationChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </div>

        {/* Dedicated Editing Studio Button */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenFullStudio}
            className="btn-primary px-8 py-3.5 text-sm sm:text-base font-bold inline-flex items-center gap-3 shadow-glow-emerald"
          >
            <HiSparkles className="w-4 h-4" />
            <span>Open Dedicated Video Editing Website</span>
            <HiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
