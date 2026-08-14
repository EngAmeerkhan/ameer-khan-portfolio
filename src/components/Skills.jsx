// ============================================================
// Skills.jsx
// 4 categories, icon badges with skill bars, hover tooltips
// ============================================================
import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { StaggerContainer, StaggerItem } from "./ui/SectionWrapper";
import { skillCategories } from "../data/skills";

// Color map for category accents
const colorMap = {
  emerald: {
    bg: "rgba(16,217,160,0.08)",
    border: "rgba(16,217,160,0.25)",
    text: "#10d9a0",
    bar: "linear-gradient(90deg, #10d9a0, #00d4ff)",
    glow: "rgba(16,217,160,0.3)",
  },
  cyan: {
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.25)",
    text: "#00d4ff",
    bar: "linear-gradient(90deg, #00d4ff, #10d9a0)",
    glow: "rgba(0,212,255,0.3)",
  },
  teal: {
    bg: "rgba(20,184,166,0.08)",
    border: "rgba(20,184,166,0.25)",
    text: "#14b8a6",
    bar: "linear-gradient(90deg, #14b8a6, #00d4ff)",
    glow: "rgba(20,184,166,0.3)",
  },
  violet: {
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    text: "#8b5cf6",
    bar: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
    glow: "rgba(139,92,246,0.3)",
  },
};

// Single skill row with icon + bar
function SkillRow({ skill, color, index }) {
  const [hovered, setHovered] = useState(false);
  const c = colorMap[color];
  const { Icon } = skill;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip on hover */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-semibold shadow-lg pointer-events-none"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
        >
          {skill.level}% proficiency
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{ borderTop: `5px solid ${c.border}`, borderLeft: "5px solid transparent", borderRight: "5px solid transparent" }}
          />
        </motion.div>
      )}

      <div className="flex items-center gap-3 mb-1.5">
        {/* Icon */}
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}
        >
          <Icon className="w-4 h-4" style={{ color: c.text }} />
        </div>
        {/* Name + percentage */}
        <span className="text-sm font-medium text-text-primary flex-1">{skill.name}</span>
        <span className="text-xs font-semibold" style={{ color: c.text }}>{skill.level}%</span>
      </div>

      {/* Skill bar */}
      <div
        className="h-1.5 rounded-full overflow-hidden ml-10"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: c.bar, boxShadow: `0 0 8px ${c.glow}` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.04, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// Category card
function CategoryCard({ category }) {
  const c = colorMap[category.color];
  const { icon: CategoryIcon } = category;

  return (
    <motion.div
      className="glass-card p-6"
      whileHover={{ scale: 1.01 }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}
        >
          <CategoryIcon className="w-5 h-5" style={{ color: c.text }} />
        </div>
        <h3 className="font-display font-semibold text-text-primary text-base">
          {category.label}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillRow key={skill.name} skill={skill} color={category.color} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">What I Know</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            A broad toolkit spanning software, AI, hardware, and creative media.
          </p>
        </div>

        {/* Category grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.id}>
              <CategoryCard category={cat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
