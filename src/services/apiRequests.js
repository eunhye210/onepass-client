import apiController from "../network/apiController";

export async function sendConfirmationCodeEmail(email) {
  return apiController({
    url: "/signup/confirm-email",
    method: "post",
    data: { email: email },
  });
}

export async function signup(srpData) {
  return apiController({
    url: "/signup",
    method: "post",
    data: srpData,
  });
}

export async function requestOTP(email) {
  return apiController({
    url: "/otp",
    method: "post",
    data: email,
  });
}

export async function getVerifier(email) {
  return apiController({
    url: `/login/${email}`,
    method: "get",
  });
}

export async function login(loginData) {
  return apiController({
    url: "/login",
    method: "post",
    data: loginData,
  });
}

export async function addPassword(userId, passwordForm) {
  return apiController({
    url: `/users/${userId}/password`,
    method: "post",
    data: passwordForm,
  });
}
