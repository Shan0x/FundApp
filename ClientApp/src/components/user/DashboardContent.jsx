/**
 * @format
 * @fileoverview: Dashboard container.
 */

import * as React from "react";
//import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

//import Donations from './DonationInfo/Donations'
//import Fundraisers from './DonationInfo/Fundraisers';
//import Subscriptions from './DonationInfo/Subscriptions';
import { FundSummary } from "./DonationInfo/FundSummary";
import { UserInfo } from "./DonationInfo/UserInfo";

export function DashboardContent() {
  //const theme = useTheme();
  const user = UserInfo();
  return (
    <>
      <Container maxWidth='x1'>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Welcome back, {user.userFirstName}!
        </Typography>

        <Grid Container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <FundSummary
              title='Active Campaigns'
              total={5}
              icon={"mdi:handshake-outline"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FundSummary title='Raised' total={40022222} icon={"mdi:crowd"} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FundSummary
              title='Donated Campaigns'
              total={50}
              icon={"mdi:home-heart"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FundSummary title='Donated' total={5000} icon={"mdi:hand-coin"} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardContent>
                    <Typography variant='h5' component='h2'>
                      {user.userName}
                    </Typography>
                    <Typography color='textSecondary'>
                      {user.userEmail}
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {user.userFirstName} {user.userLastName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}
