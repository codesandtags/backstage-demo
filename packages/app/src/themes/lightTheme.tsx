import { createUnifiedThemeFromV4, palettes } from '@backstage/theme';
import { baseTheme } from './baseTheme';

export const lightTheme = createUnifiedThemeFromV4({
  ...baseTheme,
  palette: {
    ...palettes.light,
  },
  overrides: {},
});
