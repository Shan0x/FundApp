/**
 * @fileoverview Landing page for FundFriends App.
 * @author Shannen Lowe
 * @ Sebastian added background, Fundraiser Boxes , 
 search bar , style to the page
 **/


import React, { Component } from 'react';
<<<<<<< HEAD
import {Divider} from '@mui/material';
import { Box, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
=======
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
>>>>>>> 9b25cf43cf83b6881688f5d89d8db1c73fea5c0c

const StyledDiv = styled('div')(() => ({
  backgroundColor:"lightgrey",
  width:"200px",
  height:"150px",
  marginRight:40,
  borderRadius:"10px"
}))

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
<<<<<<< HEAD
        <div style={{textAlign:"center",paddingBottom:50,borderBottom:"1px solid black"}}>
         <Button
            variant="outlined"
            style={{ borderRadius: '20px', borderWidth: '6px', borderColor: '#B5E3BB', color: 'black' }}
            >
            <h5>Create your community</h5>
</Button>
=======
        <div style={{textAlign:"center",paddingBottom:24,borderBottom:"1px solid black"}}>
          <h2>Create fundraisers for yourself on your community</h2>
>>>>>>> 9b25cf43cf83b6881688f5d89d8db1c73fea5c0c
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
<<<<<<< HEAD
      <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
          <li><a href = "/sign-up">Signup Page</a></li>
=======
        @* <ul>
           <li><a href = "/sign-up">Signup Page</a></li>
>>>>>>> 9b25cf43cf83b6881688f5d89d8db1c73fea5c0c
          <li><a href = "/fundraisers">Fundraiser List</a></li>
          <li><a href = "/donate">Donation Page</a></li>
          <li><a href = "/u/home">Dashboard Page</a></li>
          <li><a href = "/create">Fundraiser Creation Page</a></li>
          <li><a href="/u/settings">Account Settings</a></li>
<<<<<<< HEAD
          <li>Sample Fundraiser Page</li>
       </ul> 
=======
        </ul> *@
>>>>>>> 9b25cf43cf83b6881688f5d89d8db1c73fea5c0c
    
     </div>
    );
  }
}
