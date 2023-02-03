import { useEffect, useState } from 'react'
import '../css/carrello.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlAulin = "https://www.petroneonline.com/img/600/744/resize/a/u/aulin_-_3_gel_confezione_50_gr_2nd.jpg";

const PrezzoTachi=5.20;
const PrezzoInsu=9.70;

function Carrello() {

  const [nTachipirina, setTachi] = useState(1);
  const [nInsu, setInsu] = useState(1);
  const [showTachi, setShowTachi] = useState(true);
  const [showInsu, setShowInsu] = useState(true);
  
  return (
    <div className="Carrello">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'/Account'} className="circleAccount"><div className="account"></div></Link>
        </div>

        <Link to={"/catalogo"}><div className="backCarrello"></div></Link>

        <div className="contentCarrello">  
            

        {showTachi &&
          <div className="schedaCarrello">
            <img src={urlTachipirina} className="fotoCarrello"/>

            <div className="destraCarrello">
              <div className="testoCarrello"> Tachipirina <br></br> tot: {nTachipirina*PrezzoTachi}€</div>

              <div className="azioniProdottoCarrello">
                  <Button onClick={()=>setTachi(nTachipirina-1, nTachipirina<2?setShowTachi(false):null)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"    }}>-</Button>
                  <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"40px", height:"30px"}}>{nTachipirina}</Button>
                  <Button onClick={()=>setTachi(nTachipirina+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"}}>+</Button>
              </div>
            </div>
          </div>
        }

        {showInsu &&
          <div className="schedaCarrello">
            <img src={urlAulin} className="fotoCarrello"/>

            <div className="destraCarrello">
              <div className="testoCarrello"> Aulin <br></br> tot: {nInsu*PrezzoInsu}€</div>

              <div className="azioniProdottoCarrello">
                  <Button onClick={()=>setInsu(nInsu-1, nInsu<2?setShowInsu(false):null)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"    }}>-</Button>
                  <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"40px", height:"30px"}}>{nInsu}</Button>
                  <Button onClick={()=>setInsu(nInsu+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"}}>+</Button>
              </div>
            </div>
          </div>   
        } 

          <div className="totale">
              <div className="testoPagamento">Totale: {nTachipirina*PrezzoTachi+nInsu*PrezzoInsu}€</div>
              <Button variant='contained' sx={{background:'green', marginTop:"10px"}}>Procedi al pagamento</Button>
          </div> 
            

        </div>

    </div>
  )
}

export default Carrello
