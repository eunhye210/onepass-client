import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import {
  login,
  getVerifier,
  checkOTP,
  deleteOTP,
} from "../../services/apiRequests";
import { setSessionKey } from "../../store/slices/userSlice";

import SRP6JavascriptClientSessionSHA256 from "../../constants/encryptionAlgorithms";

import * as S from "./styles";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      return setError("Please fill in the form.");
    }

    try {
      const isOTP = await checkOTP(email);

      if (isOTP.type && isOTP.otp === password) {
        const data = await deleteOTP(email);
        const { userId } = data;

        return navigate(`/users/${userId}`);
      }

      const result = await getVerifier(email);
      const { salt, B } = JSON.parse(result);

      const srpClient = new SRP6JavascriptClientSessionSHA256();
      srpClient.step1(email, password);
      const credentials = srpClient.step2(salt, B);
      credentials["email"] = email;

      const data = await login(credentials);
      const { userId } = data;

      dispatch(setSessionKey({ key: srpClient.getSessionKey() }));

      return navigate(`/users/${userId}`);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <S.LoginPageLayout>
      <Header type="login" />
      <S.Content>
        <S.Title>Login</S.Title>
        {error && <S.ErrorMessage color="red">{error}</S.ErrorMessage>}
        <S.Input
          size="350"
          type="text"
          name="email"
          value={email || ""}
          placeholder="Email"
          onChange={handleInputValues}
        />
        <S.Input
          size="350"
          type="password"
          name="password"
          value={password || ""}
          placeholder="Password"
          onChange={handleInputValues}
        />
        <S.Link onClick={() => navigate("/otp")}>Forgot Password ?</S.Link>
        <S.Button onClick={handleSubmit}>Submit</S.Button>
      </S.Content>
    </S.LoginPageLayout>
  );
}

export default Login;
