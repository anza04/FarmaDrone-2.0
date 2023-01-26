import * as React from 'react';
import video from 'C:/Users/feder/Desktop/saep-mui/src/My_video.mp4';
import Button from '@mui/material/Button';
import '../css/root.css';
import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div className="video">
      <video loop autoPlay>
      <source src={video} type="video/mp4"/>
     </video>
     
    <div className="layer"></div>

    <h2>FARMADRONE</h2>

    <div className="azioni">
      <Link to={'Login'} className="link"><Button variant='contained' sx={{background:'green',width:'100%'}}>Accedi</Button></Link>
      <Button variant='outlined' sx={{background:'white',color:'green',width:'100%'}}>Registrati</Button>
    </div>

    </div>
  );
}
