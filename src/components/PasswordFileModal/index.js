import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CryptoJS from "crypto-js";

import { addPassword } from "../../services/apiRequests";
import { setModalClose } from "../../store/slices/modalSlice";

import * as S from "./styles";

function PasswordFileModal() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { message } = useSelector((state) => state.modal);
  const { sessionKey } = useSelector((state) => state.user);

  const [result, setResult] = useState();
  const [passwordFile, setPasswordFile] = useState();

  useState(() => {
    setPasswordFile(message);
  }, []);

  const handleCheckBox = (idx) => {
    setPasswordFile(
      passwordFile.map((item, i) =>
        i === idx ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const cipherText = CryptoJS.AES.encrypt(
        JSON.stringify(passwordFile),
        sessionKey
      ).toString();
      const result = await addPassword(userId, cipherText);

      setResult({ type: "success", message: result });
    } catch (err) {
      setResult({ type: "error", message: err });
    }
  };

  return (
    <S.Modal>
      <S.Title>Select Passwords</S.Title>
      <S.Wrapper>
        {result && <S.Message type={result.type}>{result.message}</S.Message>}
        <S.PasswordBox>
          <S.Head>
            <S.CheckBox color="none" />
            <S.ItemName>URL</S.ItemName>
            <S.ItemName>Username</S.ItemName>
            <S.ItemName>Password</S.ItemName>
          </S.Head>
          <S.Body>
            {message?.map((item, idx) => (
              <S.ItemWrapper key={item.url + idx}>
                <S.CheckBox color="#f5f5f5">
                  <S.CheckInput
                    onChange={() => {
                      handleCheckBox(idx);
                    }}
                  />
                </S.CheckBox>
                <S.ItemValue>{item.name}</S.ItemValue>
                <S.ItemValue>{item.username}</S.ItemValue>
                <S.ItemValue>{item.password}</S.ItemValue>
              </S.ItemWrapper>
            ))}
          </S.Body>
        </S.PasswordBox>
      </S.Wrapper>
      <S.Button onClick={() => dispatch(setModalClose())}>Close</S.Button>
      <S.Button onClick={handleSubmit}>Submit</S.Button>
    </S.Modal>
  );
}

export default PasswordFileModal;
