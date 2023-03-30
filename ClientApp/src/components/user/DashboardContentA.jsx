/**
 * @format
 * @fileoverview: Dashboard container.
 */

import * as React from "react";
//import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import {
  Container,
  Typography,
  Stack,
  Box,
  Button
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { FundSummary } from "./DonationInfo/FundSummary";
import { UserInfo } from "./DonationInfo/UserInfo";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { Link } from 'react-router-dom';

const Item = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(),
  textAlign: "center",
  width: "25%"
}));

const ItemBig = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(),
  height: "100%",
  textAlign: "center",
  width: "50%",
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "rgba(245, 137, 163, 1)"
  }
}));

export function DashboardContentA() {
  const user = UserInfo();
  return (
    <>
      <Box>
        <Container maxWidth='x1'>
          <Typography Typography variant='h4' sx={{ mb: 5 }}>
            Welcome back, {user.userFirstName}!
          </Typography>
          <Stack direction='row' columnGap='3'>
            <Stack width='25%' direction='column' textAlign='center'>
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
              <Stack mb={2}>Username</Stack><Link to='/fundraiser/CreateFundraiser'>
              <Button
                variant='outlined'
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#B5E3BB",
                  color: "black",
                  fontSize: 12,
                  width: "85%",
                  margin: "0 auto"
                }}>
                Start a New Fundraiser!
              </Button>
              </Link>
            </Stack>
            <Stack
              style={{ backgroundColor: "white" }}
              borderRadius='20px'
              boxShadow={"10px 10px 5px grey"}
              p={3}
              spacing={2}
              width='75%'
              direction='row'
              divider={
                <Divider
                  style={{ borderColor: "black" }}
                  orientation='vertical'
                  flexItem
                />
              }>
              <Item>
                <FundSummary
                  title='Active Campaigns'
                  total={5}
                  icon={"mdi:handshake-outline"}
                />
              </Item>
              <Item>
                <FundSummary title='Raised' total={400222} icon={"mdi:crowd"} />
              </Item>
              <Item>
                <FundSummary
                  title='Donated Campaigns'
                  total={50}
                  icon={"mdi:home-heart"}
                />
              </Item>
              <Item>
                <FundSummary
                  title='Donated'
                  total={5000}
                  icon={"mdi:hand-coin"}
                />
              </Item>
            </Stack>
          </Stack>
          <Stack direction='row' columnGap={2} mt={3} height='300px'>
            <ItemSmall width='25%' height='100%'>
              <Stack fontSize='24px'>Your FundRaising!</Stack>
              <Stack
                direction='row'
                fontSize={"16px"}
                mt={2}
                columnGap={2}
                alignItems='center'
                mb={1.5}>
                <Stack
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "15",
                    border: "1px solid black"
                  }}></Stack>
                <Stack>Help cat </Stack>
              </Stack>
              <BorderLinearProgress variant='determinate' value={80} />
              <Stack
                direction='row'
                fontSize={"16px"}
                mt={2}
                columnGap={2}
                alignItems='center'
                mb={1.5}>
                <Stack
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "15",
                    border: "1px solid black"
                  }}></Stack>
                <Stack>Help Dog</Stack>
              </Stack>
              <BorderLinearProgress variant='determinate' value={70} />
            </ItemSmall>
            <Stack direction='row' height='100%' width='75%' spacing={2}>
              <ItemBig>item 1</ItemBig>
              <ItemBig>item 2</ItemBig>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}



