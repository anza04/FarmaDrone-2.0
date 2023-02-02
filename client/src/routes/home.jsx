import { useState, useEffect } from 'react'
import '../css/home.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Axios from 'axios'
import Cookies from 'universal-cookie';
import { Button } from '@mui/material';
import '../css/prodotto.css'

function Home() {

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlOki = "https://cdn.shopify.com/s/files/1/0564/4989/2467/products/301.jpg?v=1673435652";
const urlNurofen = "https://th.bing.com/th/id/OIP.pviqZ_9W8FZABRY1iTYhtgHaEc?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const urlMomentact = "https://farmacianuova.it/image/cache/data/farmadati/H0005555-429x515.png";
const urlInsulina = "https://www.mcguffmedical.com/content/images/thumbs/0010734_insulin-lantus-insulin-glargine-injection-100uml-mdv-10ml-vial.jpeg";

  let urlAttivo=urlInsulina;
  let nomeAttivo="Insulina";
  let prezzo = "10€";
  let descrizione = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem placeat corporis dignissimos deserunt, est pariatur? Sequi voluptatem sunt obcaecati vero totam eum necessitatibus, nobis, quidem saepe vel pariatur veritatis!";

  const [showDetails, setShowDetails] = useState(true);
  const [nProdotti, setNumero] = useState(0);

  const location = useLocation();

  const cookies = new Cookies();
  
  const Ricetta = (props)  =>{
    return <div className='ricetta' onClick={()=>setShowDetails(
      !showDetails,
      urlAttivo = props.src,
      nomeAttivo = props.nome,
      prezzo = props.prezzo
    )}>{props.farmaco} | {props.prezzo} | {props.dataEmissione}</div>
  };

  return (
    <div className="root">

        {showDetails && <div className="content">
            <div className="saluto">Ciao {cookies.get("nome")}</div>
            <div className="tempo-consegna">
                <div className="imgContainer"><div className="immagine"></div></div>
                <div className="testo">Al momento non hai ordini pendenti</div>
            </div>
            <div className="ricette">
                <div className="titoloRicette">Le tue Ricette</div>
                <Ricetta farmaco="insulina" prezzo="10€" dataEmissione="02/02/2023"></Ricetta>
            </div>
        </div>}

        {!showDetails &&
        <div className="containerScheda">
            <div className="scheda">
            
              <div className="infoProdotto">
                <img src={urlAttivo} className="fotoProdotto"/>
                   <div className="testoProdotto"> {nomeAttivo} <br></br> {prezzo}</div>
              </div>
            
              <div className="descrizione">
                {descrizione}
              </div>
            
              <div className="azioniProdotto">
                <div className="sopra">
                  <Button onClick={()=>setNumero(nProdotti-1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"25%"}}>-</Button>
                  <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"50%"}}>{nProdotti}</Button>
                  <Button onClick={()=>setNumero(nProdotti+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"25%"}}>+</Button>                  </div>
                  <div className="sotto">
                    <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"100%"}}>Aggiungi al carrello</Button>
                  </div>
              </div>
            
                            <div className="back" onClick={()=>setShowDetails(!showDetails)}></div>
                
                          </div></div>}

        <div className="nav-bar">
            <div className="bar">
              <Link to={'../assistenza'} className="help"></Link>
              <Link to={"/account"} className="profile"></Link>
            </div>
            <Link to={'../catalogo'} className="circle">+</Link>
        </div>
    </div>
  )
}

export default Home
