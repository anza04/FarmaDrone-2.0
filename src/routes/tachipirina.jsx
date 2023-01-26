import { useState } from 'react'
import '../css/catalogo.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Tachipirina() {

  const Card = (props)=>
  (
    <div className="card">
      <img src={props.src}/>
      <div className="titolo">{props.nome}</div>
      <div className="prezzo">{props.prezzo}</div>
    </div>
  );
  
  return (
    <div className="Catalogo">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'Account'} className="circleCarrello"><div className="imgCarrello"></div></Link>
        </div>

        <div className="content">

          <div className="back"></div>

          <div className="scheda"></div>    

        </div>

    </div>
  )
}

export default Tachipirina
