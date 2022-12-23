/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
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