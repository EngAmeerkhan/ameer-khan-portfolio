// ============================================================
// ShortCard.jsx
// Interactive Instagram Reel preview card with instant hover playback.
// Plays smooth muted video preview on hover with 0 clicks required.
// Clicking the card opens the original Reel directly on Instagram.
// ============================================================
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPlay } from "react-icons/fa";
import { HiExternalLink, HiVolumeOff, HiSparkles } from "react-icons/hi";

export default function ShortCard({ short }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // 60ms debounce for instant yet silky smooth hover triggering
    hoverTimeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Browser autoplay policy fallback
              setIsPlaying(false);
            });
        }
      }
    }, 60);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const reelLink = short.instagramUrl || short.driveUrl || "#";

  return (
    <motion.a
      href={reelLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 hover:border-pink-500/60 shadow-xl transition-all duration-300 block bg-neutral-950"
      whileHover={{ y: -6, scale: 1.02 }}
      aria-label={short.title || "Watch Reel on Instagram"}
    >
      {/* 9:16 Vertical Reel Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-950">
        {/* 1. Base Poster Thumbnail */}
        <img
          src={short.thumbnail}
          alt={short.title || "Reel Preview"}
          className={`w-full h-full object-cover transition-all duration-500 ease-out ${
            isPlaying ? "opacity-0 scale-105" : "opacity-100 group-hover:scale-105"
          }`}
          loading="lazy"
        />

        {/* 2. Instant HTML5 Hover Video Player */}
        {short.previewVideo && (
          <video
            ref={videoRef}
            src={short.previewVideo}
            muted
            loop
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setProgress(0)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        )}

        {/* 3. Static Play Overlay (shown before hover) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform duration-300">
              {/* Instagram Gradient Play Button */}
              <div
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  boxShadow: "0 0 25px rgba(220, 39, 67, 0.5)",
                }}
              >
                <FaPlay className="w-5 h-5 ml-0.5 text-white drop-shadow-md" />
              </div>

              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
                <HiSparkles className="w-3.5 h-3.5 text-pink-400" />
                Hover to Preview
              </span>
            </div>
          </div>
        )}

        {/* 4. Active Live Preview Indicator (shown during hover playback) */}
        {isPlaying && (
          <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-gradient-to-r from-pink-600 to-rose-600 text-white backdrop-blur-md shadow-lg border border-pink-400/40 pointer-events-none animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Live Preview</span>
            <HiVolumeOff className="w-3.5 h-3.5 ml-0.5 opacity-90" />
          </div>
        )}

        {/* 5. Category / Tag Badge (when not playing) */}
        {!isPlaying && short.tag && (
          <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-pink-300 border border-white/10 pointer-events-none">
            {short.tag}
          </div>
        )}

        {/* 6. Top Right Instagram Icon Badge */}
        <div
          className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-xl text-white shadow-lg pointer-events-none transition-transform group-hover:scale-110"
          style={{
            background:
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
          }}
          title="Instagram Reel"
        >
          <FaInstagram className="w-3.5 h-3.5 text-white" />
        </div>

        {/* 7. Bottom Title & Information Bar */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-3 pt-8 bg-gradient-to-t from-black/95 via-black/75 to-transparent pointer-events-none transition-all duration-300">
          {short.title && (
            <p className="text-xs font-semibold text-white line-clamp-2 leading-snug drop-shadow-md">
              {short.title}
            </p>
          )}

          {short.creator && (
            <p className="text-[11px] text-pink-300/90 font-medium truncate mt-0.5">
              {short.creator}
            </p>
          )}

          <div className="flex items-center justify-between text-[10px] text-text-muted mt-2 pt-1 border-t border-white/10">
            <span className="text-pink-400 group-hover:text-pink-300 font-medium flex items-center gap-1 transition-colors">
              Open on Instagram <HiExternalLink className="w-3 h-3 inline" />
            </span>
            {isPlaying && (
              <span className="text-white/80 text-[9px] bg-white/10 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10">
                Muted
              </span>
            )}
          </div>
        </div>

        {/* 8. Playback Progress Bar */}
        {isPlaying && (
          <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/20 overflow-hidden pointer-events-none">
            <div
              className="h-full transition-all duration-150"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
                boxShadow: "0 0 8px rgba(220, 39, 67, 0.8)",
              }}
            />
          </div>
        )}
      </div>
    </motion.a>
  );
}
