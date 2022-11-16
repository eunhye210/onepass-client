import { Form, useActionData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setModalOpen } from "../../store/slices/modalSlice";
import { addPassword } from "../../services/apiRequests";

import * as S from "./styles";
import { useEffect } from "react";

// form reset 로직 추가 필요
function PasswordForm() {
  const { userId } = useParams();
  const data = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const { type, message } = data;
      dispatch(setModalOpen({ title: type, message }));
    }
  }, [data, dispatch]);

  return (
    <Form method="post" action={`/users/${userId}/password`}>
      <S.PasswordBox>
        <S.Title>Add Password</S.Title>
        <S.Section>
          <S.InputBox margin="25px">
            <S.InputWrapper>
              <S.InputName>URL</S.InputName>
              <S.Input width="540px" name="url" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputName>Username</S.InputName>
              <S.Input width="180px" name="username" />
              <S.InputName>Password</S.InputName>
              <S.Input width="200px" name="password" />
            </S.InputWrapper>
          </S.InputBox>
          <S.Button>Add</S.Button>
        </S.Section>
      </S.PasswordBox>
    </Form>
  );
}

export default PasswordForm;

export async function action({ params, request }) {
  const { userId } = params;
  const formData = await request.formData();
  const passwordForm = [
    {
      url: formData.get("url"),
      username: formData.get("username"),
      password: formData.get("password"),
    },
  ];

  try {
    const result = await addPassword(userId, passwordForm);
    return { type: "success", message: result };
  } catch (err) {
    return { type: "error", message: err };
  }
}
