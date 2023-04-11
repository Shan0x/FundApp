/**
 * @format
 * @fileoverview A page that contains Pup Ups when the donating
 * @author SBD
 */

import React, { useState } from "react";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
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
  Box,
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 40,
  borderRadius: 20
}));

export const DonateModal = () => {
  const [open, setOpen] = useState(false);
  const [openThankYouDialog, setOpenThankYouDialog] = useState(false);
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
      `Donation of ${`50`} made using ${
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
          maxWidth={"lg"}
          onClose={() => setOpen(false)}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            Please Confirm your donation
          </DialogTitle>
          <DialogContent>
            <Stack position='relative' justifyContent='center' mb={2}>
              {" "}
              <Stack
                width='100%'
                textAlign='center'
                zIndex='10'
                fontWeight='bold'
                position='absolute'
                margin='0 auto'>
                60%
              </Stack>{" "}
              <BorderLinearProgress
                variant='determinate'
                value={60}
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#B5E3BB"
                  }
                }}
              />
            </Stack>

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
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            Thank you for your donation!
          </DialogTitle>{" "}
          <DialogContent>
            <Stack>
              <Box
                sx={{
                  width: 450,
                  height: 200,
                  backgroundColor: "grey",
                  borderRadius: "20px"
                }}></Box>
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </>
  );
};
