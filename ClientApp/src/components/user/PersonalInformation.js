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

const PersonalInformation = () => {
  return (
    <Stack
      position='relative'
      backgroundColor={"lightgrey"}
      borderRadius='20px'
      border='1px solid black'
      pt={8}
      width='70%'
      direction='column'
      textAlign='left'>
      <Stack direction='row' columnGap={5}>
        <Stack>stack 1</Stack>
        <Stack>stack 2</Stack>
        <Stack>stack 3</Stack>
      </Stack>
      <Button>Update</Button>
    </Stack>
  );
};

export default PersonalInformation