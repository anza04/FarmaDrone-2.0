import { useEffect, useState } from 'react'
import '../css/catalogo.css'
import '../css/prodotto.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlOki = "https://cdn.shopify.com/s/files/1/0564/4989/2467/products/301.jpg?v=1673435652";
const urlNurofen = "https://th.bing.com/th/id/OIP.pviqZ_9W8FZABRY1iTYhtgHaEc?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const urlMomentact = "https://farmacianuova.it/image/cache/data/farmadati/H0005555-429x515.png"

function Catalogo() {

  const [showDetails, setShowDetails] = useState(false);
  const [nProdotti, setNumero] = useState(0);

  const Card = (props)=>
  (
    <div className="card">
      <div className="imgContainerCatalogo"><img className='imgCatalogo' src={props.src}/></div>
      <div className="nomeProdotto" fontSize="15px">{props.nome}</div>
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

          {showDetails && <input className='cerca' type="text" placeholder='Cerca'/>}

            {showDetails && <div className="filtri">
                <div className="filtro">Categoria</div>
                <div className="filtro">Tipologia</div>
                <div className="filtro">Produttore</div>
                <div className="filtro">Categoria</div>
                <div className="filtro">Tipologia</div>
                <div className="filtro">Grammatura</div>
            </div>}

            {showDetails && <div className="prodotti">
              <Card nome="tachipirina" prezzo="6€" src={urlTachipirina}></Card>
              <Card nome="oki task" prezzo="5€" src={urlOki}></Card>
              <Card nome="nurofen" prezzo="8€" src={urlNurofen}></Card>
              <Card nome="moment act" prezzo="6€" src={urlMomentact}></Card>
              <Card nome="tachipirina" prezzo="6€" src={urlTachipirina}></Card>
              <Card nome="oki task" prezzo="5€" src={urlOki}></Card>
              <Card nome="nurofen" prezzo="8€" src={urlNurofen}></Card>
              <Card nome="moment act" prezzo="6€" src={urlMomentact}></Card>
            </div>} 

            {!showDetails &&
                          
              <div className="scheda">

                <div className="infoProdotto">
                  <img src={urlTachipirina} className="fotoProdotto"/>
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

                <div className="back"></div>
    
              </div>

            }           

        </div>

    </div>
  )
}

export default Catalogo
