import {Grid, Typography, TextField, Button, Link} from '@mui/material';
import { Link as routerLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
   <AuthLayout title='Login'>
   
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2}}>
               <TextField
                label="Email"
                type='email'
                placeholder="Email"
                fullWidth
               ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
               <TextField
                label="Password"
                type='password'
                placeholder="Password"
                fullWidth
               ></TextField>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ml: 1}} variant='body1'> Login with Google </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end' >
              <Link component={ routerLink } color='inherit' to='/auth/register'>
                Crear Una Cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
   </AuthLayout>
  )
}
