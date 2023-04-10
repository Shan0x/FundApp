/**
 * @fileoverview Page containing open fundraisers.
 * @author Shannen Lowe
 * */
import React, { Component } from 'react';
import { FundraisersList } from './FundraisersList'

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
          <FundraisersList />
        </h1>
      </div>
    );
  }
}