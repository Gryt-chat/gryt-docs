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
    themes: ['dracula'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "daisy-",
  },
};
