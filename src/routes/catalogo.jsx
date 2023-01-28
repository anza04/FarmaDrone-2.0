import { useState } from 'react'
import '../css/catalogo.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ShowChart } from '@mui/icons-material';

const urlTachipirina = "https://meafarma.it/image/cache/data/pharmadb/012745117-900x900.jpg";
const urlOki = "https://th.bing.com/th/id/OIP.QkNyhcZ7lYnBjqZsEWKvmwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const urlNurofen = "https://th.bing.com/th/id/OIP.pviqZ_9W8FZABRY1iTYhtgHaEc?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const urlMomentact = "https://www.bing.com/th?id=OPE.BB%2batqsRvSq7tQ300C300&pid=21.1&w=140&h=140&qlt=100&dpr=1,3"

function Catalogo() {

  const [ShowDetails, SetShowDetails] = useState(0);

  const Card = (props)=>
  (
    <div className="card">
      <img src={props.src}/>
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

          <input className='cerca' type="text" placeholder='Cerca'/>

            <div className="filtri">
                <div className="filtro">Categoria</div>
                <div className="filtro">Tipologia</div>
                <div className="filtro">Produttore</div>
                <div className="filtro">Categoria</div>
                <div className="filtro">Tipologia</div>
                <div className="filtro">Grammatura</div>
            </div>

            <div className="prodotti">
              <Card nome="tachipirina" prezzo="6€" src={urlTachipirina}></Card>
              <Link to={"okitask"}><Card nome="oki task" prezzo="5€" src={urlOki}></Card></Link>
              <Link to={"nurofen"}><Card nome="nurofen" prezzo="8€" src={urlNurofen}></Card></Link>
              <Link to={"moment"}><Card nome="moment act" prezzo="6€" src={urlMomentact}></Card></Link>
              <Link to={"tachipirina"}><Card nome="tachipirina" prezzo="6€" src={urlTachipirina}></Card></Link>
              <Link to={"okitask"}><Card nome="oki task" prezzo="5€" src={urlOki}></Card></Link>
              <Link to={"nurofen"}><Card nome="nurofen" prezzo="8€" src={urlNurofen}></Card></Link>
              <Link to={"moment"}><Card nome="moment act" prezzo="6€" src={urlMomentact}></Card></Link>
              
            </div>            

        </div>

    </div>
  )
}

export default Catalogo
