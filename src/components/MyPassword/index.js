import PasswordForm from "../PasswordForm";
import PasswordFile from "../PasswordFile";

import * as S from "./styles";

function MyPassword() {
  return (
    <S.MyPasswordPageLayout>
      <S.SectionBox>
        <S.Title>My Passwords</S.Title>
        <S.Section width="1000px" height="300px"></S.Section>
      </S.SectionBox>
      <S.SectionBox>
        <S.Wrapper>
          <PasswordForm />
          <PasswordFile />
        </S.Wrapper>
      </S.SectionBox>
    </S.MyPasswordPageLayout>
  );
}

export default MyPassword;
