import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { deleteAccount } from "../../../services/apiRequests";

import * as S from "./styles";

function Unregister() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [input, setInput] = useState();

  const handleSubmit = async () => {
    if (input !== "DELETE") {
      return;
    }

    await deleteAccount(userId);
    navigate("/");
  };

  return (
    <>
      <S.Title>Delete My Account</S.Title>
      <S.Section>
        <S.Message size="20px" margin="10px" weight="bold">
          All data will be deleted
        </S.Message>
        <S.Message size="18px" color="#FF5349" weight="normal">
          Note: This will delete your account, and permanently remove your
          personal data from our servers.
        </S.Message>
        <S.Wrapper>
          <S.Message size="18px" weight="normal">
            Please type the word DELETE to confirm :
          </S.Message>
          <S.PasswordInput
            value={input || ""}
            onChange={(e) => setInput(e.target.value)}
          />
          <S.Button onClick={handleSubmit}>Delete</S.Button>
        </S.Wrapper>
      </S.Section>
    </>
  );
}

export default Unregister;
