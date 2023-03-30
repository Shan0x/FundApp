/**
 * @format
 * @name CreateFundraisers.jsx
 * @fileoverview A page containing a form for registered users to create a new fundraiser.
 * @author Shannen Lowe
 */

import { Component } from "react";
import { Typography, Paper, Divider, Box, Stack, Button } from "@mui/material/";
import { styled, alpha } from "@mui/material/styles";

const StyledDiv = styled("div")((div) => ({
  backgroundColor: "lightgrey",
  width: "200px",
  height: "150px",
  marginRight: 40,
  borderRadius: "10px"
}));

export class CreateFundraisers extends Component {
  static displayName = CreateFundraisers.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Stack direction='Column' columnGap='3' justify='center'>
      //   <Stack width='75%' direction='column' textAlign='left'>
      //     <Paper elevation={9}>
      //       <h1>Fundraiser Creation page </h1>
      //     </Paper>
      <div style={{ height: "100%", margin: "0 auto" }}>
        <Box mt={5} />
        <div
          style={{
            textAlign: "center",
            paddingBottom: 50,
            borderBottom: "1px solid black"
          }}></div>
        <Button variant='contained' color='#B5e3' sx={{ height: 40 }}>
          'Create'
        </Button>
        <Button variant='contained' color='error' sx={{ height: 40 }}>
          'delete Account'
        </Button>
      </div>
      //   </Stack>
      // </Stack>
    );
  }
}
