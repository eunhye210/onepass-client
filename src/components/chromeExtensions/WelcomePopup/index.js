import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { srpLogin } from "../../../services/processSRP";

import * as S from "./styles";

function WelcomePopup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const verifyLogin = async () => {
    const { type, result } = await srpLogin(email, password);
    const { data, sessionKey } = result;

    if (type === "success") {
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("sessionKey", sessionKey);

      return navigate("/main");
    } else {
      setError(result);
    }
  };

  return (
    <S.PopupPageLayout>
      <S.LogoWrapper>
        <S.Logo />
        <S.LogoName>OnePass</S.LogoName>
      </S.LogoWrapper>
      <S.InputSection>
        <S.Content color="#ff4500" margin="10px">
          {error}
        </S.Content>
        <S.Input
          name="email"
          type="text"
          value={email || ""}
          placeholder="Email"
          onChange={handleInputValues}
        />
        <S.Input
          name="password"
          type="password"
          value={password || ""}
          placeholder="Password"
          onChange={handleInputValues}
        />
        <S.Button onClick={verifyLogin}>Login</S.Button>
      </S.InputSection>
      <S.Footer>
        <S.Content color="#FFFFFF">Don't have an account ? Visit</S.Content>
        <S.Link>OnePass</S.Link>
        <S.Content color="#FFFFFF">now.</S.Content>
      </S.Footer>
    </S.PopupPageLayout>
  );
}

export default WelcomePopup;
