/* global chrome */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";

import getActiveTabURL from "../../../services/getActiveTabURL";
import { logout, checkUserURLData } from "../../../services/apiRequests";

import * as S from "./styles";

function MainPopup() {
  const navigate = useNavigate();
  const [popupType, setPopupType] = useState("LOADING");
  const [popupData, setPopupData] = useState();

  const userId = localStorage.getItem("userId");
  const sessionKey = localStorage.getItem("sessionKey");

  useEffect(() => {
    chrome.storage.local.get(["tabURL"], async function (data) {
      const { tabURL } = data;

      const domainArr = tabURL
        .replace("http://", "")
        .replace("https://", "")
        .split(".");
      const domain = domainArr.length === 2 ? domainArr[0] : domainArr[1];

      if (domain !== undefined) {
        try {
          const result = await checkUserURLData(userId, domain);
          const bytes = CryptoJS.AES.decrypt(result, sessionKey);
          const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

          chrome.storage.local.set({
            result: {
              username: decryptedData.username,
              password: decryptedData.password,
            },
          });

          setPopupType("FOUND");
          setPopupData({
            username: decryptedData.username,
            password: decryptedData.password,
          });
        } catch (err) {
          setPopupType("EMPTY");
        }
      }
    });
  }, [userId, sessionKey]);

  const applyInput = async () => {
    const currentTab = await getActiveTabURL();

    chrome.tabs.sendMessage(currentTab.id, {
      type: "SHOW",
    });
  };

  const handleLogout = async () => {
    chrome.storage.local.clear();
    await logout(userId);
    localStorage.removeItem("userId");
    localStorage.removeItem("sessionKey");
    navigate("/home");
  };

  return (
    <S.MainPageLayout>
      <S.LogoWrapper>
        <S.Logo />
        <S.LogoName>OnePass</S.LogoName>
      </S.LogoWrapper>
      {popupType === "LOADING" && (
        <S.ContentBox>
          <S.Message size="18px" width="170" font="bold" color="#ffffff">
            Loading...
          </S.Message>
        </S.ContentBox>
      )}
      {popupType === "FOUND" && (
        <S.ContentBox>
          <S.Message size="18px" width="350px" font="bold" color="#ffffff">
            Apply password
          </S.Message>
          <S.Content>
            <S.Item>
              <S.ItemWrapper>
                <S.Message size="15px" width="170px" color="#000000">
                  {popupData.username}
                </S.Message>
                <S.Message
                  size="15px"
                  width="170px"
                  font="bold"
                  color="#000000"
                >
                  {"*".repeat(popupData.password.length)}
                </S.Message>
              </S.ItemWrapper>
              <S.ApplyButton color="#ffffff" onClick={applyInput}>
                Apply
              </S.ApplyButton>
            </S.Item>
          </S.Content>
        </S.ContentBox>
      )}
      {popupType === "EMPTY" && (
        <S.ContentBox>
          <S.Message size="18px" width="350px" font="bold" color="#ffffff">
            No Data Found
          </S.Message>
          <S.Content>
            <S.ApplyButton
              color="#edf2f7"
              onClick={() => navigate("/password")}
            >
              Generate Password
            </S.ApplyButton>
          </S.Content>
        </S.ContentBox>
      )}
      <S.Footer>
        <S.LinkWrapper>
          <S.Message size="15px" color="#ffffff" width="32px">
            Visit
          </S.Message>
          <S.Link>OnePass</S.Link>
        </S.LinkWrapper>
        <S.Button onClick={handleLogout}>Logout</S.Button>
      </S.Footer>
    </S.MainPageLayout>
  );
}

export default MainPopup;
