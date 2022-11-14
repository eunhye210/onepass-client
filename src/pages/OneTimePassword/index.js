import { useEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import ShowModal from "../../components/ShowModal";
import MessageModal from "../../components/MessageModal";

import getEmailAddress from "../../services/getEmailAddress";
import { requestOTP } from "../../services/apiRequests";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function OneTimePassword() {
  const data = useActionData();
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    if (data?.type === "success") {
      const securedEmailAddress = getEmailAddress(data.email);

      dispatch(
        setModalOpen({
          title: "Check your email",
          message: `We've sent an email to ${securedEmailAddress}. Follow the instructions in the email to finish changing your password.`,
        })
      );
    } else if (data?.type === "error") {
      dispatch(
        setModalOpen({
          title: "Error",
          message: "An error occurred. Please try again.",
        })
      );
    }
  }, [data]);

  return (
    <>
      <S.OneTimePasswordPageLayout>
        <Header type="otp" />
        <Form method="post" action="/otp">
          <S.Content>
            <S.Title>Forgot Password ?</S.Title>
            <S.Text>
              Please enter the email address used to create your OnePass
              account, and we'll send you instructions for resetting your
              password.
            </S.Text>
            <S.Input size="350" name="email" placeholder="Email" />
            <S.Button>Submit</S.Button>
          </S.Content>
        </Form>
      </S.OneTimePasswordPageLayout>
      {isModalOpen && <ShowModal>{<MessageModal />}</ShowModal>}
    </>
  );
}

export default OneTimePassword;

export async function action({ request }) {
  const formData = await request.formData();
  const otpForm = {
    email: formData.get("email"),
  };

  try {
    await requestOTP(otpForm);
    return { type: "success", email: formData.get("email") };
  } catch (err) {
    return { type: "error" }; // 에러에 따른 내용 보여주기 Internal server error & No account found
  }
}
