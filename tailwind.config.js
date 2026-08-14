/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary background palette
        bg: {
          DEFAULT: "#09090f",
          secondary: "#0f0f1a",
          tertiary: "#13131f",
        },
        // Accent: Emerald → Cyan
        accent: {
          emerald: "#10d9a0",
          cyan: "#00d4ff",
          DEFAULT: "#10d9a0",
        },
        // Text
        text: {
          primary: "#f1f5f9",
          muted: "#64748b",
          subtle: "#334155",
        },
        // Glass surface
        glass: "rgba(255,255,255,0.04)",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #10d9a0 0%, #00d4ff 100%)",
        "accent-gradient-subtle": "linear-gradient(135deg, rgba(16,217,160,0.15) 0%, rgba(0,212,255,0.15) 100%)",
        "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "glow-emerald": "0 0 20px rgba(16,217,160,0.3), 0 0 60px rgba(16,217,160,0.1)",
        "glow-cyan": "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)",
        "glow-sm": "0 0 10px rgba(16,217,160,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0px)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
