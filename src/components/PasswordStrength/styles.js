import styled from "styled-components";

export const PasswordStrengthBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Section = styled.section`
  width: 350px;
  height: 300px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ theme }) => theme.display.flexColumnCenter};
`;
