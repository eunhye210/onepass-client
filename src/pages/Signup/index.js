import { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import Header from "../../components/Header";
import ShowModal from "../../components/ShowModal";
import MessageModal from "../../components/MessageModal";

import getEmailId from "../../services/getEmailId";
import { signup } from "../../services/apiRequests";
import { sendConfirmationCodeEmail } from "../../services/apiRequests";
import validateSignupForm from "../../services/validateSignupForm";

import { setModalOpen } from "../../store/slices/modalSlice";
import SRP6JavascriptClientSessionSHA256 from "../../constants/encryptionAlgorithms";
import * as S from "./styles";

// 안전한 password 자동 생성 로직 추가
function Signup() {
  const data = useActionData();
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.modal);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const [email, setEmail] = useState();
  const [confirmationCode, setConfirmationCode] = useState();
  const [emailConfirmationCode, setEmailConfirmationCode] = useState();

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setConfirmationCode(value);
  };

  const verifyEmail = async () => {
    if (!validator.isEmail(email)) {
      return setError("Invalid email address. Try again.");
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
      setError("");
      setEmailConfirmationCode(data);
    } catch (err) {
      setError(err);
    }
  };

  const confirmCode = () => {
    if (confirmationCode !== emailConfirmationCode) {
      setMessage("");
      return setError("Incorrect confirmation code. Please try again.");
    }
    setError("");
    setMessage("Your email is confirmed. Please continue.");
  };

  return (
    <>
      <S.SignupPageLayout>
        <Header type="signup" />
        <Form method="post" action="/signup">
          <S.Content>
            <S.Title>Sign Up</S.Title>
            {data && <S.Message color="red">{data}</S.Message>}
            {error && <S.Message color="red">{error}</S.Message>}
            {message && !data && <S.Message color="blue">{message}</S.Message>}
            <S.Input size="350" name="username" placeholder="Username" />
            <S.Wrapper>
              <S.Input
                size="250"
                name="email"
                value={email || ""}
                placeholder="Email"
                onChange={handleInputValues}
              />
              <S.Button type="button" onClick={(e) => verifyEmail(e)}>
                verify
              </S.Button>
            </S.Wrapper>
            <S.Wrapper>
              <S.Input
                size="250"
                name="confirmationCode"
                value={confirmationCode || ""}
                placeholder="Confirmation Code"
                onChange={handleInputValues}
              />
              <S.Button type="button" onClick={(e) => confirmCode(e)}>
                submit
              </S.Button>
            </S.Wrapper>
            <S.Input size="350" name="password" placeholder="Password" />
            <S.Input
              size="350"
              name="confirmPassword"
              placeholder="ConfirmPassword"
            />
            <S.Button type="submit" disabled={message ? false : true}>
              Submit
            </S.Button>
          </S.Content>
        </Form>
      </S.SignupPageLayout>
      {isModalOpen && <ShowModal>{<MessageModal />}</ShowModal>}
    </>
  );
}

export default Signup;

export async function action({ request }) {
  const formData = await request.formData();
  const signupForm = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const { username, email, password } = signupForm;

  const errors = validateSignupForm(signupForm);
  if (errors.length > 0) {
    return errors[0];
  }

  const srpClient = new SRP6JavascriptClientSessionSHA256();
  const salt = srpClient.generateRandomSalt();
  const verifier = srpClient.generateVerifier(salt, email, password);

  try {
    await signup({ username, email, verifier, salt });
  } catch (err) {
    return err;
  }

  return redirect("/login");
}
