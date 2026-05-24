import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maple: {
          bg: "#0d1a14",
          panel: "#142820",
          border: "#2d5a3d",
          gold: "#d4a84b",
          "gold-dim": "#9a7a32",
          accent: "#3ecf6e",
          muted: "#6b8f7a",
        },
      },
      fontFamily: {
        maple: ["var(--font-geist-sans)", "Malgun Gothic", "sans-serif"],
      },
      boxShadow: {
        maple: "0 0 12px rgba(62, 207, 110, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
