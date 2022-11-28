import { login, getVerifier } from "./apiRequests";
import SRP6JavascriptClientSessionSHA256 from "../constants/encryptionAlgorithms";

async function srpLogin(email, password) {
  try {
    const result = await getVerifier(email);
    const { salt, B } = JSON.parse(result);

    const srpClient = new SRP6JavascriptClientSessionSHA256();

    srpClient.step1(email, password);
    const credentials = srpClient.step2(salt, B);
    credentials["email"] = email;

    const data = await login(credentials);
    const sessionKey = srpClient.getSessionKey();

    return { type: "success", result: { data, sessionKey } };
  } catch (err) {
    return { type: "error", result: err };
  }
}

export default srpLogin;
