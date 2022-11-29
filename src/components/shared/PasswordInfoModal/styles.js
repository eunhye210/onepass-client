import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid grey;
`;

export const Message = styled.div`
  color: ${(props) => (props.type === "success" ? "#021691" : "#FF2014")};
  margin-bottom: 10px;
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

export const Wrapper = styled.div`
  width: 400px;
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const ItemBox = styled.div`
  display: flex;
  margin: 3px;
  min-width: 380px;
`;

export const InputBox = styled.div`
  display: flex;
  min-width: 380px;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const ItemName = styled.div`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #616161;
`;

export const ItemValue = styled.div`
  font-size: 20px;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: ${(props) => props.width};
  height: 35px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 20px;
`;

export const EditButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #bdbdbd;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export const CloseButton = styled.button`
  float: right;
  width: 100px;
  height: 40px;
  ${({ theme }) => theme.common.mainButton};
`;
