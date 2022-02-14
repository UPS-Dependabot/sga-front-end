import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      primary?: string,
      secondary?: string,
    },
    text: {
      primary?: string,
      secondary?: string,
    },
    action: {
      active?: string,
      inactive?: string,
    },
  }

  interface ThemeOptions {
    background: {
      primary?: string,
      secondary?: string,
    },
    text: {
      primary?: string,
      secondary?: string,
    },
    action: {
      active?: string,
      inactive?: string,
    },
  }
}

export const THEME_DRACULA = createTheme({
  background: {
    primary: '#D9D4D0',
  },
  text: {
    primary: '#734743',
  },
  action: {
    active: '#D94A56',
    inactive: '#D90707',
  },
});