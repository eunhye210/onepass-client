import { useNavigate } from "react-router-dom";

import * as S from "./styles";

function Header({ type }) {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo />
        <S.LogoName>OnePass</S.LogoName>
      </S.Wrapper>
      <S.Wrapper>
        {type !== "myPage" && (
          <S.Button onClick={() => navigate("/")}>Home</S.Button>
        )}
        {(type === "signup" || type === "otp") && (
          <S.Button onClick={() => navigate("/login")}>Login</S.Button>
        )}
        {type === "login" && (
          <S.Button onClick={() => navigate("/signup")}>Sign Up</S.Button>
        )}
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
