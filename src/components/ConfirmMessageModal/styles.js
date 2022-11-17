import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: 200px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid grey;
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

export const Message = styled.div`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${(props) => props.color};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: 330px;
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  margin: 5px;
  ${({ theme }) => theme.common.mainButton};
`;
