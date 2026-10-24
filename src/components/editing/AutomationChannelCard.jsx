// ============================================================
// AutomationChannelCard.jsx
// YouTube Automation channel showcase card with channel branding
// and large, prominent preview cards for AI Videos (16:9).
// Instant fluid video preview on hover without clicking play.
// Clicking any video opens its YouTube link directly.
// ============================================================
import { FaYoutube } from "react-icons/fa";
import { HiExternalLink, HiPlay } from "react-icons/hi";
import YouTubeHoverVideoCard from "./YouTubeHoverVideoCard";

export default function AutomationChannelCard({ channel }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden mb-12 shadow-2xl">
      {/* Channel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
        <div className="flex items-center gap-4">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-purple-500/30 shadow-lg"
          />
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {channel.name}
            </h3>
            <span className="text-xs text-text-muted flex items-center gap-1.5 mt-1">
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-md"
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

      {/* Featured Long Videos (Bigger, Cinematic 2-Column Grid) */}
      {channel.longVideos && channel.longVideos.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-red-500" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                Featured Channel Videos
              </h4>
            </div>
            <span className="text-xs text-text-muted flex items-center gap-1">
              <HiPlay className="w-3.5 h-3.5 text-red-400" />
              Hover to preview instantly · Click to watch
            </span>
          </div>

          <div
            className={`grid gap-6 sm:gap-8 ${
              channel.longVideos.length === 1
                ? "grid-cols-1 max-w-2xl"
                : "grid-cols-1 md:grid-cols-2"
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
  );
}
