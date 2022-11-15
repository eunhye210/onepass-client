import styled from "styled-components";

export const OneTimePasswordPageLayout = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  width: 640px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 20px;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  name: props.name,
}))`
  width: ${(props) => props.size}px;
  ${({ theme }) => theme.common.mainInput};
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  margin-top: 30px;
  ${({ theme }) => theme.common.mainButton};
`;
