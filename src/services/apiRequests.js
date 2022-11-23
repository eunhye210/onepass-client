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

export async function logout(userId) {
  return apiController({
    url: `/logout/${userId}`,
    method: "post",
  });
}

export async function addPassword(userId, passwordForm) {
  return apiController({
    url: `/users/${userId}/password`,
    method: "post",
    data: passwordForm,
  });
}

export async function getUserInfo(userId) {
  return apiController({
    url: `/users/${userId}`,
    method: "get",
  });
}

export async function deletePassword(userId, passwordId) {
  return apiController({
    url: `/users/${userId}/password/${passwordId}`,
    method: "delete",
  });
}

export async function getPassword(userId, passwordId) {
  return apiController({
    url: `/users/${userId}/password/${passwordId}`,
    method: "get",
  });
}

export async function updatePassword(userId, passwordId, password) {
  return apiController({
    url: `/users/${userId}/password/${passwordId}`,
    method: "patch",
    data: { password },
  });
}

export async function deleteAccount(userId, masterPassword) {
  return apiController({
    url: `users/${userId}/withdraw`,
    method: "delete",
    data: { masterPassword },
  });
}

export async function changeMasterPassword(userId, srpData) {
  return apiController({
    url: `users/${userId}/reset-password`,
    method: "patch",
    data: srpData,
  });
}

export async function setAccountSetting(userId, data) {
  return apiController({
    url: `users/${userId}/account-setting`,
    method: "post",
    data: data,
  });
}

export async function getAccountSetting(userId) {
  return apiController({
    url: `users/${userId}/account-setting`,
    method: "get",
  });
}

export async function checkOTP(email) {
  return apiController({
    url: `login/otp/${email}`,
    method: "get",
  });
}

export async function deleteOTP(email) {
  return apiController({
    url: `login/otp/${email}`,
    method: "delete",
  });
}

export async function getRandomPassword(userId) {
  return apiController({
    url: `users/${userId}/random-password`,
    method: "get",
  });
}

export async function checkUserURLData(userId, domain) {
  return apiController({
    url: `users/${userId}/url/${domain}`,
    method: "get",
  });
}
