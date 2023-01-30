import { useState } from 'react'
import '../css/assistenza.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Assistenza() {

  
  const Card = (props)=>{
    return <div className="cardAssistenza">
      <img src={props.src} alt="" className="imgCard" />
      <div className="titoloCard">{props.titolo}</div>
    </div>
  }
  
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
          <Button variant="contained" sx={{marginTop:"5px",fontWeight:"bold",width:'60%',height:"5vh",backgroundColor:"#D6D6D6", color:"black"}}>
            <img className='chiamaci' src="/telefono.png" alt=""/>
            CHIAMACI
            </Button>
          <div className="cardsAssistenza">
            <Card titolo="Spedizione o ordine" src="/spedizione.png"></Card>
            <Card titolo="Pagamenti e fatture" src="/pagamenti.png"></Card>
            <Card titolo="Impostazioni account e privacy" src="/privacy.png"></Card>
            <Card titolo="FarmaDrone Prime" src="/prime.png"></Card>
          </div>
        </div>

    </div>
  )
}

export default Assistenza

