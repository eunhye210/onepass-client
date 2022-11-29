import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserInfo } from "../../services/apiRequests";
import { decryptData } from "../../services/processCrypto";
import { setModalOpen } from "../../store/slices/modalSlice";

import * as S from "./styles";

function PasswordList() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [data, setData] = useState([]);

  const { sessionKey } = useSelector((state) => state.user);
  const { isModalOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    async function getUserData() {
      const result = await getUserInfo(userId);
      const decryptedData = decryptData(result, sessionKey);

      setData(decryptedData);
    }

    getUserData();
  }, [userId, isModalOpen, sessionKey]);

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
        {data?.length === 0 && (
          <S.Message>Empty. Add new password to your list !</S.Message>
        )}
        {data?.length > 0 && (
          <>
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
                  <S.Button color="#021691" onClick={() => editData(item)}>
                    Edit
                  </S.Button>
                  <S.Button color="#ff5349" onClick={() => deleteData(item)}>
                    Delete
                  </S.Button>
                </S.ItemWrapper>
              ))}
            </S.Body>
          </>
        )}
      </S.Section>
    </>
  );
}

export default PasswordList;
