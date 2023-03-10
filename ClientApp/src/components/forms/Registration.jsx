import React from "react";
import { Button, TextField,  } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import PasswordStr from "./PasswordStr"
import "./Registration.css";


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
  onPassChange,
  onDateChange
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={user.userDOB}
            onChange={onChange}
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            )}
          />
        </LocalizationProvider>
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
              <Button
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
        <Button
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