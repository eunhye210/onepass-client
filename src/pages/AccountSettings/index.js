import MasterPassword from "../../components/MasterPassword";
import UserSettings from "../../components/UserSettings";
import Unregister from "../../components/Unregister";

import * as S from "./styles";

function AccountSettings() {
  return (
    <S.MyAccountPageLayout>
      <S.SectionBox>
        <S.Wrapper>
          <MasterPassword />
          <UserSettings />
        </S.Wrapper>
      </S.SectionBox>
      <S.SectionBox>
        <Unregister />
      </S.SectionBox>
    </S.MyAccountPageLayout>
  );
}

export default AccountSettings;
