import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import MyPassword from "../../components/MyPassword";
import ShowModal from "../../components/ShowModal";
import MessageModal from "..//../components/MessageModal";

import * as S from "./styles";

// user 정보 받아오기
function MyPage() {
  const { userId } = useParams();
  const [option, setOption] = useState("Passwords");
  const { isModalOpen } = useSelector((state) => state.modal);

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
          <MessageModal />
        </ShowModal>
      )}
    </>
  );
}

export default MyPage;
