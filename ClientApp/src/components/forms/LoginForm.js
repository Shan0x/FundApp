/**
 * @fileoverview: Registration form for new users using MaterialUI.
 * @todo
* //const FormValidators = require("./validate");
 * */

import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid
} from '@mui/material';
import axios from 'axios';


const theme = createTheme({
  palette: {
    primary: {
      main: '#F589A3',
    },
    secondary: {
      main: '#B5E3BB', 
    },
  },
});

export function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Create a user object
    const User = {
      userName: data.get('username'),
      userPassword: data.get('password')
    };


    axios.post('https://localhost:44442/api/Login', User)
      .then(response => {
        const userId = response.data.userId;
        console.log('Request successful!' + ' User ID:', userId);
        window.location.href = '/u/home';
      })
      .catch(error => {
        console.error('Request failed:', error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ padding: '30px', maxWidth: '75%', margin: 'auto' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?charity)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="user"
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
               </Grid>
              <Grid container>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
               </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
