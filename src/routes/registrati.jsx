import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [value, setValue] = React.useState(null);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{color:"green", fontWeight:"bold"}}>
            Registrazione
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Nome"
                  required
                  fullWidth
                  id="Nome"
                  label="Nome"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Cognome"
                  label="Cognome"
                  name="Cognome"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} display="flex">
              <TextField
                  required
                  fullWidth
                  name="sesso"
                  label="Sesso"
                  type="text"
                  id="sesso"
                  autoComplete="sex"
                  sx={{marginRight:"5px"}}
                />
                <TextField
                  required
                  fullWidth
                  name="data_nascita"
                  label="data_nascita"
                  type="text"
                  id="data_nascita"
                  autoComplete="date"
                  sx={{marginLeft:"5px"}}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="luogo_nascita"
                  label="Luogo di nascita"
                  type="place"
                  id="luogo_nascita"
                  autoComplete="place"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="indirizzo_fatturazione"
                  label="Indirizzo Fatturazione"
                  type="place"
                  id="indirizzo_fatturazione"
                  autoComplete="place"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cellulare"
                  label="Numero di cellulare"
                  name="cellulare"
                  autoComplete="cellulare"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conferma_password"
                  label="Conferma Password"
                  type="conferma_password"
                  id="conferma_password"
                  autoComplete="new-password"
                />
              </Grid>

              

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,background:"green"}}
            >
              Registrati
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='./login' variant="body2">
                  Hai già un account? accedi
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}