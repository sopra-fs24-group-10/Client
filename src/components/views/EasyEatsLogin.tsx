import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#ffffff', // For elements considered paper
    },
    // You can also customize primary, secondary, and other colors
    primary: {
      main: '#556cd6',
    },
  },
  // Other theme customizations go here
});