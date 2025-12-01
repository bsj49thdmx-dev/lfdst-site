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
        gold: "#D4AF37", // Ton doré exact
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], // Pour les Titres
        sans: ['var(--font-montserrat)', 'sans-serif'], // Pour le texte
      },
    },
  },
  plugins: [],
};
export default config;