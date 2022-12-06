import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ClonedDrivesAccordion = () => {

    const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/ClonedDrives/Cloned-Drives-Project.gif)");

    const [expanded, setExpanded] = useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)), url(/assets/ClonedDrives/Cloned-Drives-Project.gif)")
            :
            setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/ClonedDrives/Cloned-Drives-Project.gif)"));
    };

    return (
        <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", borderRadius: "4px", backgroundSize: "cover", backgroundColor: "#ffbc4c" }} />}
                id="accordionSummary"
                sx={{ backgroundColor: "secondary" }}
            >
                <Typography sx={{ fontWeight: "bold", backgroundColor: "#ffbc4c", backgroundSize: "75px", backgroudPosition: "center", borderRadius: "4px", padding: "3px", marginTop: "0px" }} color='secondary' variant="h5" >
                    Cloned Drives
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontWeight: "bold", textDecoration: "underline", marginTop: "-10px" }} variant="h6">Work in Progress / Solo</Typography>
                <br />
                <Typography sx={{ fontWeight: "bold", marginTop: "0px" }} variant="h6">
                    A commissioned project to provide the ability to display an
                    extensive collection of vehicle information inclusive of filtering
                    and power word searching.
                </Typography>
                <br />
                <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
                    <Button href="https://cloneddrives.club" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">
                        Visit Page
                    </Button>
                    <Button href="https://github.com/Olys6/cloned-drives-react" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">
                        Github Repo
                    </Button>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default ClonedDrivesAccordion