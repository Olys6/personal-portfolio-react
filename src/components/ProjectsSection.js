import React from 'react'
import { Typography, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PCEnthusiastsAccordion from './project-accordions/PCEnthusiasts'
import MuseumMapperAccordion from './project-accordions/MuseumMapper';
import RapidGamesAccordion from './project-accordions/RapidGames'
import BerserkersTrialAccordion from './project-accordions/BerserkersTrial'
import GaetteAccordion from './project-accordions/Gaette'
import ShorelineVikingAccordion from './project-accordions/ShorelineVikingAccordion';
import BlackFAccordion from './project-accordions/BlackFAccordion';
import ClonedDrivesAccordion from './project-accordions/ClonedDrivesAccordion';

const ProjectsSection = () => {

  return (
    <section id="projectsSection">
      <Link href="#projectsSection"><Typography textAlign="center" color="secondary" variant="h2" sx={{ marginBottom: "2rem" }}><ExpandMoreIcon sx={{ fontSize: "40px" }} />My Projects<ExpandMoreIcon sx={{ fontSize: "40px" }} /></Typography></Link>

      <div className="projectsSection" data-aos="fade-up">

        <PCEnthusiastsAccordion />

        <ClonedDrivesAccordion />

        <MuseumMapperAccordion />

        <RapidGamesAccordion />

        <BerserkersTrialAccordion />

        <BlackFAccordion />

        <GaetteAccordion />

        <ShorelineVikingAccordion />

      </div>
    </section>
  )
}

export default ProjectsSection
