import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import validator from "validator";

import { addPassword } from "../../services/apiRequests";
import { encryptData } from "../../services/processCrypto";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function PasswordForm() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { sessionKey } = useSelector((state) => state.user);

  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    password: "",
  });
  const { name, username, password } = formValues;

  const handleInputValues = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!name || !username || !password) {
      return dispatch(
        setModalOpen({
          type: "message",
          title: "Error",
          message: "Please fill in the form.",
        })
      );
    }

    if (!validator.isURL(name)) {
      return dispatch(
        setModalOpen({
          type: "message",
          title: "Error",
          message: "Invalid URL.",
        })
      );
    }

    try {
      const submitForm = [{ ...formValues, checked: true }];
      const cipherText = encryptData(submitForm, sessionKey);

      const result = await addPassword(userId, cipherText);

      setFormValues({
        name: "",
        username: "",
        password: "",
      });

      dispatch(
        setModalOpen({ type: "message", title: "Success", message: result })
      );
    } catch (err) {
      dispatch(setModalOpen({ type: "message", title: "Error", message: err }));
    }
  };

  return (
    <S.PasswordBox>
      <S.Title>Add Password</S.Title>
      <S.Section>
        <S.InputBox margin="25px">
          <S.InputWrapper>
            <S.InputName>URL</S.InputName>
            <S.Input
              width="540px"
              name="name"
              value={name || ""}
              onChange={handleInputValues}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputName>Username</S.InputName>
            <S.Input
              width="180px"
              name="username"
              value={username || ""}
              onChange={handleInputValues}
            />
            <S.InputName>Password</S.InputName>
            <S.Input
              width="200px"
              name="password"
              value={password || ""}
              onChange={handleInputValues}
            />
          </S.InputWrapper>
        </S.InputBox>
        <S.Button onClick={handleSubmit}>Add</S.Button>
      </S.Section>
    </S.PasswordBox>
  );
}

export default PasswordForm;
