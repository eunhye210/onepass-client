import { useNavigate } from "react-router-dom";

import * as S from "./styles";

function Home() {
  const navigate = useNavigate();

  return (
    <S.HomePageLayout>
      <S.Header>
        <S.Logo />
        <S.Title>OnePass</S.Title>
        <S.SubTitle>
          Login easily and safely with one Master Password.
        </S.SubTitle>
      </S.Header>
      <S.Content>
        <S.Button onClick={() => navigate("/signup")}>Sign Up</S.Button>
        <S.Button onClick={() => navigate("/login")}>Login</S.Button>
      </S.Content>
    </S.HomePageLayout>
  );
}

export default Home;
