import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Link } from '@mui/material'
import FaceAndQuoteSection from './components/FaceAndQuoteSection';
// import Linkbar from './components/Linkbar';
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
AOS.init();
const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Linkbar /> */}
      {/* <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}> */}
        <FaceAndQuoteSection />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: '95%', marginBottom: "0rem"}} />
        </div>

        <ProjectsSection />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: '95%', marginTop: '2rem' }} />
        </div>

        <AboutMeSection />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: '95%', marginTop: '0' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link sx={{ fontSize: "30px" }} color="secondary" href="#faceAndQuoteSection">Go back to top</Link>
        </div>
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
