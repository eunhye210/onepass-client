import styled from "styled-components";

export const LoginPageLayout = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.color};
`;

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
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

export const Link = styled.button`
  margin-top: 20px;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  cursor: pointer;
`;
