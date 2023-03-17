/**
 * @fileoverview User settings page to update profile details.
 * @author SBD
 @SBD For the "settings" updates, I just have password and email updates implemented for now. The fetch URLs are "api/accountsettings/update/password" and "api/accountsettings/update/email". The only data that needs to be passed in the JSON body of the requests is:

userName and userPassword(for a password update)
userName and userEmail(for an email update)

I have it return "true" if the update succeeds and "false" if the update fails.
 lder/different LoginController version that isn't functional. Specifically, the LoginController on the branch is trying to use ApplicationDdContext which isn't used in the newer versions. It was updated in merge #6 at the earliest based on Shannen's working branch. Your branch has merge #6 update for the LandingController but not the LoginController, so I'm not sure what happened
 I'm currently unable to compile your branch. It has an older/different LoginController version that isn't functional. Specifically, the LoginController on the branch is trying to use ApplicationDdContext which isn't used in the newer versions. It was updated in merge #6 at the earliest based on Shannen's working branch. Your branch has merge #6 update for the LandingController but not the LoginController, so I'm not sure what happened 
 
 
 * */
import React, { useState } from "react";
import axios from 'axios';
import { Container, Grid, Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B5E3BB',
    },
    secondary: {
      main: '#F589A3',
    },
  },
});

export const Settings = () => {
  const username = 'hardcoded'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onDelete = () => {
    console.log('delete')
    // we need api route for deletion
  }

  const onUpdateEmail = async (e) => {
    e.preventDefault();
    const payload = { username, email };
    try  {
      const response = await axios.post("api/accountsettings/update/email", payload);
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  const onUpdatePassword = async (e) => {
    e.preventDefault();
    const payload = { username, password };
    try  {
      const response = await axios.post('api/accountsettings/update/password', payload)
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <h1>Settings</h1>
          </Grid>
          <Grid item>
            <form onSubmit={onUpdateEmail}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <TextField
                    label="Email"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" type="submit">Update Email</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <form onSubmit={onUpdatePassword}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <TextField
                    label="Password"
                    placeholder="password"
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" type="submit">Update Password</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <div>Delete Your Account</div>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={onDelete}>Delete Account</Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
