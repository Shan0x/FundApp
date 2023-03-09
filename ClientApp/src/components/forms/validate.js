const validator = require("validator");


const validateRegistration = payload => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.userName !== "string" ||
    payload.userName.trim().length === 0
  ) {
    isFormValid = false;
    errors.userName = "Please provide a user name.";
  }

  if (
    !payload ||
    typeof payload.userEmail !== "string" ||
    !validator.isEmail(payload.userEmail)
  ) {
    isFormValid = false;
    errors.userEmail = "Please provide a valid email address.";
  }

  if (
    !payload ||
    typeof payload.userPassword !== "string" ||
    payload.userPassword.trim.length < 9
  ) {
    isFormValid = false;
    errors.userPassword = "Password must have at least 9 characters.";
  }

  if (
    !payload ||
    payload.passwordConfirm !== payload.userPassword
  ) {
    isFormValid = false;
    errors.passwordConfirm = "Password does not match.";
  }

  if (!isFormValid) {
    message = "Registration Errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
};

module.exports = validateRegistration;