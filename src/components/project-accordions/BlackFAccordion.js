import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BlackFAccordion = () => {

    const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/BlackF-3D/BlackF-3d-Project.gif)");

    const [expanded, setExpanded] = useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)), url(/assets/BlackF-3D/BlackF-3d-Project.gif)")
            :
            setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/BlackF-3D/BlackF-3d-Project.gif)"));
    };

    return (
        <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", borderRadius: "4px", backgroundSize: "cover" }} />}
                id="accordionSummary"
                sx={{ backgroundColor: "secondary" }}
            >
                <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(90deg, #08d404 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 0), #ffbc34;", backgroundSize: "75px", backgroudPosition: "center", borderRadius: "4px", padding: "3px", marginTop: "0px" }} color='secondary' variant="h5" >
                    Black Friday 3D
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontWeight: "bold", textDecoration: "underline", marginTop: "-10px" }} variant="h6">72 hours / Solo</Typography>
                <br />
                <Typography sx={{ fontWeight: "bold", marginTop: "0px" }} variant="h6">
                    I worked on a small art project with an artist to make a 3D black friday website.
                </Typography>
                <br />
                <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
                    <Button href="https://black-friday-3d.web.app/" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">
                        Visit Page
                    </Button>
                    <Button href="https://github.com/Olys6/cloned-drives-react" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">
                        REPO
                    </Button>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default BlackFAccordion