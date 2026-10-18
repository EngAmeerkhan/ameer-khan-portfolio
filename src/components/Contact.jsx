// ============================================================
// Contact.jsx
// Animated contact form + social links
// ============================================================
import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import {
  HiMail, HiLocationMarker, HiPaperAirplane, HiCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

// Animated text input component
function FormField({ id, label, type = "text", multiline = false, required = true }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const accentColor = focused ? "#10d9a0ff" : value ? "rgba(16,217,160,0.4)" : "rgba(255,255,255,0.08)";

  const baseClass =
    "w-full bg-transparent text-text-primary placeholder-text-subtle text-sm resize-none outline-none transition-colors duration-200 px-4";

  return (
    <div className="relative">
      <motion.div
        className="relative rounded-xl overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${accentColor}`,
          boxShadow: focused ? `0 0 0 3px rgba(16,217,160,0.08)` : "none",
        }}
        animate={{ borderColor: accentColor }}
      >
        {multiline ? (
          <textarea
            id={id}
            name={id}
            rows={5}
            required={required}
            placeholder={label}
            className={`${baseClass} py-4`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-label={label}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            required={required}
            placeholder={label}
            className={`${baseClass} py-3.5`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-label={label}
          />
        )}

        {/* Focus indicator line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 rounded-full"
          style={{ background: "linear-gradient(90deg, #10d9a0, #00d4ff)" }}
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

// Social link card
function SocialLink({ Icon, label, handle, href, color }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label={`${label}: ${handle}`}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div>
        <p className="text-xs text-text-muted font-medium">{label}</p>
        <p className="text-sm text-text-primary font-semibold group-hover:text-accent-emerald transition-colors duration-200">
          {handle}
        </p>
      </div>
    </a>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace this with your real form submission logic (e.g., Formspree, EmailJS, or backend API)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* 2-col grid: form + socials */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* ---- Contact form ---- */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <HiCheckCircle className="w-16 h-16 text-accent-emerald" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-text-primary">Message Sent!</h3>
                <p className="text-text-muted text-center text-sm">
                  Thanks for reaching out. I'll reply as soon as possible!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-2 text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-text-primary text-lg mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <FormField id="name" label="Your Name" />
                  <FormField id="email" label="Email Address" type="email" />
                  <FormField id="subject" label="Subject" />
                  <FormField id="message" label="Your message..." multiline />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center mt-2"
                    aria-label="Send message"
                  >
                    <span className="flex items-center gap-2">
                      {loading ? (
                        <>
                          <motion.div
                            className="w-4 h-4 rounded-full border-2 border-bg border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* ---- Contact info + socials ---- */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Info cards */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="font-display font-bold text-text-primary text-lg mb-4">
                Contact Info
              </h3>

              {/* TODO: Replace with real details */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(16,217,160,0.1)", border: "1px solid rgba(16,217,160,0.25)" }}
                >
                  <HiMail className="w-4 h-4 text-accent-emerald" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Email</p>
                  <a
                    href="mailto:itsameerkhan03477@gmail.com"
                    className="text-sm text-text-primary hover:text-accent-emerald transition-colors font-medium"
                  >
                    itsameerkhan03477@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)" }}
                >
                  <HiLocationMarker className="w-4 h-4 text-accent-cyan" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  {/* TODO: Replace with real location */}
                  <p className="text-sm text-text-primary font-medium">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-text-primary text-base mb-4">
                Find Me Online
              </h3>
              <div className="space-y-3">
                {/* TODO: Replace '#' with your real URLs and handles */}
                <SocialLink Icon={FaGithub} label="GitHub" handle="EngAmeerkhan" href="https://github.com/EngAmeerkhan" color="#ffffff" />
                <SocialLink Icon={FaLinkedin} label="LinkedIn" handle="Ameer Khan" href="https://www.linkedin.com/in/ameer-khan-93739a2a1/" color="#0a66c2" />
                <SocialLink Icon={SiFiverr} label="Fiverr" handle="fiverr.com/s/VYjQ48Z" href="https://www.fiverr.com/s/VYjQ48Z" color="#1dbf73" />
                <SocialLink Icon={SiUpwork} label="Upwork" handle="Ameer Khan" href="#" color="#14a800" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
