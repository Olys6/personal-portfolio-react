import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import 'animate.css';
import { Link } from '@mui/material'
import FaceAndQuoteSection from './components/FaceAndQuoteSection';
// import Linkbar from './components/Linkbar';
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Linkbar /> */}
      <FaceAndQuoteSection />
      <hr style={{ width: '95%', marginBottom: "0rem"}} />
      
      <ProjectsSection />
      <hr style={{ width: '95%', marginTop: '2rem' }} />
      <AboutMeSection />
      <hr style={{ width: '95%', marginTop: '0' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link sx={{ fontSize: "30px" }} color="secondary" href="#faceAndQuoteSection">Go back to top</Link>
      </div>
    </ThemeProvider>
  );
}

export default App;
