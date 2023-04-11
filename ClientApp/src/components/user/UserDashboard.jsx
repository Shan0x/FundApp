/**
 * @fileoverview Home page registered users will see when they are logged in.
 * @todo Only allow logged in users to access this page.
 * */
import React, { Component } from 'react';
//import { DashboardContent } from './DashboardContent';
import { DashboardContentA } from './DashboardContentA';


export class UserDashboard extends Component {
  static displayName = UserDashboard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <DashboardContentA />
        </h1>
      </div>
    );
  }
}