import { useState } from "react";
import { useSelector } from "react-redux";

import Sidebar from "../../components/features/Sidebar";
import MyPassword from "../../components/layout/MyPassword";
import AccountSettings from "../../components/layout/AccountSettings";

import ShowModal from "../../components/shared/ShowModal";
import MessageModal from "..//../components/shared/MessageModal";
import ConfirmMessageModal from "../../components/shared/ConfirmMessageModal";
import PasswordFileModal from "../../components/shared/PasswordFileModal";
import PasswordInfoModal from "../../components/shared/PasswordInfoModal";

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
