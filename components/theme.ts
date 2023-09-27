import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      light: '#e8918857',
      dark: '#5D87FF',      
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },     
  },
  typography: {
    
  },
});

export default theme;
