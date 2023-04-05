/** @format */

import React from "react";
import {
  Typography,
  Stack,
  Button,
  TextField
} from "@mui/material";
import { UserInfo } from "./DonationInfo/UserInfo";

export const ForgotPassword = () => {
  const user = UserInfo();
  return (
    <Stack margin={"0 auto"} width='50%' rowGap={3} textAlign='center'>
      <Typography>Enter your new email:</Typography>
      <TextField
        fullWidth
        lablel='fullWidth'
        id='fullWidth'
        placeholder='Re-Enter new email:'
        value={user.userEmail}
      />
      <Button
        variant='contained'
        sx={{
          height: 40,
          width: 200,
          backgroundColor: "#B5E3BB",
          color: "black",
          borderRadius: "20px",
          margin:"0 auto"
        }}>
        Submit
      </Button>
    </Stack>
  );
};
