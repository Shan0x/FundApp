/**
 * @fileoverview Form to create a new fundraiser.
 * */
import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Paper,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@mui/material";
import axios from 'axios';
import { UserInfo } from "../user/DonationInfo/UserInfo";



const theme = createTheme({
  palette: {
    primary: {
      main: '#B5E3BB',
    },
    secondary: {
      main: '#F589A3',
    },
  },
  helperText: {
    marginLeft: -12
  },
});

export function CreateFundraiserForm() {
  const user = UserInfo();
  const WORD_LIMIT = 500;
  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [goalAmount, setGoalAmount] = useState("");
  const [error, setError] = useState("");

  // Handle summary word count limit.
  const handleSummaryChange = (event) => {
    const summaryInput = event.target.value;
    setSummary(summaryInput);
    const words = summaryInput.trim().split(/\s+/).length;
    setWordCount(words)
    if (wordCount > WORD_LIMIT) {
      setError("Maximum 500 words allowed.")
    }
  };

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Create an object containing new fundraiser information.
    const newFundraiser = {
      userID: user.userID,
      fundraiserName: data.get('fundraiserName'),
      fundraiserSummary: data.get('fundraiserSummary'),
      fundraiserGoalAmount: goalAmount,
    };
    //console.log(newFundraiser);
    // Use axios to post fundraiser data to the database.
    axios.post('https://localhost:44442/api/fundraiser/create', newFundraiser)
      .then(response => {
        console.log(response.data);
        window.location.href = '/browse/fundraisers';
      })
      .catch(error => {
        console.error(error);
      });
  };


    return (
      <ThemeProvider theme={theme}>
        <Container component="main" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component="h1" variant="h5" align="left">
              Create a Fundraiser
            </Typography>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="fundraiserName"
                      id="fundraiserName"
                      label="Fundraiser Name"
                      variant="outlined"
                      fullWidth
                  />
                  </Grid>
                <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
                  <FormControl variant="outlined">
                      <InputLabel htmlFor="goalAmount">Goal Amount</InputLabel>
                      <OutlinedInput
                        required
                        id="goalAmount"
                        type="number"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        endAdornment={<InputAdornment position="end">USD</InputAdornment>}
                        value={goalAmount}
                        onChange={(event) => setGoalAmount(event.target.value)}
                    />
                  </FormControl>
                </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      minRows={5}
                      type="text"
                      id="fundraiserSummary"
                      name="fundraiserSummary"
                      label="Fundraiser Summary"
                      placeholder="Tell us a little about your fundraiser (Max 500 words)."
                      variant="outlined"
                      helperText={`Word Count: ${wordCount}`}
                      inputProps={{
                        maxlength: WORD_LIMIT
                      }}
                      value={summary}
                      onChange={handleSummaryChange}
                      error={!!error}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      fullWidth
                      multiline
                      minRows={8}
                      type="text"
                      id="fundraiserDescription"
                      name="fundraiserDescription"
                      label="About your Fundraiser (Disabled)"
                      placeholder="Tell us a more about your fundraiser (Max 1200 words)."
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button
              type="submit"
              size="medium"
              variant="contained"
              align="right" sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
  );
}
