/**
 * @fileoverview: Registration form for new users using bootstrap.
 * */
import React, { Component } from 'react';
import Registration from "./Registration.jsx"
const FormValidators = require("./validate");
const validateRegistration = FormValidators.validateRegistration;
const zxcvbn = require("zxcvbn");
const axios = require("axios");

export class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        userName: "",
        userPassword: "",
        passwordConfirm: "",
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userDOB: ""
      },
      buttonText: "show",
      type: "password",
      score: "0"
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  pwHandleChange(event) {
    const { name, value } = event.target;

    this.setState(prevState => {
      const user = { ...prevState.user, [name]: value };
      const score = value ? zxcvbn(value).score + 1 : null;

      return { user, score };
    });
  }

  submitRegistration(user) {
    var params = {
      userName: user.uName,
      userPassword: user.pass,
      userFirstName: user.fName,
      userLastName: user.lName,
      userEmail: user.email,
      userDOB: user.dob
    };
    axios.post("https://localhost:44442/api/users", params)
      .then(res => {
        if (res.data.success === true) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          window.location.reload();
        } else {
          this.setState({
            errors: { message: res.data.message }
          });
        }
      })
      .catch(err => {
        console.log("Registration submit error: ", err);
      });
  }

  validateForm(event) {
    event.preventDefault();
    var payload = validateRegistration(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {}
      });
      var user = {
        uName: this.state.user.userName,
        pass: this.state.user.userPassword,
        fName: this.state.user.userFirstName,
        lName: this.sate.user.userLastName,
        email: this.sate.user.userEmail,
        dob: this.state.user.userDOB
      };
      this.submitRegistration(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }

  pwMask(event) {
    event.preventDefault();
    this.setState(state =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        buttonText: this.state.buttonText === "show" ? "hide" : "show"
      })
    );
  }

  render() {
    return (
      <div>
        <Registration
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPassChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.errors}
          score={this.state.score}
          buttonText={this.state.buttonText}
          type={this.state.type}
          pwMask={this.pwMask}
        />
      </div>
    );
  }

}

