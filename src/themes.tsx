import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      primary: string,
      secondary: string,
    },
    text: {
      primary: string,
      secondary: string,
    },
    action: {
      primaryActive: string,
      primarySecondary: string,
      primaryInactive: string,
    },
  }

  interface ThemeOptions {
    background: {
      primary: string,
      secondary: string,
    },
    text: {
      primary: string,
      secondary: string,
    },
    action: {
      primaryActive: string,
      primarySecondary: string,
      primaryInactive: string,
    },
  }
}

export const THEME_DRACULA = createTheme({
  background: {
    primary: '',
    secondary: '',
  },
  text: {
    primary: '',
    secondary: '',
  },
  action: {
    primaryActive: '',
    primarySecondary: '',
    primaryInactive: '',
  },
});