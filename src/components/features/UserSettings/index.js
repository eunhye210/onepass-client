import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setAccountSetting,
  getAccountSetting,
} from "../../../services/apiRequests";
import { setModalOpen } from "../../../store/slices/modalSlice";

import * as S from "./styles";

function UserSettings() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { isModalOpen } = useSelector((state) => state.modal);

  const [passwordOption, setPasswordOption] = useState();
  const [sessionTimeout, setSessionTimeout] = useState();

  useEffect(() => {
    const getUserSettingInfo = async () => {
      const { passwordOption, sessionTimeout } = await getAccountSetting(userId);

      setPasswordOption(passwordOption);
      setSessionTimeout(sessionTimeout);
    };

    getUserSettingInfo();
  }, [isModalOpen, userId]);

  const handleOptions = async (type) => {
    try {
      const data = await setAccountSetting(userId, {
        type: type,
        option: type === "password-strength" ? passwordOption : sessionTimeout,
      });

      dispatch(
        setModalOpen({ type: "message", title: "Success", message: data })
      );
    } catch (err) {
      dispatch(setModalOpen({ type: "message", title: "Error", message: err }));
    }
  };

  return (
    <S.PasswordStrengthBox>
      <S.Title>Settings</S.Title>
      <S.Section>
        <S.Wrapper>
          <S.OptionName>Password Generator Option</S.OptionName>
          <S.Select
            name="passwordStrength"
            value={passwordOption || ""}
            onChange={(e) => setPasswordOption(e.target.value)}
          >
            <S.Option value="good">Upper/Lowercase Letters & Numbers</S.Option>
            <S.Option value="strong">
              Upper/Lowercase Letters & Numbers & Symbols
            </S.Option>
            <S.Option value="weak">Easy to Memorize (word-based)</S.Option>
          </S.Select>
          <S.Button onClick={() => handleOptions("password-strength")}>
            OK
          </S.Button>
        </S.Wrapper>
        <S.Wrapper>
          <S.OptionName>Login Session Timeout</S.OptionName>
          <S.Select
            name="restrictLocation"
            value={sessionTimeout || ""}
            onChange={(e) => setSessionTimeout(e.target.value)}
          >
            <S.Option value="1h">1h</S.Option>
            <S.Option value="3h">3h</S.Option>
            <S.Option value="6h">6h</S.Option>
            <S.Option value="12h">12h</S.Option>
            <S.Option value="unlimited">unlimited</S.Option>
          </S.Select>
          <S.Button onClick={() => handleOptions("session-timeout")}>
            OK
          </S.Button>
        </S.Wrapper>
      </S.Section>
    </S.PasswordStrengthBox>
  );
}

export default UserSettings;
