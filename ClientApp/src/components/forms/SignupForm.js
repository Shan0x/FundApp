/**
 * @fileoverview: Registration form for new users using MaterialUI.
 * @todo
* //const FormValidators = require("./validate");
* //const validateRegistration = FormValidators.validateRegistration;
 * */

import * as React from 'react';
import { useState } from 'react';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CssBaseline, Link, Grid, Box, Typography, Container } from "@mui/material";
import { Avatar, Button, TextField } from "@mui/material"
import axios from 'axios';
// zxcvbn is a password strength estimator.
const zxcvbn = require("zxcvbn");


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

export function SignUpForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePassChange = (event) => {
      const { name, value } = event.target;

      const score = value ? zxcvbn(value).score + 1 : null;
      setScore(score);
      setPassword(value);
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Create a new user object
    const newUser = {
        userName: data.get('username'),
        userPassword: data.get('password'),
        userFirstName: data.get('firstName'),
        userLastName: data.get('lastName'),
        userEmail: data.get('email'),
      userDOB: selectedDate ? selectedDate.format('YYYY-MM-DD') : null, // This will log the selected date in the format "YYYY-MM-DD"
    };

    // POST the user data to the server using axios
    axios.post('https://localhost:44442/api/Signup', newUser)
      .then(response => {
        console.log(response.data);
        window.location.href = '/login';
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{
        backgroundColor: '#FFFFFF',
        padding: 2,
        borderRadius: '3%',
        boxShadow: 3
      }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddRoundedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="dob"
                    label="Date of Birth"
                    name="dob"
                    inputFormat="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="user"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
    </ThemeProvider>
  );
}
