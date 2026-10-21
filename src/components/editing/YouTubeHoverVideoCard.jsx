// ============================================================
// YouTubeHoverVideoCard.jsx
// Interactive YouTube video card that plays a silent, fluid video
// preview when the user hovers over the card, and opens the
// video directly on YouTube upon clicking.
// ============================================================
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaPlay } from "react-icons/fa";
import { HiExternalLink, HiVolumeOff } from "react-icons/hi";

// Robust YouTube ID extractor for youtu.be, shorts, watch?v=, and embed formats
export function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export default function YouTubeHoverVideoCard({
  video,
  aspectRatio = "16/9",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hoverTimerRef = useRef(null);

  const videoId = extractYouTubeId(video.youtubeUrl);
  const isVertical = aspectRatio === "9/16";

  // Use defined thumbnail, or YouTube maxresdefault thumbnail as fallback
  const thumbnailSrc =
    video.thumbnail ||
    (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "");

  // Hover triggers autoplay with a brief 120ms debounce to prevent iframe thrashing
  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverTimerRef.current = setTimeout(() => {
      setIsPlaying(true);
    }, 120);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsHovered(false);
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <motion.a
      href={video.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 hover:border-red-500/60 shadow-xl transition-all duration-300 block bg-neutral-950 ${
        isVertical ? "aspect-[9/16]" : "aspect-video"
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      aria-label={video.title || "Watch on YouTube"}
    >
      {/* 1. Base Static Thumbnail */}
      <img
        src={thumbnailSrc}
        alt={video.title || "Video Preview"}
        onError={(e) => {
          if (videoId && !e.currentTarget.dataset.triedHq) {
            e.currentTarget.dataset.triedHq = "true";
            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }
        }}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* 2. YouTube Inline Hover Player */}
      {isPlaying && videoId && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none rounded-2xl bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0`}
            title={video.title || "YouTube video preview"}
            className="w-[106%] h-[106%] -left-[3%] -top-[3%] absolute border-0 pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="eager"
          />
        </div>
      )}

      {/* 3. Static Hover Play Overlay (when not actively playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-1.5 transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-600 text-white shadow-2xl">
              <FaPlay className="w-4 h-4 ml-0.5" />
            </div>
            <span className="text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-md">
              Hover to Preview
            </span>
          </div>
        </div>
      )}

      {/* 4. Active Live Preview Badge */}
      {isPlaying && (
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-red-600/95 text-white backdrop-blur-md shadow-lg border border-red-400/40 pointer-events-none animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>Live Preview</span>
          <HiVolumeOff className="w-3.5 h-3.5 ml-0.5 opacity-90" />
        </div>
      )}

      {/* 5. Top Right YouTube Icon */}
      <div className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-red-400 border border-white/10 pointer-events-none transition-transform group-hover:scale-110 shadow-md">
        <FaYoutube className="w-3.5 h-3.5" />
      </div>

      {/* 6. Bottom Title Bar with smooth gradient */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-3 pt-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent pointer-events-none transition-all duration-300">
        {video.title && (
          <p className="text-xs font-semibold text-white line-clamp-1 group-hover:line-clamp-2 transition-all leading-snug drop-shadow-sm">
            {video.title}
          </p>
        )}
        <div className="flex items-center justify-between text-[10px] text-text-muted mt-1.5">
          <span className="text-red-400 group-hover:text-red-300 font-medium flex items-center gap-1 transition-colors">
            Click to open on YouTube <HiExternalLink className="w-3 h-3 inline" />
          </span>
          {isPlaying && (
            <span className="text-white/70 text-[9px] bg-white/10 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10">
              Muted
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}
