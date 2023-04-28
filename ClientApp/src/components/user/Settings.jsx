/**
 * @format
 * @fileoverview User settings page to update profile details.
 * @author SBD
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Box, TextField, Stack, Button } from "@mui/material/";
import axios from "axios";
import { UserInfo } from "./DonationInfo/UserInfo";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountSettings from "./AccountSettings";
import PersonalInformation from "./PersonalInformation"
import PaymentMethods from "./PaymentMethods"

export const Settings = () => {
  const [tab, setTab] = useState(0);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const user = UserInfo();

  useEffect(() => {
    setTab(0);
  }, []);

  const StyledButton = styled(Button)(() => ({
    borderRadius: "20px",
    backgroundColor: "#B5E3BB",
    color: "black",
    fontSize: 12,
    width: "85%",
    margin: "0 auto"
  }));

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
        window.location.reload();
        setNewEmail("");
        setNewPassword("");
        console.log(response.data);
        // show success message to user
      })
      .catch((error) => {
        console.log(error);
        // show error message to user
        // window.location.reload();
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
  const handleAccountDelete = () => {
    axios
      .post("api/accountsettings/update/delete", {
        userName: user.userName,
        userPassword: user.userPassword
      })
      .then((response) => {
        navigate("/");
        setNewEmail("");
        setNewPassword("");
        console.log(response.data);
        // show success message to user and redirect to login page
        //alert("Your account has been deleted.");
        //window.location.href = "/u/home";
      })
      .catch((error) => {
        console.log(error);
        // show error message to user
      });
    setOpenDialog(false);
    const password = prompt(
      "Please enter your password to confirm account deletion:"
    );

    if (password === user.userPassword) {
      setOpenDialog(true);
    } else {
      // Show an error message to the user if the password is incorrect
      alert("Incorrect password. Please try again.");
    }
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
              <img
                src='/fund.png'
                alt='Avatar'
                justify='center'
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack mt={8} borderTop={"1px solid black"} textAlign={"center"}>
              <Stack pt={2} pb={2}>
                <Button
                  onClick={() => setTab(2)}
                  variant='contained'
                  sx={{
                    height: 40,
                    width: 300,
                    backgroundColor: "lightgrey",
                    color: "black"
                  }}>
                  <ManageAccountsIcon /> Personal Information{" "}
                </Button>
              </Stack>
              <Stack pt={2} pb={2}>
                <Button
                  variant='contained'
                  onClick={() => setTab(1)}
                  sx={{
                    height: 40,
                    width: 300,
                    backgroundColor: "lightgrey",
                    color: "black"
                  }}>
                  <AccountBalanceIcon /> Payment Methods{" "}
                </Button>
              </Stack>
              <Stack mb={8} pt={2} pb={2}>
                <Button
                  onClick={() => setTab(0)}
                  variant='contained'
                  sx={{
                    height: 40,
                    width: 300,
                    backgroundColor: "lightgrey",
                    color: "black"
                  }}>
                  <SettingsIcon />
                  Account Settings{" "}
                </Button>
              </Stack>

              <Stack mt={15}>
                <i> Logout </i>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
       {tab===0 && <AccountSettings
          setNewEmail={setNewEmail}
          newEmail={newEmail}
          setNewPassword={setNewPassword}
          newPassword={newPassword}
          handleAccountDelete={handleAccountDelete}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleDialogClose={handleDialogClose}
          openDialog={openDialog}
        />}
        {tab===2 && <PersonalInformation />}
        {tab===1 && <PaymentMethods/>}
      </Stack>
    </>
  );
};
