import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
  interface TypeAction {
    active: string;
    inactive: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledOpacity: number;
    disabledBackground: string;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
  }
  interface PaletteColor {
    inactive?: string;
  }
  interface SimplePaletteColorOptions {
    inactive?: string;
  }
}

export const theme = createTheme({
  palette: {
    action: {
      active: "#D94A56",
      disabled: "#D90707"
    },
    text: {
      primary: "#734743",
      secondary: ""
    },
    background: {
      default: "#D9D4D0",
      paper: "#FFFFFF"
    }
  },
});