import styled from "styled-components";

export const SignupPageLayout = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const Message = styled.div`
  color: ${(props) => (props.type === "message" ? "blue" : "red")};
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  width: 373px;
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
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
  margin-top: ${(props) => (props.type === "submit" ? "20px" : "0px")};
  ${({ theme }) => theme.common.mainButton};
  &:disabled {
    background: #a9a9a9;
  }
`;
