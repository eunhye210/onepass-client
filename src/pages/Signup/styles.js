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
  color: ${(props) => props.color};
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
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid #021691;
  border-radius: 10px;
  font-size: 1em;
`;

export const Button = styled.button.attrs((props) => ({
  type: props.type,
}))`
  width: 80px;
  height: 35px;
  margin-top: ${(props) => (props.type === "submit" ? "20px" : "0px")};
  ${({ theme }) => theme.common.mainButton};
  &:disabled {
    background: #a9a9a9;
  }
`;
