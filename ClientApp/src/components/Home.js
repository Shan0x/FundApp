/**
 * @fileoverview Landing page for FundFriends App.
 * @author Shannen Lowe
 **/

import React, { Component } from 'react';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>LANDING PAGE</h1>
        <p>FundFriends Landing Page</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
          <li><a href = "/sign-up">Signup Page</a></li>
          <li><a href = "/fundraisers">Fundraiser List</a></li>
          <li><a href = "/donate">Donation Page</a></li>
          <li><a href = "/u/home">Dashboard Page</a></li>
          <li><a href="/u/settings">Account Settings</a></li>
          <li>Fundraiser Creation</li>
        </ul>
     </div>
    );
  }
}
