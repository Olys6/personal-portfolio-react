import React from 'react';
import { Typography, Link } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MySkills = () => {

  const skillLogosFE = {
    "JavaScript": <i style={{ fontSize: "70px", color: "#ffdc04" }} className="fa-brands fa-js-square"></i>,
    "TypeScipt": <img alt="TypeScript Logo" style={{ width: "60px", borderRadius: "6px", marginBottom: "-2px" }} src="/assets/LanguageLogos/typescript-seeklogo.com.svg" />,
    "React": <i style={{ color: "#68dcfc" }} className="fa-brands fa-react"></i>,
    "VSCode": <img style={{ width: "65px", marginBottom: "-8px" }} alt="VSCode logo" src="/assets/LanguageLogos/visual-studio-code-seeklogo.com.svg"></img>,
    "Python": <img style={{ width: "54px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img>,
    "Discord.py": <img style={{ width: "70px", marginBottom: "0px" }} alt="Discord.py logo" src="/assets/LanguageLogos/Discord-Logo-White.svg"></img>,
    "Swift": <i style={{ color: "#ff6c2c" }} className="fa-brands fa-swift"></i>,
    "WordPress": <i style={{ color: "#529eba" }} className="fa-brands fa-wordpress"></i>,
    "HTML": <i style={{ color: "#e84c24" }} className="fa-brands fa-html5"></i>,
    "CSS": <i style={{ color: "#389cd4" }} className="fa-brands fa-css3-alt"></i>,
    "React Bootstrap": <i style={{ color: "#8054b4" }} class="fa-brands fa-bootstrap"></i>,
    "Material UI": <img alt="MUI logo" style={{ width: "70px", marginBottom: "-10px" }} src="assets/LanguageLogos/material-ui-seeklogo.com.svg" />,
    "Bulma": <img alt="Bulma logo" style={{ width: "40px" }} src="/assets/LanguageLogos/Bulma.svg" />,
    "Node.js": <i style={{ color: "#589c44" }} className="fa-brands fa-node-js"></i>,
    "Docker": <img alt="Express Logo" style={{ width: "70px", marginBottom: "-15px" }} src="/assets/LanguageLogos/docker-svgrepo-com (1).svg" />,
    "Yarn": <i style={{ color: "#388cbc" }} class="fa-brands fa-yarn"></i>,
    "npm": <i style={{ color: "#d03c34" }} class="fa-brands fa-npm"></i>
  }

  const skillLogosBack = {
    "MongoDB": <img alt="Mongo DB Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/mongodb-svgrepo-com.svg" />,
    "Django": <img alt="Django logo" style={{ width: "55px", marginBottom: "-15px" }} src="/assets/LanguageLogos/django-seeklogo.com.svg" />,
    "PostgreSQL": <img alt="Postres Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/postgresql-svgrepo-com.svg" />,
    "Express": <img alt="Express Logo" style={{ width: "80px", marginBottom: "-20px" }} src="/assets/LanguageLogos/express-8.svg" />,
    "VSCode": <img style={{ width: "65px", marginBottom: "-8px" }} alt="VSCode logo" src="/assets/LanguageLogos/visual-studio-code-seeklogo.com.svg"></img>,
    "Node.js": <i style={{ color: "#589c44" }} className="fa-brands fa-node-js"></i>,
    "Docker": <img alt="Express Logo" style={{ width: "70px", marginBottom: "-15px" }} src="/assets/LanguageLogos/docker-svgrepo-com (1).svg" />,
    "Tableplus": <img alt="Tableplus Logo" style={{ width: "80px", marginBottom: "-20px" }} src="/assets/LanguageLogos/TablePlusLogo.png" />,
    "Insomnia": <img alt="Insomnia Logo" style={{ width: "75px", marginBottom: "-15px" }} src="/assets/LanguageLogos/insomnia-svgrepo-com.svg" />,
    "Yarn": <i style={{ color: "#388cbc" }} class="fa-brands fa-yarn"></i>,
    "npm": <i style={{ color: "#d03c34" }} class="fa-brands fa-npm"></i>
  }


  return(
    <section id="skillsSection" className="skillsSection animate__animated animate__fadeIn">
      <Link href="#skillsSection"><Typography variant="h2" textAlign="center" color="secondary"><ExpandMoreIcon sx={{ fontSize: "40px" }} />My Skills<ExpandMoreIcon sx={{ fontSize: "40px" }} /></Typography></Link>
      <div className="skillBoxes">
        <div className="skillBox skillBox1">
          <Typography variant="h3" textAlign="center" color="secondary">Frontend</Typography>
          <ul className="skillLogos">
            {Object.entries(skillLogosFE).map(([key, logo], i) => (
              <li className="skillLogo" key={i}>
                {key} <span style={{ fontSize: "60px" }}>{logo}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skillBox skillBox2">
          <Typography variant="h3" textAlign="center" color="secondary">Backend</Typography>
          <ul className="skillLogos">
            {Object.entries(skillLogosBack).map(([key, logo], i) => (
              <li className="skillLogo" key={i}>
                {key} <span style={{ fontSize: "60px" }}>{logo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MySkills