/**
 * @fileoverview Page containing open fundraisers.
 * @author Shannen Lowe
 * */
import React, { Component } from 'react';
import { FundraisersList } from './FundraisersList'
import { Box } from '@mui/material'

export class Fundraisers extends Component {
  static displayName = Fundraisers.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Browse Fundraisers
          <Box sx={{ py: 4  }}>
            <FundraisersList />
          </Box>
        </h1>
      </div>
    );
  }
}