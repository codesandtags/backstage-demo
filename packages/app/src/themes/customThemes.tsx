import { UnifiedThemeProvider } from '@backstage/theme';
import React from 'react';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { codesandtagsTheme } from './codesandtagsTheme';

export const customThemes = [
  {
    id: 'dark-theme',
    title: 'dark',
    variant: 'dark',
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={darkTheme} children={children} />
    ),
  },
  {
    id: 'light-theme',
    title: 'light',
    variant: 'light',
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={lightTheme} children={children} />
    ),
  },
  {
    id: 'codesandtags-theme',
    title: 'codesandtags',
    variant: 'dark',
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={codesandtagsTheme} children={children} />
    ),
  },
];
