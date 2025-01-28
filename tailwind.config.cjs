/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        rainbow: 'rainbow 1.5s linear infinite',
      },
      keyframes: {
        rainbow: {
          '0%': { color: 'red' },
          '14%': { color: 'orange' },
          '28%': { color: 'yellow' },
          '42%': { color: 'green' },
          '57%': { color: 'blue' },
          '71%': { color: 'indigo' },
          '85%': { color: 'violet' },
          '100%': { color: 'red' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    }
}
