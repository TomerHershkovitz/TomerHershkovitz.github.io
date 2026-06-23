/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "1.75rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        brand: {
          950: "#040816",
          900: "#07111d",
          800: "#0b1b2d",
          700: "#11304f",
          600: "#1d4f7b",
        },
        accent: {
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(5, 12, 24, 0.35)",
        card: "0 16px 48px rgba(8, 17, 29, 0.28)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(125, 211, 252, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        appear: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        appear: "appear 700ms ease-out both",
      },
    },
  },
  plugins: [],
};
