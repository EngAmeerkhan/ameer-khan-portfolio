// ============================================================
// AnimatedBackground.jsx
// Decorative animated gradient blobs + subtle grid — stays fixed
// ============================================================
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Ambient blob — top left */}
      <motion.div
        className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #10d9a0 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient blob — bottom right */}
      <motion.div
        className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Accent blob — center right */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #10d9a0 0%, #00d4ff 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top-edge glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,217,160,0.4), transparent)",
        }}
      />
    </div>
  );
}
