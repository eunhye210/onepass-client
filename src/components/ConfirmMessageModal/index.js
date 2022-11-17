import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setModalClose } from "../../store/slices/modalSlice";
import { deletePassword } from "../../services/apiRequests";

import * as S from "./styles";

function ConfirmMessageModal() {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const { message, dataId } = useSelector((state) => state.modal);

  const deleteItem = async () => {
    try {
      await deletePassword(userId, dataId);
      dispatch(setModalClose());
    } catch (err) {
      setError(err);
    }
  };

  return (
    <S.Modal>
      <S.Title>Confirmation</S.Title>
      {!error && <S.Message color="black">{message}</S.Message>}
      {error && <S.Message color="red">{error}</S.Message>}
      <S.ButtonWrapper>
        <S.Button onClick={deleteItem}>Yes</S.Button>
        <S.Button onClick={() => dispatch(setModalClose())}>Close</S.Button>
      </S.ButtonWrapper>
    </S.Modal>
  );
}

export default ConfirmMessageModal;
