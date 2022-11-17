import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 450px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid grey;
`;

export const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-weight: bold;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const PasswordBox = styled.section`
  width: 750px;
  height: 300px;
  margin-top: 10px;
  border-radius: 10px;
  background: #d7e3fc;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Message = styled.div`
  color: ${(props) => (props.type === "success" ? "#021691" : "#FF2014")};
`;

export const Head = styled.div`
  margin-top: 20px;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  margin: 1px;
  overflow: scroll;
`;

export const CheckBox = styled.div`
  width: 50px;
  height: 35px;
  margin: 1px;
`;

export const CheckInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

export const ItemName = styled.div`
  width: 220px;
  height: 35px;
  margin: 1px;
  border-radius: 5px;
  background: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
  color: #424242;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const ItemValue = styled.div`
  width: 218px;
  height: 35px;
  margin: 1px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid #ffffff;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const ItemWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  width: 100px;
  height: 35px;
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
