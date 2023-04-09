/**
 * @fileoverview List of all fundraisers created.
 *
 **/

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FundraiserCard from './FundraiserContainer'
import {
  Card,
  CardContent,
  Button,
  Box,
  Typography,
  Grid
} from '@mui/material'


export const FundraisersList = () => {
  const [fundraisers, setFundraisers] = useState([]);

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
    <Box>
      <Grid container spacing={2}>
        
        {fundraisers.slice(0, 5).map((fundraiser) => (
          <Grid item xs={12} sm={6} md={4} key={fundraiser.fundraiserID}>
            <FundraiserCard fundraiser={fundraiser} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
  };


export default FundraisersList;