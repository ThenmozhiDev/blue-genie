
import './App.css';
import AppRouter from './routes/AppRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: `"Proxima Nova", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
