import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import Home from './components/Home';
import Linkbar from './components/Linkbar';

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Linkbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
