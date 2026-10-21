// ============================================================
// AutomationChannelCard.jsx
// YouTube Automation channel showcase card with channel branding
// and preview cards for AI Shorts (9:16) & Long Videos (16:9).
// Clicking any video opens its YouTube link directly.
// ============================================================
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import YouTubeHoverVideoCard from "./YouTubeHoverVideoCard";

export default function AutomationChannelCard({ channel }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden mb-10">
      {/* Channel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
        <div className="flex items-center gap-4">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="w-14 h-14 rounded-2xl object-cover border border-purple-500/30 shadow-lg"
          />
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {channel.name}
            </h3>
            <span className="text-xs text-text-muted flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              AI Automation YouTube Channel
            </span>
          </div>
        </div>

        {/* Visit Channel Button */}
        {channel.channelUrl && (
          <a
            href={channel.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
            }}
          >
            <FaYoutube className="w-4 h-4 text-red-500" />
            <span>Visit Channel</span>
            <HiExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}
      </div>

      {/* Channel Content Grid: Shorts & Long Videos */}
      <div className="space-y-6">
        {/* Shorts Preview Row */}
        {channel.shorts && channel.shorts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-red-500" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  AI Shorts
                </h4>
              </div>
              <span className="text-[11px] text-text-muted">
                Hover to play preview
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {channel.shorts.map((short) => (
                <YouTubeHoverVideoCard
                  key={short.id}
                  video={short}
                  aspectRatio="9/16"
                />
              ))}
            </div>
          </div>
        )}

        {/* Long Videos Preview Row */}
        {channel.longVideos && channel.longVideos.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-cyan-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                  AI Long Videos
                </h4>
              </div>
              <span className="text-[11px] text-text-muted">
                Hover to play preview · Click to watch
              </span>
            </div>

            <div
              className={`grid gap-4 ${
                channel.longVideos.length === 1
                  ? "grid-cols-1 max-w-xl"
                  : channel.longVideos.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : channel.longVideos.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
              }`}
            >
              {channel.longVideos.map((video) => (
                <YouTubeHoverVideoCard
                  key={video.id}
                  video={video}
                  aspectRatio="16/9"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

