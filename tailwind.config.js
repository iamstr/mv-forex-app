
module.exports = {
   mode: 'jit',
  content: [
    './screens/**/*.{js,jsx}',
    './screens/*.{js,jsx}',
],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins')
}