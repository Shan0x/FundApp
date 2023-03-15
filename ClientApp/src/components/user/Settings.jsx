/**
 * @fileoverview User settings page to update profile details.
 * @author
 @SBD For the "settings" updates, I just have password and email updates implemented for now. The fetch URLs are "api/accountsettings/update/password" and "api/accountsettings/update/email". The only data that needs to be passed in the JSON body of the requests is:

userName and userPassword(for a password update)
userName and userEmail(for an email update)

I have it return "true" if the update succeeds and "false" if the update fails.
 * */
import React, { useState } from "react";
import axios from 'axios'

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
export const Settings = () =>
{
  const username = 'hardcoded'

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onDelete = () =>
{
    console.log('delete')
    // we need api route for deletion
  }

  const onUpdateEmail = async (e) =>
  {
      e.preventDefault();
      const payload = { username, email };
      try  {
        const response = await axios.post("api/accountsettings/update/email", payload);
        console.log('response', response)
    } catch (error) {
      console.error(error)
     }
  }
  const onUpdatePassword = async (e) =>
  {
      e.preventDefault();
      const payload = { username, password };
      try  {
        const response = await axios.post('api/accountsettings/update/password', payload)
        console.log('response', response)
    } catch (error) {
      console.error(error)
     }
  }
  // we need api to fetch user profile data

  // how to start backend server
  // how to get username

  return (
    < div >
      < h1 > Settings </ h1 >
      < form onSubmit ={ onUpdateEmail}>
        < div >
          Email:
          < input
            placeholder = "Email"
            type = "text"
            name = "email"
            value ={ email}
onChange ={ (e) => setEmail(e.target.value)}
          />
        </ div >
        <button type="submit">Update Email</button>
      </form>
       < form onSubmit ={ onUpdatePassword}>
        < div >
          Password:
          < input
            placeholder = "password"
            type = "text"
            name = "password"
            value ={ password}
onChange ={ (e) => setPassword(e.target.value)}
          />
        </ div >
        < button type = "submit" > Update Password </ button >
      </ form >

      < div > Delete Your Account</div>
      <button type = "button" onClick={onDelete}>
        Delete Account
      </ button >
    </ div >
  );
}