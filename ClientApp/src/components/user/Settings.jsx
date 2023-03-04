/**
 * @fileoverview User settings page to update profile details.
 * @author
 * */
import React, { Component, useState } from "react";

// Class Components
/*export class Settings extends Component {
  static displayName = Settings.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}*/

// Functional components
export const Settings = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onDelete = () => {
    console.log('delete')
    // we need api route for deletion
  }

  const onUpdateProfile = (e) => {
    e.preventDefault();
    console.log('submit data', { username, password })
    // we need api to submit data
  }

  // we need api to fetch user profile data

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={onUpdateProfile}>
        <div>
          Username:
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password:
          <input
            placeholder="password"
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>

      <div>Delete Your Account</div>
      <button type="button" onClick={onDelete}>
        Delete Account
      </button>
    </div>
  );
}
