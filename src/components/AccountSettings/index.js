import MasterPassword from "../MasterPassword";
import PasswordStrength from "../PasswordStrength";
import Unregister from "../Unregister";

import * as S from "./styles";

function AccountSettings() {
  return (
    <S.MyAccountPageLayout>
      <S.SectionBox>
        <S.Wrapper>
          <MasterPassword />
          <PasswordStrength />
        </S.Wrapper>
      </S.SectionBox>
      <S.SectionBox>
        <Unregister />
      </S.SectionBox>
    </S.MyAccountPageLayout>
  );
}

export default AccountSettings;
