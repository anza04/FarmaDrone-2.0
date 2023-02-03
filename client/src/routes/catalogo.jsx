import { useEffect, useState } from 'react'
import '../css/catalogo.css'
import '../css/prodotto.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Box, TextField} from '@mui/material';

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlOki = "https://cdn.shopify.com/s/files/1/0564/4989/2467/products/301.jpg?v=1673435652";
const urlNurofen = "https://th.bing.com/th/id/OIP.pviqZ_9W8FZABRY1iTYhtgHaEc?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const urlMomentact = "https://farmacianuova.it/image/cache/data/farmadati/H0005555-429x515.png";
const urlInsulina = "https://www.mcguffmedical.com/content/images/thumbs/0010734_insulin-lantus-insulin-glargine-injection-100uml-mdv-10ml-vial.jpeg";
const urlXanax = "https://www.pharmamedix.com/img/formeFarmaceutiche/xanax_compresse_0.5mg.png";
const urlAulin = "https://www.petroneonline.com/img/600/744/resize/a/u/aulin_-_3_gel_confezione_50_gr_2nd.jpg";
const urlCortisone = "https://www.farmae.it/media/catalog/product/import/800598690.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700";
const urlTermometro = "https://www.farmaciarossettisas.it/37461-large_default/pic-termometro-vedoecoplus.jpg";
const urlPantoprazolo = "https://cdn1.apopixx.de/200/web_schraeg/05520856.jpg?ver=1649058517";
const urlTachimille = "https://www.efarma.com/media/catalog/product/0/1/012745067.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=466&width=466&canvas=466:466";
const urlGaviscon = "https://www.efarma.com/media/catalog/product/s/a/sachet_regular-01.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=466&width=466&canvas=466:466";

const tachipirina = "Tachipirina 500g"
const insulina = "Lantus"
const nurofen = "Nurofen"
const okitask = "Oki task"
const momentact = "Momentact"
const xanax = "Xanax"
const cortisone = "Boiron"
const aulin = "Aulin"
const termometro = "Termometro PIC"
const pantoprazolo = "Pantoprozol"
const tachimille = "Tachipirina 1000g"
const gaviscon = "Gaviscon"

let urlAttivo=urlTachipirina;
let nomeAttivo="Tachipirina";
let prezzo = "6€";
let descrizione = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem placeat corporis dignissimos deserunt, est pariatur? Sequi voluptatem sunt obcaecati vero totam eum necessitatibus, nobis, quidem saepe vel pariatur veritatis!";

