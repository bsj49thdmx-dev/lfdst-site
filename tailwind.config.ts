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
        background: "#050505",
        surface: "#121212",
        gold: {
          DEFAULT: "#D4AF37",
          muted: "#C5A028",
          light: "#F1D06E",
        },
        text: {
          main: "#F5F5F5",
          muted: "#A3A3A3",
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'grain': "url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;