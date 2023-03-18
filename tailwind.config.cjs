const { withAnimations } = require('animated-tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    fontFamily: {
      serif: ['Spectral', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      sans: ['roboto', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    },
    maxWidth: {
      // xs: '32rem',
      // sm: '40rem',
      // md: '48rem',
      // lg: '64rem',
      // xl: '80rem'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#008753',
          secondary: '#CF916D',
          accent: '#07AA3D',
          neutral: '#25373F',
          'base-100': '#ffffff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      },
      {
        heroBlack: {
          primary: '#25373F',
          secondary: '#CF916D',
          accent: '#07AA3D',
          neutral: '#ffffff',
          'base-100': '#ffffff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      },
      {
        heroWhite: {
          primary: '#ffffff',
          secondary: '#CF916D',
          accent: '#07AA3D',
          neutral: '#25373F',
          'base-100': '#008753',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  }
});
