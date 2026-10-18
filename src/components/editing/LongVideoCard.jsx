// ============================================================
// LongVideoCard.jsx
// 16:9 cinematic widescreen card for long-form video editing projects,
// documentaries, podcasts, and commercial showcases.
// ============================================================
import { useState } from "react";
import { motion } from "framer-motion";
import { HiPlay, HiClock, HiEye, HiArrowRight } from "react-icons/hi";
import { FaYoutube, FaInstagram, FaGoogleDrive } from "react-icons/fa";

export default function LongVideoCard({ video, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="glass-card group overflow-hidden flex flex-col rounded-2xl border border-white/10 transition-all duration-300"
      whileHover={{ y: -6, scale: 1.01 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(video)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(video)}
      aria-label={`Open preview for ${video.title}`}
    >
      {/* 16:9 Cinematic Video Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-950 flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md"
            style={{
              background: "rgba(0, 212, 255, 0.2)",
              backdropFilter: "blur(8px)",
              color: "#00d4ff",
              border: "1px solid rgba(0, 212, 255, 0.4)",
            }}
          >
            {video.category}
          </span>

          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-md"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <HiClock className="w-3.5 h-3.5 text-accent-cyan" />
            {video.duration}
          </span>
        </div>

        {/* Hover Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, #10d9a0 0%, #00d4ff 100%)"
                : "rgba(0, 0, 0, 0.6)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transform: isHovered ? "scale(1.15)" : "scale(1)",
              boxShadow: isHovered
                ? "0 0 30px rgba(0, 212, 255, 0.6)"
                : "0 8px 24px rgba(0,0,0,0.5)",
            }}
          >
            <HiPlay className="w-7 h-7 ml-1 text-white" />
          </motion.div>
        </div>

        {/* Views counter badge */}
        {video.views && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-white/90 bg-black/60 backdrop-blur-md border border-white/10">
              <HiEye className="w-3.5 h-3.5 text-accent-emerald" />
              {video.views} Views
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Client / Channel */}
          {video.client && (
            <p className="text-xs text-accent-emerald font-semibold uppercase tracking-wider mb-1.5">
              {video.client}
            </p>
          )}

          {/* Title */}
          <h3 className="font-display font-bold text-text-primary text-lg leading-snug mb-2 group-hover:text-accent-cyan transition-colors duration-200">
            {video.title}
          </h3>

          {/* Short description */}
          <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {video.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {video.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-text-muted border border-white/[0.06]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: External Links & Preview Button */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          {/* External links */}
          <div className="flex items-center gap-2">
            {video.youtubeUrl && (
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-red-600/15 hover:bg-red-600/30 text-red-400 hover:text-white transition-all border border-red-500/25 hover:scale-110"
                title="Watch on YouTube"
                aria-label="Watch on YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            )}

            {video.instagramUrl && (
              <a
                href={video.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-pink-600/15 hover:bg-pink-600/30 text-pink-400 hover:text-white transition-all border border-pink-500/25 hover:scale-110"
                title="View on Instagram"
                aria-label="View on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            )}

            {video.driveUrl && (
              <a
                href={video.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-emerald-600/15 hover:bg-emerald-600/30 text-emerald-400 hover:text-white transition-all border border-emerald-500/25 hover:scale-110"
                title="Google Drive Link"
                aria-label="Google Drive Link"
              >
                <FaGoogleDrive className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Details CTA */}
          <button
            onClick={() => onSelect(video)}
            className="flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:text-accent-emerald transition-colors"
          >
            Watch Preview <HiArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
