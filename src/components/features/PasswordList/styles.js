import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  width: 1000px;
  height: 300px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Head = styled.div`
  margin-right: 153px;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  overflow: scroll;
`;

export const Button = styled.button`
  width: 70px;
  height: 35px;
  margin: 2px;
  margin-left: 5px;
  border: 1px solid;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.color};
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #424242;
`;

export const ItemName = styled.div`
  width: 240px;
  height: 35px;
  margin: 2px;
  border-radius: 5px;
  background: #d7e3fc;
  font-size: 20px;
  font-weight: bold;
  color: #424242;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const ItemValue = styled.div`
  width: 238px;
  height: 35px;
  margin: 2px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid #d7e3fc;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const ItemWrapper = styled.div`
  display: flex;
`;
