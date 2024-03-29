import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GaetteAccordion = () => {

    const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/Gaette/Filmage-2022-04-29_155614-filmage.gif)");

    const [expanded, setExpanded] = useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)), url(/assets/Gaette/Filmage-2022-04-29_155614-filmage.gif)")
            :
            setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/Gaette/Filmage-2022-04-29_155614-filmage.gif)"));
    };

    return (
        <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "#08d404", borderRadius: "4px", backgroundSize: "cover" }} />}
                id="accordionSummary"
                sx={{ backgroundColor: "secondary" }}
            >
                <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(90deg, #08d404 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 0), #ffbc34;", backgroundSize: "75px", backgroudPosition: "center", borderRadius: "4px", padding: "3px" }} color='secondary' variant="h5" >Gætte React</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontWeight: "bold", textDecoration: "underline", marginTop: "-20px" }} variant="h6">1 week / Solo</Typography>
                <br />
                <Typography sx={{ fontWeight: "bold", marginTop: "-15px" }} variant="h6">
                    Personal project replicating the popular game Wordle using
                    React/Typescript with the added feature of bilingualism
                    combining English and French.
                </Typography>
                <br />
                <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
                    <Button href="https://olys6.github.io/Gaette-react-typescript/" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">play game</Button>
                    <Button href="https://github.com/Olys6/Gaette-react-typescript" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">GitHub Repo</Button>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default GaetteAccordion