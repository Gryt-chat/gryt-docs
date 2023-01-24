/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{mdx,md}"],
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    extend: {},
  },

  // safelist: [
  //   { pattern: /bg-./ },
  //   { pattern: /daisy-./ },
  //   { pattern: /text-./ },
  //   { pattern: /border-./ },
  //   { pattern: /w-./ },
  //   { pattern: /h-./ },
  //   { pattern: /rounded-./ },
  //   "rounded",
  // ],

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        grytApp: {
          primary: "#948df5",
          secondary: "#f5948d",
          accent: "#8dbaf5",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "daisy-",
  },
};
