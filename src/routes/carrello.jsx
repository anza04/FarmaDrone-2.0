import { useEffect, useState } from 'react'
import '../css/carrello.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlOki = "https://cdn.shopify.com/s/files/1/0564/4989/2467/products/301.jpg?v=1673435652";
const urlNurofen = "https://th.bing.com/th/id/OIP.pviqZ_9W8FZABRY1iTYhtgHaEc?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const urlMomentact = "https://farmacianuova.it/image/cache/data/farmadati/H0005555-429x515.png";

function Carrello() {

  const SchedaCarrello = (props)=>{
    return  <div className="schedaCarrello">

        <img src={urlTachipirina} className="fotoCarrello"/>

        <div className="destraCarrello">
            <div className="testoCarrello"> tachipirina <br></br> tot: {nProdotti*6}</div>

            <div className="azioniProdottoCarrello">
                <Button onClick={()=>setNumero(nProdotti-1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"    }}>-</Button>
                <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"40px", height:"30px"}}>{nProdotti}</Button>
                <Button onClick={()=>setNumero(nProdotti+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"30px", height:"30px"}}>+</Button>
            </div>
        </div>
    </div>    
  }

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
    <div className="Carrello">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'/Account'} className="circleAccount"><div className="account"></div></Link>
        </div>

        <Link to={"/catalogo"}><div className="backCarrello"></div></Link>

        <div className="contentCarrello">  
            

            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   
            <SchedaCarrello></SchedaCarrello>   

        </div>

    </div>
  )
}

export default Carrello
