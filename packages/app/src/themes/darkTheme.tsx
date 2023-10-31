import { createUnifiedThemeFromV4 } from '@backstage/theme';
import { baseTheme } from './baseTheme';

export const darkTheme = createUnifiedThemeFromV4({
  ...baseTheme,
});
