/**
 * @fileoverview Layout of individual fundraisers.
 * 
 * */
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Box,
  Typography,
  Grid
} from '@mui/material'
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

const FundraiserCard = ({ fundraiser,open,setOpen }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          marginTop: 4,
          borderRadius: '10%',
            boxShadow: '2',
            flexDirection: 'column',
            maxWidth: 300,
            minWidth: 250,
            
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://source.unsplash.com/random/?charity"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {fundraiser.fundraiserName}
            </Typography>
            <Box sx={{
              fontWeight: 'bold',
              borderBottom: '1px solid',
              borderColor: 'primary.main',
              paddingTop: '5px'
            }}>
              <Typography variant="body2" color="text.secondary">
                {fundraiser.fundraiserSummary.length <= 60 ?
                  fundraiser.fundraiserSummary : (
                    <span>
                      <span >{fundraiser.fundraiserSummary.substr(0, 60)}</span>
                      <span style={{ color: theme.palette.primary.main }}> more...</span>
                    </span>
                  )}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={()=>setOpen(!open)} size="med" color="secondary">
            Donate
          </Button>
        </CardActions>
        </Card>
        </Grid>
    </ThemeProvider>
  )
};

export default FundraiserCard;