import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import MyPassword from "../../components/MyPassword";
import ShowModal from "../../components/ShowModal";
import MessageModal from "..//../components/MessageModal";
import ConfirmMessageModal from "../../components/ConfirmMessageModal";
import PasswordFileModal from "../../components/PasswordFileModal";
import PasswordInfoModal from "../../components/PasswordInfoModal";

import * as S from "./styles";

function MyPage() {
  const { userId } = useParams();
  const [option, setOption] = useState("Passwords");
  const { type, isModalOpen } = useSelector((state) => state.modal);

  return (
    <>
      <S.MyPageLayout>
        <Sidebar option={option} setOption={setOption} />
        <S.Content>
          {option === "Passwords" && <MyPassword userId={userId} />}
        </S.Content>
      </S.MyPageLayout>
      {isModalOpen && (
        <ShowModal>
          {type === "message" && <MessageModal />}
          {type === "confirmMessage" && <ConfirmMessageModal />}
          {type === "file" && <PasswordFileModal />}
          {type === "edit" && <PasswordInfoModal />}
        </ShowModal>
      )}
    </>
  );
}

export default MyPage;
