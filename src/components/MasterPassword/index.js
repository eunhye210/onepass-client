import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  login,
  getVerifier,
  changeMasterPassword,
} from "../../services/apiRequests";
import validateNewPassordForm from "../../services/validateNewPasswordForm";
import SRP6JavascriptClientSessionSHA256 from "../../constants/encryptionAlgorithms";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function MasterPassword() {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const [result, setResult] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [passwords, setPassword] = useState({
    email: "",
    newPassword: "",
    currentPassword: "",
    confirmPassword: "",
  });
  const { email, newPassword, currentPassword, confirmPassword } = passwords;

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...passwords,
      [name]: value,
    });
  };

  const verifyCurrentPassword = async () => {
    try {
      const result = await getVerifier(email);
      const { salt, B } = JSON.parse(result);

      const srpClient = new SRP6JavascriptClientSessionSHA256();
      srpClient.step1(email, currentPassword);
      const credentials = srpClient.step2(salt, B);
      credentials["email"] = email;

      await login(credentials);

      setConfirmed(true);
      setResult({
        type: "success",
        message: "Your current password is confirmed. Please continue.",
      });
    } catch (err) {
      setResult({
        type: "error",
        message: "Incorrect password. Please try again.",
      });
    }
  };

  const changePassword = async () => {
    const errors = validateNewPassordForm(passwords);

    if (errors.length > 0) {
      return setResult({ type: "error", message: errors[0] });
    }

    const srpClient = new SRP6JavascriptClientSessionSHA256();
    const salt = srpClient.generateRandomSalt();
    const verifier = srpClient.generateVerifier(salt, email, newPassword);

    try {
      await changeMasterPassword(userId, { email, salt, verifier });
      setPassword({
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
