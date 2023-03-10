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
          name="userName"
          label="Username"
          value={user.userName}
          onChange={onChange}
          error={Boolean(errors.userName)}
          helperText={errors.userName}
        />
        <TextField
          name="Email Address*"
          label="Email Address"
          value={user.userEmail}
          onChange={onChange}
          error={Boolean(errors.userEmail)}
          helperText={errors.userEmail}
        />
        <TextField
          name="First Name"
          label="Firstname"
          value={user.firstName}
          onChange={onChange}
        />
        <TextField
          name="Lastname"
          label="Lastname"
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
          label="Password"
          value={user.userPassword}
          onChange={onPassChange}
          errorText={errors.userPassword}
        />
        <TextField
          type={type}
          name="passwordConfirm"
          label="Confirm Password"
          value={user.passwordConfirm}
          onChange={onChange}
          errorText={errors.passwordConfirm}
        />
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <Button
                className="pwShowHideBtn"
                variant="contained"
                onClick={pwMask}
                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>

        <br />
        <Button
          className="signUpSubmit"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Registration;