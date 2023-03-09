/**
 * @fileoverview: Registration form for new users using bootstrap.
 * */
import React, { Component } from 'react';
const FormValidators = require("./validate");
const validateRegistration = FormValidators.validateRegistration;
const zxcvbn = require("zxcvbn");
const axios = require("axios");

class RegistrationForm extends Component {

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

  handleChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  pwHandleChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[filed] = e.target.value;

    this.setState({
      user
    });

    if (e.target.value === "") {
      this.setState(state =>
        Object.assign({}, state, {
          score: "null"
        })
      );
    } else {
      var pw = zxcvbn(e.target.value);
      this.setState(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      );
    }
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


}
