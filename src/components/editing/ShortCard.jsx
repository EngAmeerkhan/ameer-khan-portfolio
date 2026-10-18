// ============================================================
// ShortCard.jsx
// Eye-catching 9:16 vertical smartphone reel card with play preview,
// views count, and direct YouTube / Instagram / Google Drive links.
// ============================================================
import { useState } from "react";
import { motion } from "framer-motion";
import { HiPlay, HiClock, HiEye } from "react-icons/hi";
import { FaYoutube, FaInstagram, FaGoogleDrive } from "react-icons/fa";

export default function ShortCard({ short, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col rounded-3xl overflow-hidden glass-card group cursor-pointer border border-white/10 transition-all duration-300"
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(short)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(short)}
      aria-label={`Preview short: ${short.title}`}
    >
      {/* 9:16 Vertical Thumbnail Frame */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-950">
        <img
          src={short.thumbnail}
          alt={short.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges: Category & Duration */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span
            className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-md"
            style={{
              background: "rgba(16, 217, 160, 0.2)",
              backdropFilter: "blur(8px)",
              color: "#10d9a0",
              border: "1px solid rgba(16, 217, 160, 0.4)",
            }}
          >
            {short.category}
          </span>

          <span
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold text-white/90 shadow-md"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <HiClock className="w-3 h-3 text-accent-cyan" />
            {short.duration}
          </span>
        </div>

        {/* Center Hover Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, #10d9a0 0%, #00d4ff 100%)"
                : "rgba(0, 0, 0, 0.55)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transform: isHovered ? "scale(1.15)" : "scale(1)",
              boxShadow: isHovered
                ? "0 0 30px rgba(16, 217, 160, 0.6)"
                : "0 8px 24px rgba(0,0,0,0.5)",
            }}
          >
            <HiPlay className="w-7 h-7 ml-1 text-white" />
          </motion.div>
        </div>

        {/* Bottom Metadata Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex flex-col justify-end">
          {/* Views count chip */}
          {short.views && (
            <div className="flex items-center gap-1.5 text-xs text-text-primary/90 font-medium mb-1.5">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10">
                <HiEye className="w-3.5 h-3.5 text-accent-emerald" />
                {short.views} Views
              </span>
            </div>
          )}

          {/* Title */}
          <h4 className="font-display font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-accent-emerald transition-colors duration-200">
            {short.title}
          </h4>

          {/* Quick External Icons (clickable without opening modal if desired) */}
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-white/10">
            <span className="text-[11px] text-text-subtle uppercase tracking-wider font-semibold">
              Links:
            </span>

            {short.youtubeUrl && (
              <a
                href={short.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-white transition-all border border-red-500/30 hover:scale-110"
                title="Watch on YouTube"
                aria-label="Watch on YouTube"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            )}

            {short.instagramUrl && (
              <a
                href={short.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 text-pink-400 hover:text-white transition-all border border-pink-500/30 hover:scale-110"
                title="Watch on Instagram"
                aria-label="Watch on Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            )}

            {short.driveUrl && (
              <a
                href={short.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 hover:text-white transition-all border border-emerald-500/30 hover:scale-110"
                title="Google Drive Link"
                aria-label="Google Drive Link"
              >
                <FaGoogleDrive className="w-3.5 h-3.5" />
              </a>
            )}

            <span className="ml-auto text-[11px] font-medium text-accent-cyan flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
              Watch Preview →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
