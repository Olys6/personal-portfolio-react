import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ShorelineVikingAccordion = () => {

    const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/ShorelineViking/Filmage-2022-08-25_124058.gif)");

    const [expanded, setExpanded] = useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)), url(/assets/ShorelineViking/Filmage-2022-08-25_124058.gif)")
            :
            setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/ShorelineViking/Filmage-2022-08-25_124058.gif)"));
    };

    return (
        <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "0 !important" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "#08d404", borderRadius: "4px", backgroundSize: "cover" }} />}
                id="accordionSummary"
                sx={{ backgroundColor: "secondary" }}
            >
                <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(90deg, #08d404 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 0), #ffbc34;", backgroundSize: "75px", backgroudPosition: "center", borderRadius: "4px", padding: "3px", marginTop: "-10px" }} color='secondary' variant="h5" >Shoreline Viking</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontWeight: "bold", textDecoration: "underline", marginTop: "-10px" }} variant="h6">72 hours / Solo</Typography>
                <br />
                <Typography sx={{ fontWeight: "bold", marginTop: "0px" }} variant="h6">
                    I had three days to make a game for a Code Jam. So I started learning how to use C# and Unity for this project. Surprisingly, in just 72 hours, I learned a new language and made a game out of it!
                </Typography>
                <br />
                <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
                    <Button href="https://olys6.itch.io/shoreline-viking" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">play game</Button>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default ShorelineVikingAccordion