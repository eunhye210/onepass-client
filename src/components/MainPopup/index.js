/* global chrome */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import getActiveTabURL from "../../services/getActiveTabURL";

import * as S from "./styles";

function MainPopup() {
  const navigate = useNavigate();
  const [popupType, setPopupType] = useState("EMPTY");
  const [popupData, setPopupData] = useState();

  const logout = () => {
    chrome.storage.local.clear();
    localStorage.removeItem("userId");
    navigate("/home");
  };

  chrome.storage.local.get(["type", "result"], function (data) {
    const { type, result } = data;

    if (type === "FOUND") {
      setPopupType(type);
      setPopupData({
        username: result.username,
        password: result.password,
      });
    } else if (type === "EMPTY") {
      setPopupType(type);
    }
  });

  const applyInput = async () => {
    const currentTab = await getActiveTabURL();

    chrome.tabs.sendMessage(currentTab.id, {
      type: "SHOW",
    });
  };

  return (
    <S.MainPageLayout>
      <S.LogoWrapper>
        <S.Logo />
        <S.LogoName>OnePass</S.LogoName>
      </S.LogoWrapper>
      {popupType === "FOUND" && (
        <S.ContentBox>
          <S.Message size="18px" width="350px" font="bold" color="#ffffff">
            Apply password
          </S.Message>
          <S.Content>
            <S.Item>
              <S.ItemImg />
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
                  {popupData.password}
                </S.Message>
              </S.ItemWrapper>
              <S.ApplyButton onClick={applyInput}>Apply</S.ApplyButton>
            </S.Item>
          </S.Content>
        </S.ContentBox>
      )}
      {popupType === "EMPTY" && (
        <S.ContentBox>
          <S.Message size="18px" width="350px" font="bold" color="#ffffff">
            No Data Found
          </S.Message>
          <S.Content />
        </S.ContentBox>
      )}
      <S.Footer>
        <S.LinkWrapper>
          <S.Message size="15px" color="#ffffff" width="32px">
            Visit
          </S.Message>
          <S.Link>OnePass</S.Link>
        </S.LinkWrapper>
        <S.Button onClick={logout}>Logout</S.Button>
      </S.Footer>
    </S.MainPageLayout>
  );
}

export default MainPopup;
