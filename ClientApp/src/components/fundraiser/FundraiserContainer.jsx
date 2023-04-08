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
  Typography,
  makeStyles
} from '@mui/material'

// Style for fundraiser card.
const fundraiserStyle = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2),
  },

  // Additional Styles

}));

const FundraiserCard = ({ fundraiser }) => {
  const clases = fundraiserStyle();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random/?charity"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fundraiser Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fundraiser Summary goes here.
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Donate
        </Button>
      </CardActions>
    </Card>
    )
  
}

export default FundraiserCard;