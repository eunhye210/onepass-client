import { Form, redirect, useActionData } from "react-router-dom";

import Header from "../../components/Header";

import {
  login,
  getVerifier,
  checkOTP,
  deleteOTP,
} from "../../services/apiRequests";
import SRP6JavascriptClientSessionSHA256 from "../../constants/encryptionAlgorithms";

import * as S from "./styles";

function Login() {
  const data = useActionData();

  return (
    <S.LoginPageLayout>
      <Header type="login" />
      <Form method="post" action="/login">
        <S.Content>
          <S.Title>Login</S.Title>
          {data && <S.ErrorMessage color="red">{data}</S.ErrorMessage>}
          <S.Input size="350" name="email" placeholder="Email" />
          <S.Input size="350" name="password" placeholder="Password" />
          <S.Link>Forgot Password ?</S.Link>
          <S.Button>Submit</S.Button>
        </S.Content>
      </Form>
    </S.LoginPageLayout>
  );
}

export default Login;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return "Please fill in the form.";
  }

  try {
    const isOTP = await checkOTP(email);

    if (isOTP.type && isOTP.otp === password) {
      const data = await deleteOTP(email);
      const { userId } = data;

      return redirect(`/users/${userId}`);
    }

    const result = await getVerifier(email);
    const { salt, B } = JSON.parse(result);

    const srpClient = new SRP6JavascriptClientSessionSHA256();
    srpClient.step1(email, password);
    const credentials = srpClient.step2(salt, B);
    credentials["email"] = email;

    const data = await login(credentials);
    const { userId } = data;

    return redirect(`/users/${userId}`);
  } catch (err) {
    return err;
  }
}
