import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import validator from "validator";

import Header from "../../components/features/Header";
import ShowModal from "../../components/shared/ShowModal";
import MessageModal from "../../components/shared/MessageModal";

import getEmailId from "../../services/getEmailId";
import { srpSaltAndVerifier } from "../../services/processSRP";
import { validateSignupForm } from "../../services/validateForms";
import { signup, sendConfirmationCodeEmail } from "../../services/apiRequests";

import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isModalOpen } = useSelector((state) => state.modal);

  const [message, setMessage] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    confirmationCode: "",
    emailConfirmationCode: "",
    password: "",
    confirmPassword: "",
  });

  const {
    username,
    email,
    confirmationCode,
    emailConfirmationCode,
    password,
    confirmPassword,
  } = signupForm;

  const handleInputValues = (e) => {
    const { name, value } = e.target;

    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const verifyEmail = async () => {
    if (!validator.isEmail(email)) {
      return setMessage({
        type: "error",
        data: "Invalid email address. Try again.",
      });
    }

    try {
      const data = await sendConfirmationCodeEmail(email);
      const emailId = getEmailId(email);

      dispatch(
        setModalOpen({
          title: "Check your email",
          message: `We've sent a confirmation email to ${emailId}. Please confirm your email by entering the Confirmation Code.`,
        })
      );

      setMessage({ type: "error", data: "" });
      setSignupForm({
        ...signupForm,
        emailConfirmationCode: data,
      });
    } catch (err) {
      setMessage({ type: "error", data: err });
    }
  };

  const confirmCode = () => {
    if (confirmationCode !== emailConfirmationCode) {
      return setMessage({
        type: "error",
        data: "Incorrect confirmation code. Please try again.",
      });
    }

    setConfirmed(true);
    setMessage({
      type: "message",
      data: "Your email is confirmed. Please continue.",
    });
  };

  const handleSubmit = async () => {
    const errors = validateSignupForm({
      username,
      email,
      password,
      confirmPassword,
    });

    if (errors.length > 0) {
      return setMessage({ type: "error", data: errors[0] });
    }

    const { salt, verifier } = srpSaltAndVerifier(email, password);

    try {
      await signup({ username, email, verifier, salt });
      return navigate("/login");
    } catch (err) {
      return setMessage({ type: "error", data: err });
    }
  };

  return (
    <>
      <S.SignupPageLayout>
        <Header type="signup" />
        <S.Content>
          <S.Title>Sign Up</S.Title>
          {message && <S.Message type={message.type}>{message.data}</S.Message>}
          <S.Input
            size="350"
            name="username"
            value={username || ""}
            placeholder="Username"
            onChange={handleInputValues}
          />
          <S.Wrapper>
            <S.Input
              size="250"
              name="email"
              value={email || ""}
              placeholder="Email"
              onChange={handleInputValues}
            />
            <S.Button onClick={(e) => verifyEmail(e)}>verify</S.Button>
          </S.Wrapper>
          <S.Wrapper>
            <S.Input
              size="250"
              name="confirmationCode"
              value={confirmationCode || ""}
              placeholder="Confirmation Code"
              onChange={handleInputValues}
            />
            <S.Button onClick={(e) => confirmCode(e)}>submit</S.Button>
          </S.Wrapper>
          <S.Input
            size="350"
            name="password"
            value={password || ""}
            placeholder="Password"
            onChange={handleInputValues}
          />
          <S.Input
            size="350"
            name="confirmPassword"
            value={confirmPassword || ""}
            placeholder="ConfirmPassword"
            onChange={handleInputValues}
          />
          <S.Button type="submit" disabled={!confirmed} onClick={handleSubmit}>
            Submit
          </S.Button>
        </S.Content>
      </S.SignupPageLayout>
      {isModalOpen && <ShowModal>{<MessageModal />}</ShowModal>}
    </>
  );
}

export default Signup;
