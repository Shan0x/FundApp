/**
 * @fileoverview A page containing user information and settings.
 * These settings are editable to the user and will be updated in the database.
 * @author Shannen Lowe
 * */
import React, { Component } from 'react';

export class AccountSettings extends Component {
  static displayName = AccountSettings.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Account Settings</h1>
      </div>
    );
  }
}