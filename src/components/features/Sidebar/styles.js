import styled from "styled-components";

import LogoImg from "../../../assets/check-mark.png";

export const SidebarLayout = styled.div`
  width: 250px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 1px 0 10px -6px;
  z-index: 1;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px -6px #000000;
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const LogoImage = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

export const LogoName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const OptionButton = styled.button.attrs((props) => ({
  name: props.name,
}))`
  width: 220px;
  height: 50px;
  padding: 0px;
  margin-top: 7px;
  margin-bottom: 7px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#e0e0e0" : "#ffffff")};
  box-shadow: ${(props) =>
    props.selected ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none"};
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const OptionTag = styled.div`
  width: 5px;
  height: 100%;
  margin-right: 15px;
  background: ${(props) => (props.selected ? "#021691" : "#ffffff")};
`;

export const OptionText = styled.div`
  font-size: 23px;
`;
