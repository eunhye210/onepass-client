import apiController from "../network/apiController";

export async function confirmEmail(email) {
  return apiController({
    url: "/signup/confirm-email",
    method: "post",
    data: { email: email },
  });
}
