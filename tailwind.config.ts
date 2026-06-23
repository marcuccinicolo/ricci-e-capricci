import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette "luxury naturale" — bloccata per tutto il sito.
        // Bianco caldo, nero soft, beige/sabbia, oro leggero (solo accenti).
        panna: "#FAF6EF", // bianco caldo, sfondo principale
        avorio: "#F2EADC", // bianco caldo più profondo, sezioni alternate
        sabbia: "#E4D7C3", // beige / sabbia
        terra: "#C9B79B", // sabbia più scura, bordi e dettagli
        inchiostro: "#211E1A", // nero soft (testi e superfici scure)
        fumo: "#5A524A", // testo secondario caldo
        oro: "#B8995C", // oro leggero — UNICO accento, usato con parsimonia
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
