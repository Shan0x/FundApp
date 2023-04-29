/**
 * @fileoverview Modular view of entire fundraiser.
 * 
* */
import React, { useEffect, useState } from 'react';
import {
  Grid,
  styled,
  Typography,
  Box,
  Button
} from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import axios from "axios";
import { Modal } from '@mui/material/index';
import { stringAvatar } from "../NavMenu.js";
import Avatar from '@mui/material/Avatar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  maxWidth: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const LinearProgressWithLabel = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#B5E3BB' : '#308FE8',
  },
}));

export const FundraiserView = ({ fundraiser, progress, setOpen, setSelectedFundraiser } ) => {
  const [goalProgress, setGoalProgress] = React.useState(progress);
  const [creator, setCreator] = useState();

  const handleNewDonation = () => {
    // Update the goalProgress
    setGoalProgress(progress / fundraiser.fundraiserGoalAmount);
  };

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const response = await axios.get(`/api/users/${fundraiser.userID}`);
        setCreator(response.data);
        console.log('Creator: ', creator.userName);
      } catch (error) {
        console.error("Error getting fundraiser creator: ", error);
      }
    };
    fetchCreator();
  }, [fundraiser.userID]);

  return (
    <Box sx={style}>
        <Typography id="fundraiser-modal" variant="h5" component="h2">
        {fundraiser.fundraiserName}
      </Typography>
      <Box display="flex" justifyContent="center">
        <img src='https://source.unsplash.com/random/?charity'
          alt="fundraiser-image"
          style={{ maxWidth: '500px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
      </Box>
      <Box sx={{ m: 2 }}>

          <LinearProgressWithLabel variant="determinate" value={goalProgress} />
        <Typography align="center" color="textSecondary"
          sx={{ fontWeight: 'bold' }}
        >
          {`${goalProgress}%`}
        </Typography>
        </Box>
        <Box sx={{ m: 3, pb: 3 }}>
        <Typography alignItems="center" id="fundraiser-modal-summary" sx={{ m: 2, pb: 2 }}>
          Progress: ${progress} out of 
          Goal: ${fundraiser.fundraiserGoalAmount} reached.
          <br />
          <br />
          {fundraiser.fundraiserSummary }
        </Typography>
        <Button
          onClick={() => {
            setOpen(!open);
            setSelectedFundraiser(fundraiser);
          }}
          size='med'
          color='secondary'>
          Donate
        </Button>
        <Box bgcolor="#F589A3" borderRadius='20px' height='2px' pt="10px">
                {creator && <p style={{ margin:'0 8px 0 0' }}>Fundraiser started by: {creator.userName}</p>}
        </Box>
    </Box>
  )
};

