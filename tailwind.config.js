const { guessProductionMode } = require('@ngneat/tailwind');

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Karla', 'sans-serif'],
      body: ['Karla', 'sans-serif'],
    },
    extend: {
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active'],
      textColor: ['active', 'hover'],
      transitionDuration: ['active', 'hover', 'focus'],
      borderRadius: ['first', 'last'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
