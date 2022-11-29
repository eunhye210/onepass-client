import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  height: 150px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Message = styled.div`
  margin-left: 20px;
  margin-bottom: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

export const PasswordInput = styled.input.attrs((props) => ({
  type: "text",
  name: "masterPassword",
}))`
  width: 200px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 80px;
  height: 28px;
  ${({ theme }) => theme.common.mainButton};
`;
