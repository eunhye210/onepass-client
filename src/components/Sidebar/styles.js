import styled from "styled-components";

import LogoImg from "../../assets/check-mark.png";

export const SidebarLayout = styled.div`
  width: 250px;
  height: 100vh;
  background: #f5f5f5;
  box-shadow: 1px 0 10px -6px;
  z-index: 1;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Logo = styled.div`
  width: 200px;
  height: 60px;
  margin-top: 30px;
  margin-bottom: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.display.flexRowCenter};
  box-shadow: 0 0 4px 0 #000000;
`;

export const LogoImage = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const LogoName = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  font-weight: bold;
`;

export const OptionButton = styled.button.attrs((props) => ({
  name: props.name,
}))`
  width: 100%;
  height: 50px;
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#e0e0e0" : "#f5f5f5")};
  ${({ theme }) => theme.display.flex};
`;

export const OptionTag = styled.div`
  width: 5px;
  height: 100%;
  margin-right: 15px;
  background: ${(props) => (props.selected ? "#021691" : "#ffffff")};
`;

export const OptionText = styled.div`
  font-size: 20px;
  color: ${(props) => (props.selected ? "#021691" : "#000000")};
`;
