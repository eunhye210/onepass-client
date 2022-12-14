import Header from "../../components/features/Header";

import * as S from "./styles";

function NotFound() {
  return (
    <S.NotFoundPageLayout>
      <Header />
      <S.Content>
        <S.Message>404 Page Not Found</S.Message>
        <S.SubMesssage>
          The page you requested could not be found.
        </S.SubMesssage>
        <S.SubMesssage>Please go back to the homepage.</S.SubMesssage>
      </S.Content>
    </S.NotFoundPageLayout>
  );
}

export default NotFound;
