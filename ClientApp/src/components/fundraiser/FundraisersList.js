/**
 * @fileoverview List of all fundraisers created.
 *
 **/

import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import axios from 'axios';



const FundraisersList = () => {
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

  const renderFundraiser = () => {
    return 
  }
}