import { useRef } from "react";
import { useDispatch } from "react-redux";

import { setModalClose } from "../../store/slices/modalSlice";

import * as S from "./styles";

function ShowModal({ children }) {
  const modalOutside = useRef();
  const dispatch = useDispatch();

  const handleModal = (e) => {
    if (modalOutside.current === e.target) {
      dispatch(setModalClose());
    }
  };

  return (
    <S.Wrapper ref={modalOutside} onClick={handleModal}>
      {children}
    </S.Wrapper>
  );
}

export default ShowModal;
