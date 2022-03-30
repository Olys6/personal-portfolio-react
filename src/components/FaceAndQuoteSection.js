import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'


const FaceAndQuoteSection = () => {

  const [i, setI] = useState(0)
  const languageIconElemsArray = [
    <span style={{ color: "#ffdc04" }} ><i className="fa-brands fa-js-square"></i> JavaScript engineer</span>, 
    <span style={{ color: "#68dcfc" }}><i  className="fa-brands fa-react"></i> React frontend developer</span>, 
    // <span><i className="fa-brands fa-python"></i> Python engineer</span>, 
    <span><img style={{ width: "29.5px" }} alt="python logo" src="/assets/python-seeklogo.com.svg"></img> <span style={{ color: "#4c82ad" }}>Python</span> <span style={{ color: "#ffcc3c" }}>engineer</span></span>, 
    <span style={{ color: "#ff6c2c"}}><i className="fa-brands fa-swift"></i> Swift engineer</span>,
    <span style={{ color: "#529eba" }}><i className="fa-brands fa-wordpress"> WordPress developer</i> </span>, 
    <span style={{ color: "#589c44" }}><i  className="fa-brands fa-node-js"></i> Node.js developer</span>,
    <span style={{ color: "#e84c24" }}><i  className="fa-brands fa-html5"></i> HTML developer</span>, 
    <span style={{ color: "#389cd4" }}><i  className="fa-brands fa-css3-alt"></i> CSS developer</span>,
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

  return(
    <section className="faceAndQuoteSection">
      <div className="divLeftOfPfp"></div>
      <div className="ollyFacePfp"></div>
      <div className="homeNameAndQuote animate__animated animate__backInLeft">
        <Typography className="oliverNameAndIntro" color="secondary" variant="h4">Hi my name is Oliver Skjevesland and I'm a <br /> {languageIconElemsArray[i]}.</Typography>
        <br />
        <Typography color="secondary" variant="h5">"My goal is to improve and learn new skills with IT-based work experience allowing me to develop programs that will be helpful in everyday life."</Typography>
      </div>
    </section>
  )
}

export default FaceAndQuoteSection