import React from 'react'
import { Typography, LinearProgress, Box } from '@mui/material'


const LanguagesSpoken = () => {



  return(
    <>
      <Box id="languageSkills" className="" >
        <Typography variant="h4" color="secondary">Languages Spoken:</Typography>

        <Box sx={{ display: 'flex', gap: "1rem", width: '100%', justifyContent: "center" }}>
          <Box sx={{ width: "33%", display: "flex", gap: "0.2rem", alignItems: "center" }}>
            <Typography variant="h4" color="secondary" sx={{ marginRight: "-55px", zIndex: "1" }}>🇬🇧</Typography>
            <LinearProgress id="englishSkillBar" sx={{ backgroundColor: "white", color: "red" }} variant="determinate" color="inherit" value={95} />
          </Box>
          <Box sx={{ width: "33%", display: "flex", gap: "0.2rem", alignItems: "center" }}>
            <Typography variant="h4" color="secondary" sx={{ marginRight: "-55px", zIndex: "1" }}>🇫🇷</Typography>
            <LinearProgress id="englishSkillBar" sx={{ backgroundColor: "white", color: "blue" }} className="" variant="determinate" color="inherit" value={70} />
          </Box>
          <Box sx={{ width: "33%", display: "flex", gap: "0.2rem", alignItems: "center" }}>
            <Typography variant="h4" color="secondary" sx={{ marginRight: "-55px", zIndex: "1" }}>🇩🇪</Typography>
            <LinearProgress id="englishSkillBar" sx={{ backgroundColor: "white", color: "orange" }} className="" variant="determinate" color="inherit" value={30} />
          </Box>
        </Box>
      </Box>

      {/* <Typography variant="h4" sx={{ marginTop: "20px" }} color="secondary">Preferred Operating Systems:</Typography>

      <Box sx={{ display: 'flex', gap: "1rem", width: '100%', justifyContent: "space-evenly", marginTop: "10px", alignItems: "flex-end", flexWrap: "wrap" }}>
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <img style={{ width: "8rem" }} src="./assets/osLogo/Apple_logo_grey.svg" alt="Apple logo" />
          <Typography variant="h4" color="secondary">MacOS/UNIX</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <img style={{ width: "8rem" }} src="./assets/osLogo/ubuntu-seeklogo.com.svg" alt="Ubuntu logo" />
          <Typography variant="h4" color="secondary">Linux/Ubuntu</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
          <img style={{ width: "8rem" }} src="./assets/osLogo/Windows_logo_-_2012_(dark_blue,_lines_thinner).svg" alt="Windows logo" />
          <Typography variant="h4" color="secondary">Windows 10</Typography>
        </Box>
      </Box> */}
    </>
  )
}

export default LanguagesSpoken