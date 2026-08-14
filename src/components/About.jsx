// ============================================================
// About.jsx
// Bio, animated counter stats, and optional second photo
// ============================================================
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { StaggerContainer, StaggerItem } from "./ui/SectionWrapper";
import { HiCode, HiAcademicCap, HiLightningBolt, HiClock } from "react-icons/hi";

// ---- Animated counter hook ----
function useCounter(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
}

// ---- Single stat card ----
function StatCard({ icon: Icon, label, value, suffix = "", color, trigger }) {
  const count = useCounter(value, 1800, trigger);
  return (
    <motion.div
      className="glass-card p-6 flex flex-col items-center text-center"
      whileHover={{ scale: 1.04 }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `rgba(16,217,160,0.1)`, border: "1px solid rgba(16,217,160,0.2)" }}
      >
        <Icon className="w-6 h-6 text-accent-emerald" />
      </div>
      <span className="font-display text-4xl font-bold gradient-text">
        {count}{suffix}
      </span>
      <span className="text-text-muted text-sm mt-1 font-medium">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: HiCode, label: "Projects Completed", value: 10, suffix: "+", color: "emerald" },
    { icon: HiAcademicCap, label: "Certifications Earned", value: 5, suffix: "", color: "cyan" },
    { icon: HiLightningBolt, label: "Technologies Learned", value: 20, suffix: "+", color: "teal" },
    { icon: HiClock, label: "Years of Learning", value: 3, suffix: "+", color: "violet" },
  ];

  return (
    <SectionWrapper id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Bio + photo grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
              {/* TODO: Customize with your real bio */}
              <p>
                I'm a passionate{" "}
                <span className="text-text-primary font-medium">Computer Engineer</span>{" "}
                with a strong foundation in artificial intelligence, full-stack web
                development, and IoT systems. I love turning complex problems into
                elegant, scalable solutions.
              </p>
              <p>
                My journey spans from building{" "}
                <span className="text-accent-emerald font-medium">real-time AI vision systems</span>{" "}
                and autonomous robots to crafting responsive web applications and
                creating compelling video content. I thrive at the intersection of
                hardware and software.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new AI research papers,
                tinkering with microcontrollers, or editing cinematic video sequences —
                always pushing the boundary of what's possible.
              </p>
            </div>

            {/* Highlighted skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "AI / Machine Learning",
                "Computer Vision",
                "Full-Stack Dev",
                "IoT Systems",
                "Video Production",
                "Robotics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-accent-emerald"
                  style={{
                    background: "rgba(16,217,160,0.08)",
                    border: "1px solid rgba(16,217,160,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative w-72 h-80 rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "transparent",
              }}
            >
              <img
                src="/about.png"
                alt="Ameer Khan"
                className="w-full h-full object-contain object-center"
                style={{
                  mixBlendMode: "screen",
                  filter: "drop-shadow(0 10px 40px rgba(16,217,160,0.1))",
                }}
                draggable={false}
              />

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, #00d4ff, transparent)",
                }}
              />
              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 blur-2xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #10d9a0, transparent)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Animated stat cards */}
        <div ref={ref}>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard {...stat} trigger={inView} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionWrapper>
  );
}
