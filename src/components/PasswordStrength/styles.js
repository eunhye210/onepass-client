import styled from "styled-components";

export const PasswordStrengthBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Section = styled.section`
  width: 350px;
  height: 300px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Wrapper = styled.div`
  margin: 15px;
  width: 300px;
  height: 100px;
  background: #d7e3fc;
  border-radius: 5px;
`;

export const OptionName = styled.div`
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #616161;
`;

export const Select = styled.select.attrs((props) => ({
  name: props.name
}))`
  margin: 10px;
  width: 200px;
  height: 30px;
`;

export const Option = styled.option.attrs((props) => ({
  value: props.value
}))``;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 10px;
  ${({ theme }) => theme.common.mainButton};
`;
