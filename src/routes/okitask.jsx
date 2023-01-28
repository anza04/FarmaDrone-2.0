import { useState } from 'react'
import '../css/prodotto.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button'

function Okitask() {

  const [nProdotti, setNumero] = useState(0);
  
  return (
    <div className="Catalogo">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'Account'} className="circleCarrello"><div className="imgCarrello"></div></Link>
        </div>

        <Link to={"../catalogo"}><div className="back"></div></Link>

        <div className="scheda">

          <div className="infoProdotto">
            <img src="../public/okitask.png" className="fotoProdotto"/>
            <div className="testoProdotto">Tachipirina <br></br> 6€</div>
          </div>
          <div className="descrizione">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam mollitia quibusdam facilis obcaecati quidem, accusantium molestias porro ullam voluptatem maiores! Saepe neque recusandae voluptatum odit cumque tenetur itaque autem ad.
          </div>
          <div className="azioniProdotto">
            <div className="sopra">
              <Button onClick={()=>setNumero(nProdotti-1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"25%"}}>-</Button>
              <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"50%"}}>{nProdotti}</Button>
              <Button onClick={()=>setNumero(nProdotti+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"25%"}}>+</Button>
            </div>
            <div className="sotto">
              <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"100%"}}>Aggiungi al carrello</Button>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Okitask
