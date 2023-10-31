import { createUnifiedThemeFromV4, palettes } from '@backstage/theme';
import { baseTheme } from './baseTheme';

export const codesandtagsTheme = createUnifiedThemeFromV4({
  ...baseTheme,
  palette: {
    ...palettes.light,
    primary: {
      main: '#0052CC',
      light: '#4C9AFF',
      dark: '#172B4D',
    },
    secondary: {
      main: '#FF5630',
      light: '#FFAB00',
      dark: '#6554C0',
    },
    grey: {
      50: '#C1C7D0',
      100: '#7A869A',
      200: '#6B778C',
      300: '#5E6C84',
      400: '#505F79',
      500: '#42526E',
      600: '#344563',
      700: '#253858',
      800: '#172B4D',
      900: '#091E42',
    },
    error: {
      main: '#FF5630',
      light: '#FF8F73',
      dark: '#DE350B',
    },
    warning: {
      main: '#FFAB00',
      light: '#FFE380',
      dark: '#FF8B00',
    },
    success: {
      main: '#36B37E',
      light: '#79F2C0',
      dark: '#006644',
    },
    info: {
      main: '#0065FF',
      light: '#4C9AFF',
      dark: '#0747A6',
    },
    navigation: {
      ...palettes.light.navigation,
      background: '#172B4D',
      color: '#FFFFFF',
      indicator: '#2684FF',
      navItem: {
        hoverBackground: 'rgba(116,118,121,0.6)',
      },
    },
    text: {
      primary: '#172B48',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  overrides: {},
});
