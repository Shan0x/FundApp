/**
 * @fileoverview Sign-up page for FundFriends.
 * @author Shannen Lowe
 * */
import React, { Component } from 'react';
import { Registration } from '../forms/RegistrationForm';

export class Signup extends Component {
  static displayName = Signup.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Sign-up Page
          <Registration />
        </h1>
      </div>
    );
  }
}