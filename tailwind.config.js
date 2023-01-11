/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {},
  },

  safelist: [
    { pattern: /bg-./ },
    { pattern: /daisy-./, variants: ["lg", "hover", "focus"] },
    { pattern: /text-./ },
    { pattern: /border-./ },
    { pattern: /w-./ },
    { pattern: /h-./ },
    { pattern: /rounded-./ },
    "rounded",
  ],

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        grytDocs: {
          primary: "#818cf8",
          secondary: "#BF95F9",
          accent: "#FFB86B",
          neutral: "#414558",
          "base-100": "#272935",
          info: "#8BE8FD",
          success: "#52FA7C",
          warning: "#F1FA89",
          error: "#FF5757",
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
