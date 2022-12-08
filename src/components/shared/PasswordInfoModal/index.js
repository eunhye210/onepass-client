import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPassword, updatePassword } from "../../../services/apiRequests";
import { encryptData, decryptData } from "../../../services/processCrypto";
import { setModalClose } from "../../../store/slices/modalSlice";

import * as S from "./styles";

function PasswordInfoModal() {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const [result, setResult] = useState();
  const [newPassword, setNewPassword] = useState();
  const [passwordInfo, setPasswordInfo] = useState();

  const { dataId } = useSelector((state) => state.modal);
  const sessionKey = sessionStorage.getItem("sessionKey");

  useEffect(() => {
    const getPasswordData = async () => {
      try {
      const result = await getPassword(userId, dataId);
      const decryptedData = decryptData(result, sessionKey);

      setPasswordInfo({
        id: decryptedData._id,
        URL: decryptedData.name,
        username: decryptedData.username,
        password: decryptedData.password,
      });
    } catch (err) {
      setResult({ type: "error", message: err });
    }
    };

    getPasswordData();
  }, [userId, dataId, sessionKey]);

  const editPassword = async () => {
    try {
      const cipherText = encryptData(newPassword, sessionKey);
      const result = await updatePassword(userId, passwordInfo.id, cipherText);

      setResult({ type: "success", message: result });
    } catch (err) {
      setResult({ type: "error", message: err });
    }
  };

  return (
    <S.Modal>
      <S.Title>Password Info</S.Title>
      {result && <S.Message type={result.type}>* {result.message} *</S.Message>}
      <S.Wrapper>
        <S.ItemBox>
          <S.ItemName>URL :</S.ItemName>
          <S.ItemValue>{passwordInfo?.URL || "Loading..."}</S.ItemValue>
        </S.ItemBox>
        <S.ItemBox>
          <S.ItemName>Username :</S.ItemName>
          <S.ItemValue>{passwordInfo?.username || "Loading..."}</S.ItemValue>
        </S.ItemBox>
        <S.ItemBox>
          <S.ItemName>Password :</S.ItemName>
          <S.ItemValue>{passwordInfo?.password || "Loading..."}</S.ItemValue>
        </S.ItemBox>
        <S.InputBox>
          <S.Input
            value={newPassword || ""}
            placeholder="update password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <S.EditButton onClick={editPassword}>Edit</S.EditButton>
        </S.InputBox>
      </S.Wrapper>
      <S.CloseButton onClick={() => dispatch(setModalClose())}>
        Close
      </S.CloseButton>
    </S.Modal>
  );
}

export default PasswordInfoModal;
