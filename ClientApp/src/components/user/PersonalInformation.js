/** @format */

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  TextField
} from "@mui/material";
import {UserInfo} from "./DonationInfo/UserInfo.js"

const PersonalInformation = () => {
  const user  = UserInfo()
  console.log(user,"user")
  return (
    <Stack
      position='relative'
      backgroundColor={"lightgrey"}
      borderRadius='20px'
      border='1px solid black'
      pt={8}
      width='70%'
      direction='column'
      textAlign='left'
      margin='0 auto'
      >
      <Stack direction='row' columnGap={5} >
        <Stack>{user.userFirstName}</Stack>
        <Stack>{user.userLastName}</Stack>
        <Stack>{user.userEmail}</Stack>
      </Stack>
      <Button>Update</Button>
    </Stack>
  );
};

export default PersonalInformation