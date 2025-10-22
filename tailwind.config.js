/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial"]
      },
      colors: {
        brand: {
          50:  "#f7fbff",
          100: "#eef5fb",
          200: "#d8e6f5",
          300: "#b9d2eb",
          400: "#88b5dc",
          500: "#5a9acc",
          600: "#3f7fb3",
          700: "#356a94",
          800: "#2f5877",
          900: "#294a63"
        }
      }
    }
  },
  plugins: []
}