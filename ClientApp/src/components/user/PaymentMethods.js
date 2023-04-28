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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { UserInfo } from "./DonationInfo/UserInfo.js";

const PaymentMethods = () => {
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
            <b>PAYMENT METHODS</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>BANK ACCOUNT</b>
          </Typography>
          <Stack></Stack>
          <Stack></Stack>
        </AccordionDetails>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1b-content'
          id='panel1b-header'>
          <Typography>
            <b>CREDIT CARD</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack></Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default PaymentMethods;
