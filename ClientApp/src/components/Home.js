/**
 * @format
 * @fileoverview Landing page for FundFriends App.
 * @author Shannen Lowe
 */

import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import { styled} from "@mui/material/styles";

const StyledDiv = styled("div")(({ imageUrl }) => ({
  backgroundColor: "lightgrey",
  width: "200px",
  height: "150px",
  marginRight: 40,
  borderRadius: "10px",
  backgroundImage: `url(${imageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: "cover"
}));

const imageUrls = [
  "https://source.unsplash.com/random/?charity",
  "https://source.unsplash.com/random/?donation",
  "https://source.unsplash.com/random/?nonprofit",
  "https://source.unsplash.com/random/?volunteer",
  "https://source.unsplash.com/random/?community",
  "https://source.unsplash.com/random/?help",
];

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
            borderBottom: "1px solid black"
          }}>
          <Button
            variant='outlined'
            style={{
              borderRadius: "20px",
              borderWidth: "6px",
              borderColor: "#B5E3BB",
              color: "black"
            }}>
            <h5>Create your community</h5>
          </Button>
        </div>
        <h5 style={{ paddingTop: 16 }}>Newest Campaigns</h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 48,
            borderBottom: "1px solid black"
          }}>
          {[...Array(4)].map((item, index) => (
            <StyledDiv key={index} imageUrl={imageUrls[Math.floor(Math.random() * imageUrls.length)]} />
          ))}
        </div>
        <h5 style={{ paddingTop: 16 }}>Local Campaigns</h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 48,
            borderBottom: "1px solid black"
          }}>
          {[...Array(4)].map((item, index) => (
            <StyledDiv key={index}  imageUrl={imageUrls[Math.floor(Math.random() * imageUrls.length)]} > ></StyledDiv>
          ))}
         </div>
        <ul>
          <li>
            <a href='/sign-up'>Signup Page</a>
          </li>
          <li>
            <a href='/fundraisers'>Fundraiser List</a>
          </li>
          <li>
            <a href='/donate'>Donation Page</a>
          </li>
          <li>
            <a href='/u/home'>Dashboard Page</a>
          </li>
          <li>
            <a href='/u/create'>Fundraiser Creation Page</a>
          </li>
          <li>
            <a href='/u/settings'>Account Settings</a>
          </li>
        </ul>
      </div>
    );
  }
}