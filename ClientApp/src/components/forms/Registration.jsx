import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { DatePicker } from "../../../../node_modules/@mui/lab/index";
import PasswordStr from "./PasswordStr"

const Registration = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  buttonText,
  type,
  pwMask,
  onPassChange
}) => {
  return (
    <div classname="formContainer">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}> {errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="Username*"
          floatingLabelText="Username"
          value={user.userName}
          onChange={onChange}
          errorText={errors.userName}
        />
        <TextField
          name="Email Address*"
          floatingLabelText="Email Address"
          value={user.userEmail}
          onChange={onChange}
          errorText={errors.userEmail}
        />
        <TextField
          name="First Name"
          floatingLabelText="Firstname"
          value={user.firstName}
          onChange={onChange}
        />
        <TextField
          name="Lastname"
          floatingLabelText="Lastname"
          value={user.lastName}
          onChange={onChange}
        />
        <TextField
          type={DatePicker}
          floatingLabelText="Date of Birth"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
              helperText: 'MM/DD/YYYY',
            },
          }}
        />
        <TextField
          type={type}
          name="Password*"
          floatingLabelText="Password"
          value={user.userPassword}
          onChange={onPassChange}
          errorText={errors.userPassword}
        />

        <div className="passwordStrengthRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={buttonText} onClick={pwMask}
                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
          )}
        </div>
        <TextField
          type={type}
          name="passwordConfirm"
          floatingLabelText="Confirm Password"
          value={user.passwordConfirm}
          onChange={onChange}
          errorText={errors.passwordConfirm}
        />
        <br />
        <RaisedButton
          className="registrationSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
    </div>
  );
};

export default Registration;