import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserInfo } from "../../services/apiRequests";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

// refresh 로직 필요
// 없으면 head 보이지 않도록 수정
function PasswordList() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function getUserData() {
      const result = await getUserInfo(userId);
      setData(result);
    }

    getUserData();
  }, [userId]);

  const editData = (item) => {
    dispatch(setModalOpen({ type: "edit", dataId: item.id }));
  };

  const deleteData = (item) => {
    dispatch(
      setModalOpen({
        type: "confirmMessage",
        message: `Are you sure you want to delete "${item.url}" ?`,
        dataId: item.id,
      })
    );
  };

  return (
    <>
      <S.Title>My Passwords</S.Title>
      <S.Section>
        <S.Head>
          <S.ItemName>URL</S.ItemName>
          <S.ItemName>Username</S.ItemName>
          <S.ItemName>Password</S.ItemName>
        </S.Head>
        <S.Body>
          {data?.map((item, idx) => (
            <S.ItemWrapper key={item.url + idx}>
              <S.ItemValue>{item.url}</S.ItemValue>
              <S.ItemValue>{item.username}</S.ItemValue>
              <S.ItemValue>********</S.ItemValue>
              <S.Button
                color="#6c8dfa"
                hover="#021691"
                onClick={() => editData(item)}
              >
                Edit
              </S.Button>
              <S.Button
                color="#ff5349"
                hover="#ff0d00"
                onClick={() => deleteData(item)}
              >
                Delete
              </S.Button>
            </S.ItemWrapper>
          ))}
        </S.Body>
      </S.Section>
    </>
  );
}

export default PasswordList;
