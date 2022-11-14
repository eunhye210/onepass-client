import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid grey;
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

export const Message = styled.div`
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSizes.text};
`;

export const Button = styled.button`
  float: right;
  width: 80px;
  height: 35px;
  ${({ theme }) => theme.common.mainButton};
`;
