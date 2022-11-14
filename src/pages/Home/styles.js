import styled from "styled-components";

import LogoImg from "../../assets/check-mark.png";

export const HomePageLayout = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  height: 450px;
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.display.flexColumnCenter};
`;

export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 100px;
  height: 100px;
  margin-top: 90px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  ${({ theme }) => theme.display.flexRowCenter};
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 30px;
  ${({ theme }) => theme.common.mainButton};
`;
