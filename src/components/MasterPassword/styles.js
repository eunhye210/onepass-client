import styled from "styled-components";

export const ResetPasswordBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Section = styled.section`
  width: 600px;
  height: 350px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ theme }) => theme.display.flexColumnCenter};
`;
