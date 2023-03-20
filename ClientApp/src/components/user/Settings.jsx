
/**
 * @fileoverview User settings page to update profile details.
 * @author SBD
 @SBD For the "settings" updates, I just have password and email updates implemented for now. The fetch URLs are "api/accountsettings/update/password" and "api/accountsettings/update/email". The only data that needs to be passed in the JSON body of the requests is:

userName and userPassword(for a password update)
userName and userEmail(for an email update)

I have it return "true" if the update succeeds and "false" if the update fails.
 lder/different LoginController version that isn't functional. Specifically, the LoginController on the branch is trying to use ApplicationDdContext which isn't used in the newer versions. It was updated in merge #6 at the earliest based on Shannen's working branch. Your branch has merge #6 update for the LandingController but not the LoginController, so I'm not sure what happened
 * */
import React, { useState } from "react";
import axios from 'axios';
import { Container, Avatar, Grid, Button, TextField, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

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
  const username = 'Manos'

  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onDelete = () => {
    console.log('delete')
    // we need api route for deletion
  }

  const onUpdateEmail = async (e) => {
    e.preventDefault();
    const payload = { username, email };
    try {
      const response = await axios.post("api/accountsettings/update/email", payload);
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  const onUpdatePassword = async (e) => {
    e.preventDefault();
    const payload = { username, password };
    try {
      const response = await axios.post('api/accountsettings/update/password', payload)
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">

        <Stack direction="column" alignItems="center" spacing={2}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddRoundedIcon />
          </Avatar>
          <Stack pb={1} borderBottom="1px solid black">
            <h3>Change Email</h3>
          </Stack>

          <Stack>
            <form onSubmit={onUpdateEmail}>
              <Stack direction="row" spacing={2}>
                <Stack>
                  <TextField
                    label="Username"
                    placeholder="Username"
                    type="text"
                    name="Username"
                    value={username}

                  />
                </Stack>
                <Stack>
                  <TextField
                    label="Email"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: 200 }}
                  />
                </Stack>
                <Stack>
                  <TextField
                    label="New Email"
                    placeholder="Eenter your newEmail"
                    type="text"
                    name="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                    style={{ width: 200 }}
                  />
                </Stack>
                <Grid item>
                  <Button style={{ width: 200, height: 56 }} variant="contained" type="submit">Update Email</Button>
                </Grid>
              </Stack>
            </form>
          </Stack>
          <Stack pb={1} borderBottom="1px solid black">
            <h3>Change Password</h3>
          </Stack>
          <Stack>
            <form onSubmit={onUpdatePassword}>
              <Stack direction="row" spacing={2}>
                <Stack>
                  <TextField
                    label="Password"
                    placeholder="password"
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Stack>
                <Stack>
                  <TextField
                    label="New Password"
                    placeholder="New password"
                    type="text"
                    name="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </Stack>
                <Stack>
                  <Button style={{ width: 200, height: 56 }} variant="contained" type="submit">Update Password</Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
          <Stack pb={1} borderBottom="1px solid black">
            <h3>Delete Your Account</h3>
          </Stack>
          <Grid item>
            <Button style={{ width: 200, height: 56 }} variant="contained" type="submit" onClick={onDelete}>Delete Account</Button>
          </Grid>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
