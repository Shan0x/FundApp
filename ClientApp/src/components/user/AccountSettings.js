/** @format */

import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
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
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
  backgroundColor: "#B5E3BB",
  color: "black",
  fontSize: 12,
  width: "85%",
  margin: "0 auto"
}));

const AccountSettings = ({
  setNewEmail,
  setNewPassword,
  newPassword,
  newEmail,
  handleAccountDelete,
  handleDelete,
  handleDialogClose,
  openDialog,
  handleUpdate
}) => {
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
            <b>UPDATE EMAIL</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Enter your new email:</b>
          </Typography>
          <TextField
            fullWidth
            lablel='Email'
            id='newEmail'
            placeholder='Enter new email:'
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <b>Re-Enter your new email:</b>
          </Typography>
          <TextField
            fullWidth
            lablel='New Email'
            id='newEmail'
            placeholder='Re-Enter new email:'
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>
            <b>UPDATE PASSWORD</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Enter your new password:</b>
          </Typography>
          <TextField
            fullWidth
            lablel='New Email'
            id='newEmail'
            placeholder='Enter new password:'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{ width: "60%", flexShrink: 0 }}>
            <b>Re-Enter your new password:</b>
          </Typography>
          <TextField
            fullWidth
            lablel='New Password'
            id='newPassword'
            placeholder='Re-Enter new password:'
            type='password'
          />
        </AccordionDetails>
      </Accordion>

      <Stack
        position='absolute'
        width='100%'
        bottom={"10px"}
        direction='row'
        columnGap={3}
        justifyContent='center'>
        <Button
          variant='contained'
          color='error'
          sx={{ height: 40, borderRadius: "20px", width: 200 }}
          onClick={handleDelete}>
          Delete Account
        </Button>
      </Stack>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleDialogClose}>Cancel</StyledButton>
          <StyledButton onClick={handleAccountDelete} autoFocus>
            Delete
          </StyledButton>
        </DialogActions>
      </Dialog>
      <Stack sx={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <Button
          variant='contained'
          sx={{
            height: 40,
            width: 200,
            backgroundColor: "#B5E3BB",
            color: "black",
            borderRadius: "20px"
          }}
          onClick={handleUpdate}>
          Update
        </Button>
      </Stack>
    </Stack>
  );
};
export default AccountSettings;
