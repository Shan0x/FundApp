/**
 * @format
 * @fileoverview User settings page to update profile details.
 * @author SBD
 ** No more console.log()
 ** updated delete warning
 */

import React, { useState } from "react";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { DialogContentText, Box, TextField, Stack, Button } from "@mui/material/";
import axios from "axios";
import { UserInfo } from "./DonationInfo/UserInfo";

export const Settings = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const user = UserInfo();

  //added this to handle passworda and email
  const handleUpdate = () => {
    const url = newEmail.includes("@")
      ? "/api/accountsettings/update/email"
      : "/api/accountsettings/update/password";
    const payload = newEmail.includes("@")
      ? {
          userName: user.userName,
          userEmail: newEmail
        }
      : {
          userName: user.userName,
          userPassword: user.userPassword,
          newUserPassword: newPassword
        };
    axios
      .post(url, payload)
      .then((response) => {
        console.log(response.data);
        // show success message to user
      })
      .catch((error) => {
        console.log(error);
        // show error message to user
      });
  };
//added alert
 const handleDelete = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  //added to delete account
  const handleDelete = () => {
    axios
      .post("api/accountsettings/update/delete", {
        userName: user.userName,
        userPassword: user.userPassword
      })
      .then((response) => {
        console.log(response.data);
        // show success message to user and redirect to login page
      })
      .catch((error) => {
        console.log(error);
        // show error message to user
      });
         setOpenDialog(false);
  };

  return (
    <>
      <Stack direction='row' justifyContent={"space-between"}>
        <Stack
          width='25%'
          direction='column'
          textAlign='left'
          style={{ height: "calc(100% - 50px)" }}>
          <Stack
            direction='column'
            border='1px solid black'
            style={{
              height: "calc(100% - 100px)",
              padding: "30px 10px",
              borderRadius: "20px"
            }}>
            <Stack
              style={{
                boxShadow: "0px 8px 5px grey",
                textAlign: "center",
                justifyContent: "center",
                margin: "0 auto",
                width: 208,
                height: 208,
                borderRadius: "50%",
                background: "white"
              }}>
              <Box mt={-2}> Avatar </Box>
            </Stack>
            <Stack mt={8} borderTop={"1px solid black"} textAlign={"center"}>
              <Stack pt={2} pb={2}>
                {" "}
                Personal Information{" "}
              </Stack>
              <Stack pt={2} pb={2}>
                {" "}
                Payment Methods{" "}
              </Stack>
              <Stack mb={8} pt={2} pb={2}>
                Account Settings{" "}
              </Stack>

              <Stack mt={15}>
                <i> Logout </i>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
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
                <b>Update Email</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Enter your new email:</Typography>
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
              <Typography>Re-Enter your new email:</Typography>
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
                <b>Update Password</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Enter your new password</Typography>
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
                Re-Enter your new password
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
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogConfirm} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
            <div>
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
            </div>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

