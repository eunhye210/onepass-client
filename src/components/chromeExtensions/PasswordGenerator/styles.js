import styled from "styled-components";

import LogoImg from "../../../assets/check-mark.png";
import ReloadImg from "../../../assets/reload.png";

export const PasswordGeneratorLayout = styled.div`
  width: 430px;
  height: 260px;
  background: #021691;
  padding-top: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const LogoName = styled.div`
  color: #ffffff;
  font-size: 30px;
`;

export const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const Message = styled.div`
  width: ${(props) => props.width};
  height: 32px;
  margin-top: 3px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.font};
  color: ${(props) => props.color};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const Link = styled.a.attrs(() => ({
  href: "/", // 기본 홈페이지로 이동
  target: "_blank",
}))`
  margin-top: 3px;
  margin-left: 5px;
  margin-right: 5px;
  color: #ffffff;
  font-size: 15px;
`;

export const Button = styled.button`
  margin-right: 10px;
  margin-bottom: 20px;
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 100px;
  border-radius: 5px;
  background: #ffffff;
`;

export const ApplyButton = styled.button`
  height: 30px;
  border: none;
  background: ${(props) => props.color};
  border-radius: 5px;
  color: #021691;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 5px 0 #000000;
`;

export const RefreshImg = styled.img.attrs({
  src: `${ReloadImg}`,
})`
  width: 30px;
  height: 30px;
`;

export const RefreshButton = styled.button`
  margin-right: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
