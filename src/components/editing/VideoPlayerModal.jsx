// ============================================================
// VideoPlayerModal.jsx
// Interactive video player overlay supporting YouTube embeds,
// Instagram reels direct link, and Google Drive master previews.
// Responsive 9:16 vertical & 16:9 widescreen viewports.
// ============================================================
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiX,
  HiExternalLink,
  HiPlay,
  HiEye,
  HiClock,
  HiSparkles,
} from "react-icons/hi";
import { FaYoutube, FaInstagram, FaGoogleDrive } from "react-icons/fa";

export default function VideoPlayerModal({ video, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!video) return null;

  const isVertical = video.aspectRatio === "9:16";

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
      >
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl my-auto rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl z-10"
          style={{
            background: "linear-gradient(145deg, rgba(15, 15, 26, 0.98) 0%, rgba(9, 9, 15, 0.99) 100%)",
          }}
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full text-text-muted hover:text-white transition-all bg-black/40 hover:bg-white/10 border border-white/10"
            aria-label="Close modal"
          >
            <HiX className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-12 gap-0 overflow-hidden">
            {/* Left / Top: Video Player Frame */}
            <div
              className={`md:col-span-7 bg-black flex items-center justify-center relative p-3 sm:p-4 min-h-[300px] ${
                isVertical ? "sm:min-h-[460px]" : "sm:min-h-[360px]"
              }`}
            >
              {video.youtubeEmbedId ? (
                <div
                  className={`w-full relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 ${
                    isVertical
                      ? "max-w-[280px] aspect-[9/16]"
                      : "w-full aspect-video"
                  }`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeEmbedId}?autoplay=1&rel=0&modestbranding=1`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                /* Fallback preview thumbnail with play button */
                <div
                  className={`relative w-full rounded-2xl overflow-hidden group ${
                    isVertical
                      ? "max-w-[280px] aspect-[9/16]"
                      : "w-full aspect-video"
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <a
                      href={video.youtubeUrl || video.instagramUrl || video.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-red-600/90 text-white shadow-xl hover:scale-110 transition-transform"
                    >
                      <HiPlay className="w-8 h-8 ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right / Bottom: Video Details & Links */}
            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/[0.08]">
              <div>
                {/* Category & Duration badges */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(16,217,160,0.12)",
                      color: "#10d9a0",
                      border: "1px solid rgba(16,217,160,0.25)",
                    }}
                  >
                    {video.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-text-muted bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                    <HiClock className="w-3.5 h-3.5 text-accent-cyan" />
                    {video.duration}
                  </span>
                  {video.views && (
                    <span className="flex items-center gap-1 text-xs text-text-muted bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                      <HiEye className="w-3.5 h-3.5 text-accent-emerald" />
                      {video.views} Views
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug mb-2">
                  {video.title}
                </h3>

                {/* Client / Channel */}
                {video.client && (
                  <p className="text-xs text-accent-cyan mb-4 font-medium">
                    Client / Channel: {video.client}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {video.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {video.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-text-primary border border-white/[0.06]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Software Used */}
                {video.software && (
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-text-subtle font-semibold mb-2">
                      Tools & Software Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {video.software.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium text-text-primary"
                          style={{
                            background: "rgba(0, 212, 255, 0.08)",
                            border: "1px solid rgba(0, 212, 255, 0.2)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Links Buttons: YouTube, Instagram, Google Drive */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <p className="text-xs font-semibold tracking-wider uppercase text-text-subtle mb-1 flex items-center gap-1.5">
                  <HiSparkles className="w-3.5 h-3.5 text-accent-emerald" />
                  Direct Source & Preview Links:
                </p>

                {/* YouTube Link */}
                {video.youtubeUrl && (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 group hover:scale-[1.02]"
                    style={{
                      background: "rgba(239, 68, 68, 0.15)",
                      border: "1px solid rgba(239, 68, 68, 0.35)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <FaYoutube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                      Watch on YouTube {isVertical ? "Shorts" : ""}
                    </span>
                    <HiExternalLink className="w-4 h-4 text-red-400 opacity-70 group-hover:opacity-100" />
                  </a>
                )}

                {/* Instagram Link */}
                {video.instagramUrl && (
                  <a
                    href={video.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 group hover:scale-[1.02]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(225, 48, 108, 0.15) 0%, rgba(131, 58, 180, 0.15) 100%)",
                      border: "1px solid rgba(225, 48, 108, 0.35)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <FaInstagram className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                      View on Instagram Reels
                    </span>
                    <HiExternalLink className="w-4 h-4 text-pink-400 opacity-70 group-hover:opacity-100" />
                  </a>
                )}

                {/* Google Drive Link */}
                {video.driveUrl && (
                  <a
                    href={video.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 group hover:scale-[1.02]"
                    style={{
                      background: "rgba(34, 197, 94, 0.12)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <FaGoogleDrive className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                      Access Google Drive File / Render
                    </span>
                    <HiExternalLink className="w-4 h-4 text-green-400 opacity-70 group-hover:opacity-100" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
