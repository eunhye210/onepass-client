import { useState } from "react";
import { useSelector } from "react-redux";

import MyPassword from "../MyPassword";
import AccountSettings from "../AccountSettings";

import Sidebar from "../../components/Sidebar";
import ShowModal from "../../components/ShowModal";
import MessageModal from "..//../components/MessageModal";
import ConfirmMessageModal from "../../components/ConfirmMessageModal";
import PasswordFileModal from "../../components/PasswordFileModal";
import PasswordInfoModal from "../../components/PasswordInfoModal";

import * as S from "./styles";

function MyPage() {
  const [option, setOption] = useState("Passwords");
  const { type, isModalOpen } = useSelector((state) => state.modal);

  return (
    <>
      <S.MyPageLayout>
        <Sidebar option={option} setOption={setOption} />
        <S.Content>
          {option === "Passwords" && <MyPassword />}
          {option === "Account Settings" && <AccountSettings />}
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
