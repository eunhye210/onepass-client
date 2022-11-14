import { useState } from "react";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import Header from "../../components/Header";
import ShowModal from "../../components/ShowModal";
import MessageModal from "../../components/MessageModal";

import getEmailId from "../../services/getEmailId";
import { confirmEmail } from "../../services/apiRequests";
import validateSignupForm from "../../services/validateSignupForm";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function Signup() {
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
      const data = await confirmEmail(email);
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
      console.log(err);
      // setError(err); // 에러 헨들링 수정 필요
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
            {error && <S.Message color="red">{error}</S.Message>}
            {message && <S.Message color="blue">{message}</S.Message>}
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
              submit
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

  // form 에러 헨들링 후, '/signup' 으로 보내기
  const errors = validateSignupForm(signupForm);
}
