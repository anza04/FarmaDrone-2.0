import { useState } from 'react'
import '../css/home.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Home() {
  
  let nomeUtente="Federico";

  const Ricetta = (props)  =>{
    return <div className='ricetta'>{props.farmaco} | {props.dataScadenza} | {props.dataEmissione}</div>
  };

  return (
    <div className="root">
        <div className="content">
            <div className="tempo-consegna">
                <div className="imgContainer"><div className="immagine"></div></div>
                <div className="testo">Ciao {nomeUtente}, al momento non hai ordini pendenti</div>
            </div>
            <div className="ricette">
                <div className="titoloRicette">Le mie Ricette</div>
            </div>
        </div>
        <div className="nav-bar">
            <div className="bar">
              <Link to={'../assistenza'} className="help"></Link>
              <Link to={'../Account'} className="profile"></Link>
            </div>
            <Link to={'../catalogo'} className="circle">+</Link>
        </div>
    </div>
  )
}

export default Home
