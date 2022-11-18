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
  height: 300px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 50px; */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const InputName = styled.div`
  width: 230px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #616161;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  name: props.name,
}))`
  /* width: ${(props) => props.width}; */
  width: 230px;
  height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 15px;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 30px;
  width: 500px;
  height: 40px;
  color: ${(props) => props.type === "success" ? "#021691" : "#FF5349"}
`;

export const Button = styled.button`
  width: 70px;
  height: 35px;
  margin-left: 10px;
  ${({ theme }) => theme.common.mainButton};
`;

export const SubmitButton = styled.button`
  float: right;
  margin-top: 15px;
  margin-right: 25px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    background: #a9a9a9;
  }
`;
