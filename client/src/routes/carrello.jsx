import { useEffect, useState } from 'react'
import '../css/carrello.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlInsulina = "https://www.mcguffmedical.com/content/images/thumbs/0010734_insulin-lantus-insulin-glargine-injection-100uml-mdv-10ml-vial.jpeg";


function Carrello() {

  const SchedaCarrello = (props)=>{
    return  <div className="schedaCarrello">

        <img src={props.src} className="fotoCarrello"/>

        <div className="destraCarrello">
            <div className="testoCarrello"> {props.nome} <br></br> tot: </div>

            <div className="azioniProdottoCarrello">
                <Button onClick={()=>document.getElementById("counter").innerText=document.getElementById("counter").innerText-1} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"    }}>-</Button>
                <Button id='counter' variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"40px", height:"30px"}}>{props.counter}</Button>
                <Button onClick={()=>document.getElementById("counter").innerText=document.getElementById("counter").innerText+1} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"}}>+</Button>
            </div>
        </div>
    </div>    
  }

  const [nTachipirina, setTachi] = useState(1);
  const [nInsu, setInsu] = useState(1);

  const Card = (props)=>
  (
    <div className="card">
      <div className="imgContainerCatalogo"><img className='imgCatalogo' src={props.src}/></div>
      <div className="nomeProdotto" fontSize="15px">{props.nome}</div>
      <div className="prezzo">{props.prezzo}</div>
    </div>
  );
  
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
            

          <div className="schedaCarrello">
            <img src={urlTachipirina} className="fotoCarrello"/>

            <div className="destraCarrello">
              <div className="testoCarrello"> Tachipirina <br></br> tot: {nTachipirina*PrezzoTachi}€</div>

              <div className="azioniProdottoCarrello">
                  <Button onClick={()=>setTachi(nTachipirina-1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"    }}>-</Button>
                  <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"40px", height:"30px"}}>{nTachipirina}</Button>
                  <Button onClick={()=>setTachi(nTachipirina+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"}}>+</Button>
              </div>
            </div>
          </div>

          <div className="schedaCarrello">
            <img src={urlInsulina} className="fotoCarrello"/>

            <div className="destraCarrello">
              <div className="testoCarrello"> Insulina <br></br> tot: {nInsu*PrezzoInsu}€</div>

              <div className="azioniProdottoCarrello">
                  <Button onClick={()=>setInsu(nInsu-1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"    }}>-</Button>
                  <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"40px", height:"30px"}}>{nInsu}</Button>
                  <Button onClick={()=>setInsu(nInsu+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"}}>+</Button>
              </div>
            </div>
          </div>    

            <div className="totale">
                <div className="testoPagamento">Totale: €</div>
                <Button variant='contained' sx={{background:'green', marginTop:"10px"}}>Procedi al pagamento</Button>
            </div> 
            

        </div>

    </div>
  )
}

export default Carrello
