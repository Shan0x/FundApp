/**
 * @fileoverview Sign-up page for FundFriends.
 * @author Shannen Lowe
 * */
import React, { Component } from 'react';
import { RegistrationForm } from '../forms/RegistrationForm.jsx';

export class Signup extends Component {
  static displayName = Signup.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <RegistrationForm />
        </h1>
      </div>
    );
  }
}