/** @format */
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Container,
  Typography,
  Stack,
  TextField
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  height: 40,
  "& .MuiInputLabel-root": {
    top: -6
  }
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    height: 40,
    lineHeight: "40px"
  }
}));

const Item = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(),
  textAlign: "center",
  width: "25%"
}));
const ItemBig = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(),
  height: "100%",
  textAlign: "center",
  width: "100%",
  padding: 16,
  borderRadius: 20,
  border: "1px solid grey",
  boxShadow: "10px 10px 5px grey",
  backgroundColor: "white"
}));

const ItemSmall = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(),
  height: "100%",
  textAlign: "center",
  padding: 16,
  borderRadius: 20,
  border: "1px solid grey",
  boxShadow: "10px 10px 5px grey",
  backgroundColor: "white"
}));

const PaymentMethods = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Stack
      position='relative'
      backgroundColor={"lightgrey"}
      borderRadius='20px'
      border='1px solid black'
      pt={8}
      width='100%'
      direction='column'
      textAlign='left'
      alignItems='center'>
      <Stack direction='row' columnGap={5}>
        <Stack direction='column' height='100%' width='200%' spacing={2}>
          <ItemBig direction='column' rowGap={1}>
            <Stack>Add a new payment</Stack>
            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='payment method'
                value={paymentMethod}
                sx={{ flexDirection: "row", columnGap: 2 }}
                onChange={handlePaymentMethodChange}>
                <FormControlLabel
                  value='debitcard'
                  control={<Radio />}
                  label='Debit Card'
                />
                <FormControlLabel
                  value='Venmo'
                  control={<Radio />}
                  label='Venmo'
                />
                <FormControlLabel
                  value='Paypal'
                  control={<Radio />}
                  label='PayPal'
                />
                <FormControlLabel
                  value='bankAccount'
                  control={<Radio />}
                  label='Bank Account'
                />
              </RadioGroup>
            </FormControl>

            <TextField
              id='filled-size-small'
              size='small'
              autoFocus
              margin='dense'
              label='Card number'
              type='text'
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <TextField
              id='filled-size-small'
              size='small'
              margin='dense'
              label='Card name'
              type='text'
              fullWidth
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <Stack direction='row' columnGap={5}>
              {" "}
              <StyledFormControl fullWidth>
                <InputLabel htmlFor='year-select'>Year</InputLabel>
                <StyledSelect
                  native
                  size='small'
                  inputProps={{
                    name: "year",
                    id: "year-select"
                  }}
                  value={year}
                  label='Year'
                  onChange={handleChangeYear}>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2025}>2025</MenuItem>
                  <MenuItem value={2026}>2026</MenuItem>
                </StyledSelect>
              </StyledFormControl>
              <StyledFormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Month</InputLabel>
                <StyledSelect
                  native
                  size='small'
                  inputProps={{
                    name: "month",
                    id: "month-select"
                  }}
                  value={month}
                  label='Month'
                  onChange={handleChangeMonth}>
                  <MenuItem value={1}>January</MenuItem>
                  <MenuItem value={2}>February</MenuItem>
                  <MenuItem value={3}>March</MenuItem>
                  <MenuItem value={4}>Abril</MenuItem>
                  <MenuItem value={5}>May</MenuItem>
                  <MenuItem value={6}>June</MenuItem>
                  <MenuItem value={7}>July</MenuItem>
                  <MenuItem value={8}>August</MenuItem>
                  <MenuItem value={9}>Setember</MenuItem>
                  <MenuItem value={10}>Octobor</MenuItem>
                  <MenuItem value={11}>November</MenuItem>
                  <MenuItem value={12}>December</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </Stack>
          </ItemBig>
          <ItemBig direction='column' rowGap={3}>
            <Stack>PaymentMethods</Stack>
            <Stack direction='row' columnGap={2}>
              {[...Array(4)].map((item) => (
                <Stack
                  borderRadius={"15px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={"60px"}
                  backgroundColor='lightGray'
                  width={"25%"}
                  key={item}></Stack>
              ))}
            </Stack>
            <Stack direction='row' columnGap={2}>
              {[...Array(4)].map((item) => (
                <Stack
                  borderRadius={"15px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={"60px"}
                  backgroundColor='lightGray'
                  width={"30%"}
                  key={item}></Stack>
              ))}
            </Stack>
          </ItemBig>
        </Stack>
      </Stack>
      <Button>PaymentMethods</Button>
    </Stack>
  );
};

export default PaymentMethods;
