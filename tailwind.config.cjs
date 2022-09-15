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
}
