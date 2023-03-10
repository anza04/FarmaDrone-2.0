import { useState } from 'react'
import '../css/account.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cookies from 'universal-cookie'


function Account() {

  const Element = (props)=>{
    return <div className='element'>{props.titolo}</div>
  }

  const cookies = new Cookies();
  
  return (
    <div className="Account">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'/assistenza'} className="circleAccount"><div className="imgAccount"></div></Link>
        </div>

        <div className="content" style={{overflowY:"scroll"}}>

          <div className="info">
            <div className="foto"></div>
            <div className="testo">
              <div className="nome">{cookies.get("nome")+" "+cookies.get("cognome")}</div>
              <div className="telefono">{cookies.get("telefono")}</div>
              <div className="email">{cookies.get("mail")}</div>
            </div>
          </div>

          <div className="sezione">
            <div className="titolo">Ordini</div>
            <Element titolo="I miei ordini"/>
            <Element titolo="Iscriviti a FarmaDrone prime"/>
          </div>

          <div className="sezione">
            <div className="titolo">Impostazioni Account</div>
            <Element titolo="Accesso e sicurezza"/>
            <Element titolo="Inidirizzi di spedizione"/>
            <Element titolo="Collegamento con SPID e CIE"/>
            <Element titolo="Gestisci metodi di pagamento"/>
          </div>

          <div className="sezione">
            <div className="titolo">Privacy</div>
            <Element titolo="Autorizzazioni Privacy"/>
            <Element titolo="Visualizza Termini e Condizioni"/>
            <Element titolo="Scarica tutti i tuoi Dati"/>
          </div>
          
          <div className="sezione">
            <Link to={"/"}><div id='esci'>Esci</div></Link>
          </div>

          <div className="sezione">
            <div id='elimina'>Elimina account</div>
          </div>

        </div>

    </div>
  )
}

export default Account
