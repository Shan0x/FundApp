import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import { FundraisersList } from './fundraiser/FundraisersList'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div style={{ height: "100%", margin: "0 auto" }}>
        <Box mt={5} />
        <div
          style={{
            textAlign: "center",
            paddingBottom: 50,
            borderBottom: "2px solid #F589A3",
          }}>
          <Button
            variant='outlined'
            href="/u/create"
            style={{
              borderRadius: "20px",
              borderWidth: "6px",
              borderColor: "#B5E3BB",
              color: "black",
            }}>
            <h5>Create your community</h5>
          </Button>
        </div>
        <h5 style={{ paddingTop: 16 }}>Newest Campaigns</h5>
        <FundraisersList />
      </div>
    );
  }
}