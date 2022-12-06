import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MuseumMapperAccordion = () => {

  const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)");

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 2)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)")
      :
      setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)"));
  };

  return (
    <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "hsl(348, 100%, 61%)", borderRadius: "4px" }} />}
        sx={{ backgroundColor: "secondary" }}
      >
        <Typography sx={{ fontWeight: "bold", backgroundColor: "hsl(348, 100%, 61%)", borderRadius: "4px", padding: "3px" }} color='secondary' variant="h5" >Museum Mapper</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "bold", textDecoration: "underline", marginTop: "-15px", marginBottom: "-16px" }} variant="h6">1 week / Group of 4</Typography>
        <br />
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          A full-stack JavaScript project using MERN Stack in a team. my
          colleagues and I delivered a project designed for prospective
          travellers searching for museums within the United Kingdom.
        </Typography>
        <br />
        <div style={{ display: "flex", gap: "1rem", marginTop: "-6px" }}>
          <Button href="https://museum-mapper.herokuapp.com/" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">Visit page</Button>
          <Button href="https://github.com/Olys6/SEI-Project-3#readme" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">look at ReadMe</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default MuseumMapperAccordion