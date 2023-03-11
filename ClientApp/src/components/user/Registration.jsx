/**
 * @fileoverview Sign-up page for FundFriends.
 * */
import React, { Component } from 'react';
import { SignUpForm } from '../forms/Signup';

export class Signup extends Component {
  static displayName = Signup.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <SignUpForm />
        </h1>
      </div>
    );
  }
}