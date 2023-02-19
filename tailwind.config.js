const headerDesktopLightImage = require.resolve(
  './src/components/Header/assets/bg-desktop-light.jpg',
);
const headerDesktopDarkImage = require.resolve(
  './src/components/Header/assets/bg-desktop-dark.jpg',
);
const headerMobileLightImage = require.resolve(
  './src/components/Header/assets/bg-mobile-light.jpg',
);
const headerMobileDarkImage = require.resolve(
  './src/components/Header/assets/bg-mobile-dark.jpg',
);

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      sm: '375px',
      md: '769px',
      lg: '1025px',
      xl: '1440px',
      xxl: '1920px',
    },

    colors: {
      common: {
        white: '#fff',
        black: '#000',
      },

      primary: '#57ddff',
      secondary: '#c058f3',

      dark: {
        gray: {
          100: '#e4e5f1',
          200: '#cacde8',
          300: '#777a92',
          400: '#4d5066',
          500: '#393a4c',
          600: '#25273c',
          700: '#161722',
        },
      },

      light: {
        gray: {
          100: '#fafafa',
          200: '#e4e5f1',
          300: '#d2d3db',
          400: '#9394a5',
          500: '#484b6a',
        },
      },
    },

    fontFamily: {
      sans: ['Josefin Sans', 'Arial', 'Helvetica', 'sans-serif'],
    },

    extend: {
      backgroundImage: {
        'header-desktop-light-image': `url(${headerDesktopLightImage})`,
        'header-desktop-dark-image': `url(${headerDesktopDarkImage})`,
        'header-mobile-light-image': `url(${headerMobileLightImage})`,
        'header-mobile-dark-image': `url(${headerMobileDarkImage})`,
        'gradient-primary': `linear-gradient(86deg, #57ddff, #c058f3)`,
      },
    },
  },
  plugins: [],
};
