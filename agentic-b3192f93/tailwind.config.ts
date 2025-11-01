import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0f1014",
        neon: "#6EF8FF",
        accent: "#FF5C8A"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(110, 248, 255, 0.45)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(110, 248, 255, 0.25) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
