import styled from "styled-components";

export const NotFoundPageLayout = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
  margin-top: 100px;
`;

export const Message = styled.h1`
  color: #616161;
  font-size: 35px;
`;

export const SubMesssage = styled.h3`
  color: #000000;
`;
