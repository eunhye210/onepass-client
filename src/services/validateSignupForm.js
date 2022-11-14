function validateSignupForm(signupForm) {
  const { username, email, password, confirmPassword} = signupForm;
  const passwordRegex = /(?=.*\d)(?=.*[a-zA_Z]).{8}$/;
  const errors = [];

  if (!username || !email || !password || !confirmPassword) {
    errors.push("Please fill in the form");
  }

  if (!passwordRegex.test(password)) {
    errors.push("Password must contain letters and numbers and be at least 8 chars long.")
  }

  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  return errors;
}

export default validateSignupForm;
