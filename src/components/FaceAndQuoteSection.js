import React, { useEffect, useState } from "react";
import { Typography, Link } from '@mui/material'
import MySkills from "./MySkills";

const FaceAndQuoteSection = () => {

  const [i, setI] = useState(0)
  const languageIconElemsArray = [
    <span style={{ color: "#ffdc04" }} ><i className="fa-brands fa-js-square"></i> JavaScript engineer</span>,
    <span style={{ color: "#68dcfc" }}><i className="fa-brands fa-react"></i> React frontend developer</span>,
    // <span><i className="fa-brands fa-python"></i> Python engineer</span>, 
    <span><img style={{ width: "29.5px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img> <span style={{ color: "#4c82ad" }}>Python</span> <span style={{ color: "#ffcc3c" }}>engineer</span></span>,
    <span style={{ color: "#ff6c2c" }}><i className="fa-brands fa-swift"></i> Swift engineer</span>,
    <span style={{ color: "#529eba" }}><i className="fa-brands fa-wordpress"> WordPress </i> developer </span>,
    <span style={{ color: "#589c44" }}><i className="fa-brands fa-node-js"></i> Node.js developer</span>,
    <span style={{ color: "#e84c24" }}><i className="fa-brands fa-html5"></i> HTML developer</span>,
    <span style={{ color: "#389cd4" }}><i className="fa-brands fa-css3-alt"></i> CSS developer</span>,
  ]

  useEffect(() => {
    setTimeout(() => {
      if (i === languageIconElemsArray.length - 1) {
        setI(0)
      } else if (i < languageIconElemsArray.length) {
        setI(i + 1)
      }
    }, 1000)
  }, [i, languageIconElemsArray.length])

  return (
    <>
      <section id="faceAndQuoteSection" className="faceAndQuoteSection">
        <div>
          <div className="ollyFacePfp"></div>
          <Typography variant="h3" sx={{ marginBottom: "-10px", textAlign:"center" }}>🇬🇧 🇳🇴 🇸🇪 🇩🇰 🇨🇭</Typography>
        </div>
        <div className="homeNameAndQuote animate__animated animate__backInRight">

          <Typography className="oliverNameAndIntro" color="secondary" variant="h4">Hi my name is <span style={{ fontWeight: "bold" }}>Oliver S.</span> and I'm a <br /> {languageIconElemsArray[i]}.</Typography>
          <br />

          <Typography color="secondary" variant="h5" sx={{ fontStyle: "italic" }}>"My goal is to improve and learn new skills with IT-based work experience allowing me to develop programs that will be helpful in everyday life."</Typography>
          <br />
          <div className="underQuotelinks">
            <Link className="underQuotelink" href="https://github.com/Olys6" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-github"></i> Olys6</strong></Link>
            <Link className="underQuotelink" href="mailto:enquiries@olys.tech" color="secondary" underline="hover" ><strong><i className="fa-solid fa-envelope"></i> enquiries@olys.tech</strong></Link>
          </div>
        </div>
      </section>
      <hr style={{ width: '90%', marginTop: "1rem", marginBottom: "2rem" }} />

      <div class="aboutMe">
        <Typography variant="h5" color="secondary" className="aboutMeDescription animate__animated animate__fadeInLeft animate__delay-1s">
          I am a self-taught web developer and specially appreciate <mark className="aboutMeDescMark">front-end development</mark>. After 2 years of learning on my own,
          I decided to join an <mark className="aboutMeDescMark">immersive course</mark> to take these skills to the next level.
        </Typography>
        <br />
        <Typography variant="h5" color="secondary" className="aboutMeDescription animate__animated animate__fadeInLeft animate__delay-2s">
          What sparks my interest and motivates me the most is to bring my <mark className="aboutMeDescMark">ideas</mark> to life while solving a problem and <mark className="aboutMeDescMark">learning</mark> from it.
        </Typography>
        <br />
        <Typography variant="h5" color="secondary" className="aboutMeDescription animate__animated animate__fadeInLeft animate__delay-3s">
          I work best in a <mark className="aboutMeDescMark">collaborative</mark> environment,
          sharing and learning from others while exchanging new ideas.
          I'm looking to become a <mark className="aboutMeDescMark">junior software engineer</mark> within a well-coordinated team.
        </Typography>
      </div>
      <hr style={{ width: '90%', marginTop: "2rem", marginBottom: "0.3rem" }} />

      <MySkills />

    </>
  )
}

export default FaceAndQuoteSection