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
      <Stack direction='column' spacing={2}>
  <Stack direction='row' columnGap={5}>
    <span style={{fontWeight: 'bold'}}>First Name:</span>
    <span>{user.userFirstName}</span>
  </Stack>
  <Stack direction='row' columnGap={5}>
    <span style={{fontWeight: 'bold'}}>Last Name:</span>
    <span>{user.userLastName}</span>
  </Stack>
  <Stack direction='row' columnGap={5}>
    <span style={{fontWeight: 'bold'}}>Email:</span>
    <span>{user.userEmail}</span>
  </Stack>
</Stack>
</Stack>

  );
};

export default PersonalInformation
