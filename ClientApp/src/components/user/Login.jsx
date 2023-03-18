/**
 * @fileoverview User login component
 * @author Shannen Lowe
 * */
import React, { Component } from 'react';
import { LoginForm } from '../forms/LoginForm';


export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <h1><LoginForm /></h1>
      </div>
    );
  }
}