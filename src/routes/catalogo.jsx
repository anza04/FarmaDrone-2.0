import { useState } from 'react'
import '../css/catalogo.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Catalogo() {

  const Card = (props)=>
  (
    <div className="card">
      <img src={props.src}/>
      <div className="titolo" fontSize="15px">{props.nome}</div>
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

          <input className='cerca' type="text" placeholder='Cerca'/>

            <div className="filtri">
                <div className="filtro">Categoria</div>
                <div className="filtro">Tipologia</div>
                <div className="filtro">Produttore</div>
                <div className="filtro">Grammatura</div>
            </div>

            <div className="prodotti">
              <Link to={"tachipirina"}><Card nome="tachipirina" prezzo="6€" src="public/granulato.png"></Card></Link>
              <Link to={"okitask"}><Card nome="oki task" prezzo="5€" src="public/okitask.png"></Card></Link>
              <Link to={"nurofen"}><Card nome="nurofen" prezzo="8€" src="public/nurofen.png"></Card></Link>
              <Link to={"moment"}><Card nome="moment act" prezzo="6€" src="public/momentact.png"></Card></Link>
              
              <Link to={"tachipirina"}><Card nome="tachipirina" prezzo="6€" src="public/granulato.png"></Card></Link>
              <Link to={"okitask"}><Card nome="oki task" prezzo="5€" src="public/okitask.png"></Card></Link>
              <Link to={"nurofen"}><Card nome="nurofen" prezzo="8€" src="public/nurofen.png"></Card></Link>
              <Link to={"moment"}><Card nome="moment act" prezzo="6€" src="public/momentact.png"></Card></Link>
              
            </div>            

        </div>

    </div>
  )
}

export default Catalogo
