import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import '../css/root.css';
import { Link } from 'react-router-dom';
import "video-react/dist/video-react.css"; // import css
import { Player, ControlBar } from 'video-react';
import { render } from 'react-dom';

export default function Root() {

  const [isShown, setIsShown] = useState(false);
  const [clicked, setClicked] = useState(true);

  const handleClick = event => {
    setIsShown(!isShown);
    setClicked(!clicked)
  };

  return (
    <div className="video">
      <video src="/My_video.mp4" autoPlay muted loop></video>
      {/*<Player src='public/My_video.mp4' fluid={false} height={"100%"} muted={true} autoPlay={true}>
        <ControlBar disableCompletely={true}></ControlBar>
  </Player>*/}
     
    <div className="layer"></div>

    <h2>FARMADRONE</h2>

    

    <div className="opzioni">
    {isShown && 
      <Link to={'Login'} className="link">
        <Button variant='outlined' sx={{background:"white",color:'green',width:'100%', border:"green 2px solid"}}>
          SPID
          </Button>
      </Link>
    }
    {isShown &&
      <Link to={'Login'} className="link">
        <Button variant="outlined" sx={{background:"white",color:'green',width:'100%', border:"green 2px solid"}}>
          CIE
        </Button>
      </Link>
    }
    {isShown &&
      <Link to={'Login'} className="link">
        <Button variant='contained' sx={{background:'green',width:'100%'}}>
          E-mail
        </Button>
      </Link>
    }
    </div>
    <div className="azioni">
    <Button variant="contained" sx={{ backgroundColor: 'green', color:"white", width:"100%", marginBottom:"17px"}} onClick={handleClick}>
      Accedi
    </Button>
    {!isShown && <Link to={'registrati'} className="link"><Button variant='outlined' sx={{background:'white',color:'green',width:'100%'}}>Registrati</Button></Link>}
    </div>

    </div>
  );
}
