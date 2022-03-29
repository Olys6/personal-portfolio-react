import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'


const Home = () => {

  const [i, setI] = useState(0)
  const languageIconElemsArray = [
    <i className="fa-brands fa-js-square"></i>, <i className="fa-brands fa-react"></i>, 
    <i className="fa-brands fa-python"></i>, <i className="fa-brands fa-swift"></i>, 
    <i className="fa-brands fa-wordpress"></i>, <i className="fa-brands fa-node-js"></i>,
    <i className="fa-brands fa-html5"></i>, <i className="fa-brands fa-css3-alt"></i>,
    <i className="fa-brands fa-bootstrap"></i>,
  ]

  useEffect(() => {
    setTimeout(() => {
      if (i === languageIconElemsArray.length - 1) {
        setI(0)
      } else if (i < languageIconElemsArray.length) {
        setI(i + 1)
      }
    }, 500)
  }, [i, languageIconElemsArray.length])

  return(
    <section className="faceAndQuoteSection">
      <img className="ollyFacePfp" alt="Oliver's face" src="/assets/OllyPFP.jpg"/>
      <div className="homeNameAndQuote">
        <Typography color="secondary" variant="h4">Hi my name is Oliver Skjevesland and I'm a <span style={{ fontSize: "40px" }}>{languageIconElemsArray[i]}</span> developer.</Typography>
        <br />
        <Typography color="secondary" variant="h5">"My goal is to improve and learn new skills with IT-based work experience allowing me to develop programs that will be helpful in everyday life."</Typography>
      </div>
    </section>
  )
}

export default Home