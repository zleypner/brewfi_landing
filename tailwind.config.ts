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
        brewfi: {
          green: "#00FFB2",
          dark: "#0A0A0A",
          darkGray: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 255, 178, 0.5)",
        neonHover: "0 0 30px rgba(0, 255, 178, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
