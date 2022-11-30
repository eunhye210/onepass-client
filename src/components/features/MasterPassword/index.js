import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { changeMasterPassword } from "../../../services/apiRequests";
import { validateNewPasswordForm } from "../../../services/validateForms";
import { srpLogin, srpSaltAndVerifier } from "../../../services/processSRP";
import { setModalOpen } from "../../../store/slices/modalSlice";

import * as S from "./styles";

function MasterPassword() {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const [result, setResult] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [userInfos, setUserInfos] = useState({
    email: "",
    newPassword: "",
    currentPassword: "",
    confirmPassword: "",
  });

  const { email, newPassword, currentPassword, confirmPassword } = userInfos;

  const handleInputValues = (e) => {
    const { name, value } = e.target;

    setUserInfos({
      ...userInfos,
      [name]: value,
    });
  };

  const verifyCurrentPassword = async () => {
    const { type } = await srpLogin(email, currentPassword);

    setConfirmed(type === "success");
    setResult({
      type,
      message:
        type === "success"
          ? "Your current password is confirmed. Please continue."
          : "Incorrect password. Please try again.",
    });
  };

  const changePassword = async () => {
    const errors = validateNewPasswordForm(userInfos);

    if (errors.length > 0) {
      return setResult({ type: "error", message: errors[0] });
    }

    const { salt, verifier } = srpSaltAndVerifier(email, newPassword);

    try {
      await changeMasterPassword(userId, { email, salt, verifier });
      setUserInfos({
        email: "",
        newPassword: "",
        currentPassword: "",
        confirmPassword: "",
      });

      setResult();
      dispatch(
        setModalOpen({
          type: "message",
          title: "Success",
          message: "Your password has been changed successfully!",
        })
      );
    } catch (err) {
      setResult();
      dispatch(
        setModalOpen({
          type: "message",
          title: "Error",
          message: "Internal error. Please try again.",
        })
      );
    }
  };

  return (
    <S.ResetPasswordBox>
      <S.Title>Reset MasterPassword</S.Title>
      <S.Section>
        <S.InputBox>
          <S.Message type={result?.type}>{result?.message}</S.Message>
          <S.Wrapper>
            <S.InputName>Email</S.InputName>
            <S.Input
              name="email"
              value={email || ""}
              onChange={(e) => handleInputValues(e)}
            />
          </S.Wrapper>
          <S.Wrapper>
            <S.InputName>Current Password</S.InputName>
            <S.Input
              name="currentPassword"
              value={currentPassword || ""}
              onChange={(e) => handleInputValues(e)}
            />
            <S.Button onClick={verifyCurrentPassword}>Check</S.Button>
          </S.Wrapper>
          <S.Wrapper>
            <S.InputName>New Password</S.InputName>
            <S.Input
              name="newPassword"
              value={newPassword || ""}
              onChange={(e) => handleInputValues(e)}
            />
          </S.Wrapper>
          <S.Wrapper>
            <S.InputName>Confirm New Password</S.InputName>
            <S.Input
              name="confirmPassword"
              value={confirmPassword || ""}
              onChange={(e) => handleInputValues(e)}
            />
          </S.Wrapper>
        </S.InputBox>
        <S.SubmitButton disabled={!confirmed} onClick={changePassword}>
          Change
        </S.SubmitButton>
      </S.Section>
    </S.ResetPasswordBox>
  );
}

export default MasterPassword;
