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

      dark: {
        gray: {
          400: "#4d5066",
          700: '#25273c',
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
      },
    },
  },
  plugins: [],
};
