/** @type {import('tailwindcss').Config} */
module.exports = {
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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  darkMode: 'class',
  lightMode: 'class',
  daisyui: {
    themes: [
      {
        "light": {
          "primary": "#db2777",
          "secondary": "#10b981",
          "accent": "#fbbd23",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
          "primary-content": "#ffffff",
          "secondary-content": "#ffffff"
        }
      },
      {
        "dark": {
          "primary": "#db2777",
          "secondary": "#10b981",
          "accent": "#fbbd23",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
          "primary-content": "#ffffff",
          "secondary-content": "#ffffff"
          //...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          //"base-content": "#fff",
          //"accent": "#db2777",
          //'.btn:focus-visible': {
          //  'outline-color': '#fff',
          //},
        }
      }
    ],
    logs: false
  }
}