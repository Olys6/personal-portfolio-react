import { Link } from '@mui/material';
import React from 'react';

const Linkbar = () => {




  return (
    <div className="linkBar">
      <Link href="https://github.com/Olys6" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-github"></i> Olys6</strong></Link>
      <Link href="mailto:oliver.skjevesland@gmail.com" color="secondary" underline="hover" ><strong><i className="fa-solid fa-envelope"></i> oliver.skjevesland<i className="fa-solid fa-at"></i>gmail.com</strong></Link>
      <Link href="https://www.linkedin.com/in/oliver-skjevesland/" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-linkedin"></i> oliver-skjevesland</strong></Link>
    </div>
  )
}

export default Linkbar