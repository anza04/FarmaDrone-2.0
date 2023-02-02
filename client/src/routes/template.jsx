import { useState } from 'react'
import '../css/nomeCosaFate.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function NomeCosaFate() {
  
  return (
    <div className="NomeCosaFate">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/home'} className="home">home</Link>
            </div>
            <Link to={'/Account'} className="circleAccount"><div className="account"></div></Link>
        </div>

        

    </div>
  )
}

export default NomeCosaFate

