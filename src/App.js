import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import 'animate.css';
import FaceAndQuoteSection from './components/FaceAndQuoteSection';
import Linkbar from './components/Linkbar';

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Linkbar />
      <FaceAndQuoteSection />
    </ThemeProvider>
  );
}

export default App;
