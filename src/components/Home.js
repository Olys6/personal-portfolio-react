import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'


const Home = () => {

  const [i, setI] = useState(0)
  const languageIconElemsArray = [
    <span><i style={{ color: "#ffdc04" }} className="fa-brands fa-js-square"></i> JavaScript engineer</span>, <span><i style={{ color: "#68dcfc" }} className="fa-brands fa-react"></i> React frontend developer</span>, 
    <span><i className="fa-brands fa-python"></i> Python engineer</span>, <span><i className="fa-brands fa-swift"></i> Swift engineer</span>, 
    <span><i className="fa-brands fa-wordpress"> WordPress developer</i> </span>, <span><i className="fa-brands fa-node-js"></i> Node.js developer</span>,
    <span><i className="fa-brands fa-html5"></i> HTML developer</span>, <span><i className="fa-brands fa-css3-alt"></i> CSS developer</span>,
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
      <img className="ollyFacePfp" alt="Oliver's face" src="/assets/OllyPFP.jpg"/>
      <div className="homeNameAndQuote">
        <Typography color="secondary" variant="h4">Hi my name is Oliver Skjevesland and I'm a {languageIconElemsArray[i]}.</Typography>
        <br />
        <Typography color="secondary" variant="h5">"My goal is to improve and learn new skills with IT-based work experience allowing me to develop programs that will be helpful in everyday life."</Typography>
      </div>
    </section>
  )
}

export default Home