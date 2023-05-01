/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: 'jit',
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
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
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        }
      },
      {
        "dark": {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-content": "#fff",
          '.btn:focus-visible': {
            'outline-color': '#fff',
          },
        }
      }
    ],
    logs: false
  }
}