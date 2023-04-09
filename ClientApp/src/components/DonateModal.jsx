/**
 * @format
 * @fileoverview A page that contains Pup Ups when the donating
 * @author SBD
 */

import React, { useState } from "react";
import {
  Button,
  Dialog,
  InputAdornment,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
  backgroundColor: "#B5E3BB",
  color: "black",
  fontSize: 12,
  width: "85%",
  margin: "0 auto"
}));

export const DonateModal = () => {
  const [open, setOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

const handleDonate = () => {
  // Perform donation logic here
  console.log(
    `Donation of $${donationAmount.toFixed(2)} made using ${
      paymentMethod === "credit" ? "credit card" : "bank account"
    }`
  );
  // Close the dialog
  setOpen(false);
};

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

const handleDonationAmountChange = (event) => {
  const inputVal = event.target.value.replace(/\D/g, '');
  const amount = parseInt(inputVal) / 100;
  if (!isNaN(amount)) {
    if (amount <= 0) {
      setDonationAmount(0);
    } else if (amount > 10000) {
      setDonationAmount(10000.00.toFixed(2));
    } else {
      setDonationAmount(amount.toFixed(2));
    }
  }
};



  return (
    <>
      <Stack
        position='absolute'
        width='100%'
        height='100%'
        justifyContent='center'
        alignItems='center'>
        <Button
          onClick={() => setOpen(true)}
          variant='outlined'
          style={{
            borderRadius: "10px",
            backgroundColor: "rgba(245, 137, 163, 1)",
            color: "black",
            fontSize: 12,
            width: "85%",
            maxWidth: 100,
            maxHeight: 150
          }}>
          Donate
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            Please Confirm your donation
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Please enter your donation amount:
            </DialogContentText>
            <TextField
  autoFocus
  margin='dense'
  label='Donation amount'
  type='text'
  fullWidth
  value={donationAmount}
  onChange={handleDonationAmountChange}
  inputProps={{ inputMode: "decimal", style: { textAlign: 'right', maxWidth: 120 } }}
  InputProps={{
    startAdornment: <InputAdornment position="start">$</InputAdornment>,
    endAdornment: <InputAdornment position="end">USD</InputAdornment>
  }}
/>

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
          </DialogContent>
          <DialogActions>
            <StyledButton onClick={() => setOpen(false)}>CANCEL</StyledButton>
            <StyledButton onClick={handleDonate}>DONATE</StyledButton>
          </DialogActions>
        </Dialog>
      </Stack>
    </>
  );
};
