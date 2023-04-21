/**
 * @fileoverview Modular view of entire fundraiser.
 * 
 * */
import React from 'react';
import {
  Card,
  styled,
  Typography,
  Box
} from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Modal } from '@mui/material/index';

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

//const FundraiserItem = ({ fundraiser }) => {
export const FundraiserView = ({ fundraiser, progress } ) => {
  const [goalProgress, setGoalProgress] = React.useState(progress);

  const handleNewDonation = () => {
    // Update the goalProgress
    setGoalProgress(progress / 100);
  };

  return (
    <Box sx={style}>
        <Typography id="fundraiser-modal" variant="h5" component="h2">
        {fundraiser.fundraiserName}
        </Typography>
        <Box sx={{ m: 2 }}>
        <LinearProgressWithLabel variant="determinate" value={goalProgress} />
        </Box>
        <Box sx={{ m: 3 }}>
        <Typography id="fundraiser-modal-summary" sx={{ mt: 2 }}>
          {fundraiser.fundraiserSummary }
        </Typography>
        </Box>
    </Box>
  )
};

