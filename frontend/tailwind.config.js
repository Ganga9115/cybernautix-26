/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0118",
          secondary: "#1a0b2e"
        },

        purple: {
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87"
        },

        cyan: {
          500: "#06b6d4",
          600: "#0891b2"
        },

        blue: {
          500: "#3b82f6",
          600: "#2563eb"
        },

        pink: {
          500: "#ec4899",
          600: "#db2777",
          light: "#ff7ab9"
        },

        text: {
          primary: "#ffffff",
          light: "#e9d5ff",
          medium: "#d8b4fe",
          accent: "#c084fc"
        }
      }
    },
  },
  plugins: [],
}