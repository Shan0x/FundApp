/**
 * @fileoverview Landing page for FundFriends App.
 * @author Shannen Lowe
 * @ Sebastian added background, Fundraiser Boxes , 
 search bar , style to the page
 **/


import React, { Component } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(() => ({
  backgroundColor:"lightgrey",
  width:"200px",
  height:"150px",
  marginRight:40,
  borderRadius:"10px"
}))

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div style={{height:"100%",margin:"0 auto"}}>
        <Box mt={5} />
        <div style={{textAlign:"center",paddingBottom:24,borderBottom:"1px solid black"}}>
          <h2>Create fundraisers for yourself on your community</h2>
        </div>
        <h5 style={{paddingTop:16}}>Newest Campaigns</h5>
        <div style={{display:"flex",flexDirection:"row",paddingBottom:48,borderBottom:"1px solid black"}}>
        {[...Array(4)].map((item,index) => (
          <StyledDiv key={index}>
            </StyledDiv>
        ))}
        </div>
          <h5  style={{paddingTop:16}}>Local Campaigns</h5>
        <div style={{display:"flex",flexDirection:"row",paddingBottom:48,borderBottom:"1px solid black"}}>
        {[...Array(4)].map((item,index) => (
          <StyledDiv key={index}>
            </StyledDiv>
        ))}
        </div>
        @* <ul>
           <li><a href = "/sign-up">Signup Page</a></li>
          <li><a href = "/fundraisers">Fundraiser List</a></li>
          <li><a href = "/donate">Donation Page</a></li>
          <li><a href = "/u/home">Dashboard Page</a></li>
          <li><a href = "/create">Fundraiser Creation Page</a></li>
          <li><a href="/u/settings">Account Settings</a></li>
        </ul> *@
    
     </div>
    );
  }
}
