import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/features/Header";
import ShowModal from "../../components/shared/ShowModal";
import MessageModal from "../../components/shared/MessageModal";

import getEmailAddress from "../../services/getEmailAddress";
import { requestOTP } from "../../services/apiRequests";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function OneTimePassword() {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.modal);

  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    try {
      const { data } = await requestOTP({ email });
      sessionStorage.setItem("sessionKey", data);

      const securedEmailAddress = getEmailAddress(email);

      dispatch(
        setModalOpen({
          title: "Check your email",
          message: `We've sent an email to ${securedEmailAddress}. Follow the instructions in the email to finish changing your password.`,
        })
      );
    } catch (err) {
      dispatch(
        setModalOpen({
          title: "Error",
          message: err,
        })
      );
    }
  };

  return (
    <>
      <S.OneTimePasswordPageLayout>
        <Header type="otp" />
        <S.Content>
          <S.Title>Forgot Password ?</S.Title>
          <S.Text>
            Please enter the email address used to create your OnePass account,
            and we'll send you instructions for resetting your password.
          </S.Text>
          <S.Input
            size="350"
            name="email"
            value={email || ""}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Button onClick={handleSubmit}>Submit</S.Button>
        </S.Content>
      </S.OneTimePasswordPageLayout>
      {isModalOpen && <ShowModal>{<MessageModal />}</ShowModal>}
    </>
  );
}

export default OneTimePassword;
