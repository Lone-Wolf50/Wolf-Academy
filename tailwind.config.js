/** @type {import('tailwindcss').Config} */
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "midnight": "#101922",
                "navy-card": "#1c2835",
                "input-dark": "#16202a",
                "slate-muted": "#64748b",
                        "navy-muted": "#1e293b",


      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
      },
    },
  },
  plugins: [
    containerQueries, // 👈 add the container queries plugin here
  ],
}