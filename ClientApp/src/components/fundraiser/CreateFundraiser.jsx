/**
 * @format
 * @name CreateFundraisers.jsx
 * @fileoverview A page containing a form for registered users to create a new fundraiser.
 */

import React, { Component } from "react";
import { CreateFundraiserForm } from '../forms/CreateFundraiserForm';


export class CreateFundraisers extends Component {
  static displayName = CreateFundraisers.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <CreateFundraiserForm />
        </h1>
      </div>
      //   </Stack>
      // </Stack>
    );
  }
}
