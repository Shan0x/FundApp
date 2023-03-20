/**
 * @fileoverview Home page registered users will see when they are logged in.
 * @author Shannen Lowe
 * */
 
import React, { Component } from 'react';

export class Dashboard extends Component {
  static displayName = Dashboard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Dashboard
        </h1>
      </div>
    );
  }
}