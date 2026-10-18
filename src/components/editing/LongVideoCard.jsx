// ============================================================
// LongVideoCard.jsx
// Minimalist 16:9 widescreen video preview card without clutter or text.
// Pure video preview that directly opens the Google Drive link.
// ============================================================
import { motion } from "framer-motion";
import { FaGoogleDrive, FaPlay } from "react-icons/fa";

export default function LongVideoCard({ video }) {
  return (
    <motion.a
      href={video.driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 hover:border-cyan-400/50 shadow-xl transition-all duration-300"
      whileHover={{ y: -6, scale: 1.02 }}
      aria-label="Watch video on Google Drive"
    >
      {/* 16:9 Widescreen Video Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
        <img
          src={video.thumbnail}
          alt="Video Preview"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
        />

        {/* Cinematic gradient overlay on hover */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
          {/* Hover Play & Drive Overlay */}
          <div className="flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform duration-300">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #10d9a0 100%)",
                boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)",
              }}
            >
              <FaPlay className="w-5 h-5 ml-0.5 text-bg" />
            </div>

            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/70 backdrop-blur-md border border-white/20 opacity-90 group-hover:opacity-100">
              <FaGoogleDrive className="w-3.5 h-3.5 text-emerald-400" />
              Drive Preview
            </span>
          </div>
        </div>

        {/* Sleek top corner drive indicator */}
        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
          <FaGoogleDrive className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}
