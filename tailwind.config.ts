import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oning: {
          50:  "#FEF2F3",
          100: "#FDE6E8",
          200: "#FBC9CD",
          300: "#F49AA1",
          400: "#EC6470",
          500: "#E32B3C",
          600: "#D32737",
          700: "#B82230",
          800: "#8E1A24",
          coral: "#E85B5B",
        },
        ink: {
          900: "#1A1A1A",
          800: "#212121",
          700: "#5D606A",
          500: "#88869B",
          300: "#D2D0D1",
          200: "#E2E0DF",
          100: "#F7F8FA",
          50:  "#F8F7FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "14px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)",
        softer: "0 4px 14px rgba(16,24,40,0.06)",
        red: "0 8px 24px -8px rgba(227,43,60,0.45)",
      },
      backgroundImage: {
        "oning-gradient": "linear-gradient(180deg, #E32B3C 0%, #D32737 100%)",
        "oning-gradient-radial":
          "radial-gradient(120% 100% at 30% 20%, #E85B5B 0%, #E32B3C 55%, #D32737 100%)",
        "hero-soft":
          "radial-gradient(60% 50% at 80% 0%, rgba(227,43,60,0.10) 0%, rgba(255,255,255,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
