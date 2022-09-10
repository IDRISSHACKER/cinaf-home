import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './screens/home/index'
import ScrollToTop from "react-scroll-to-top";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: "#d62a29",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <ScrollToTop smooth />
    </ThemeProvider>
  );
}

export default App;
