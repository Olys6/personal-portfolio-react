import React from 'react';
import { Typography, Link } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const skills = [
//   {
//     name: "JavaScript",
//     logo: <i style={{ fontSize: "70px", color: "#ffdc04" }} className="fa-brands fa-js-square"></i>,
//     type: "febd"
//   },
//   {
//     name: "TypeScript",
//     logo: <img alt="TypeScript Logo" style={{ width: "60px", borderRadius: "6px", marginBottom: "-2px" }} src="/assets/LanguageLogos/typescript-seeklogo.com.svg" />,
//     type: "fe"
//   },
//   {
//     name: "React",
//     logo: <i style={{ color: "#68dcfc" }} className="fa-brands fa-react"></i>,
//     type: "fe"
//   },
//   {
//     name: "MongoDB",
//     logo: <img alt="Mongo DB Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/mongodb-svgrepo-com.svg" />,
//     type: "bd"
//   },
//   {
//     name: "Python",
//     logo: <img style={{ width: "54px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img>,
//     type: "febd"
//   },
//   {
//     name: "Django",
//     logo: <img alt="Django logo" style={{ width: "55px", marginBottom: "-15px" }} src="/assets/LanguageLogos/django-seeklogo.com.svg" />,
//     type: "bd"
//   },
//   {
//     name: "PostgreSQL",
//     logo: <img alt="Postres Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/postgresql-svgrepo-com.svg" />,
//     type: "bd"
//   },
//   {
//     name: "Swift",
//     logo: <i style={{ color: "#ff6c2c" }} className="fa-brands fa-swift"></i>,
//     type: "fe"
//   },
//   {
//     name: "WordPress",
//     logo: <i style={{ color: "#529eba" }} className="fa-brands fa-wordpress"></i>,
//     type: "fe"
//   },
//   {
//     name: "HTML",
//     logo: <i style={{ color: "#e84c24" }} className="fa-brands fa-html5"></i>,
//     type: "fe"
//   },
//   {
//     name: "CSS",
//     logo: <i style={{ color: "#389cd4" }} className="fa-brands fa-css3-alt"></i>,
//     type: "fe"
//   },
//   {
//     name: "React Bootstrap",
//     logo: <i style={{ color: "#8054b4" }} className="fa-brands fa-bootstrap"></i>,
//     type: "fe"
//   },
//   {
//     name: "Material UI",
//     logo: <img alt="MUI logo" style={{ width: "70px", marginBottom: "-10px" }} src="assets/LanguageLogos/material-ui-seeklogo.com.svg" />,
//     type: "fe"
//   },
//   {
//     name: "Bulma",
//     logo: <img alt="Bulma logo" style={{ width: "40px" }} src="/assets/LanguageLogos/Bulma.svg" />,
//     type: "fe"
//   },
//   {
//     name: "Node.js",
//     logo: <i style={{ color: "#589c44" }} className="fa-brands fa-node-js"></i>,
//     type: "febd"
//   },
//   {
//     name: "Docker",
//     logo: <img alt="Express Logo" style={{ width: "70px", marginBottom: "-15px" }} src="/assets/LanguageLogos/docker-svgrepo-com (1).svg" />,
//     type: "febd"
//   },
//   {
//     name: "Yarn",
//     logo: <i style={{ color: "#388cbc" }} className="fa-brands fa-yarn"></i>,
//     type: "febd"
//   },
//   {
//     name: "npm",
//     logo: <i style={{ color: "#d03c34" }} className="fa-brands fa-npm"></i>,
//     type: "febd"
//   },
//   {
//     name: "Tableplus",
//     logo: <img alt="Tableplus Logo" style={{ width: "80px", marginBottom: "-20px" }} src="/assets/LanguageLogos/TablePlusLogo.png" />,
//     type: "bd"
//   },
//   {
//     name: "Insomnia",
//     logo: <img alt="Insomnia Logo" style={{ width: "75px", marginBottom: "-15px" }} src="/assets/LanguageLogos/insomnia-svgrepo-com.svg" />,
//     type: "bd"
//   }
// ]

const MySkills = () => {
  // const [filteredSkills, setFilteredSkills] = useState(Object.entries(skills))
  // const [search, setSearch] = useState("")
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };


  const skillLogosFE = {
    "JavaScript": <i style={{ fontSize: "70px", color: "#ffdc04" }} className="fa-brands fa-js-square"></i>,
    "TypeScipt": <img alt="TypeScript Logo" style={{ width: "60px", borderRadius: "6px", marginBottom: "-2px" }} src="/assets/LanguageLogos/typescript-seeklogo.com.svg" />,
    "React": <i style={{ color: "#68dcfc" }} className="fa-brands fa-react"></i>,
    "Cypress": <img src="/assets/LanguageLogos/cypressLogo.png" alt="Cypress testing logo" style={{ width: "70px", marginBottom: "-15px" }} />,
    "VSCode": <img style={{ width: "65px", marginBottom: "-8px" }} alt="VSCode logo" src="/assets/LanguageLogos/visual-studio-code-seeklogo.com.svg"></img>,
    "Python": <img style={{ width: "54px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img>,
    "Discord.py": <img style={{ width: "70px", marginBottom: "0px" }} alt="Discord.py logo" src="/assets/LanguageLogos/Discord-Logo-White.svg"></img>,
    "C Sharp": <img style={{ width: "70px", marginBottom: "-20px" }} alt="C# logo" src="/assets/LanguageLogos/CSharp-Logo.svg"></img>,
    "Unity": <img style={{ width: "70px", margin: "10px 0 -22px 0", backgroundColor: "white", padding: "5px", borderRadius: "5px" }} alt="Unity logo" src="/assets/LanguageLogos/Unity-Logo.svg"></img>,
    //"Swift": <i style={{ color: "#ff6c2c" }} className="fa-brands fa-swift"></i>,
    "WordPress": <i style={{ color: "#529eba" }} className="fa-brands fa-wordpress"></i>,
    "HTML": <i style={{ color: "#e84c24" }} className="fa-brands fa-html5"></i>,
    "CSS": <i style={{ color: "#389cd4" }} className="fa-brands fa-css3-alt"></i>,
    "React Bootstrap": <i style={{ color: "#8054b4" }} class="fa-brands fa-bootstrap"></i>,
    "Material UI": <img alt="MUI logo" style={{ width: "70px", marginBottom: "-10px" }} src="/assets/LanguageLogos/material-ui-seeklogo.com.svg" />,
    "Bulma": <img alt="Bulma logo" style={{ width: "40px" }} src="/assets/LanguageLogos/Bulma.svg" />,
    "Node.js": <i style={{ color: "#589c44" }} className="fa-brands fa-node-js"></i>,
    "Docker": <img alt="Express Logo" style={{ width: "70px", marginBottom: "-15px" }} src="/assets/LanguageLogos/docker-svgrepo-com (1).svg" />,
    "Yarn": <i style={{ color: "#388cbc" }} class="fa-brands fa-yarn"></i>,
    "npm": <i style={{ color: "#d03c34" }} class="fa-brands fa-npm"></i>
  }

  const skillLogosBack = {
    "JavaScript": <i style={{ fontSize: "70px", color: "#ffdc04" }} className="fa-brands fa-js-square"></i>,
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
  // const handleSearch = (event) => {
  //   if (event.target.value.includes("\\") || event.target.value.includes("(") || event.target.value.includes(")")
  //     || event.target.value.includes("*") || event.target.value.includes("[") || event.target.value.includes("+")) return;

  //   setSearch(event.target.value)
    
  // }

  // useEffect(() => {

  //   const regexSearch = new RegExp(search, 'ig')
  //   setFilteredSkills(skills.filter(skill => {
  //     // if (regexSearch.test(skill[0])){
  //     //   return skill
  //     // }
  //     return regexSearch.test(skill.name)
  //   }))
  // }, [search])



  return(
    <section id="skillsSection" className="skillsSection animate__animated animate__fadeIn">
      <Link href="#skillsSection"><Typography variant="h2" textAlign="center" color="secondary"><ExpandMoreIcon sx={{ fontSize: "40px" }} />My Skills<ExpandMoreIcon sx={{ fontSize: "40px" }} /></Typography></Link>
      {/* <Stack spacing={2} sx={{ width: 300 }} onClick={handleSearch}>
        <Autocomplete
          sx={{ fontWeight: "700", fontSize: "40px" }}
          // onKeyDown={handleSearch}

          disableClearable
          freeSolo
          options={skills.map((option) => option.name)}
          renderInput={(params) => <TextField onChange={handleSearch} onMouseOver={handleSearch} color='secondary' variant="filled" focused {...params} label="Search" sx={{ fontWeight: "700", fontSize: "30px" }} />}
        />
          <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={skills.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={'febd'}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Frontend and Backend</MenuItem>
            <MenuItem value={20}>Frontend</MenuItem>
            <MenuItem value={30}>Backend</MenuItem>
          </Select>
        </FormControl>
      </Stack> */}
      {/* <ul className="skillLogos">
        {filteredSkills.map((skill, i) => (
        <li className="skillLogo" key={i}>
          {skill.name} <span style={{ fontSize: "60px" }}>{skill.logo}</span>
        </li>
      ))}
      </ul> */}
      <div className="skillBoxes" data-aos="fade-up">
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