/**
 * @fileoverview: Signup form for new users using bootstrap.
 * @author Shannen Lowe,
 * */
import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import './SignupForm.css';

export const SignupForm = () => {
  const [userName, setUser] = useState('');
  const [userPassword, setPass] = useState('');

  return (
    <div >
      <Form className="form-container">
        <FormGroup floating>
          <input
            value={userName}
            type="username"
            id="userName"
            name="userName"
            placeholder="Username"
          />
          <label for="userName">Username</label>
        </FormGroup>
        <FormGroup floating>
          <label for="password">Password</label>
          <input
            value={userPassword}
            type="password"
            id="password"
            name="password"
            placeholder="*********"
          />
        </FormGroup>

        <Button>
          Register
        </Button>
      </Form>
    </div>
    )
}