/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b9dcff",
          300: "#8ec7ff",
          400: "#5aabff",
          500: "#2b8cff",
          600: "#1f6ed9",
          700: "#1956aa",
          800: "#163f7d",
          900: "#122f5e",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(2, 12, 27, 0.1)",
      },
      backgroundColor: {
        white: "#f1f5f9", // Tailwind's slate-100
      },
    },
    plugins: [],
  },
};
