import { useDispatch, useSelector } from "react-redux";

import { setModalClose } from "../../store/slices/modalSlice";

import * as S from "./styles";

function MessageModal() {
  const dispatch = useDispatch();
  const { title, message } = useSelector((state) => state.modal);

  return (
    <S.Modal>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
      <S.Button onClick={() => dispatch(setModalClose())}>Ok</S.Button>
    </S.Modal>
  );
}

export default MessageModal;
