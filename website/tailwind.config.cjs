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
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
  lightMode: 'class',
  daisyui: {
    logs: false
  }
}

module.exports = config;