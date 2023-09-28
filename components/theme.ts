import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb",
      contrastText: "#ffffff",
    },
    success: {
      main: "#3BB900",
      light: "#ECFBE6",
      dark: "#3BB900",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#F4002C",
      light: "#FFE8EC",
      dark: "#F4002C",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#F49200",
      light: "#FFF6E8",
      dark: "#F49200",
      contrastText: "#ffffff",
    },
  },
  typography: {

  },
});

export default theme;
