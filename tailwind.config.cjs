/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
      serif: ['spectral', 'serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    },
    maxWidth: {
      xs: '32rem',
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem'
    },
    extend: {
      screens: {
        md: '886px'
      }
    }
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
        dark: {
          primary: '#2DA447',
          secondary: '#CF916D',
          accent: '#07AA3D',
          neutral: '#25373F',
          'base-100': '#ffffff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  }
};
