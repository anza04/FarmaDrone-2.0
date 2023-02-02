import * as React from 'react';
import { useEffect, useState } from 'react';
import '../css/login.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookie from 'universal-cookie';

export default function Login() {

  let trovato = 0;

  const cookies = new Cookie()

  const [valori, setValori] = useState({});
  const [errorLogin, setErrorLogin] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    Axios.get("http://localhost:5000/credentials",  { crossdomain: true }).then(response => {
      setValori(response.data)
    });
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = new FormData(event.currentTarget);
    let i=0;
    for(i=0;i<2;i++)
    {
      if(res.get('username')==valori[i].username && res.get('password')==valori[i].hashPassword)
      {        
        console.log(res.get('username'),valori[i].username)
        try {
          console.log(valori[i].nome)
          cookies.remove('nome')
          cookies.remove('cognome')
          cookies.remove('telefono')
          cookies.remove('mail')
          cookies.set('nome', valori[i].nome, { path: '/' });
          cookies.set('cognome', valori[i].cognome, { path: '/' });
          cookies.set('mail', valori[i].mail, { path: '/' });
          cookies.set('telefono', valori[i].cellulare, { path: '/' });
        } catch (error) {
          console.log(error)
        }
        navigate('/home',{state:{"nome":valori[i].nome, "cognome":valori[i].cognome, "mail":valori[i].mail, "telefono":valori[i].cellulare}});
        trovato = 1;
      }
    };
    if(trovato==0)
    {
      setErrorLogin(1);
    }
  };

  return (
    
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {errorLogin &&
              <div className='errore' style={{color:"red", fontWeight:"bold", width:"100%", textAlign:"center", marginTop:"10px"}}>Nome utente o Password errati</div>
            }
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>

            
            <TextField
              margin="normal"
              required
              fullWidth
              id="nomeUtente"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,background: 'green'}}
            >
              Log in
            </Button>

            <Grid container>
              <Grid item>
                <a href="./registrati" variant="body2">
                  {"Registrati"}
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}