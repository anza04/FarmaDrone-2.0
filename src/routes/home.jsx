import { useState } from 'react'
import '../css/home.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                <div className="testo">Ciao {nomeUtente}, il tuo drone arriverà tra X minuti</div>
            </div>
            <div className="ricette">
                <div className="titoloRicette">Le mie Ricette</div>
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
                <Ricetta farmaco="tachipirina" dataScadenza="20/01/2023" dataEmissione="12/01/2023" />
            </div>
        </div>
        <div className="nav-bar">
            <div className="bar">
                <div className="help"></div>
                <Link to={'../Account'} className="profile"></Link>
            </div>
            <Link to={'../catalogo'} className="circle">+</Link>
        </div>
    </div>
  )
}

export default Home
