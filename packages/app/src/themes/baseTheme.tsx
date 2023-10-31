import {
  palettes,
  createBaseThemeOptions,
  createTheme,
} from '@backstage/theme';

// By default the baseTheme will use the dark palette
export const baseTheme = createTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      navigation: {
        ...palettes.dark.navigation,
      },
    },
  }),
  fontFamily: 'Roboto, sans-serif',
  defaultPageTheme: 'home',
});
