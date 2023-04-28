/** @format */

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Stack,
  TextField
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { UserInfo } from "./DonationInfo/UserInfo.js";

const PersonalInformation = () => {
  const user = UserInfo();
  console.log(user, "user");
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>
            <b>PERSONAL INFORMATION</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Name:</b>
          </Typography>
          <Stack>First Name: {user.userFirstName}</Stack>
          <Stack>Last Name: {user.userLastName}</Stack>
        </AccordionDetails>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1b-content'
          id='panel1b-header'>
          <Typography>
            <b>Email:</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack>Email: {user.userEmail}</Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default PersonalInformation;
