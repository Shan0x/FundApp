/**
 * @fileoverview List of all fundraisers created.
 * @todo Implement pages.
 **/

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FundraiserCard from './FundraiserContainer'
import {
  Box,
  Grid
} from '@mui/material'


export const FundraisersList = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getFundraisers = async () => {
    // Fetch all fundraisers from database.
    try {
      const response = await axios.get('/api/fundraiser')
      setFundraisers(response.data);
    } catch (error) {
      console.error('Error getting fundraisers: ', error);
    }
  };

  useEffect(() => {
    getFundraisers()
  }, []);


  return (
    
      <Grid container spacing={2}>
        {fundraisers.slice(0, 5).map((fundraiser) => (
          <Grid item xs={12} sm={6} md={3} key={fundraiser.fundraiserID}>
            <Box sx={{
              maxHeight: '350px',
            }}>
              <FundraiserCard fundraiser={fundraiser} />
            </Box>
          </Grid>
        ))}
      </Grid>
  );
  };


export default FundraisersList;