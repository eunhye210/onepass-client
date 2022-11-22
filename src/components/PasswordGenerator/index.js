/* global chrome */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import getActiveTabURL from "../../services/getActiveTabURL";
import { getRandomPassword, logout } from "../../services/apiRequests";

import * as S from "./styles";

function PasswordGenerator() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [randomPassword, setRandomPassword] = useState("");

  useEffect(() => {
    const generateRandomPassword = async () => {
      const userId = localStorage.getItem("userId");
      const result = await getRandomPassword(userId);
      const { data } = result;
      setRandomPassword(data);
    };

    generateRandomPassword();
  }, [refresh]);

  const applyInput = async () => {
    const currentTab = await getActiveTabURL();

    chrome.storage.local.set({
      type: "FOUND",
      result: {
        password: randomPassword,
      },
    });

    chrome.tabs.sendMessage(currentTab.id, {
      type: "RANDOM",
    });
  };

  const handleLogout = async () => {
    chrome.storage.local.clear();
    const userId = localStorage.getItem("userId");
    await logout(userId);
    localStorage.removeItem("userId");
    navigate("/home");
  };

  return (
    <S.PasswordGeneratorLayout>
      <S.LogoWrapper>
        <S.Logo />
        <S.LogoName>OnePass</S.LogoName>
      </S.LogoWrapper>
      <S.ContentBox>
        <S.Message size="18px" width="350px" font="bold" color="#ffffff">
          Password Generator
        </S.Message>
        <S.Content>
          <S.Message size="15px" width="170px" color="#000000">
            {randomPassword}
          </S.Message>
          <S.RefreshButton onClick={() => setRefresh(!refresh)}>
            <S.RefreshImg />
          </S.RefreshButton>
          <S.ApplyButton color="#edf2f7" onClick={applyInput}>
            Apply
          </S.ApplyButton>
        </S.Content>
      </S.ContentBox>
      <S.Footer>
        <S.LinkWrapper>
          <S.Message size="15px" color="#ffffff" width="32px">
            Visit
          </S.Message>
          <S.Link>OnePass</S.Link>
        </S.LinkWrapper>
        <S.Button onClick={handleLogout}>Logout</S.Button>
      </S.Footer>
    </S.PasswordGeneratorLayout>
  );
}

export default PasswordGenerator;
