import styled from "styled-components";

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  width: 300px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const InputBox = styled.div`
  margin-top: ${(props) => props.margin};
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const FileWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const InputText = styled.input.attrs((props) => ({
  type: "text",
  value: props.value,
  placeholder: props.placeholder,
}))`
  height: 30px;
  margin-right: 10px;
  font-size: 15px;
`;

export const InputFileLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
  padding: 10px 10px;
  border-radius: 5px;
  background: #bdbdbd;
  font-size: 15px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export const InputFile = styled.input.attrs((props) => ({
  type: "file",
  accept: ".csv",
  id: props.id,
  required: true,
}))`
  display: none;
`;

export const Button = styled.button`
  float: right;
  margin-top: 15px;
  width: 245px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #6c8dfa;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export const Link = styled.a.attrs(() => ({
  href: "https://support.google.com/chrome/answer/95606",
  target: "_blank",
}))`
  width: 230px;
  margin-top: 15px;
  text-align: center;
  font-size: 15px;
  color: #616161;
`;
