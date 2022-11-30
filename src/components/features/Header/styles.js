import styled from "styled-components";

import LogoImg from "../../../assets/check-mark.png";

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  box-shadow: 1px 2px 6px;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flex};
  margin: 10px;
`;

export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

export const LogoName = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

export const Button = styled.button`
  margin: 15px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.text};
  cursor: pointer;
`;
