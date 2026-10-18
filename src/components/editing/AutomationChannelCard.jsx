// ============================================================
// AutomationChannelCard.jsx
// YouTube Automation channel showcase card with channel branding
// and preview cards for AI Shorts (9:16) & Long Videos (16:9).
// Clicking any video opens its YouTube link directly.
// ============================================================
import { motion } from "framer-motion";
import { FaYoutube, FaPlay } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

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
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-4 rounded-full bg-red-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                AI Shorts
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {channel.shorts.map((short) => (
                <motion.a
                  key={short.id}
                  href={short.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 hover:border-red-500/50 shadow-md transition-all duration-300 block"
                  whileHover={{ y: -4, scale: 1.02 }}
                  aria-label="Watch Short on YouTube"
                >
                  <img
                    src={short.thumbnail}
                    alt="Short Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1.5 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-red-600 text-white shadow-xl">
                        <FaPlay className="w-4 h-4 ml-0.5" />
                      </div>
                      <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                        YouTube
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-2.5 right-2.5 p-1 rounded-md bg-black/60 text-red-400">
                    <FaYoutube className="w-3 h-3" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Long Videos Preview Row */}
        {channel.longVideos && channel.longVideos.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-4 rounded-full bg-cyan-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                AI Long Videos
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {channel.longVideos.map((video) => (
                <motion.a
                  key={video.id}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 hover:border-red-500/50 shadow-md transition-all duration-300 block"
                  whileHover={{ y: -4, scale: 1.02 }}
                  aria-label="Watch Video on YouTube"
                >
                  <img
                    src={video.thumbnail}
                    alt="Video Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1.5 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-red-600 text-white shadow-xl">
                        <FaPlay className="w-4 h-4 ml-0.5" />
                      </div>
                      <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                        YouTube
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-2.5 right-2.5 p-1 rounded-md bg-black/60 text-red-400">
                    <FaYoutube className="w-3 h-3" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
