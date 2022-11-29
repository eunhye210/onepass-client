import PasswordList from "../../components/PasswordList";
import PasswordForm from "../../components/PasswordForm";
import PasswordFile from "../../components/PasswordFile";

import * as S from "./styles";

function MyPassword() {
  return (
    <S.MyPasswordPageLayout>
      <S.SectionBox>
        <PasswordList />
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
