import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setModalOpen } from "../../store/slices/modalSlice";
import { setPasswordStrength } from "../../services/apiRequests";

import * as S from "./styles";

// geolocaton 너무 느림...
function PasswordStrength() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [passwordOption, setPasswordOption] = useState("good");
  const [restrictOption, setRestrictOption] = useState("disabled");

  const handlePassword = async () => {
    try {
      const data = await setPasswordStrength(userId, passwordOption);
      dispatch(
        setModalOpen({ type: "message", title: "Success", message: data })
      );
    } catch (err) {
      dispatch(setModalOpen({ type: "message", title: "Error", message: err }));
    }
  };

  const handleRestriction = async () => {
    const success = async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

      const res = await fetch(geoApiUrl);
      const data = await res.json();
    };
    const error = () => {
      console.log("error!");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <S.PasswordStrengthBox>
      <S.Title>Settings</S.Title>
      <S.Section>
        <S.Wrapper>
          <S.OptionName>Password Generator Option</S.OptionName>
          <S.Select
            name="passwordStrength"
            onChange={(e) => setPasswordOption(e.target.value)}
          >
            <S.Option value="good">Upper/Lowercase Letters & Numbers</S.Option>
            <S.Option value="strong">
              Upper/Lowercase Letters & Numbers & Symbols
            </S.Option>
            <S.Option value="weak">Easy to Memorize (word-based)</S.Option>
          </S.Select>
          <S.Button onClick={handlePassword}>OK</S.Button>
        </S.Wrapper>
        <S.Wrapper>
          <S.OptionName>Login Restriction by Country</S.OptionName>
          <S.Select
            name="restrictLocation"
            onChange={(e) => setRestrictOption(e.target.value)}
          >
            <S.Option value="disabled">Disabled</S.Option>
            <S.Option value="currentLocation">
              Current Location Country
            </S.Option>
          </S.Select>
          <S.Button onClick={handleRestriction}>OK</S.Button>
        </S.Wrapper>
      </S.Section>
    </S.PasswordStrengthBox>
  );
}

export default PasswordStrength;
