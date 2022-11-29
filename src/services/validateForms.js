import validator from "validator";

export function validatePasswordForm(name, username, password) {
  const errors = [];

  if (!name || !username || !password) {
    errors.push("Please fill in the form.");
  }

  if (!validator.isURL(name)) {
    errors.push("Invalid URL.");
  }

  return errors;
}

export function validateNewPasswordForm(userInfos) {
  const { email, newPassword, confirmPassword } = userInfos;
  const passwordRegex = /(?=.*\d)(?=.*[a-zA_Z]).{8}$/;
  const errors = [];

  if (!email || !newPassword || !confirmPassword) {
    errors.push("Please fill in the form");
  }

  if (!passwordRegex.test(newPassword)) {
    errors.push(
      "Password must contain letters and numbers and be at least 8 chars long."
    );
  }

  if (newPassword !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  return errors;
}
