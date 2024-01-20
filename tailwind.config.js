/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.983rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1439px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: 'url("/assets/images/bg-explosion.png")',
        circles: 'url("/assets/images/bg-circles.png")',
        circleStar: 'url("/assets/images/circle-star.svg")',
        site: 'url("/assets/images/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
