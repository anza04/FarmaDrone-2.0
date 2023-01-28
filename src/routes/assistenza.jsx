import { useState } from 'react'
import '../css/assistenza.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Assistenza() {
  
  return (
    <div className="Account">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'/Account'} className="circleAccount"><div className="account"></div></Link>
        </div>

        <div className="contentAssistenza">
          <div className="titoloAssistenza">Per ogni esigenza</div>
          <Button variant="contained" sx={{width:'60%',height:"5vh",backgroundColor:"grey"}}>CHIAMACI</Button>
          <div className="cards">
            <div className="cardAssistenza"></div>
            <div className="cardAssistenza"></div>
            <div className="cardAssistenza"></div>
            <div className="cardAssistenza"></div>
          </div>
        </div>

    </div>
  )
}

export default Assistenza

