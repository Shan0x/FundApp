/**
 * @format
 * @fileoverview Layout of individual fundraisers.
 */

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Box,
  Typography,
  Modal
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FundraiserView } from "./FundraiserView";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B5E3BB"
    },
    secondary: {
      main: "#F589A3"
    }
  }
});

const FundraiserCard = ({
  fundraiser,
  open,
  setOpen,
  setSelectedFundraiser
}) => {
  const [openFundraiser, setOpenFundraiser] = React.useState(false);
  const handleOpen = () => setOpenFundraiser(true);
  const handleClose = () => setOpenFundraiser(false);

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={openFundraiser}
        onClose={handleClose}
        aria-labelledby='modal-fundraiser-view'
        aria-describedby='modal-fundraiser-modal'>
        <FundraiserView fundraiser={fundraiser} progress={fundraiser.totalDonations} />
      </Modal>
      <Card
        sx={{
          borderRadius: "10%",
          maxWidth: 345
        }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component='img'
            height='150'
            image='https://source.unsplash.com/random/?charity'
          />
          <CardContent>
            <Box
              sx={{
                maxHeight: 35
              }}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{
                  fontSize: 21,
                  maxWidth: "80%", // set the maximum width to 80% of the container
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}>
                {fundraiser.fundraiserName}
              </Typography>
            </Box>

            <Box
              sx={{
                borderBottom: "1px solid",
                borderColor: "primary.main",
                padding: "8px 2px"
              }}>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  minHeight: 80,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "wrap"
                }}>
                {fundraiser.fundraiserSummary.length <= 60 ? (
                  fundraiser.fundraiserSummary
                ) : (
                  <span>
                    <span>{fundraiser.fundraiserSummary.substr(0, 60)}</span>
                    <span style={{ color: theme.palette.primary.main }}>
                      {" "}
                      more...
                    </span>
                  </span>
                )}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              setOpen(!open);
              setSelectedFundraiser(fundraiser);
            }}
            size='med'
            color='secondary'>
            Donate
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default FundraiserCard;
