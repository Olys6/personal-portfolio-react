import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ProjectsSection = () => {

  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expandedBrightness1, setExpandedBrightness1] = useState("linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, -1)), url(/assets/PCEnthusiasts/Presentation.gif)");
  const [expandedBrightness2, setExpandedBrightness2] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)");
  const [expandedBrightness3, setExpandedBrightness3] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/RapidGames/RapidGamesShowcase.gif)");
  const [expandedBrightness4, setExpandedBrightness4] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/BerserkersTrial/Filmage-2021-12-16_130308.gif)");

  const handleChange1 = (panel1) => (event, isExpanded1) => {
    setExpanded1(isExpanded1 ? panel1 : false);
    (isExpanded1 ? setExpandedBrightness1("linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(/assets/PCEnthusiasts/Presentation.gif)") 
    : 
    setExpandedBrightness1("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/PCEnthusiasts/Presentation.gif)"));
  };
  const handleChange2 = (panel2) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? panel2 : false);
    (isExpanded2 ? setExpandedBrightness2("linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)")
      :
      setExpandedBrightness2("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)"));
  };
  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness3("linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(/assets/RapidGames/RapidGamesShowcase.gif)")
      :
      setExpandedBrightness3("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/RapidGames/RapidGamesShowcase.gif)"));
  };
  const handleChange4 = (panel) => (event, isExpanded) => {
    setExpanded4(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness4("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/BerserkersTrial/Filmage-2021-12-16_130308.gif)")
      :
      setExpandedBrightness4("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/BerserkersTrial/Filmage-2021-12-16_130308.gif)"));
  };

  return(
    <section className="projectsSection">

      <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness1, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded1 === 'panel1'} onChange={handleChange1('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "#68dcfc", borderRadius: "4px" }} />}
          sx={{ backgroundColor: "secondary" }}
        >
          <Typography sx={{ fontWeight:"bold" }} color='secondary' variant="h5" >Project 4: PC Enthusiasts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">1 week / Solo</Typography>
          <br />
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            I created a website with React as my front-end and Django as my back-end.
            The website allows you to create different computer builds from a range of components if you are logged in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness2, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "hsl(348, 100%, 61%)", borderRadius: "4px" }} />}
          sx={{ backgroundColor: "secondary" }}
        >
          <Typography sx={{ fontWeight: "bold" }} color='secondary' variant="h5" >Project 3: Museum Mapper</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">1 week / Group of 4</Typography>
          <br />
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            I made a website for finding museums in England using React and MongoDB in a group of 4.
            My group and I pair coded the back-end and we later worked separately on the front-end.
            This project made me learn a lot about CSS and HTML as I focused on styling.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness3, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "0 !important" }} expanded={expanded3 === 'panel3'} onChange={handleChange3('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "#505cc4", borderRadius: "4px" }} />}
          sx={{ backgroundColor: "secondary" }}
        >
          <Typography sx={{ fontWeight: "bold" }} color='secondary' variant="h5" >Project 2: Rapid Games</Typography>
          {/* <img style={{ width: "10rem" }} alt="pc enthusiasts project" src="/assets/PCEnthusiasts/Thumbnail.gif" /> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">48 Hours / Duo</Typography>
          <br />
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            I worked with a classmate with the freetogame API and made a website using React to help the user find a free game to play.
            In this project,
            I learnt a lot about JS fundamentals and logic.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness4, backgroundSize: "cover", backgroundPosition: "center" }} expanded={expanded4 === 'panel4'} onChange={handleChange4('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundImage: "url(/assets/BerserkersTrial/CobblestroneSimple.jpeg)", borderRadius: "4px", backgroundSize: "cover" }} />}
          id="accordionSummary"
          sx={{ backgroundColor: "secondary" }}
        >
          <Typography sx={{ fontWeight: "bold" }} color='secondary' variant="h5" >Project 1: Berserkers Trial</Typography>
          {/* <img style={{ width: "10rem" }} alt="pc enthusiasts project" src="/assets/PCEnthusiasts/Thumbnail.gif" /> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">1 week / Solo</Typography>
          <br />
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            I worked on a classic grid-based game with HTML, JavaScript and CSS. I chose Pac-man,
            learnt and got a better understanding of JavaScript and CSS from this experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

export default ProjectsSection
