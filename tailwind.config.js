/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
};