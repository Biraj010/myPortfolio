/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#111827", // A dark navy blue
        primary: "#E5E7EB", // Light gray for primary text
        secondary: "#9CA3AF", // Medium gray for secondary text
        accent: "#38BDF8", // A vibrant sky blue for accents
        surface: "#1F2937", // A slightly lighter navy for cards/surfaces
        border: "#374151", // A subtle border color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
