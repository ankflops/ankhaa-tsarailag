// postcss.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/css/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
