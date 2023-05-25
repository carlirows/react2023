import {Grid, Typography, TextField, Button, Link} from '@mui/material';
import { Link as routerLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
   <AuthLayout title='Crear Cuenta'>
   
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2}}>
               <TextField
                label="Nombre Completo"
                type='text'
                placeholder="Your Name"
                fullWidth
               ></TextField>
            </Grid>
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
              
              <Grid item xs={12} >
                <Button variant='contained' fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            
            </Grid>
            <Grid container direction='row' justifyContent='end' >
              <Typography sx={{mr:1}}> Ya tienes una cuenta? </Typography>
              <Link component={ routerLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
   </AuthLayout>
  )
}
