import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import 'animate.css';
import FaceAndQuoteSection from './components/FaceAndQuoteSection';
import Linkbar from './components/Linkbar';
import ProjectsSection from './components/ProjectsSection'

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Linkbar />
      <FaceAndQuoteSection />
      <hr style={{ width: '90%'}} />
      <ProjectsSection />
      <hr tyle={{ width: '90%' }} />
    </ThemeProvider>
  );
}

export default App;