function Catalogo() {

  const [showDetails, setShowDetails] = useState(true);
  const [nProdotti, setNumero] = useState(0);
  const [showParafarmacia, setParafarmacia] = useState(true);
  const [showRicetta, setRicetta] = useState(true);
  const [ricerca, setRicerca] = useState(null);

  const handleSubmit = (event)=>{
    event.preventDefault();
    const res = new FormData(event.currentTarget);
    setRicerca(res.get("cerca"))
    setParafarmacia(false)
    setRicetta(false)
  }

  const Card = (props)=>
  (
    <div className="card" onClick={()=>setShowDetails(
      !showDetails,
      urlAttivo = props.src,
      nomeAttivo = props.nome,
      prezzo = props.prezzo
    )}>
      <div className="imgContainerCatalogo"><img className='imgCatalogo' src={props.src}/></div>
      <div className="nomeProdotto" fontSize="15px">{props.nome}</div>
      <div style={{fontSize:"12px"}}>{props.tipologia + " - " + props.quantità}</div>
      <div className="prezzo">{props.prezzo}</div>
    </div>
  );
  
  return (
    <div className="Catalogo">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'/carrello'} className="circleCarrello"><div className="imgCarrello"></div></Link>
        </div>

        <div className="content">

          {showDetails && 
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{width:"94%",display:"flex", justifyContent:"start", alignItems:"center", height:"45px"}}>
              <input type="text" name='cerca' style={{color:"black", width:"300px",background:"white", height:"40px", border:"black 1px solid", borderRadius:"10px", marginRight:"15px"}}/>

              <Button
                type="submit"
                variant="contained"
                sx={{background: 'green', height:"40px", border:"solid 2px green", padding:"0",borderRadius:"10px"}}
              >
                cerca
              </Button>

            </Box>
          }

            {showDetails && <div className="filtri">
                <Button variant='contained' sx={{margin:"10px", width:"90px", background:"green", fontSize:"10px"}} onClick={()=>{setParafarmacia(true);setRicetta(false)}}>Parafarmacia</Button>
                <Button variant='contained' sx={{margin:"10px", width:"100px", background:"green", fontSize:"10px"}} onClick={()=>{setParafarmacia(false);setRicetta(true)}}>Con Ricetta</Button>
                <Button variant='contained' sx={{margin:"10px", width:"40px", background:"green", fontSize:"10px"}} onClick={()=>{setParafarmacia(true);setRicetta(true)}}>X</Button>
            </div>}

            {showDetails && <div className="prodotti">
              {showRicetta || insulina.indexOf(ricerca)!==-1? <Card tipologia="fiala" quantità="100ml" nome={insulina} prezzo="395,50€" src={urlInsulina}></Card>:null}
              {showRicetta || xanax.indexOf(ricerca)!==-1? <Card tipologia="compresse" quantità="20x0,50mg" nome={xanax} prezzo="10,50€" src={urlXanax}></Card>:null}
              {showParafarmacia || okitask.indexOf(ricerca)!==-1? <Card tipologia="granulato" quantità="20x0,40mg" nome={okitask} prezzo="10,80€" src={urlOki}></Card>:null}
              {showRicetta ||  cortisone.indexOf(ricerca)!==-1? <Card tipologia="granulato" quantità="4g" nome={cortisone} prezzo="7,90€" src={urlCortisone}></Card>:null}
              {showRicetta ||  aulin.indexOf(ricerca)!==-1? <Card tipologia="gel" quantità="50g" nome={aulin} prezzo="9,70€" src={urlAulin}></Card>:null}
              {showParafarmacia ||  termometro.indexOf(ricerca)!==-1? <Card tipologia="termometro chimico" quantità="1pz" nome={termometro} prezzo="9,70€" src={urlTermometro}></Card>:null}
              {showParafarmacia ||  gaviscon.indexOf(ricerca)!==-1? <Card tipologia="soluzione orale" quantità="24x0,50mg" nome={gaviscon} prezzo="5€" src={urlGaviscon}></Card>:null}
              {showParafarmacia ||  tachipirina.indexOf(ricerca)!==-1? <Card tipologia="granulato" quantità="20x500mg" nome={tachipirina} prezzo="5,20€" src={urlTachipirina}></Card>:null}
              {showRicetta ||  pantoprazolo.indexOf(ricerca)!==-1? <Card tipologia="compresse" quantità="20x20mg" nome={pantoprazolo} prezzo="8,10€" src={urlPantoprazolo}></Card>:null}
              {showRicetta ||  tachimille.indexOf(ricerca)!==-1? <Card tipologia="supposte" quantità="20x0,50mg" nome={tachimille}prezzo="5,55€" src={urlTachimille}></Card>:null}
              {showParafarmacia ||  nurofen.indexOf(ricerca)!==-1? <Card tipologia="compresse" quantità="12x200mg" nome={nurofen} prezzo="8€" src={urlNurofen}></Card>:null}
              {showParafarmacia ||  momentact.indexOf(ricerca)!==-1? <Card tipologia="compresse" quantità="20x400mg" nome={momentact} prezzo="6€" src={urlMomentact}></Card>:null}
              
            </div>} 

            {!showDetails &&
                          
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
                    <Button onClick={()=>setNumero(nProdotti+1)} variant="contained" sx={{background:"white", color:"black", border:"solid black 1px",width:"25%"}}>+</Button>
                  </div>
                  <div className="sotto">
                    <Button variant="contained" sx={{background:"#D9D9D9", color:"black", border:"solid black 1px",width:"100%"}} onClick={()=>Aggiungi()}>Aggiungi al carrello</Button>
                  </div>
                </div>

                <div className="back" onClick={()=>setShowDetails(!showDetails)}></div>
    
              </div>

            }           

        </div>

    </div>
  )
}

export default Catalogo
