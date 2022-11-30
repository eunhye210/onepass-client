import styled from "styled-components";

export const MyPasswordPageLayout = styled.div`
  height: 100%;
  background: #edf2fb;
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const SectionBox = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
`;
