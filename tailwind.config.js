/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        leftSlidePfp: {
          "0%": { transform: "translateX(0%)", opacity: '1' },
          "100%": { transform: "translateX(-40%)", opacity: '.8' },
        },
        rightSlidePfp: {
          "0%": { transform: "translateX(-40%)", opacity: '.8' },
          "100%": { transform: "translateX(0%)", opacity: '1' },
        },
        rightSlideTable: {
          "0%": { transform: "translateX(0%)", opacity: '0' },
          "100%": { transform: "translateX(65%)", opacity: '1' },
        },
        leftSlideTable: {
          "0%": { transform: "translateX(65%)", opacity: '1' },
          "100%": { transform: "translateX(0%)", opacity: '0' },
        },
        circle: {
          "0%, ": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rightSlideTable": "rightSlideTable 100ms ease-in-out forwards",
        "leftSlideTable": "leftSlideTable 100ms ease-in-out forwards",
        "leftSlidePfp": "leftSlidePfp 100ms ease-in-out forwards",
        "rightSlidePfp": "rightSlidePfp 100ms ease-in-out forwards",
        "circle": "circle 3000ms ease infinite",
      },
    },
  },
  plugins: [],
};
