const styleguide = require('@vercel/style-guide/prettier');
const tailwind = require("prettier-plugin-tailwindcss")

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, tailwind, 'prettier-plugin-tailwindcss'],
};
