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
  width: 650px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const InputBox = styled.div`
  margin-top: ${(props) => props.margin};
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  width: 600px;
  justify-content: space-between;
`;

export const InputName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #616161;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  name: props.name,
}))`
  width: ${(props) => props.width};
  height: 30px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 20px;
`;

export const Button = styled.button`
  float: right;
  margin-top: 15px;
  margin-right: 25px;
  width: 100px;
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
