// ============================================================
// YouTubeHoverVideoCard.jsx
// Interactive YouTube video card that plays a silent, fluid video
// preview when the user hovers over the card (zero clicks needed),
// and opens the video directly on YouTube upon clicking.
// Uses ultra-fast local MP4 preview if available, with YouTube
// embed iframe fallback.
// ============================================================
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaPlay } from "react-icons/fa";
import { HiExternalLink, HiVolumeOff, HiSparkles } from "react-icons/hi";

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
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const hoverTimerRef = useRef(null);

  const videoId = extractYouTubeId(video.youtubeUrl);
  const isVertical = aspectRatio === "9/16";

  // Use defined thumbnail, or YouTube maxresdefault thumbnail as fallback
  const thumbnailSrc =
    video.thumbnail ||
    (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "");

  // Hover triggers autoplay smoothly with a brief 50ms debounce
  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverTimerRef.current = setTimeout(() => {
      if (video.previewVideo && videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      } else {
        setIsPlaying(true);
      }
    }, 50);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsHovered(false);
    setIsPlaying(false);
    setProgress(0);
    if (video.previewVideo && videoRef.current) {
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
      whileHover={{ y: -6, scale: 1.02 }}
      aria-label={video.title || "Watch on YouTube"}
    >
      {/* 1. Base Static Thumbnail Image */}
      <img
        src={thumbnailSrc}
        alt={video.title || "Video Preview"}
        onError={(e) => {
          if (videoId && !e.currentTarget.dataset.triedHq) {
            e.currentTarget.dataset.triedHq = "true";
            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }
        }}
        className={`w-full h-full object-cover transition-all duration-500 ease-out ${
          isPlaying && video.previewVideo
            ? "opacity-0 scale-105"
            : "opacity-100 group-hover:scale-105"
        }`}
        loading="lazy"
      />

      {/* 2A. High-Speed Local Video Player (Instant Hover Preview) */}
      {video.previewVideo && (
        <video
          ref={videoRef}
          src={video.previewVideo}
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

      {/* 2B. YouTube Inline Iframe Player (Fallback when no local preview clip) */}
      {!video.previewVideo && isPlaying && videoId && (
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
          <div className="flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform duration-300">
            <div
              className={`rounded-full flex items-center justify-center bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-105 ${
                isVertical ? "w-12 h-12" : "w-14 h-14 sm:w-16 sm:h-16"
              }`}
            >
              <FaPlay className={`${isVertical ? "w-4 h-4" : "w-5 h-5"} ml-0.5`} />
            </div>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-lg">
              <HiSparkles className="w-3.5 h-3.5 text-red-400" />
              Hover to Preview
            </span>
          </div>
        </div>
      )}

      {/* 4. Active Live Preview Badge */}
      {isPlaying && (
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-red-600 text-white backdrop-blur-md shadow-lg border border-red-400/40 pointer-events-none animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>Live Preview</span>
          <HiVolumeOff className="w-3.5 h-3.5 ml-0.5 opacity-90" />
        </div>
      )}

      {/* 4B. High-Performance View Count Badge (when not previewing) */}
      {!isPlaying && video.views && (
        <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-black/85 backdrop-blur-md text-amber-300 border border-amber-400/35 flex items-center gap-1 shadow-lg pointer-events-none">
          <span>🔥</span>
          <span>{video.views}</span>
        </div>
      )}

      {/* 5. Top Right YouTube Icon Badge */}
      <div
        className={`absolute top-2.5 right-2.5 z-20 rounded-xl bg-black/75 backdrop-blur-md text-red-500 border border-white/10 pointer-events-none transition-transform group-hover:scale-110 shadow-lg ${
          isVertical ? "p-1.5" : "p-2"
        }`}
      >
        <FaYoutube className={isVertical ? "w-3.5 h-3.5" : "w-4 h-4"} />
      </div>

      {/* 6. Bottom Title Bar with smooth gradient */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent pointer-events-none transition-all duration-300 ${
          isVertical ? "p-3 pt-10" : "p-4 sm:p-5 pt-12"
        }`}
      >
        {video.title && (
          <p
            className={`font-bold text-white line-clamp-2 leading-snug drop-shadow-md ${
              isVertical ? "text-xs" : "text-sm sm:text-base"
            }`}
          >
            {video.title}
          </p>
        )}
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-text-muted mt-2 pt-1 border-t border-white/10">
          <span className="text-red-400 group-hover:text-red-300 font-semibold flex items-center gap-1 transition-colors">
            {isVertical ? "Watch Short" : "Watch on YouTube"}{" "}
            <HiExternalLink className="w-3.5 h-3.5 inline" />
          </span>
          {isPlaying && (
            <span className="text-white/80 text-[9px] sm:text-[10px] bg-white/10 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10">
              Muted
            </span>
          )}
        </div>
      </div>

      {/* 7. Video Progress Bar */}
      {isPlaying && video.previewVideo && (
        <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/20 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-red-600 transition-all duration-150"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 8px rgba(239, 68, 68, 0.9)",
            }}
          />
        </div>
      )}
    </motion.a>
  );
}
