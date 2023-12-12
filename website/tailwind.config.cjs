/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: 'jit',
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 5s ease-in-out',
        blobbottom: "blobbottom 15s infinite",
        blobend: "blobend 11s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        blobbottom: {
          "0%": {
            transform: "translate(0%, 0px) scale(.5)",
          },
          "33%": {
            transform: "translate(-150%, 0px) scale(.25)",
          },
          "66%": {
            transform: "translate(-75%, 0px) scale(.4)",
          },
          "100%": {
            transform: "translate(0%, 0px) scale(.5)",
          },
        },
        blobend: {
          "0%": {
            transform: "translate(0px, 200%) scale(.5)",
          },
          "50%": {
            transform: "translate(0px, 50%) scale(.25)",
          },
          "100%": {
            transform: "translate(0px, 200%) scale(.5)",
          },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-10': '10% 10%',
        'pos-90': '90% 90%',
      },

    },
    fontFamily: {
      apple: [
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      discord: [
        "gg sans",
        "Noto Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      facebook: [
        "Open Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      instagram: [
        "San Francisco",
        "Roboto",
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      threads: ["Helvetica", "Arial", "sans-serif"],
      github: ["Mona Sans", "Helvetica", "Arial", "sans-serif"],
      google: ["Roboto-Medium", "Arial", "sans-serif"],
      microsoft: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      twitter: ["'Segoe UI'", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  darkMode: 'class',
  lightMode: 'class',
  daisyui: {
    logs: false
  }
}

module.exports = config;
