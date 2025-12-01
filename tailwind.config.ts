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
        bg: "#050505",    // Ton noir spécifique
        gold: "#D4AF37",  // Ton doré spécifique
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;