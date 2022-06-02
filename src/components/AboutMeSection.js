import React from 'react'
import { Typography, Link } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutMeSection = () => {



  return(
    <section id="aboutMeSection" className="aboutMeSection">
      <Link href="#aboutMeSection"><Typography color="secondary" variant="h2" className="AboutMePageTitle"><ExpandMoreIcon sx={{ fontSize: "40px" }} />About Me<ExpandMoreIcon sx={{ fontSize: "40px" }} /></Typography></Link>

      <Typography variant="h5" color="secondary" className="aboutMeDescription" data-aos="fade-up">
        I am a self-taught web developer and especially appreciate front-end development. After two years of learning on my own, I decided to join an immersive course to take these skills to the next level.
      </Typography>
      <Typography variant="h5" color="secondary" className="aboutMeDescription" data-aos="fade-up">
        What sparks my interest and motivates me the most is to bring my ideas to life while solving a problem and learning from it.
      </Typography>
      <Typography variant="h5" color="secondary" className="aboutMeDescription" data-aos="fade-up">
        I work best in a collaborative environment,
        sharing and learning from others while exchanging new ideas.
        I'm looking to become a junior software engineer within a well-coordinated team.
      </Typography>

      <Typography variant="h5" color="secondary" className="aboutMeDescription" data-aos="fade-up">I love making apps/websites and have a passion for styling and making tools.</Typography>
      <Typography color="secondary" variant="h5" className="aboutMeDescription" data-aos="fade-up">
        I'm looking to work as a junior software engineer to make software that people will use in day to day life.
        I am self-driven to get things done and love having a teammate work on a project with me!
      </Typography>
      <Typography color="secondary" variant="h5" className="aboutMeDescription" data-aos="fade-up">
        I recently finished a 3-month immersive course from General Assembly that taught me software engineering.
        I learnt JavaScript, Python/Django, React Hooks, Node/Express, MongoDB, GitHub, HTML, CSS, PostgreSQL, Insomnia, Tableplus, MacOS.
      </Typography>
      <Typography color="secondary" variant="h5" className="aboutMeDescription" data-aos="fade-up">
        I am extremely thrilled about finding different ways to code and making coding life simpler.
        I will usually look for tools online in my free time to see what I can do to improve my experience.
      </Typography>
      <Typography color="secondary" variant="h5" className="aboutMeDescription" data-aos="fade-up">
        As of writing this, I am learning how to use Ubuntu 21.0 on a dual boot drive, windows being the second boot option.
        Trying new things when it comes to code and technology, in general, is a hobby.
      </Typography>
      <img alt="ubuntu os" className="aboutMeUbuntuPic" style={{ borderRadius: "5px", border: "1px solid white" }} src="assets/Screenshot from 2022-01-05 15-14-55.png" data-aos="zoom-in" />
      <Typography color="secondary" variant="h2">Interests</Typography>
      <div className="interests">
        <div className="computerInterest" data-aos="fade-right">
          <Typography color="secondary" variant="h3" >Computers <i className="fa-solid fa-computer"></i></Typography>
          <Typography color="secondary" variant="h5">
            I'm really into computer hardware as well as games and I built my own gaming PC.
            I love finding new software and hardware to modify my experience using devices.
            <br />
            I am familiar with computer hardware as I even built my computer!
          </Typography>
        </div>
        <div className="skiingInterest" data-aos="fade-left">
          <Typography color="secondary" variant="h3" >Skiing <i className="fa-solid fa-person-skiing"></i></Typography>
          <Typography color="secondary" variant="h5">
            I enjoy skiing.
            I usually go up to Switzerland to ski with my family but I've also gone on a few ski field trips with friends and classmates.
            I've been skiing since I was about 3 years old.
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection