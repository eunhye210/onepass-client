/* global chrome */
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

function PopupError() {
  const navigate = useNavigate();

  const returnHome = () => {
    chrome.storage.local.clear();
    localStorage.removeItem("userId");
    navigate("/home");
  };

  return (
    <S.PopupPageLayout>
      <S.LogoWrapper>
        <S.Logo />
        <S.LogoName>OnePass</S.LogoName>
      </S.LogoWrapper>
      <S.ContentBox>
        <S.Content size="20px" font="bold">
          Session Timeout
        </S.Content>
        <S.Content size="16px">
          Sorry your session timed out. Pleas login again.
        </S.Content>
        <S.Button onClick={returnHome}>OK</S.Button>
      </S.ContentBox>
    </S.PopupPageLayout>
  );
}

export default PopupError;
