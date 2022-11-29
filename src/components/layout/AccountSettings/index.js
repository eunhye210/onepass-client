import MasterPassword from "../../features/MasterPassword";
import UserSettings from "../../features/UserSettings";
import Unregister from "../../features/Unregister";

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
