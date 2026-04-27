import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#e8ddc8",
          dark:    "#d4c9ae",
          dim:     "rgba(232,221,200,0.08)",
        },
        md: {
          bg:   "#0b0b0b",
          "bg-2": "#101010",
          card: "#161616",
          hover:"#1c1c1c",
          border:"#252525",
          "border-2":"#1e1e1e",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono:    ["IBM Plex Mono", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1.05", fontWeight: "800" }],
      },
      animation: {
        "ticker": "ticker-move 40s linear infinite",
        "live-pulse": "live-pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
