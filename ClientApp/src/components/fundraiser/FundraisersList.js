/**
 * @fileoverview List of all fundraisers created.
 * @todo Implement pages.
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import FundraiserCard from "./FundraiserContainer";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import {
  Button,
  Dialog,
  Typography,
  InputAdornment,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  Grid,
  RadioGroup,
  Stack,
  TextField
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { UserInfo } from "../user/DonationInfo/UserInfo";

const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
  backgroundColor: "#B5E3BB",
  color: "black",
  fontSize: 12,
  width: "85%",
  margin: "0 auto"
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 20
}));

export const FundraisersList = (props) => {
  const [fundraisers, setFundraisers] = useState([]);
  const [open, setOpen] = useState(false);
  const [openThankYouDialog, setOpenThankYouDialog] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [fundraiserID, setFundraiserID] = useState("");
  const [selectedFundraiser, setSelectedFundraiser] = useState("");



 useEffect(() => {
  const getFundraisers = async () => {
    // Fetch all fundraisers from database.
    try {
      const response = await axios.get("/api/fundraiser");
      setFundraisers(response.data);
    } catch (error) {
      console.error("Error getting fundraisers: ", error);
    }
  };
    getFundraisers();
  }, []);

  const user = UserInfo();
  let donatorName = user ? user.userName : 'Anonymous';

  const handleDonate = async () => {
    
    const donationData = {
      donationAmount,
      fundraiserID: selectedFundraiser.fundraiserID,
      donatorName
    };
     try {
    const response = await axios.post("/api/donations", donationData);
    console.log(response.data);
    
      // Display the thank you dialog
      setOpen(false);
      setOpenThankYouDialog(true);
      
    } catch (error) {
      console.error("Error submitting donation: ", error);
    }
    console.log(
      `Donation of ${donationAmount} made using ${
        paymentMethod === "credit" ? "credit card" : "bank account"
      }`
    );
    // Close the dialog
    setOpen(false);
    setOpenThankYouDialog(true);
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    const inputVal = event.target.value.replace(/\D/g, "");
    const amount = parseInt(inputVal) / 100;
    if (!isNaN(amount)) {
      if (amount <= 0) {
        setDonationAmount(0);
      } else if (amount > 10000) {
        setDonationAmount((10000.0).toFixed(2));
      } else {
        setDonationAmount(amount.toFixed(2));
      }
    }
  };

  return (

    <>
      <Grid container spacing={2}>
        {fundraisers.slice(0, 5).map((fundraiser) => (
          <Grid item xs={12} sm={6} md={3} key={fundraiser.fundraiserID}>
            <Box
              sx={{
                maxHeight: "350px"
              }}>
              <FundraiserCard
                setSelectedFundraiser={setSelectedFundraiser}
                fundraiser={fundraiser}
                open={open}
                setOpen={setOpen}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        maxWidth={"lg"}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          Please Confirm your donation
        </DialogTitle>
        <DialogContent>

          <Stack direction='row' rowGap={2}>
            <Stack border={"1px solid black"} borderRadius={2} p={2} mr={2}>
              <DialogContentText id='alert-dialog-description'>
                Fundraiser Name:
              </DialogContentText>

              <DialogContentText>
                Please select your payment method:
              </DialogContentText>
              <FormControl component='fieldset'>
                <RadioGroup
                  aria-label='payment method'
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}>
                  <FormControlLabel
                    value='credit'
                    control={<Radio />}
                    label='Credit Card'
                  />
                  <FormControlLabel
                    value='bank'
                    control={<Radio />}
                    label='Bank Account'
                  />
                </RadioGroup>
              </FormControl>
              {paymentMethod === "credit" && (
                <>
                  <DialogContentText>
                    Please enter your credit card information:
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    label='Card number'
                    type='text'
                    fullWidth
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />

                  <TextField
                    autoFocus
                    margin='dense'
                    label='Expiry date'
                    type='text'
                    fullWidth
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin='dense'
                    label='CVV'
                    type='text'
                    fullWidth
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </>
              )}
              {paymentMethod === "bank" && (
                <>
                  <DialogContentText>
                    Please enter your bank account information:
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    label='Routing number'
                    type='text'
                    fullWidth
                    value={routingNumber}
                    onChange={(e) => setRoutingNumber(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin='dense'
                    label='Account number'
                    type='text'
                    fullWidth
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </>
              )}
            </Stack>
            <Stack
              mt={3}
              border={"1px solid black"}
              borderRadius={2}
              p={2}
              height={"50%"}>
              <Stack direction='row' columnGap={3} alignItems='center'>
                <Stack>USD</Stack>
                <TextField
                  size='small'
                  autoFocus
                  label='Donation amount'
                  type='text'
                  style={{ width: "250px" }}
                  fullWidth
                  value={donationAmount}
                  onChange={handleDonationAmountChange}
                  inputProps={{
                    inputMode: "decimal",
                    style: { textAlign: "right" }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>$</InputAdornment>
                    )
                  }}
                />
              </Stack>
              <Stack>
                <RadioGroup
                  aria-label='payment method'
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}>
                  <FormControlLabel
                    value='one'
                    control={<Radio />}
                    label='One time donation'
                  />
                  <FormControlLabel
                    value='two'
                    control={<Radio />}
                    label='Donate montly'
                  />
                  <FormControlLabel
                    value='three'
                    control={<Radio />}
                    label='Other'
                  />
                </RadioGroup>
              </Stack>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setOpen(false)}>CANCEL</StyledButton>
          <StyledButton onClick={handleDonate}>DONATE</StyledButton>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openThankYouDialog}
        onClose={() => setOpenThankYouDialog(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        donationAmount={donationAmount}
        donatorName={donatorName}>
        <DialogTitle id='alert-dialog-title'
          sx={{
            fontSize: 32,
            textAlign: 'center'
          }}
        >
          Thank you for your donation!
        </DialogTitle>{" "}
        <DialogContent>
          <Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 450,
                height: 75,
              }}>
              <Typography variant='h6' textAlign='center' >
                You donated <span style={{ color: '#89d393', fontWeight: 'bold' }}>{donationAmount}</span> to {selectedFundraiser.fundraiserName}.
              </Typography>
              <Typography variant='h6' textAlign='center'>
                We appreciate your support <span style={{ color: '#F589A3', fontWeight: 'bold' }}>{donatorName}</span>!
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setOpenThankYouDialog(false)}>
            Close
          </StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default FundraisersList;
